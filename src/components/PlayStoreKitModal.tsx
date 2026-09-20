import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, Sparkles, Image as ImageIcon, Smartphone, ShieldCheck, Check, Info } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface PlayStoreKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlayStoreKitModal: React.FC<PlayStoreKitModalProps> = ({ isOpen, onClose }) => {
  const iconCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const bannerCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeTab, setActiveTab] = useState<'icon' | 'banner' | 'screenshots'>('icon');
  const [copiedTip, setCopiedTip] = useState(false);

  // Render official 512x512 Icon
  useEffect(() => {
    if (!isOpen) return;

    const canvas = iconCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 512 x 512 dimensions
    canvas.width = 512;
    canvas.height = 512;

    // Background Gradient (Warm Amber to Coral/Rose)
    const bgGrad = ctx.createLinearGradient(0, 0, 512, 512);
    bgGrad.addColorStop(0, '#F59E0B');
    bgGrad.addColorStop(0.5, '#F97316');
    bgGrad.addColorStop(1, '#E11D48');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 512, 512);

    // Decorative floating glowing bubbles
    const bubbles = [
      { x: 80, y: 100, r: 35, a: 0.25 },
      { x: 440, y: 90, r: 45, a: 0.2 },
      { x: 430, y: 420, r: 50, a: 0.25 },
      { x: 90, y: 430, r: 40, a: 0.2 },
    ];
    bubbles.forEach((b) => {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${b.a})`;
      ctx.fill();
    });

    // Central Open Storybook Glow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 12;

    // Book Base (White/Cream Pages)
    ctx.fillStyle = '#FFFBEB';
    ctx.beginPath();
    ctx.roundRect(96, 170, 320, 240, 28);
    ctx.fill();
    ctx.shadowColor = 'transparent';

    // Book Cover Border (Gold/Orange)
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#FEF08A';
    ctx.stroke();

    // Central Book Spine Divider
    ctx.beginPath();
    ctx.moveTo(256, 170);
    ctx.lineTo(256, 410);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#E5E7EB';
    ctx.stroke();

    // Cute Dragon / Magic Emoji
    ctx.font = '85px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🐉', 200, 290);
    ctx.fillText('✨', 320, 280);

    // Sparkling Stars
    ctx.font = '38px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
    ctx.fillText('⭐', 150, 210);
    ctx.fillText('🌟', 360, 360);

    // "POP!" Playful Text Badge on top
    ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
    ctx.shadowBlur = 16;
    ctx.shadowOffsetY = 8;

    // Badge pill
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.roundRect(140, 60, 232, 85, 42);
    ctx.fill();
    ctx.shadowColor = 'transparent';

    // Badge border
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#FCD34D';
    ctx.stroke();

    // POP! text
    ctx.fillStyle = '#B45309';
    ctx.font = '900 60px "Fredoka", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Pop!', 256, 102);

  }, [isOpen, activeTab]);

  // Render official 1024x500 Feature Graphic (Banner)
  useEffect(() => {
    if (!isOpen) return;

    const canvas = bannerCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1024 x 500 dimensions (exact Play Store specification)
    canvas.width = 1024;
    canvas.height = 500;

    // Deep rich magical gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 1024, 500);
    bgGrad.addColorStop(0, '#78350F'); // Deep amber
    bgGrad.addColorStop(0.3, '#D97706'); // Warm amber
    bgGrad.addColorStop(0.7, '#EA580C'); // Vibrant orange
    bgGrad.addColorStop(1, '#9F1239'); // Rose
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1024, 500);

    // Ambient floating magic light circles
    for (let i = 0; i < 18; i++) {
      const x = Math.sin(i * 1.5) * 450 + 512;
      const y = Math.cos(i * 2.1) * 200 + 250;
      const r = (i % 4 + 1) * 15;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fill();
    }

    // Left illustration: Big open interactive pop-up book with characters
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 30;
    ctx.shadowOffsetY = 15;

    ctx.fillStyle = '#FFFBEB';
    ctx.beginPath();
    ctx.roundRect(70, 110, 380, 280, 32);
    ctx.fill();
    ctx.shadowColor = 'transparent';

    ctx.lineWidth = 8;
    ctx.strokeStyle = '#FCD34D';
    ctx.stroke();

    // Book spine
    ctx.beginPath();
    ctx.moveTo(260, 110);
    ctx.lineTo(260, 390);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#FDE68A';
    ctx.stroke();

    // Characters popping out
    ctx.font = '90px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🐉', 190, 230);
    ctx.fillText('🦁', 330, 230);
    ctx.font = '55px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
    ctx.fillText('🚀', 180, 330);
    ctx.fillText('✨', 320, 330);

    // Right Side: Typography & Badges
    // Logo Pill
    ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 8;
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.roundRect(490, 85, 180, 68, 34);
    ctx.fill();
    ctx.shadowColor = 'transparent';

    ctx.fillStyle = '#B45309';
    ctx.font = '900 48px "Fredoka", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Pop!', 580, 122);

    // Title
    ctx.textAlign = 'left';
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 44px "Fredoka", sans-serif';
    ctx.fillText('Livros Infantis Interativos', 490, 205);

    // Subtitle
    ctx.fillStyle = '#FEF3C7';
    ctx.font = '700 22px "Quicksand", sans-serif';
    ctx.fillText('A criança toca nos cenários e escolhe o rumo da história!', 490, 250);

    // Feature tags
    const tags = ['📖 8 Histórias', '🔊 Narração em Voz Alta', '🔒 100% Seguro (ECA/LGPD)', '⭐ Livre para Crianças'];
    let tagX = 490;
    let tagY = 300;

    tags.forEach((tag, idx) => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.beginPath();
      ctx.roundRect(tagX, tagY, 230, 42, 14);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 15px "Fredoka", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(tag, tagX + 115, tagY + 26);

      if (idx === 1) {
        tagX = 490;
        tagY = 355;
      } else {
        tagX += 245;
      }
    });

  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  // Download Canvas as PNG file
  const handleDownload = (canvasRef: React.RefObject<HTMLCanvasElement | null>, filename: string) => {
    soundManager.playFanfare();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          className="bg-white rounded-3xl max-w-3xl w-full my-6 overflow-hidden shadow-2xl border-4 border-amber-300 flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="p-5 bg-linear-to-r from-amber-500 via-orange-500 to-rose-500 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-2xl">
                <Sparkles className="w-6 h-6 text-yellow-200" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-['Fredoka',sans-serif]">
                  Kit Gráfico Oficial • Google Play Store
                </h3>
                <p className="text-xs font-bold text-amber-100 uppercase tracking-wider">
                  Ícone 512×512, Banner 1024×500 e Capturas de Tela Prontas
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playPop();
                onClose();
              }}
              id="btn-close-playstore-kit"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-amber-50 p-2 flex border-b border-amber-200 shrink-0">
            <button
              onClick={() => {
                soundManager.playPop();
                setActiveTab('icon');
              }}
              className={`flex-1 py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                activeTab === 'icon'
                  ? 'bg-white text-amber-950 shadow-md border border-amber-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-amber-600" />
              <span>1. Ícone (512×512 px)</span>
            </button>

            <button
              onClick={() => {
                soundManager.playPop();
                setActiveTab('banner');
              }}
              className={`flex-1 py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                activeTab === 'banner'
                  ? 'bg-white text-amber-950 shadow-md border border-amber-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-rose-600" />
              <span>2. Banner (1024×500 px)</span>
            </button>

            <button
              onClick={() => {
                soundManager.playPop();
                setActiveTab('screenshots');
              }}
              className={`flex-1 py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-extrabold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                activeTab === 'screenshots'
                  ? 'bg-white text-amber-950 shadow-md border border-amber-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>3. Capturas de Tela</span>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            {/* TAB 1: ICON */}
            {activeTab === 'icon' && (
              <div className="space-y-6 text-center">
                <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 text-xs sm:text-sm text-slate-700 font-semibold text-left flex items-start space-x-3">
                  <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Especificação da Play Store:</strong> Imagem quadrada de <strong>512 × 512 pixels</strong> em formato PNG de 32 bits, sem cantos arredondados (o Google Play aplica automaticamente a máscara arredondada na loja).
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="p-4 bg-slate-100 rounded-3xl border-2 border-slate-200 shadow-inner inline-block">
                    <canvas
                      ref={iconCanvasRef}
                      className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl shadow-xl"
                    />
                  </div>

                  <p className="text-xs font-bold text-slate-500">
                    Resolução de Saída: <strong>512 × 512 px</strong> (PNG Nítido)
                  </p>

                  <button
                    onClick={() => handleDownload(iconCanvasRef, 'pop-icone-playstore-512x512.png')}
                    id="btn-download-icon"
                    className="py-3.5 px-8 bg-linear-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-black text-sm sm:text-base rounded-2xl shadow-lg flex items-center space-x-2 transition-transform active:scale-95 cursor-pointer"
                  >
                    <Download className="w-5 h-5" />
                    <span>Baixar Ícone Oficial (512×512 PNG)</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: BANNER */}
            {activeTab === 'banner' && (
              <div className="space-y-6 text-center">
                <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 text-xs sm:text-sm text-slate-700 font-semibold text-left flex items-start space-x-3">
                  <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Gráfico de Recursos (Feature Graphic):</strong> Imagem panorâmica de <strong>1024 × 500 pixels</strong> (PNG ou JPG). É a imagem de cabeçalho exibida no topo da página do aplicativo na Google Play Store.
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="p-3 bg-slate-100 rounded-3xl border-2 border-slate-200 shadow-inner w-full overflow-hidden">
                    <canvas
                      ref={bannerCanvasRef}
                      className="w-full max-w-2xl h-auto rounded-2xl shadow-xl mx-auto"
                    />
                  </div>

                  <p className="text-xs font-bold text-slate-500">
                    Resolução de Saída: <strong>1024 × 500 px</strong> (PNG Nítido)
                  </p>

                  <button
                    onClick={() => handleDownload(bannerCanvasRef, 'pop-banner-destaque-1024x500.png')}
                    id="btn-download-banner"
                    className="py-3.5 px-8 bg-linear-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-black text-sm sm:text-base rounded-2xl shadow-lg flex items-center space-x-2 transition-transform active:scale-95 cursor-pointer"
                  >
                    <Download className="w-5 h-5" />
                    <span>Baixar Banner de Destaque (1024×500 PNG)</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: SCREENSHOTS GUIDE */}
            {activeTab === 'screenshots' && (
              <div className="space-y-6">
                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 font-semibold flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Requisitos de Capturas de Tela do Google Play:</strong>
                    <ul className="list-disc pl-4 mt-1 space-y-1 text-xs text-emerald-900 font-medium">
                      <li>Mínimo de <strong>4 capturas</strong> (recomendado de 4 a 8).</li>
                      <li>Proporção padrão de celular (16:9 ou 9:16 vertical, ex: 1080×1920 ou 1080×2400 px).</li>
                      <li>Imagens dos recursos reais funcionando: estante, cenário interativo e escolhas.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-base font-black text-slate-800 font-['Fredoka',sans-serif]">
                    Roteiro das 4 Telas Ideais para Encantar os Pais na Loja:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Screen 1 */}
                    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black flex items-center justify-center">1</span>
                        <h5 className="font-black text-amber-950 text-sm">A Estante Mágica</h5>
                      </div>
                      <p className="text-xs text-slate-600 font-semibold">
                        Abra a Estante do app mostrando os 8 livros coloridos, as faixas etárias (3 a 14 anos) e o selo familiar.
                      </p>
                      <div className="text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2 py-1 rounded-md">
                        Legenda sugerida: "Biblioteca com 8 histórias interativas"
                      </div>
                    </div>

                    {/* Screen 2 */}
                    <div className="p-4 bg-rose-50 rounded-2xl border border-rose-200 space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs font-black flex items-center justify-center">2</span>
                        <h5 className="font-black text-rose-950 text-sm">Cenário Vivo & Tátil</h5>
                      </div>
                      <p className="text-xs text-slate-600 font-semibold">
                        Abra o livro do Dragão Pipoca ou Selva e toque em um elemento (fogo, estrelas ou frutas) para mostrar a animação.
                      </p>
                      <div className="text-[11px] font-bold text-rose-700 bg-rose-100/80 px-2 py-1 rounded-md">
                        Legenda sugerida: "Cenários animados com sons e surpresas táteis"
                      </div>
                    </div>

                    {/* Screen 3 */}
                    <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-black flex items-center justify-center">3</span>
                        <h5 className="font-black text-purple-950 text-sm">Você Escolhe o Rumo</h5>
                      </div>
                      <p className="text-xs text-slate-600 font-semibold">
                        Mostre os botões coloridos de escolha ("Atravessar o Rio de Cristal" vs "Explorar a Caverna Secreta").
                      </p>
                      <div className="text-[11px] font-bold text-purple-700 bg-purple-100/80 px-2 py-1 rounded-md">
                        Legenda sugerida: "Cada escolha leva a um final diferente"
                      </div>
                    </div>

                    {/* Screen 4 */}
                    <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-full bg-teal-500 text-white text-xs font-black flex items-center justify-center">4</span>
                        <h5 className="font-black text-teal-950 text-sm">Narração & Família Segura</h5>
                      </div>
                      <p className="text-xs text-slate-600 font-semibold">
                        Mostre o botão "Ler para Mim" com palavras destacadas e a proteção total da privacidade infantil (ECA/LGPD).
                      </p>
                      <div className="text-[11px] font-bold text-teal-700 bg-teal-100/80 px-2 py-1 rounded-md">
                        Legenda sugerida: "Incentivo à leitura com narração em voz alta"
                      </div>
                    </div>
                  </div>
                </div>

                {/* Easy How-to capture guide */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
                  <span className="font-extrabold text-slate-800 block text-sm">
                    💡 Como tirar os prints no tamanho exato pelo seu navegador:
                  </span>
                  <p>
                    1. No Chrome ou Edge, pressione a tecla <strong>F12</strong> (ou botão direito &gt; Inspecionar).
                  </p>
                  <p>
                    2. Pressione <strong>Ctrl + Shift + M</strong> para ativar o modo de visualização de celular (escolha por exemplo <em>Samsung Galaxy S20</em> ou <em>Pixel 7</em>).
                  </p>
                  <p>
                    3. Clique nos 3 pontinhos no canto do emulador e escolha <strong>Capture screenshot</strong> (Capturar captura de tela). O navegador salvará a imagem na resolução perfeita!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
            <span className="text-xs font-semibold text-slate-500">
              Arquivos em conformidade com as diretrizes do Google Play Console
            </span>
            <button
              onClick={onClose}
              className="py-2.5 px-6 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
            >
              Fechar Kit
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
