import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Scene, ReadingHistoryItem, Language } from '../types';
import { soundManager } from '../utils/audio';
import { X, GitFork, Sparkles, RotateCcw } from 'lucide-react';
import { UI_TRANSLATIONS } from '../i18n/translations';

interface StoryMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
  currentSceneId: string;
  history: ReadingHistoryItem[];
  onJumpToScene: (sceneId: string) => void;
}

export const StoryMapModal: React.FC<StoryMapModalProps> = ({
  isOpen,
  onClose,
  book,
  currentSceneId,
  history,
  onJumpToScene,
}) => {
  if (!isOpen) return null;

  const t = UI_TRANSLATIONS.pt;
  const scenesArray = Object.values(book.scenes).sort((a, b) => a.chapterNumber - b.chapterNumber);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border-4 border-amber-300 flex flex-col"
        >
          {/* Header */}
          <div className="p-5 bg-linear-to-r from-amber-400 to-rose-400 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GitFork className="w-6 h-6" />
              <div>
                <h3 className="text-xl font-black font-['Fredoka',sans-serif]">
                  {t.mapTitle}
                </h3>
                <p className="text-xs font-semibold text-amber-100">
                  {t.mapSubtitle}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playPop();
                onClose();
              }}
              id="btn-close-map"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body: Journey tree */}
          <div className="p-6 overflow-y-auto space-y-6">
            <div className="text-sm font-semibold text-slate-600 bg-amber-50 p-4 rounded-2xl border border-amber-200 flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
              <span>
                Cada escolha que você faz leva a um destino diferente. Você pode tocar em qualquer capítulo que já visitou para explorar o outro rumo da história!
              </span>
            </div>

            <div className="space-y-4 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-1 before:bg-amber-200">
              {scenesArray.map((scene) => {
                const isCurrent = scene.id === currentSceneId;
                const wasVisited = history.some((h) => h.sceneId === scene.id) || isCurrent;

                return (
                  <div
                    key={scene.id}
                    className={`relative flex items-start space-x-4 pl-2 ${
                      !wasVisited ? 'opacity-50' : 'opacity-100'
                    }`}
                  >
                    {/* Node Circle */}
                    <div
                      className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-black text-sm border-2 shrink-0 ${
                        isCurrent
                          ? 'bg-rose-500 text-white border-rose-600 shadow-md ring-4 ring-rose-200 animate-pulse'
                          : wasVisited
                          ? 'bg-amber-500 text-white border-amber-600'
                          : 'bg-slate-200 text-slate-400 border-slate-300'
                      }`}
                    >
                      {scene.chapterNumber}
                    </div>

                    {/* Scene Card */}
                    <div className={`flex-1 p-4 rounded-2xl border-2 transition-all ${
                      isCurrent
                        ? 'bg-amber-50/80 border-amber-400 shadow-sm'
                        : wasVisited
                        ? 'bg-white border-slate-200 hover:border-amber-300'
                        : 'bg-slate-50 border-dashed border-slate-300'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
                          {t.chapter} {scene.chapterNumber}
                        </span>
                        {isCurrent && (
                          <span className="text-[11px] font-extrabold bg-rose-500 text-white px-2 py-0.5 rounded-full">
                            {t.youAreHere}!
                          </span>
                        )}
                      </div>

                      <h4 className="font-extrabold text-slate-800 text-base font-['Fredoka',sans-serif] mt-0.5">
                        {scene.title}
                      </h4>

                      <p className="text-xs text-slate-500 font-semibold line-clamp-2 mt-1">
                        {scene.text}
                      </p>

                      {/* Interactive elements found indicator */}
                      <div className="mt-2 flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-semibold">
                          {scene.interactiveElements.length} elementos animados
                        </span>

                        {wasVisited && !isCurrent && (
                          <button
                            onClick={() => {
                              soundManager.playChoiceClick();
                              onJumpToScene(scene.id);
                              onClose();
                            }}
                            className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg text-xs transition-colors flex items-center space-x-1 cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Voltar aqui</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
            <button
              onClick={() => {
                soundManager.playPop();
                onClose();
              }}
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
            >
              {t.closeMap}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
