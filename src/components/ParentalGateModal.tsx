import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X, AlertCircle } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ParentalGateModalProps {
  isOpen: boolean;
  onSuccess: () => void;
  onClose: () => void;
  reason: string;
}

export const ParentalGateModal: React.FC<ParentalGateModalProps> = ({
  isOpen,
  onSuccess,
  onClose,
  reason,
}) => {
  const [num1, setNum1] = useState(6);
  const [num2, setNum2] = useState(7);
  const [userAnswer, setUserAnswer] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Generate a random multiplication challenge suitable for adult verification
  const generateChallenge = () => {
    const a = Math.floor(Math.random() * 6) + 4; // 4 to 9
    const b = Math.floor(Math.random() * 6) + 4; // 4 to 9
    setNum1(a);
    setNum2(b);
    setUserAnswer('');
    setErrorMsg('');
  };

  useEffect(() => {
    if (isOpen) {
      generateChallenge();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = num1 * num2;
    if (parseInt(userAnswer.trim(), 10) === correct) {
      soundManager.playFanfare();
      onSuccess();
    } else {
      soundManager.playPop(0.8);
      setErrorMsg('Resposta incorreta. Peça ajuda a um adulto responsável.');
      generateChallenge();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border-4 border-amber-300"
        >
          {/* Header */}
          <div className="p-5 bg-linear-to-r from-amber-500 to-orange-500 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="w-6 h-6 text-amber-200" />
              <div>
                <h3 className="text-lg font-black font-['Fredoka',sans-serif]">
                  Área dos Pais & Responsáveis
                </h3>
                <p className="text-[11px] font-bold text-amber-100 uppercase tracking-wider">
                  Controle Parental • ECA Digital & LGPD
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playPop();
                onClose();
              }}
              id="btn-close-parental-gate"
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              Para garantir a proteção da criança e cumprir as diretrizes de segurança infantil (LGPD Art. 14 e Google Play Families), confirme que você é um adulto para acessar:
            </p>

            <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 text-xs font-bold text-amber-900">
              📌 {reason}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-2xl border-2 border-slate-200 text-center">
                <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block mb-1">
                  Pergunta de Verificação para Adultos
                </span>
                <span className="text-2xl font-black text-slate-800 tracking-wider">
                  Quanto é {num1} × {num2}?
                </span>
              </div>

              <div>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="Digite o resultado"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-full text-center text-xl font-black py-3 px-4 rounded-2xl border-2 border-amber-300 focus:border-amber-500 focus:outline-hidden bg-white text-slate-800 shadow-inner"
                  autoFocus
                />
              </div>

              {errorMsg && (
                <div className="flex items-center space-x-2 text-rose-600 text-xs font-bold bg-rose-50 p-3 rounded-xl border border-rose-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl text-xs transition-colors cursor-pointer"
                >
                  Voltar às Histórias
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold rounded-2xl text-xs shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  Confirmar Acesso
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
