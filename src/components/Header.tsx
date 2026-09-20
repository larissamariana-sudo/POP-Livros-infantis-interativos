import React from 'react';
import { Book, Scene } from '../types';
import { soundManager } from '../utils/audio';
import { BookOpen, Map, Volume2, VolumeX, RotateCcw, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentBook: Book | null;
  currentScene: Scene | null;
  onOpenLibrary: () => void;
  onOpenMap: () => void;
  onRestartStory: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  readingProgress: number; // percentage
  onOpenSafetyInfo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentBook,
  currentScene,
  onOpenLibrary,
  onOpenMap,
  onRestartStory,
  soundEnabled,
  onToggleSound,
  readingProgress,
  onOpenSafetyInfo,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-amber-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Playful Pop! Brand Logo */}
        <div 
          onClick={onOpenLibrary}
          className="flex items-center space-x-2 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-linear-to-tr from-amber-400 via-rose-400 to-pink-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 group-hover:rotate-6 transition-all border-2 border-white">
            <span className="text-xl sm:text-2xl font-black">!</span>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-amber-950 font-['Fredoka',sans-serif]">
                Pop<span className="text-rose-500">!</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 bg-rose-100 text-rose-700 font-bold text-[11px] rounded-full uppercase">
                Livros Interativos
              </span>
            </div>
            <p className="text-[11px] font-semibold text-slate-500 hidden md:block">
              Toque, sinta a mágica e escolha a história
            </p>
          </div>
        </div>

        {/* Current Book Info / Chapter tracker */}
        {currentBook && currentScene && (
          <div className="hidden lg:flex items-center space-x-3 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
            <span className="text-base font-bold text-amber-950 truncate max-w-[220px]">
              📖 {currentBook.title}
            </span>
            <span className="text-amber-300">•</span>
            <span className="text-xs font-bold text-amber-700">
              Capítulo {currentScene.chapterNumber} de {currentBook.totalChapters}
            </span>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {/* Restart Chapter/Story */}
          {currentBook && (
            <button
              onClick={onRestartStory}
              id="btn-restart-story"
              title="Recomeçar do Início"
              className="p-2 sm:px-3 sm:py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl font-bold text-xs sm:text-sm flex items-center space-x-1 transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-amber-700" />
              <span className="hidden sm:inline">Recomeçar</span>
            </button>
          )}

          {/* Map of Choices */}
          {currentBook && (
            <button
              onClick={onOpenMap}
              id="btn-open-map"
              title="Mapa da Aventura"
              className="p-2 sm:px-3 sm:py-2 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-xl font-bold text-xs sm:text-sm flex items-center space-x-1.5 transition-colors"
            >
              <Map className="w-4 h-4 text-purple-700" />
              <span className="hidden sm:inline">Mapa</span>
            </button>
          )}

          {/* Library Button */}
          <button
            onClick={onOpenLibrary}
            id="btn-open-library"
            title="Estante"
            className="p-2 sm:px-3 sm:py-2 bg-sky-100 hover:bg-sky-200 text-sky-900 rounded-xl font-bold text-xs sm:text-sm flex items-center space-x-1.5 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-sky-700" />
            <span className="hidden sm:inline">Estante</span>
          </button>

          {/* Sound Mute Toggle */}
          <button
            onClick={() => {
              soundManager.playPop(1.3);
              onToggleSound();
            }}
            id="btn-toggle-sound"
            title={soundEnabled ? 'Desativar sons' : 'Ativar sons'}
            className={`p-2 sm:p-2.5 rounded-xl border transition-all ${
              soundEnabled
                ? 'bg-amber-400 text-amber-950 border-amber-500 shadow-xs'
                : 'bg-slate-100 text-slate-400 border-slate-200'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Child Safety & Parents Area (LGPD / ECA) */}
          <button
            onClick={onOpenSafetyInfo}
            id="btn-open-safety"
            title="Segurança Infantil & Área dos Pais (LGPD / ECA)"
            className="p-2 sm:px-2.5 sm:py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span className="hidden md:inline">Família Segura</span>
          </button>
        </div>
      </div>

      {/* Reading Progress Indicator */}
      {currentBook && (
        <div className="w-full bg-amber-100 h-1.5">
          <div 
            className="bg-linear-to-r from-amber-400 to-rose-500 h-1.5 transition-all duration-500 rounded-r-full"
            style={{ width: `${Math.max(5, readingProgress)}%` }}
          />
        </div>
      )}
    </header>
  );
};
