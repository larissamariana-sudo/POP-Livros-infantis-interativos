import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { KidSafeSponsoredMessage } from '../services/adService';

interface ChildSafeAdModalProps {
  isOpen: boolean;
  ad: KidSafeSponsoredMessage;
  onAdFinished: () => void;
  isReward?: boolean;
}

export const ChildSafeAdModal: React.FC<ChildSafeAdModalProps> = ({
  isOpen,
  ad,
  onAdFinished,
  isReward = false,
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState(ad.durationSeconds || 5);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setSecondsRemaining(ad.durationSeconds || 5);
    setCanSkip(false);

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanSkip(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, ad]);

  if (!isOpen) return null;

  const handleClose = () => {
    soundManager.playSparkle();
    onAdFinished();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-4 border-amber-300 relative flex flex-col"
        >
          {/* Top Compliance Bar (LGPD & ECA Digital Notice) */}
          <div className="bg-slate-900 text-slate-200 px-4 py-2.5 flex items-center justify-between text-[11px] font-bold border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-emerald-300">
                Publicidade Segura para Famílias • LGPD & ECA
              </span>
            </div>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase">
              Livre (G) • Sem Rastreamento
            </span>
          </div>

          {/* Ad Creative Card */}
          <div className="p-6 sm:p-8 flex-1 flex flex-col items-center text-center">
            {/* Sponsor Badge */}
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold mb-4 border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Espaço Patrocinado: {ad.sponsorName}</span>
            </div>

            {/* Giant Graphic Emoji */}
            <div className="text-6xl sm:text-7xl mb-4 transform hover:scale-105 transition-transform select-none">
              {ad.bannerEmoji}
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 font-['Fredoka',sans-serif]">
              {ad.title}
            </h3>
            <p className="text-base font-bold text-amber-700 mb-3">
              {ad.subtitle}
            </p>

            {/* Educational / Family Description */}
            <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200/80 text-sm text-slate-700 font-semibold leading-relaxed max-w-md mb-6">
              {ad.description}
            </div>

            {/* Legal reassurance footer for parents */}
            <div className="text-[11px] text-slate-400 font-medium max-w-sm mb-6">
              🔒 Em conformidade com o Art. 14 da LGPD e Google Play Families: nenhum dado da criança é monitorado ou transferido para terceiros.
            </div>

            {/* Bottom Action / Timer Button */}
            <div className="w-full">
              {canSkip ? (
                <button
                  onClick={handleClose}
                  id="btn-ad-continue"
                  className="w-full py-4 px-6 bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-base rounded-2xl shadow-lg shadow-emerald-200 flex items-center justify-center space-x-2 transition-all transform active:scale-95 cursor-pointer"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{isReward ? 'Parabéns! Resgatar Recompensa Mágica' : 'Continuar Minha Leitura'}</span>
                </button>
              ) : (
                <div className="w-full py-3.5 px-6 bg-slate-100 border border-slate-200 text-slate-500 font-bold text-sm rounded-2xl flex items-center justify-center space-x-2 select-none">
                  <Clock className="w-4 h-4 text-amber-600 animate-spin" />
                  <span>
                    Você poderá continuar em <strong className="text-slate-800 text-base">{secondsRemaining}s</strong>...
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
