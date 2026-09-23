import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { BOOKS_DATA } from './data/books';
import { Book, Scene, StoryChoice, InteractiveElement, ReadingHistoryItem } from './types';
import { soundManager } from './utils/audio';
import { Header } from './components/Header';
import { InteractiveScene } from './components/InteractiveScene';
import { StoryReader } from './components/StoryReader';
import { LibraryView } from './components/LibraryView';
import { StoryMapModal } from './components/StoryMapModal';
import { ChildSafeAdModal } from './components/ChildSafeAdModal';
import { PrivacyEcaModal } from './components/PrivacyEcaModal';
import { ParentalGateModal } from './components/ParentalGateModal';
import { adService, KidSafeSponsoredMessage } from './services/adService';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';

export default function App() {
  // Current active book and scene
  const [currentBook, setCurrentBook] = useState<Book>(BOOKS_DATA[0]);
  const [currentSceneId, setCurrentSceneId] = useState<string>(BOOKS_DATA[0].initialSceneId);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  // Child safety, LGPD & Parental Gate state
  const [isSafetyModalOpen, setIsSafetyModalOpen] = useState(false);
  const [isParentalGateOpen, setIsParentalGateOpen] = useState(false);
  const [parentalGateReason, setParentalGateReason] = useState('');
  const [parentalAction, setParentalAction] = useState<(() => void) | null>(null);

  // Child-Safe Ads state (Compliant with Google Play Families & ECA Digital)
  const [isAdModalOpen, setIsAdModalOpen] = useState(false);
  const [activeAd, setActiveAd] = useState<KidSafeSponsoredMessage | null>(null);
  const [isRewardAd, setIsRewardAd] = useState(false);
  const [hasRewardBadge, setHasRewardBadge] = useState(false);

  // Tracking triggered interactive elements
  const [triggeredElementIds, setTriggeredElementIds] = useState<Set<string>>(new Set());

  // Reading journey history
  const [history, setHistory] = useState<ReadingHistoryItem[]>([
    { sceneId: BOOKS_DATA[0].initialSceneId, timestamp: Date.now() },
  ]);

  // Audio and UX settings
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showHints, setShowHints] = useState(true);

  // Load saved progress and reward badge on initial render
  useEffect(() => {
    try {
      const savedBookId = localStorage.getItem('pop_active_book_id');
      const savedSceneId = localStorage.getItem('pop_active_scene_id');
      const savedBadge = localStorage.getItem('pop_reward_badge');
      if (savedBadge === 'true') {
        setHasRewardBadge(true);
      }
      if (savedBookId) {
        const foundBook = BOOKS_DATA.find((b) => b.id === savedBookId);
        if (foundBook) {
          setCurrentBook(foundBook);
          if (savedSceneId && foundBook.scenes[savedSceneId]) {
            setCurrentSceneId(savedSceneId);
          } else {
            setCurrentSceneId(foundBook.initialSceneId);
          }
        }
      }
    } catch {
      // Ignore local storage errors in sandboxed iframes
    }
  }, []);

  // Save progress
  useEffect(() => {
    try {
      localStorage.setItem('pop_active_book_id', currentBook.id);
      localStorage.setItem('pop_active_scene_id', currentSceneId);
    } catch {
      // Ignore
    }
  }, [currentBook.id, currentSceneId]);

  const currentScene: Scene = currentBook.scenes[currentSceneId] || currentBook.scenes[currentBook.initialSceneId];

  // Open Parental Gate before sensitive actions
  const requireParentalApproval = (reason: string, action: () => void) => {
    setParentalGateReason(reason);
    setParentalAction(() => action);
    setIsParentalGateOpen(true);
  };

  const handleParentalGateSuccess = () => {
    setIsParentalGateOpen(false);
    if (parentalAction) {
      parentalAction();
      setParentalAction(null);
    }
  };

  // Trigger child-safe rewarded ad
  const handleEarnRewardBadge = () => {
    soundManager.playSparkle();
    const ad = adService.getRandomKidSafeAd();
    setActiveAd(ad);
    setIsRewardAd(true);
    setIsAdModalOpen(true);
  };

  const handleAdFinished = () => {
    setIsAdModalOpen(false);
    adService.recordAdImpression();

    if (isRewardAd) {
      setHasRewardBadge(true);
      try {
        localStorage.setItem('pop_reward_badge', 'true');
      } catch {
        // Ignore
      }
      soundManager.playFanfare();
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#10B981', '#EC4899', '#8B5CF6'],
      });
    }
  };

  // Handle triggering an interactive element in the scene
  const handleTriggerElement = (element: InteractiveElement) => {
    setTriggeredElementIds((prev) => {
      const updated = new Set(prev);
      updated.add(element.id);
      return updated;
    });

    // Check if auto-advance is linked (gives ample time to read narrative message)
    if (element.eventResult?.autoAdvanceSceneId) {
      setTimeout(() => {
        handleGoToScene(element.eventResult!.autoAdvanceSceneId!);
      }, 7000);
    }
  };

  // Handle branching choice
  const handleMakeChoice = (choice: StoryChoice) => {
    // Add to history
    setHistory((prev) => [
      ...prev,
      {
        sceneId: choice.targetSceneId,
        choiceMadeId: choice.id,
        choiceText: choice.text,
        timestamp: Date.now(),
      },
    ]);

    // Celebrate choice
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#F59E0B', '#10B981', '#3B82F6', '#EC4899'],
    });

    const targetScene = currentBook.scenes[choice.targetSceneId];
    // If the target scene is the final chapter and cooldown has elapsed, show respectful safe ad
    if (targetScene && targetScene.chapterNumber >= currentBook.totalChapters && adService.canShowAd()) {
      setTimeout(() => {
        setActiveAd(adService.getRandomKidSafeAd());
        setIsRewardAd(false);
        setIsAdModalOpen(true);
      }, 2500);
    }

    setCurrentSceneId(choice.targetSceneId);

    // Scroll smoothly to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToScene = (sceneId: string) => {
    if (currentBook.scenes[sceneId]) {
      setCurrentSceneId(sceneId);
    }
  };

  const handleSelectBook = (book: Book) => {
    setCurrentBook(book);
    setCurrentSceneId(book.initialSceneId);
    setTriggeredElementIds(new Set());
    setHistory([{ sceneId: book.initialSceneId, timestamp: Date.now() }]);
    setIsLibraryOpen(false);
  };

  const handleRestartStory = () => {
    soundManager.playFanfare();
    setCurrentSceneId(currentBook.initialSceneId);
    setTriggeredElementIds(new Set());
    setHistory([{ sceneId: currentBook.initialSceneId, timestamp: Date.now() }]);
  };

  const handleToggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      soundManager.enabled = next;
      return next;
    });
  };

  // Calculate reading progress based on chapter number vs total
  const readingProgress = (currentScene.chapterNumber / currentBook.totalChapters) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/60 font-['Fredoka',sans-serif]">
      {/* Top Navigation Bar */}
      <Header
        currentBook={isLibraryOpen ? null : currentBook}
        currentScene={isLibraryOpen ? null : currentScene}
        onOpenLibrary={() => setIsLibraryOpen(true)}
        onOpenMap={() => setIsMapOpen(true)}
        onRestartStory={handleRestartStory}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        readingProgress={readingProgress}
        onOpenSafetyInfo={() => {
          requireParentalApproval(
            'Visualizar Termos de Privacidade e Proteção Infantil (LGPD Art. 14 e ECA Digital)',
            () => setIsSafetyModalOpen(true)
          );
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6 sm:py-8">
        {isLibraryOpen ? (
          <LibraryView
            books={BOOKS_DATA}
            onSelectBook={handleSelectBook}
            onOpenSafetyInfo={() => {
              requireParentalApproval(
                'Acessar Diretrizes de Proteção à Criança e Dados Pessoais',
                () => setIsSafetyModalOpen(true)
              );
            }}
            onEarnRewardBadge={handleEarnRewardBadge}
            hasRewardBadge={hasRewardBadge}
          />
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {/* Visual Animated & Interactive Canvas Scene */}
            <section id="interactive-scene-section">
              <InteractiveScene
                scene={currentScene}
                triggeredElementIds={triggeredElementIds}
                onTriggerElement={handleTriggerElement}
                showHints={showHints}
                onToggleHints={() => setShowHints((prev) => !prev)}
              />
            </section>

            {/* Story Text, Speech Narration & Branching Choices */}
            <section id="story-reader-section">
              <StoryReader
                scene={currentScene}
                bookTitle={currentBook.title}
                onMakeChoice={handleMakeChoice}
                triggeredElementIds={triggeredElementIds}
              />
            </section>
          </div>
        )}
      </main>

      {/* Story Map Modal */}
      <StoryMapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        book={currentBook}
        currentSceneId={currentSceneId}
        history={history}
        onJumpToScene={handleGoToScene}
      />

      {/* Child-Safe Ad Modal (Families Certified & ECA Compliant) */}
      {activeAd && (
        <ChildSafeAdModal
          isOpen={isAdModalOpen}
          ad={activeAd}
          onAdFinished={handleAdFinished}
          isReward={isRewardAd}
        />
      )}

      {/* Privacy Policy & Child Protection Modal (LGPD Art. 14 / ECA) */}
      <PrivacyEcaModal
        isOpen={isSafetyModalOpen}
        onClose={() => setIsSafetyModalOpen(false)}
      />

      {/* Parental Gate Modal (Math challenge for parents) */}
      <ParentalGateModal
        isOpen={isParentalGateOpen}
        reason={parentalGateReason}
        onSuccess={handleParentalGateSuccess}
        onClose={() => setIsParentalGateOpen(false)}
      />

      {/* Footer */}
      <footer className="w-full py-6 border-t border-amber-200/80 bg-white/60 backdrop-blur-xs text-center text-xs font-semibold text-slate-500 space-y-2">
        <p>
          Pop! — Livros Interativos Infantis e Infantojuvenis • Desenvolvido para encantar e incentivar a leitura.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400 font-bold">
          <button
            onClick={() => {
              requireParentalApproval(
                'Visualizar Política de Privacidade e Proteção Infantil',
                () => setIsSafetyModalOpen(true)
              );
            }}
            className="hover:text-emerald-700 underline flex items-center space-x-1 cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
            <span>Privacidade & LGPD (Art. 14) • ECA Digital</span>
          </button>
          <span>•</span>
          <span className="text-slate-400">Ambiente 100% Seguro para Crianças</span>
        </div>
      </footer>
    </div>
  );
}

