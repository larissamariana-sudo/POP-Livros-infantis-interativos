import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { InteractiveElement, Scene, Language } from '../types';
import { soundManager } from '../utils/audio';
import { SceneBackdrop } from './SceneBackdrop';
import { Sparkles, Eye, Volume2, HelpCircle } from 'lucide-react';
import { UI_TRANSLATIONS } from '../i18n/translations';

interface InteractiveSceneProps {
  scene: Scene;
  triggeredElementIds: Set<string>;
  onTriggerElement: (element: InteractiveElement) => void;
  showHints: boolean;
  onToggleHints: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  emoji: string;
}

interface ClueFeedback {
  label: string;
  narrativeNote: string;
  icon?: string;
}

export const InteractiveScene: React.FC<InteractiveSceneProps> = ({
  scene,
  triggeredElementIds,
  onTriggerElement,
  showHints,
  onToggleHints,
}) => {
  const t = UI_TRANSLATIONS.pt;
  const [particles, setParticles] = useState<Particle[]>([]);
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);
  const [activeClueFeedback, setActiveClueFeedback] = useState<ClueFeedback | null>(null);
  const notificationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear animation states when scene changes
  useEffect(() => {
    setActiveAnimation(null);
    if (notificationTimerRef.current) clearTimeout(notificationTimerRef.current);
    setActiveClueFeedback(null);
  }, [scene.id]);

  const handleElementClick = (elem: InteractiveElement, e: React.MouseEvent) => {
    e.stopPropagation();

    // Trigger sound
    switch (elem.sound) {
      case 'fire':
        soundManager.playFireWhoosh();
        break;
      case 'water':
        soundManager.playWaterRush();
        break;
      case 'plop':
        soundManager.playFruitPlop();
        break;
      case 'magic':
        soundManager.playMagicChime();
        break;
      case 'fanfare':
        soundManager.playFanfare();
        break;
      case 'creature':
        soundManager.playCreatureChirp();
        break;
      case 'bell':
        soundManager.playBell();
        break;
      default:
        soundManager.playPop();
    }

    // Spawn click particles
    const rect = e.currentTarget.getBoundingClientRect();
    const parent = e.currentTarget.parentElement?.getBoundingClientRect() || rect;
    const clickX = ((e.clientX - parent.left) / parent.width) * 100;
    const clickY = ((e.clientY - parent.top) / parent.height) * 100;

    const newParticles: Particle[] = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x: clickX + (Math.random() * 8 - 4),
      y: clickY + (Math.random() * 8 - 4),
      color: ['#F59E0B', '#EF4444', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'][i % 6],
      emoji: elem.actionType === 'dragon-fire' ? '🔥' :
             elem.actionType === 'river-flow' || elem.actionType === 'wave-jump' ? '🌊' :
             elem.actionType === 'fruit-fall' ? '🍎' :
             elem.actionType === 'chest-open' ? '💎' :
             elem.actionType === 'ball-kick' ? '⚽' :
             elem.actionType === 'water-drink' ? '💧' :
             elem.actionType === 'pet-hug' ? '❤️' : '✨',
    }));

    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 1200);

    // If first time discovering this element, throw mini confetti!
    if (!triggeredElementIds.has(elem.id)) {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: ['#FDE047', '#4ADE80', '#60A5FA', '#F472B6'],
      });
    }

    setActiveAnimation(elem.actionType);
    setTimeout(() => setActiveAnimation(null), 3000);

    if (elem.eventResult?.narrativeNote) {
      if (notificationTimerRef.current) clearTimeout(notificationTimerRef.current);
      setActiveClueFeedback({
        label: elem.label,
        narrativeNote: elem.eventResult.narrativeNote,
        icon: elem.triggeredIcon || elem.icon || '🔍',
      });
      notificationTimerRef.current = setTimeout(() => {
        setActiveClueFeedback(null);
      }, 15000);
    }

    onTriggerElement(elem);
  };

  const handleStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    soundManager.playPop(1.2);
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;

    const popParticle: Particle = {
      id: Date.now(),
      x: clickX,
      y: clickY,
      color: '#FBBF24',
      emoji: '⭐',
    };
    setParticles((prev) => [...prev, popParticle]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== popParticle.id));
    }, 900);
  };

  // State flags for interactive elements
  const isDragonAwake = triggeredElementIds.has('elem-dragao') || activeAnimation === 'dragon-fire';
  const isRiverFlowing = triggeredElementIds.has('elem-rio') || activeAnimation === 'river-flow';
  const isFruitFallen = triggeredElementIds.has('elem-fruta') || activeAnimation === 'fruit-fall';
  const isChestOpen = triggeredElementIds.has('elem-bau') || triggeredElementIds.has('elem-ostra') || triggeredElementIds.has('elem-concha-dourada-fim');
  const isStarActive = triggeredElementIds.has('elem-cristal') || triggeredElementIds.has('elem-arcoiris') || triggeredElementIds.has('elem-trofeu-estrela');

  const hasFruitElem = scene.interactiveElements.some(el => el.id === 'elem-fruta');
  const hasDragonElem = scene.interactiveElements.some(el => el.id === 'elem-dragao');
  const hasRiverElem = scene.interactiveElements.some(el => el.id === 'elem-rio');

  return (
    <div 
      id="scene-canvas-container"
      onClick={handleStageClick}
      className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl select-none cursor-pointer border-4 border-amber-300 bg-linear-to-b from-sky-300 via-sky-100 to-emerald-200 transition-all"
    >
      {/* Dynamic Background SVG based on sceneryType */}
      <SceneBackdrop 
        sceneryType={scene.sceneryType} 
        isRiverFlowing={isRiverFlowing} 
        hasRiver={hasRiverElem}
        hasTree={hasFruitElem}
      />

      {/* INTERACTIVE ELEMENTS LAYER */}

      {/* 1. FRUIT ON THE TREE (elem-fruta) */}
      {hasFruitElem && (
        <div 
          id="hotspot-fruit"
          className="absolute top-[16%] left-[16%] sm:left-[19%] z-20 pointer-events-auto"
        >
        <AnimatePresence>
          {!isFruitFallen ? (
            <motion.div
              whileHover={{ scale: 1.25, rotate: [0, -10, 10, 0] }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                const elem = scene.interactiveElements.find(el => el.id === 'elem-fruta');
                if (elem) handleElementClick(elem, e);
              }}
              className="relative p-2 cursor-pointer flex flex-col items-center group"
            >
              {/* Branch leaf */}
              <div className="w-2 h-4 bg-emerald-700 rounded-full rotate-12 -mb-1" />
              {/* Glowing Golden Apple Fruit */}
              <div className="relative">
                <motion.div 
                  animate={{ y: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl bg-linear-to-tr from-amber-500 via-yellow-400 to-amber-200 shadow-lg border-2 border-yellow-200 flex items-center justify-center text-2xl group-hover:shadow-amber-300 group-hover:shadow-xl transition-shadow"
                >
                  🍎
                </motion.div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-300 rounded-full animate-ping opacity-75" />
              </div>
              {showHints && (
                <motion.span 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 px-3.5 py-1 bg-purple-900/95 text-yellow-300 font-black text-xs sm:text-sm rounded-full shadow-lg border-2 border-yellow-300 whitespace-nowrap"
                >
                  🔍 {scene.interactiveElements.find(el => el.id === 'elem-fruta')?.label || 'Fruta Dourada'}
                </motion.span>
              )}
            </motion.div>
          ) : (
            // Fallen Fruit lying happily in the grass!
            <motion.div
              initial={{ y: -160, opacity: 0, scale: 0.5 }}
              animate={{ y: 220, opacity: 1, scale: 1.1, rotate: 18 }}
              transition={{ type: "spring", damping: 10, stiffness: 120 }}
              onClick={(e) => {
                const elem = scene.interactiveElements.find(el => el.id === 'elem-fruta');
                if (elem) handleElementClick(elem, e);
              }}
              className="absolute left-6 cursor-pointer flex items-center justify-center p-2 rounded-2xl bg-amber-400/90 shadow-md border-2 border-white"
            >
              <span className="text-3xl">🍎</span>
              <span className="text-xs font-bold text-amber-900 ml-1">Fruta Colhida! ⭐</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      )}

      {/* 2. THE DRAGON PIPOCA (elem-dragao) */}
      {hasDragonElem && (
        <div 
          id="hotspot-dragon"
          className="absolute bottom-[20%] right-[8%] sm:right-[12%] z-20 pointer-events-auto"
        >
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={isDragonAwake ? { 
            y: [0, -15, 0],
            rotate: [0, -3, 3, 0],
            scale: [1, 1.06, 1]
          } : {
            y: [0, 4, 0]
          }}
          transition={isDragonAwake ? { duration: 0.8, repeat: 2 } : { repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          onClick={(e) => {
            const elem = scene.interactiveElements.find(el => el.id === 'elem-dragao');
            if (elem) handleElementClick(elem, e);
          }}
          className="relative cursor-pointer flex flex-col items-center group"
        >
          {/* Dragon Illustration using expressive SVG */}
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 drop-shadow-xl">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Wings */}
              <motion.g
                animate={isDragonAwake ? { rotate: [-15, 20, -15] } : { rotate: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: isDragonAwake ? 0.3 : 2 }}
                style={{ transformOrigin: '70px 100px' }}
              >
                <path d="M50,90 Q10,40 40,20 Q80,50 90,80 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" />
                <path d="M55,80 Q25,45 45,35" stroke="#fca5a5" strokeWidth="2" fill="none" />
              </motion.g>

              {/* Dragon Tail */}
              <path d="M140,150 Q180,160 185,120 Q190,105 180,110" stroke="#16a34a" strokeWidth="14" strokeLinecap="round" fill="none" />
              <polygon points="180,105 195,115 185,125" fill="#f59e0b" />

              {/* Dragon Body */}
              <ellipse cx="110" cy="135" rx="45" ry="38" fill="#22c55e" stroke="#15803d" strokeWidth="4" />
              {/* Yellow Belly */}
              <ellipse cx="100" cy="140" rx="30" ry="26" fill="#fef08a" />

              {/* Dragon Head */}
              <circle cx="85" cy="85" r="35" fill="#22c55e" stroke="#15803d" strokeWidth="4" />

              {/* Cute Horns */}
              <path d="M75,55 Q70,35 80,30 Q88,40 85,55 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
              <path d="M98,58 Q105,38 115,35 Q115,48 108,60 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />

              {/* Eyes: Sleeping or Wide Awake */}
              {!isDragonAwake ? (
                // Sleeping eyes
                <g>
                  <path d="M68,82 Q76,89 84,82" stroke="#064e3b" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  <path d="M92,84 Q98,90 104,84" stroke="#064e3b" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  {/* Zzz floating */}
                  <text x="115" y="60" fill="#3b82f6" fontSize="18" fontWeight="bold" className="animate-bounce">Zzz</text>
                </g>
              ) : (
                // Super happy big wide eyes!
                <g>
                  <circle cx="74" cy="80" r="9" fill="#ffffff" stroke="#15803d" strokeWidth="2" />
                  <circle cx="74" cy="80" r="5" fill="#0f172a" />
                  <circle cx="72" cy="78" r="2.5" fill="#ffffff" />

                  <circle cx="98" cy="82" r="8" fill="#ffffff" stroke="#15803d" strokeWidth="2" />
                  <circle cx="98" cy="82" r="4.5" fill="#0f172a" />
                  <circle cx="96" cy="80" r="2" fill="#ffffff" />

                  {/* Rosy cheeks */}
                  <ellipse cx="64" cy="94" rx="7" ry="4" fill="#f87171" opacity="0.8" />
                  <ellipse cx="106" cy="95" rx="6" ry="4" fill="#f87171" opacity="0.8" />
                </g>
              )}

              {/* Snout & Smiling Mouth */}
              <ellipse cx="70" cy="98" rx="22" ry="14" fill="#4ade80" stroke="#15803d" strokeWidth="2" />
              <ellipse cx="64" cy="95" rx="2.5" ry="3.5" fill="#065f46" />
              <ellipse cx="74" cy="95" rx="2.5" ry="3.5" fill="#065f46" />

              {/* Mouth */}
              {isDragonAwake ? (
                <path d="M60,102 Q72,118 84,102" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
              ) : (
                <path d="M65,102 Q72,108 80,102" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
              )}
            </svg>

            {/* FIRE BREATHING ANIMATION WHEN AWAKE / CLICKED */}
            <AnimatePresence>
              {isDragonAwake && (
                <motion.div
                  initial={{ scale: 0, opacity: 0, x: 0 }}
                  animate={{ scale: [0.5, 1.25, 1], opacity: [0, 1, 1, 0.8], x: [-10, -55, -70] }}
                  exit={{ opacity: 0, scale: 0.2 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-[35%] -left-16 pointer-events-none"
                >
                  <div className="flex items-center space-x-1">
                    <span className="text-4xl sm:text-5xl filter drop-shadow-md animate-pulse">🔥</span>
                    <span className="text-3xl sm:text-4xl filter drop-shadow-md">✨</span>
                    <span className="text-2xl sm:text-3xl">💥</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Clue Label */}
          {showHints && (
            <motion.span 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 px-3.5 py-1 bg-purple-900/95 text-yellow-300 font-black text-xs sm:text-sm rounded-full shadow-lg border-2 border-yellow-300 whitespace-nowrap"
            >
              <span>🔍 {scene.interactiveElements.find(el => el.id === 'elem-dragao')?.label || 'Acordar o Dragão Pipoca!'}</span>
            </motion.span>
          )}
        </motion.div>
      </div>
      )}

      {/* 3. THE RIVER HOTSPOT (elem-rio) */}
      {hasRiverElem && (
        <div 
          id="hotspot-river"
          className="absolute bottom-1 left-[8%] w-[84%] h-[24%] z-10 cursor-pointer group"
          onClick={(e) => {
            const elem = scene.interactiveElements.find(el => el.id === 'elem-rio');
            if (elem) handleElementClick(elem, e);
          }}
        >
          <div className="w-full h-full flex items-center justify-center relative">
            {/* Animated fish jumping out when water runs! */}
            <AnimatePresence>
              {isRiverFlowing && (
                <>
                  <motion.div
                    initial={{ y: 20, x: -80, rotate: -40, opacity: 0 }}
                    animate={{ y: [-10, -55, 10], x: [-40, 20, 80], rotate: [-40, 0, 45], opacity: 1 }}
                    transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1 }}
                    className="absolute left-1/3 top-0 pointer-events-none text-3xl filter drop-shadow-md"
                  >
                    🐟
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, x: 40, rotate: 30, opacity: 0 }}
                    animate={{ y: [-5, -45, 15], x: [80, 130, 180], rotate: [20, -10, -40], opacity: 1 }}
                    transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute right-1/4 top-2 pointer-events-none text-2xl filter drop-shadow-md"
                  >
                    🐠
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* River Clue */}
            {showHints && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-3.5 py-1 bg-purple-900/95 text-yellow-300 font-black text-xs sm:text-sm rounded-full shadow-lg border-2 border-yellow-300 whitespace-nowrap"
              >
                <span>🔍 {scene.interactiveElements.find(el => el.id === 'elem-rio')?.label || 'Despertar o Rio!'}</span>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* OTHER SCENE-SPECIFIC HOTSPOTS */}
      {scene.interactiveElements
        .filter(el => !['elem-dragao', 'elem-rio', 'elem-fruta'].includes(el.id))
        .map((elem) => {
          const isTriggered = triggeredElementIds.has(elem.id);
          const displayIcon = (isTriggered && elem.triggeredIcon)
            ? elem.triggeredIcon
            : elem.icon
            || (elem.actionType === 'chest-open' ? (isChestOpen ? '🦪' : '📦') :
                elem.actionType === 'star-sparkle' ? (isStarActive ? '🌟' : '💎') :
                elem.actionType === 'flower-bloom' ? '🌸' :
                elem.actionType === 'creature-jump' ? '🐬' :
                elem.actionType === 'rocket-launch' ? '🚀' :
                elem.actionType === 'cookie-bite' ? (isTriggered ? '🍪' : '🧁') :
                elem.actionType === 'bell-ring' ? '🔔' :
                elem.actionType === 'light-glow' ? '🏮' :
                elem.actionType === 'animal-pet' ? '🐾' : '✨');
          return (
            <div
              key={elem.id}
              id={`hotspot-${elem.id}`}
              style={{
                left: `${elem.x}%`,
                top: `${elem.y}%`,
                width: `${elem.width}%`,
                height: `${elem.height}%`,
              }}
              onClick={(e) => handleElementClick(elem, e)}
              className="absolute z-20 cursor-pointer flex flex-col items-center justify-center group"
            >
              <motion.div
                whileHover={{ scale: 1.18 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-2xl transition-transform ${
                  isTriggered ? 'bg-amber-300/30' : 'hover:bg-white/30'
                }`}
              >
                <div className="text-3xl sm:text-4xl filter drop-shadow-md">
                  {displayIcon}
                </div>
              </motion.div>

              {showHints && (
                <div className="flex flex-col items-center mt-2 z-30 pointer-events-none max-w-[220px] text-center drop-shadow-md">
                  <span className="px-3.5 py-1 bg-purple-900/95 text-yellow-300 font-black text-xs sm:text-sm rounded-full shadow-lg border-2 border-yellow-300 whitespace-nowrap">
                    🔍 {elem.label}
                  </span>
                </div>
              )}
            </div>
          );
        })}

      {/* CLICK RIPPLE / POP PARTICLES */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ scale: 0.3, opacity: 1, x: `${p.x}%`, y: `${p.y}%` }}
          animate={{ scale: 1.6, opacity: 0, y: `${p.y - 12}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute z-30 pointer-events-none text-2xl font-black"
          style={{ color: p.color }}
        >
          {p.emoji}
        </motion.div>
      ))}

      {/* EVENT NARRATIVE POPUP BANNER - Clue & Story Message */}
      <AnimatePresence>
        {activeClueFeedback && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.94 }}
            className="absolute top-3 left-3 right-3 sm:top-5 sm:left-6 sm:right-6 z-40 bg-linear-to-r from-amber-600 via-orange-600 to-rose-600 text-white p-4 sm:p-5 rounded-3xl shadow-2xl border-4 border-yellow-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <div className="flex items-start space-x-3.5 flex-1">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-3xl shrink-0 border border-white/40 shadow-inner">
                {activeClueFeedback.icon || '🔍'}
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-black uppercase tracking-wider bg-yellow-300 text-amber-950 px-2.5 py-0.5 rounded-full shadow-xs">
                    Pista: {activeClueFeedback.label}
                  </span>
                </div>
                <p className="text-base sm:text-lg md:text-xl font-extrabold leading-snug text-yellow-50 drop-shadow-sm font-['Fredoka',sans-serif]">
                  {activeClueFeedback.narrativeNote}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 self-end sm:self-center shrink-0">
              <button
                onClick={() => {
                  soundManager.speakStoryText(activeClueFeedback.narrativeNote, undefined, undefined, undefined, 'pt-BR');
                }}
                id="btn-speak-clue-message"
                title="Ouvir mensagem da pista"
                className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-2xl shadow-md transition-transform active:scale-95 cursor-pointer border border-white/40"
              >
                <Volume2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  if (notificationTimerRef.current) clearTimeout(notificationTimerRef.current);
                  setActiveClueFeedback(null);
                }}
                id="btn-close-notification"
                className="px-4 py-2 bg-white text-amber-950 hover:bg-yellow-100 rounded-2xl text-xs sm:text-sm font-black shadow-md transition-transform active:scale-95 shrink-0 cursor-pointer border-2 border-amber-300"
              >
                Entendido! ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top right scene badges: Secrets found and Hints toggle */}
      <div className="absolute top-3 right-3 z-30 flex items-center space-x-2">
        <button
          onClick={onToggleHints}
          id="btn-toggle-hints"
          title={showHints ? t.hintsOn : t.hintsOff}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-md ${
            showHints
              ? 'bg-amber-400 text-amber-950 border-2 border-amber-500 shadow-amber-300'
              : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-300'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{showHints ? t.hintsOn : t.hintsOff}</span>
        </button>
      </div>

      {/* Interactive secrets discovery badge on bottom left */}
      <div className="absolute bottom-3 left-3 z-30 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-md border border-amber-300 flex items-center space-x-2 text-xs font-bold text-amber-900">
        <span className="text-sm">⭐</span>
        <span>
          {t.secretsFound(
            scene.interactiveElements.filter((e) => triggeredElementIds.has(e.id)).length,
            scene.interactiveElements.length
          )}
        </span>
      </div>
    </div>
  );
};
