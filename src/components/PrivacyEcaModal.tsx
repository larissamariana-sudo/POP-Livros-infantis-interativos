import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X, HeartHandshake, EyeOff, Lock, Award, BookOpen } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface PrivacyEcaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyEcaModal: React.FC<PrivacyEcaModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          className="bg-white rounded-3xl max-w-2xl w-full my-8 overflow-hidden shadow-2xl border-4 border-amber-300 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 bg-linear-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-white/20 rounded-2xl">
                <ShieldCheck className="w-7 h-7 text-emerald-100" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-['Fredoka',sans-serif]">
                  Privacidade & Segurança Infantil
                </h3>
                <p className="text-xs font-bold text-emerald-100 uppercase tracking-wider">
                  Em conformidade com a LGPD (Art. 14) e o ECA Digital
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playPop();
                onClose();
              }}
              id="btn-close-privacy-modal"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
            {/* Mission Statement */}
            <div className="bg-emerald-50 p-4 sm:p-5 rounded-2xl border border-emerald-200 flex items-start space-x-3.5">
              <HeartHandshake className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-emerald-950 font-medium">
                <strong className="font-extrabold block text-emerald-800 text-base mb-1">
                  Compromisso com o Melhor Interesse da Criança
                </strong>
                O aplicativo <strong>Pop! Livros Interativos</strong> foi concebido para encantar, educar e incentivar o prazer da leitura, operando com total respeito à integridade psíquica, emocional e aos direitos fundamentais de crianças e adolescentes.
              </div>
            </div>

            {/* Principle 1: Zero Personal Data */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-base">
                <EyeOff className="w-5 h-5 text-amber-600" />
                <h4>1. Coleta Zero de Dados Pessoais Identificáveis</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Em estrita observância ao <strong>Artigo 14 da Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 font-medium">
                <li>Não solicitamos cadastro, login social, e-mail, nome completo ou telefone das crianças.</li>
                <li>Não há coleta ou armazenamento de geolocalização precisa (GPS), biometria ou dados de navegação externa.</li>
                <li>O progresso de leitura (último capítulo lido) e opções de som são salvos <strong>exclusivamente de forma local no próprio dispositivo</strong> (`localStorage`) e nunca são enviados a servidores externos.</li>
                <li>A narração de voz utiliza o sintetizador de fala do próprio dispositivo (`SpeechSynthesis API`), sem envio de áudio para nuvens públicas.</li>
              </ul>
            </div>

            {/* Principle 2: Respectful & Certified Ads (ECA & Google Play Families) */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-base">
                <Lock className="w-5 h-5 text-teal-600" />
                <h4>2. Publicidade Segura, Não Rastreável e Não Predatória</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Para manter o acesso às histórias 100% gratuito sem qualquer cobrança das famílias, utilizamos publicidade certificada orientada ao <strong>ECA Digital</strong> e ao <strong>Google Play Families Policy</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 font-medium">
                <li>
                  <strong>Sem Anúncios Comportamentais:</strong> Todos os anúncios são configurados com as bandeiras mandatórias de proteção a menores (`tagForChildDirectedTreatment: true` e `maxAdContentRating: 'G'`).
                </li>
                <li>
                  <strong>Classificação Indicativa Livre:</strong> São veiculadas apenas mensagens familiares, culturais e educativas. É categoricamente proibido qualquer conteúdo de violência, jogos de azar, adultério ou hiperconsumismo infantil.
                </li>
                <li>
                  <strong>Respeito ao Ritmo de Leitura:</strong> Anúncios nunca interrompem o meio de uma história ou o clique interativo das crianças. São exibidos com moderação apenas na conclusão de um livro ou quando os pais solicitam.
                </li>
                <li>
                  <strong>Botões Transparentes:</strong> Proibição total de botões falsos de fechar (dark patterns) ou redirecionamentos enganosos.
                </li>
              </ul>
            </div>

            {/* Principle 3: Parental Gate */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-base">
                <Award className="w-5 h-5 text-rose-600" />
                <h4>3. Portão Parental (Parental Gate)</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Qualquer acesso a áreas externas, políticas ou configurações avançadas exige a resolução de uma verificação matemática ou desafio exclusivo para adultos responsáveis, garantindo que a criança permaneça sempre em ambiente protegido.
              </p>
            </div>

            {/* Contact for Parents */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-extrabold text-slate-800 block">Contato com o Encarregado de Dados (DPO) e Desenvolvedor</span>
              <p>
                Dúvidas sobre privacidade e segurança infantil podem ser enviadas diretamente pelos pais e responsáveis a qualquer momento.
              </p>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
            <button
              onClick={() => {
                soundManager.playPop();
                onClose();
              }}
              className="py-3 px-6 bg-slate-800 hover:bg-slate-900 text-white font-black text-sm rounded-2xl transition-transform active:scale-95 cursor-pointer flex items-center space-x-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Entendido, Retornar ao App</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
