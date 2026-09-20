import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Scene, StoryChoice } from '../types';
import { soundManager } from '../utils/audio';
import { Volume2, VolumeX, Type, ChevronRight, MessageCircleHeart } from 'lucide-react';
import { UI_TRANSLATIONS } from '../i18n/translations';

interface StoryReaderProps {
  scene: Scene;
  bookTitle: string;
  onMakeChoice: (choice: StoryChoice) => void;
  triggeredElementIds: Set<string>;
}

export const StoryReader: React.FC<StoryReaderProps> = ({
  scene,
  bookTitle,
  onMakeChoice,
  triggeredElementIds,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'huge'>('large');
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const [highlightedWordIndex, setHighlightedWordIndex] = useState<number | null>(null);
  const t = UI_TRANSLATIONS.pt;

  // Stop narration on scene change
  useEffect(() => {
    soundManager.stopSpeaking();
    setIsReadingAloud(false);
    setHighlightedWordIndex(null);
  }, [scene.id]);

  const handleToggleNarration = () => {
    if (isReadingAloud) {
      soundManager.stopSpeaking();
      setIsReadingAloud(false);
      setHighlightedWordIndex(null);
    } else {
      setIsReadingAloud(true);
      soundManager.speakStoryText(
        `${scene.title}. ${scene.text}`,
        () => setIsReadingAloud(true),
        () => {
          setIsReadingAloud(false);
          setHighlightedWordIndex(null);
        },
        (charIndex) => {
          const textUpToChar = `${scene.title} ${scene.text}`.substring(0, charIndex);
          const wordsList = textUpToChar.trim().split(/\s+/);
          setHighlightedWordIndex(wordsList.length - 1);
        },
        'pt-BR'
      );
    }
  };

  const cycleFontSize = () => {
    soundManager.playPop(1.1);
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('huge');
    else setFontSize('normal');
  };

  const words = scene.text.split(' ');

  const getTextSizeClass = () => {
    switch (fontSize) {
      case 'normal':
        return 'text-lg sm:text-xl leading-relaxed';
      case 'huge':
        return 'text-2xl sm:text-3xl leading-loose';
      case 'large':
      default:
        return 'text-xl sm:text-2xl leading-relaxed';
    }
  };

  const getFontSizeLabel = () => {
    if (fontSize === 'normal') return t.fontNormal;
    if (fontSize === 'large') return t.fontLarge;
    return t.fontHuge;
  };

  return (
    <div className="w-full space-y-6">
      {/* Chapter Card */}
      <div 
        id="chapter-card"
        className="bg-white/95 rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-amber-200 backdrop-blur-md relative overflow-hidden"
      >
        {/* Decorative corner ribbons */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-amber-200/50 to-transparent rounded-bl-full pointer-events-none" />

        {/* Top bar: Chapter indicator & Reading accessibility tools */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-100">
          <div className="flex items-center space-x-2">
            <span className="px-3.5 py-1 bg-amber-500 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-xs tracking-wide uppercase">
              {t.chapter} {scene.chapterNumber}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-500 truncate max-w-[180px] sm:max-w-xs">
              {bookTitle}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Font size toggle */}
            <button
              onClick={cycleFontSize}
              id="btn-font-size"
              title="Ajustar tamanho da letra para leitura fácil"
              className="flex items-center space-x-1 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Type className="w-4 h-4" />
              <span>{getFontSizeLabel()}</span>
            </button>

            {/* Read to Me (Text to Speech) */}
            <button
              onClick={handleToggleNarration}
              id="btn-read-aloud"
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer ${
                isReadingAloud
                  ? 'bg-rose-500 text-white animate-pulse shadow-rose-300'
                  : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-200'
              }`}
            >
              {isReadingAloud ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isReadingAloud ? t.pauseReading : t.readAloud}</span>
            </button>
          </div>
        </div>

        {/* Chapter Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-5 mb-4 font-['Fredoka',sans-serif]">
          {scene.title}
        </h2>

        {/* Story Text with Word-Highlight Reading Tracker */}
        <div className={`text-slate-700 font-['Quicksand',sans-serif] font-semibold ${getTextSizeClass()}`}>
          {words.map((word, idx) => {
            const isHighlighted = isReadingAloud && highlightedWordIndex === idx;
            return (
              <span
                key={idx}
                className={`transition-colors duration-150 inline-block mr-1.5 ${
                  isHighlighted
                    ? 'bg-amber-300 text-amber-950 px-1 rounded-md font-bold scale-105'
                    : ''
                }`}
              >
                {word}
              </span>
            );
          })}
        </div>

        {/* Character Dialogue Bubble (if any) */}
        {scene.characterDialogue && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-start space-x-3.5"
          >
            <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl shrink-0 border border-amber-200">
              {scene.characterDialogue.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  {scene.characterDialogue.speaker}:
                </span>
                <MessageCircleHeart className="w-3.5 h-3.5 text-amber-500" />
              </div>
              <p className="text-slate-800 font-bold text-base sm:text-lg mt-0.5 font-['Fredoka',sans-serif]">
                "{scene.characterDialogue.text}"
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* BRANCHING CHOICES SECTION */}
      <div id="choices-container" className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">✨</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-amber-950 font-['Fredoka',sans-serif]">
              {t.whatNext}
            </h3>
          </div>
          <span className="text-xs font-bold text-amber-800 bg-amber-200/80 px-3 py-1 rounded-full">
            {scene.choices.length} Possibilidades
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scene.choices.map((choice, index) => {
            const isAlternativeColor = index % 2 === 1;

            return (
              <motion.button
                key={choice.id}
                id={`btn-choice-${choice.id}`}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  soundManager.playChoiceClick();
                  onMakeChoice(choice);
                }}
                className={`relative p-5 sm:p-6 rounded-3xl text-left transition-all shadow-lg border-4 flex flex-col justify-between group overflow-hidden cursor-pointer ${
                  isAlternativeColor
                    ? 'bg-linear-to-br from-teal-50 via-teal-100 to-emerald-200 border-teal-300 hover:border-teal-400 hover:shadow-teal-200'
                    : 'bg-linear-to-br from-amber-50 via-amber-100 to-orange-200 border-amber-300 hover:border-amber-400 hover:shadow-amber-200'
                }`}
              >
                {/* Visual choice badge */}
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl sm:text-4xl group-hover:rotate-12 transition-transform">
                    {choice.icon || (isAlternativeColor ? '🌟' : '🚀')}
                  </div>
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                    isAlternativeColor ? 'bg-teal-600 text-white' : 'bg-amber-600 text-white'
                  }`}>
                    Opção {index + 1}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight font-['Fredoka',sans-serif] mb-1.5 group-hover:text-amber-900 transition-colors">
                    {choice.text}
                  </h4>
                  {choice.description && (
                    <p className="text-xs sm:text-sm font-semibold text-slate-600 font-['Quicksand',sans-serif] leading-relaxed">
                      {choice.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-bold">
                  <span className={isAlternativeColor ? 'text-teal-800' : 'text-amber-800'}>
                    Seguir este rumo
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-1 ${
                    isAlternativeColor ? 'bg-teal-600' : 'bg-amber-600'
                  }`}>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
