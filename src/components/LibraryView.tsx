import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Book, AgeGroup } from '../types';
import { soundManager } from '../utils/audio';
import { Sparkles, Play, Compass, Heart, BookOpen, Dog, Dumbbell, Wand2, GraduationCap, TreePine, ShieldCheck, Award } from 'lucide-react';
import { UI_TRANSLATIONS } from '../i18n/translations';

interface LibraryViewProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
  onOpenSafetyInfo?: () => void;
  onEarnRewardBadge?: () => void;
  hasRewardBadge?: boolean;
  onOpenPlayStoreKit?: () => void;
}

export const LibraryView: React.FC<LibraryViewProps> = ({
  books,
  onSelectBook,
  onOpenSafetyInfo,
  onEarnRewardBadge,
  hasRewardBadge = false,
  onOpenPlayStoreKit,
}) => {
  const [selectedAge, setSelectedAge] = useState<AgeGroup | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = UI_TRANSLATIONS.pt;

  const categories = [
    { id: 'all', label: t.allThemes, icon: BookOpen },
    { id: 'family', label: t.themeFamily, icon: Heart },
    { id: 'pets', label: t.themePets, icon: Dog },
    { id: 'sports', label: t.themeSports, icon: Dumbbell },
    { id: 'fantasy', label: t.themeMagic, icon: Wand2 },
    { id: 'school', label: t.themeSchool, icon: GraduationCap },
    { id: 'nature', label: t.themeNature, icon: TreePine },
  ];

  const filteredBooks = books.filter((book) => {
    const matchesAge = selectedAge === 'all' || book.ageGroup === selectedAge;
    const matchesCategory = selectedCategory === 'all' || book.themeCategory === selectedCategory;
    return matchesAge && matchesCategory;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:py-8 space-y-8">
      {/* Playful Banner */}
      <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden bg-linear-to-r from-amber-400 via-orange-400 to-rose-400 text-white shadow-2xl border-4 border-amber-200">
        <div className="relative z-10 max-w-2xl space-y-3.5">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/25 backdrop-blur-xs text-xs sm:text-sm font-black uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-yellow-200" />
            <span>{t.welcomeBannerBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-['Fredoka',sans-serif] tracking-tight leading-tight drop-shadow-sm">
            {t.welcomeTitle}
          </h1>

          <p className="text-base sm:text-xl font-semibold text-amber-50 font-['Quicksand',sans-serif] leading-relaxed">
            {t.welcomeDescription}
          </p>

          <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs sm:text-sm font-bold">
            <span className="flex items-center space-x-1.5 bg-black/20 px-3 py-1.5 rounded-xl">
              <span>{t.bannerTag1}</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-black/20 px-3 py-1.5 rounded-xl">
              <span>{t.bannerTag2}</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-black/20 px-3 py-1.5 rounded-xl">
              <span>{t.bannerTag3}</span>
            </span>
          </div>
        </div>

        {/* Playful Background Elements */}
        <div className="absolute -bottom-10 -right-10 text-9xl opacity-20 pointer-events-none select-none">
          📖
        </div>
        <div className="absolute top-6 right-16 text-6xl opacity-30 pointer-events-none select-none animate-pulse">
          ✨
        </div>
      </div>

      {/* Child-Safe Environment & Family Trust Strip (LGPD Art. 14 / ECA Digital) */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-emerald-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center space-x-3.5">
          <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-sm sm:text-base font-black text-slate-800 font-['Fredoka',sans-serif]">
                Espaço Família 100% Protegido
              </h3>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                ECA & LGPD
              </span>
            </div>
            <p className="text-xs text-slate-500 font-semibold mt-0.5">
              Sem coleta de dados pessoais, sem rastreamento de perfil e com anúncios certificados classificação livre.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {onOpenPlayStoreKit && (
            <button
              onClick={onOpenPlayStoreKit}
              id="btn-library-playstore-kit"
              className="text-xs font-extrabold text-amber-900 hover:text-amber-950 bg-amber-100/90 hover:bg-amber-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer border border-amber-300 flex items-center space-x-1.5 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Kit Play Store (Ícone & Banner)</span>
            </button>
          )}

          {onOpenSafetyInfo && (
            <button
              onClick={onOpenSafetyInfo}
              id="btn-library-safety-info"
              className="text-xs font-extrabold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl transition-colors cursor-pointer border border-emerald-200"
            >
              Diretrizes de Privacidade
            </button>
          )}

          {onEarnRewardBadge && (
            <button
              onClick={onEarnRewardBadge}
              id="btn-earn-reward-badge"
              className={`text-xs font-black px-3.5 py-2 rounded-xl shadow-xs transition-all flex items-center space-x-1.5 cursor-pointer ${
                hasRewardBadge
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white'
              }`}
            >
              <Award className="w-4 h-4 text-yellow-300" />
              <span>{hasRewardBadge ? '⭐ Selo Mágico Ativo!' : 'Conquistar Selo Mágico'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Age & Theme Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-amber-950 font-['Fredoka',sans-serif]">
              {t.chooseAdventure}
            </h2>
            <p className="text-sm font-semibold text-slate-500">
              {t.chooseSubtitle}
            </p>
          </div>

          {/* Age Filters */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white p-1.5 rounded-2xl shadow-sm border border-amber-200 overflow-x-auto">
            {(['all', '3-6', '7-10', '11-14'] as const).map((age) => (
              <button
                key={age}
                id={`filter-age-${age}`}
                onClick={() => {
                  soundManager.playPop(1.2);
                  setSelectedAge(age);
                }}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap ${
                  selectedAge === age
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'text-slate-600 hover:bg-amber-50'
                }`}
              >
                {age === 'all' ? t.allBooks(books.length) : t.ageYears(age)}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-category-${cat.id}`}
                onClick={() => {
                  soundManager.playPop(1.1);
                  setSelectedCategory(cat.id);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-black flex items-center space-x-1.5 transition-all whitespace-nowrap border ${
                  isSelected
                    ? 'bg-rose-500 text-white border-rose-600 shadow-sm scale-105'
                    : 'bg-white text-slate-700 border-amber-200 hover:bg-amber-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => {
          return (
            <motion.div
              key={book.id}
              id={`book-card-${book.id}`}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-amber-200 flex flex-col justify-between group transition-shadow hover:shadow-2xl"
            >
              {/* Cover Graphic Banner */}
              <div className={`h-48 p-6 bg-linear-to-br ${book.themeColor} text-white relative overflow-hidden flex flex-col justify-between`}>
                <div className="flex items-center justify-between relative z-10">
                  <span className="px-3 py-1 bg-black/25 backdrop-blur-xs rounded-full text-xs font-black uppercase tracking-wider">
                    {t.ageYears(book.ageGroup)}
                  </span>
                  <span className="text-xs font-black bg-white text-slate-800 px-2.5 py-1 rounded-full shadow-xs">
                    {book.totalChapters} {t.chapter}s
                  </span>
                </div>

                {/* Big Visual Center Emoji/Icon */}
                <div className="my-auto text-5xl sm:text-6xl text-center filter drop-shadow-lg group-hover:scale-110 transition-transform">
                  {book.coverEmoji || book.characters.map((c) => c.avatar).join(' ')}
                </div>

                <p className="text-xs font-bold text-white/95 text-center relative z-10 bg-black/25 py-1 px-2 rounded-lg line-clamp-1">
                  {book.tagline}
                </p>
              </div>

              {/* Book Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-800 font-['Fredoka',sans-serif] group-hover:text-amber-600 transition-colors line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 font-['Quicksand',sans-serif] mt-1.5 leading-relaxed line-clamp-2">
                    {book.subtitle}
                  </p>
                </div>

                {/* Characters featured */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    {t.charactersInStory}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {book.characters.map((char, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-1.5 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 text-xs font-bold text-amber-900"
                      >
                        <span>{char.avatar}</span>
                        <span>{char.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Start reading button */}
                <button
                  onClick={() => {
                    soundManager.playChoiceClick();
                    onSelectBook(book);
                  }}
                  id={`btn-start-${book.id}`}
                  className="w-full py-3.5 px-4 bg-linear-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-black text-base rounded-2xl shadow-lg flex items-center justify-center space-x-2 transition-transform active:scale-95 group-hover:shadow-amber-200 group-hover:shadow-xl cursor-pointer"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>{t.openBook}</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
