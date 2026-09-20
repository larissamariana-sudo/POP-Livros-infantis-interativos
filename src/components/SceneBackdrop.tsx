import React from 'react';
import { SceneryType } from '../types';

interface SceneBackdropProps {
  sceneryType: SceneryType;
  isRiverFlowing?: boolean;
  hasRiver?: boolean;
  hasTree?: boolean;
}

export const SceneBackdrop: React.FC<SceneBackdropProps> = ({
  sceneryType,
  isRiverFlowing,
  hasRiver,
  hasTree,
}) => {
  switch (sceneryType) {
    case 'dragon-cave':
    case 'crystal-caves':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="caveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="50%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <radialGradient id="crystalGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#581c87" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#caveGrad)" />
          {/* Glowing Aura circles */}
          <circle cx="300" cy="300" r="180" fill="url(#crystalGlow)" />
          <circle cx="750" cy="350" r="160" fill="url(#crystalGlow)" />
          {/* Cave Stalactites (ceiling) */}
          <path d="M0,0 L80,140 L140,0 L220,190 L300,0 L420,160 L500,0 L620,210 L700,0 L830,170 L910,0 L1000,120 L1000,0 Z" fill="#1e1b4b" />
          {/* Cave Floor / Rocks */}
          <path d="M0,480 Q250,420 500,470 T1000,450 L1000,600 L0,600 Z" fill="#0f172a" />
          {/* Glowing ground crystals */}
          <polygon points="180,480 200,400 220,480" fill="#a855f7" />
          <polygon points="210,485 230,370 250,485" fill="#c084fc" />
          <polygon points="760,460 780,360 800,460" fill="#38bdf8" />
          <polygon points="790,470 815,390 835,470" fill="#818cf8" />
        </svg>
      );

    case 'sky-islands':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="skyIslandGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#skyIslandGrad)" />
          {/* Floating clouds in distance */}
          <ellipse cx="200" cy="120" rx="90" ry="35" fill="#ffffff" opacity="0.8" />
          <ellipse cx="800" cy="180" rx="120" ry="45" fill="#ffffff" opacity="0.7" />
          {/* Main Floating Island */}
          <path d="M120,380 Q400,340 750,380 Q620,530 450,560 Q280,530 120,380 Z" fill="#78350f" opacity="0.9" />
          <ellipse cx="435" cy="380" rx="315" ry="35" fill="#22c55e" />
          {/* Small Floating Island */}
          <path d="M720,240 Q850,220 950,240 Q880,310 830,320 Q780,310 720,240 Z" fill="#78350f" opacity="0.85" />
          <ellipse cx="835" cy="240" rx="115" ry="18" fill="#4ade80" />
          {/* Mechanical gears / windmill silhouette */}
          <circle cx="830" cy="210" r="16" fill="#f59e0b" opacity="0.7" />
          <line x1="830" y1="180" x2="830" y2="240" stroke="#f59e0b" strokeWidth="4" />
          <line x1="800" y1="210" x2="860" y2="210" stroke="#f59e0b" strokeWidth="4" />
        </svg>
      );

    case 'coral-reef':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#0c4a6e" />
            </linearGradient>
            <linearGradient id="sandGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#oceanGrad)" />
          {/* Sunbeams underwater */}
          <polygon points="200,0 280,0 450,600 350,600" fill="#ffffff" opacity="0.08" />
          <polygon points="600,0 670,0 850,600 780,600" fill="#ffffff" opacity="0.07" />
          {/* Sandy sea bed */}
          <path d="M0,480 Q250,450 600,500 T1000,470 L1000,600 L0,600 Z" fill="url(#sandGrad)" />
          {/* Corals on left and right */}
          <path d="M80,490 Q70,390 90,340 Q110,390 120,490 Z" fill="#f43f5e" />
          <path d="M110,490 Q120,400 150,360 Q160,420 140,490 Z" fill="#fb7185" />
          <path d="M840,480 Q870,370 890,320 Q920,380 910,480 Z" fill="#a855f7" />
          <path d="M890,485 Q910,410 950,370 Q960,430 940,485 Z" fill="#ec4899" />
          {/* Seaweed strands */}
          <path d="M280,490 Q260,380 290,290" stroke="#10b981" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.8" />
          <path d="M720,480 Q740,390 710,310" stroke="#059669" strokeWidth="9" strokeLinecap="round" fill="none" opacity="0.8" />
        </svg>
      );

    case 'space-galaxy':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="spaceGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#030712" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            <radialGradient id="nebulaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#spaceGrad)" />
          {/* Nebula clouds */}
          <circle cx="700" cy="200" r="220" fill="url(#nebulaGlow)" />
          <circle cx="250" cy="350" r="180" fill="url(#nebulaGlow)" />
          {/* Stars */}
          {[
            [100, 80], [220, 60], [380, 110], [540, 70], [680, 90], [840, 50], [920, 130],
            [150, 220], [310, 280], [470, 240], [630, 310], [790, 260], [90, 420],
            [410, 450], [580, 430], [750, 470], [890, 410], [950, 320]
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 3 : 2} fill="#ffffff" opacity={0.6 + (i % 5) * 0.08} />
          ))}
          {/* Ringed Planet */}
          <ellipse cx="800" cy="160" rx="45" ry="45" fill="#f59e0b" />
          <ellipse cx="800" cy="160" rx="80" ry="16" stroke="#fde047" strokeWidth="5" fill="none" opacity="0.85" transform="rotate(-20, 800, 160)" />
          {/* Moon Surface floor */}
          <path d="M0,490 Q300,440 600,480 T1000,460 L1000,600 L0,600 Z" fill="#475569" />
          <ellipse cx="250" cy="530" rx="35" ry="12" fill="#334155" />
          <ellipse cx="680" cy="515" rx="50" ry="15" fill="#334155" />
          <ellipse cx="850" cy="540" rx="28" ry="10" fill="#334155" />
        </svg>
      );

    case 'candy-land':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="candySky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="60%" stopColor="#fbcfe8" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient id="candyHills" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#e11d48" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#candySky)" />
          {/* Cotton candy clouds */}
          <g fill="#ffffff" opacity="0.85">
            <circle cx="220" cy="120" r="45" />
            <circle cx="265" cy="110" r="55" />
            <circle cx="310" cy="125" r="40" />
            <circle cx="750" cy="140" r="50" />
            <circle cx="800" cy="130" r="60" />
          </g>
          {/* Candy hills */}
          <path d="M-50,420 Q200,320 450,410 T950,380 L1050,600 L-50,600 Z" fill="#67e8f9" opacity="0.6" />
          <path d="M0,450 Q280,360 550,450 T1000,430 L1000,600 L0,600 Z" fill="url(#candyHills)" />
          {/* Chocolate river / stream */}
          <path d="M0,520 Q300,500 600,540 T1000,530 L1000,600 L0,600 Z" fill="#78350f" />
          {/* Lollipop trees */}
          <circle cx="160" cy="340" r="38" fill="#f43f5e" />
          <circle cx="160" cy="340" r="24" fill="#fde047" />
          <circle cx="160" cy="340" r="10" fill="#38bdf8" />
          <line x1="160" y1="378" x2="160" y2="470" stroke="#f8fafc" strokeWidth="8" />
        </svg>
      );

    case 'cozy-farm':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="farmSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="70%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient id="hayField" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#farmSky)" />
          {/* Sun */}
          <circle cx="850" cy="110" r="50" fill="#f59e0b" opacity="0.9" />
          {/* Red Barn silhouette */}
          <path d="M720,380 L840,380 L840,460 L720,460 Z" fill="#dc2626" />
          <polygon points="780,330 710,380 850,380" fill="#991b1b" />
          <rect x="760" y="415" width="40" height="45" fill="#ffffff" />
          {/* Golden Hay Field */}
          <path d="M0,450 Q300,420 600,460 T1000,440 L1000,600 L0,600 Z" fill="url(#hayField)" />
          {/* Wooden fence */}
          <line x1="50" y1="460" x2="950" y2="460" stroke="#78350f" strokeWidth="4" />
          <line x1="50" y1="480" x2="950" y2="480" stroke="#78350f" strokeWidth="4" />
          {[120, 240, 360, 480, 600, 720, 840].map((x) => (
            <line key={x} x1={x} y1="445" x2={x} y2="500" stroke="#78350f" strokeWidth="6" />
          ))}
        </svg>
      );

    case 'cherry-blossom':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="cherrySky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="60%" stopColor="#fbcfe8" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#cherrySky)" />
          {/* Mountain Fuji silhouette with snowcap */}
          <polygon points="500,200 280,480 720,480" fill="#64748b" opacity="0.6" />
          <polygon points="500,200 440,280 560,280" fill="#ffffff" opacity="0.95" />
          {/* Bamboo bridge & stream */}
          <path d="M0,480 Q250,460 500,490 T1000,470 L1000,600 L0,600 Z" fill="#15803d" />
          <path d="M0,520 Q300,510 600,540 T1000,530 L1000,600 L0,600 Z" fill="#38bdf8" />
          {/* Sakura foliage puffs on the right */}
          <circle cx="850" cy="300" r="70" fill="#f472b6" opacity="0.9" />
          <circle cx="800" cy="270" r="55" fill="#fb7185" opacity="0.9" />
          <circle cx="890" cy="280" r="60" fill="#f9a8d4" opacity="0.9" />
          <path d="M850,300 L850,490" stroke="#78350f" strokeWidth="14" strokeLinecap="round" />
        </svg>
      );

    case 'pyramid-desert':
    case 'desert-ruins':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="desertSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient id="duneGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#desertSky)" />
          {/* Giant Sun */}
          <circle cx="300" cy="140" r="65" fill="#fef08a" opacity="0.9" />
          {/* Great Pyramids */}
          <polygon points="650,220 480,440 820,440" fill="#b45309" opacity="0.8" />
          <polygon points="650,220 650,440 820,440" fill="#78350f" opacity="0.6" />
          <polygon points="380,280 260,450 500,450" fill="#b45309" opacity="0.75" />
          {/* Golden sand dunes */}
          <path d="M0,440 Q350,380 700,460 T1000,430 L1000,600 L0,600 Z" fill="url(#duneGrad)" />
          <path d="M0,500 Q450,440 850,520 T1000,490 L1000,600 L0,600 Z" fill="#b45309" opacity="0.7" />
        </svg>
      );

    case 'autumn-park':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="autumnSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fdba74" />
              <stop offset="50%" stopColor="#fed7aa" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient id="autumnGrass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#autumnSky)" />
          {/* Soft distant hills */}
          <path d="M-50,420 Q200,320 480,400 T1050,380 L1050,600 L-50,600 Z" fill="#ea580c" opacity="0.4" />
          <path d="M0,450 Q300,360 650,440 T1000,410 L1000,600 L0,600 Z" fill="url(#autumnGrass)" />
          {/* Golden Autumn Trees */}
          <circle cx="200" cy="280" r="70" fill="#ea580c" opacity="0.9" />
          <circle cx="240" cy="250" r="60" fill="#f59e0b" opacity="0.95" />
          <circle cx="160" cy="270" r="55" fill="#d97706" opacity="0.9" />
          <path d="M200,300 L200,460" stroke="#78350f" strokeWidth="16" strokeLinecap="round" />
          
          <circle cx="820" cy="290" r="65" fill="#f97316" opacity="0.9" />
          <circle cx="770" cy="260" r="55" fill="#eab308" opacity="0.9" />
          <path d="M800,320 L800,470" stroke="#78350f" strokeWidth="14" strokeLinecap="round" />
          
          {/* Falling golden leaves */}
          {[120, 280, 420, 580, 720, 890].map((x, i) => (
            <ellipse key={i} cx={x} cy={180 + (i * 45) % 200} rx="12" ry="7" fill="#f59e0b" transform={`rotate(${i * 25}, ${x}, ${180 + (i * 45) % 200})`} opacity="0.85" />
          ))}
          {/* Park curved cobblestone path */}
          <path d="M400,600 Q500,500 520,440" stroke="#fde68a" strokeWidth="65" fill="none" opacity="0.75" />
        </svg>
      );

    case 'dino-island':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="dinoSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#bbf7d0" />
            </linearGradient>
            <linearGradient id="jungleFloor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#14532d" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#dinoSky)" />
          {/* Mini Friendly Volcano */}
          <polygon points="760,200 650,450 880,450" fill="#713f12" />
          <polygon points="760,200 760,450 880,450" fill="#451a03" opacity="0.6" />
          {/* Volcano smoke / flower confetti puff */}
          <ellipse cx="760" cy="180" rx="30" ry="16" fill="#fef08a" opacity="0.8" />
          <ellipse cx="780" cy="150" rx="40" ry="22" fill="#f472b6" opacity="0.7" />
          <ellipse cx="750" cy="120" rx="45" ry="25" fill="#a78bfa" opacity="0.6" />
          {/* Giant Prehistoric Ferns and Hills */}
          <path d="M-20,460 Q250,380 500,430 T1020,420 L1000,600 L-20,600 Z" fill="url(#jungleFloor)" />
          {/* Huge fern leaves on left */}
          <path d="M0,500 Q150,320 300,380 Q160,420 0,550" fill="#15803d" opacity="0.9" />
          <path d="M0,450 Q180,260 280,310 Q140,360 0,520" fill="#22c55e" opacity="0.85" />
          {/* Prehistoric palm tree */}
          <path d="M180,480 Q190,320 220,240" stroke="#78350f" strokeWidth="18" strokeLinecap="round" fill="none" />
          <ellipse cx="170" cy="220" rx="60" ry="18" fill="#16a34a" transform="rotate(-30 170 220)" />
          <ellipse cx="270" cy="220" rx="60" ry="18" fill="#16a34a" transform="rotate(30 270 220)" />
          <ellipse cx="220" cy="190" rx="55" ry="18" fill="#22c55e" transform="rotate(-10 220 190)" />
        </svg>
      );

    case 'snowy-aurora':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="polarSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#polarSky)" />
          {/* Aurora Borealis light ribbons */}
          <path d="M50,120 Q300,40 600,140 T1000,80" stroke="#34d399" strokeWidth="35" fill="none" opacity="0.5" filter="blur(8px)" />
          <path d="M0,160 Q350,80 700,180 T1000,120" stroke="#818cf8" strokeWidth="28" fill="none" opacity="0.45" filter="blur(6px)" />
          <path d="M100,100 Q400,20 750,120 T1000,70" stroke="#38bdf8" strokeWidth="20" fill="none" opacity="0.4" filter="blur(5px)" />
          {/* Stars */}
          {[120, 280, 440, 620, 780, 910].map((x, i) => (
            <circle key={i} cx={x} cy={60 + (i % 3) * 20} r="2.5" fill="#ffffff" />
          ))}
          {/* Snowy ground and ice mountains */}
          <polygon points="180,320 50,480 320,480" fill="#93c5fd" opacity="0.6" />
          <polygon points="820,300 680,480 960,480" fill="#93c5fd" opacity="0.6" />
          <path d="M0,460 Q300,420 600,470 T1000,450 L1000,600 L0,600 Z" fill="#e0f2fe" />
          {/* Igloo */}
          <path d="M220,480 A45,45 0 0,1 310,480 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      );

    case 'toy-workshop':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="workshopWall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#451a03" />
              <stop offset="60%" stopColor="#78350f" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#workshopWall)" />
          {/* Wooden shelves */}
          <rect x="100" y="160" width="800" height="18" fill="#b45309" stroke="#78350f" strokeWidth="3" />
          <rect x="150" y="280" width="700" height="18" fill="#b45309" stroke="#78350f" strokeWidth="3" />
          {/* Toy silhouettes on shelves */}
          <circle cx="200" cy="135" r="20" fill="#ef4444" />
          <rect x="350" y="120" width="30" height="38" fill="#3b82f6" />
          <polygon points="600,110 580,158 620,158" fill="#10b981" />
          <circle cx="750" cy="135" r="22" fill="#f59e0b" />
          {/* Workbench floor */}
          <rect x="0" y="450" width="1000" height="150" fill="#713f12" />
          <line x1="0" y1="450" x2="1000" y2="450" stroke="#fef08a" strokeWidth="6" />
        </svg>
      );

    case 'cosmic-train':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="cosmicWindow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0b0f19" />
              <stop offset="50%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#2e1065" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#cosmicWindow)" />
          {/* Comet streaks */}
          <line x1="100" y1="80" x2="400" y2="240" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <line x1="600" y1="50" x2="850" y2="180" stroke="#f472b6" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          {/* Nebula clouds */}
          <circle cx="750" cy="220" r="160" fill="#a855f7" opacity="0.3" filter="blur(20px)" />
          <circle cx="280" cy="300" r="140" fill="#38bdf8" opacity="0.25" filter="blur(20px)" />
          {/* Train Window Frame */}
          <rect x="60" y="50" width="880" height="420" rx="40" fill="none" stroke="#e2e8f0" strokeWidth="22" opacity="0.9" />
          {/* Interior carriage table ledge */}
          <rect x="0" y="490" width="1000" height="110" fill="#1e293b" />
          <line x1="0" y1="490" x2="1000" y2="490" stroke="#f59e0b" strokeWidth="6" />
        </svg>
      );

    case 'shadow-castle':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="castleNight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#020617" />
              <stop offset="60%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#castleNight)" />
          {/* Crescent Moon */}
          <path d="M800,90 A45,45 0 1 0 840,160 A36,36 0 1 1 800,90 Z" fill="#fef08a" />
          {/* Castle Towers & Ramparts */}
          <rect x="180" y="240" width="90" height="260" fill="#1e293b" />
          <polygon points="225,170 170,240 280,240" fill="#334155" />
          <rect x="730" y="220" width="90" height="280" fill="#1e293b" />
          <polygon points="775,150 720,220 830,220" fill="#334155" />
          {/* Main Castle Hall */}
          <rect x="270" y="320" width="460" height="180" fill="#0f172a" />
          {/* Glowing arched windows */}
          <path d="M210,310 A15,15 0 0,1 240,310 L240,340 L210,340 Z" fill="#fbbf24" opacity="0.85" />
          <path d="M760,290 A15,15 0 0,1 790,290 L790,320 L760,320 Z" fill="#fbbf24" opacity="0.85" />
          <path d="M480,360 A25,25 0 0,1 520,360 L520,410 L480,410 Z" fill="#a855f7" opacity="0.9" />
          {/* Castle stone courtyard */}
          <rect x="0" y="490" width="1000" height="110" fill="#090d16" />
        </svg>
      );

    case 'sunny-beach':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="beachSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="sandGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#beachSky)" />
          {/* Bright Tropical Sun */}
          <circle cx="850" cy="110" r="55" fill="#fef08a" />
          {/* Ocean */}
          <path d="M0,280 Q250,260 500,280 T1000,270 L1000,420 L0,420 Z" fill="url(#seaGrad)" />
          {/* Wave crests / surf */}
          <path d="M0,330 Q250,300 500,340 T1000,320" stroke="#ffffff" strokeWidth="8" fill="none" opacity="0.8" />
          <path d="M0,370 Q300,350 600,380 T1000,360" stroke="#cffafe" strokeWidth="10" fill="none" opacity="0.9" />
          {/* Sand Beach Shore */}
          <path d="M0,390 Q300,370 600,410 T1000,390 L1000,600 L0,600 Z" fill="url(#sandGrad)" />
          {/* Palm Tree on the left */}
          <path d="M80,520 Q120,380 160,260" stroke="#78350f" strokeWidth="18" strokeLinecap="round" fill="none" />
          <ellipse cx="140" cy="240" rx="70" ry="20" fill="#16a34a" transform="rotate(-35 140 240)" />
          <ellipse cx="200" cy="240" rx="75" ry="20" fill="#22c55e" transform="rotate(30 200 240)" />
          <ellipse cx="160" cy="210" rx="65" ry="20" fill="#15803d" transform="rotate(-10 160 210)" />
          {/* Beach umbrella */}
          <polygon points="850,360 810,410 890,410" fill="#ef4444" />
          <path d="M850,360 Q830,410 810,410 Q850,420 890,410 Z" fill="#fbbf24" />
          <line x1="850" y1="410" x2="850" y2="480" stroke="#78350f" strokeWidth="5" />
        </svg>
      );

    case 'grandparents-house':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="cozyRoom" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="60%" stopColor="#ffedd5" />
              <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#cozyRoom)" />
          {/* Wood floor */}
          <rect x="0" y="440" width="1000" height="160" fill="#78350f" />
          <line x1="0" y1="440" x2="1000" y2="440" stroke="#d97706" strokeWidth="6" />
          {/* Fireplace in the center */}
          <rect x="380" y="240" width="240" height="200" fill="#991b1b" rx="10" />
          <rect x="420" y="310" width="160" height="130" fill="#450a0a" rx="15" />
          {/* Glowing fire */}
          <ellipse cx="500" cy="400" rx="45" ry="30" fill="#f59e0b" />
          <ellipse cx="500" cy="385" rx="30" ry="20" fill="#ef4444" />
          <circle cx="500" cy="380" r="15" fill="#fef08a" />
          {/* Mantlepiece clock & photos */}
          <rect x="360" y="230" width="280" height="20" fill="#713f12" rx="4" />
          <rect x="485" y="195" width="30" height="35" fill="#ca8a04" rx="6" />
          {/* Cozy Armchair */}
          <path d="M120,380 Q100,320 160,300 Q220,320 200,380 Z" fill="#b91c1c" />
          <rect x="110" y="380" width="100" height="60" rx="12" fill="#991b1b" />
          {/* Window showing flower garden */}
          <rect x="740" y="120" width="180" height="200" rx="20" fill="#bae6fd" stroke="#78350f" strokeWidth="12" />
          <line x1="830" y1="120" x2="830" y2="320" stroke="#78350f" strokeWidth="6" />
          <line x1="740" y1="220" x2="920" y2="220" stroke="#78350f" strokeWidth="6" />
        </svg>
      );

    case 'pillow-fort':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="fortRoom" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#312e81" />
              <stop offset="70%" stopColor="#4338ca" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#fortRoom)" />
          {/* Carpet */}
          <rect x="0" y="470" width="1000" height="130" fill="#1e1b4b" />
          {/* Blanket Canopy (Fort Roof) */}
          <path d="M100,500 L250,160 L500,220 L750,140 L900,500 Z" fill="#f43f5e" opacity="0.9" />
          <path d="M220,500 L380,240 L620,270 L800,500 Z" fill="#fb7185" opacity="0.85" />
          {/* Fort Entrance Tunnel */}
          <ellipse cx="500" cy="460" rx="140" ry="120" fill="#0f172a" />
          {/* Fairy lights string inside */}
          <path d="M250,180 Q500,260 750,160" stroke="#fef08a" strokeWidth="3" fill="none" />
          {[280, 350, 420, 500, 580, 650, 720].map((x, i) => (
            <circle key={i} cx={x} cy={195 + Math.sin(i * 0.8) * 15} r="7" fill={['#fef08a', '#67e8f9', '#f472b6', '#a78bfa'][i % 4]} />
          ))}
          {/* Giant Floor Cushions */}
          <ellipse cx="320" cy="490" rx="70" ry="35" fill="#0284c7" />
          <ellipse cx="680" cy="490" rx="75" ry="35" fill="#eab308" />
          <ellipse cx="500" cy="510" rx="80" ry="35" fill="#10b981" />
        </svg>
      );

    case 'pet-shelter':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="shelterWall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ecfdf5" />
              <stop offset="60%" stopColor="#d1fae5" />
              <stop offset="100%" stopColor="#a7f3d0" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#shelterWall)" />
          {/* Play lawn floor */}
          <rect x="0" y="450" width="1000" height="150" fill="#34d399" />
          <line x1="0" y1="450" x2="1000" y2="450" stroke="#059669" strokeWidth="6" />
          {/* Adoption Banner */}
          <rect x="300" y="60" width="400" height="70" rx="16" fill="#f59e0b" />
          <text x="500" y="105" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="bold" fontFamily="sans-serif">
            🐾 Cantinho do Amor & Adoção 🐾
          </text>
          {/* Cat Scratching Tree */}
          <rect x="180" y="240" width="24" height="210" fill="#d97706" />
          <ellipse cx="192" cy="240" rx="55" ry="18" fill="#f59e0b" />
          <ellipse cx="192" cy="330" rx="50" ry="16" fill="#f59e0b" />
          {/* Dog Cushion Bed */}
          <ellipse cx="780" cy="480" rx="90" ry="40" fill="#3b82f6" />
          <ellipse cx="780" cy="475" rx="75" ry="30" fill="#93c5fd" />
          {/* Paw print wall decals */}
          {[120, 240, 750, 880].map((x, i) => (
            <circle key={i} cx={x} cy={160 + (i % 2) * 40} r="10" fill="#10b981" opacity="0.35" />
          ))}
        </svg>
      );

    case 'amusement-park':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="parkDusk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4c1d95" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#parkDusk)" />
          {/* Carnival Ground */}
          <rect x="0" y="480" width="1000" height="120" fill="#312e81" />
          {/* Giant Ferris Wheel on left */}
          <circle cx="260" cy="260" r="140" stroke="#fbbf24" strokeWidth="6" fill="none" opacity="0.9" />
          <circle cx="260" cy="260" r="20" fill="#fbbf24" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x2 = 260 + 140 * Math.cos(rad);
            const y2 = 260 + 140 * Math.sin(rad);
            return (
              <g key={i}>
                <line x1="260" y1="260" x2={x2} y2={y2} stroke="#fef08a" strokeWidth="3" opacity="0.7" />
                <rect x={x2 - 12} y={y2 - 8} width="24" height="18" rx="4" fill={['#f43f5e', '#38bdf8', '#4ade80', '#fb923c'][i % 4]} />
              </g>
            );
          })}
          <line x1="260" y1="260" x2="200" y2="480" stroke="#f59e0b" strokeWidth="8" />
          <line x1="260" y1="260" x2="320" y2="480" stroke="#f59e0b" strokeWidth="8" />
          {/* Rollercoaster Tracks on right */}
          <path d="M500,480 Q650,180 800,320 T1000,220" stroke="#ef4444" strokeWidth="8" fill="none" />
          <path d="M500,485 Q650,185 800,325 T1000,225" stroke="#fef08a" strokeWidth="3" strokeDasharray="15,10" fill="none" />
          {/* Carousel Tent in center */}
          <polygon points="520,380 430,440 610,440" fill="#38bdf8" />
          <rect x="450" y="440" width="140" height="40" fill="#0284c7" />
        </svg>
      );

    case 'zoo-safari':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="safariSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="60%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#bbf7d0" />
            </linearGradient>
            <linearGradient id="savannah" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#84cc16" />
              <stop offset="100%" stopColor="#4d7c0f" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#safariSky)" />
          {/* African Acacia Tree Silhouette */}
          <path d="M780,480 Q760,320 790,240" stroke="#713f12" strokeWidth="18" strokeLinecap="round" fill="none" />
          <ellipse cx="790" cy="220" rx="110" ry="24" fill="#15803d" />
          <ellipse cx="730" cy="240" rx="70" ry="18" fill="#16a34a" />
          <ellipse cx="850" cy="235" rx="75" ry="18" fill="#15803d" />
          {/* Rolling Savannah Hills */}
          <path d="M-20,440 Q300,380 600,430 T1020,410 L1000,600 L-20,600 Z" fill="url(#savannah)" />
          {/* Safari Waterhole */}
          <ellipse cx="400" cy="520" rx="160" ry="50" fill="#38bdf8" stroke="#67e8f9" strokeWidth="4" />
          {/* Wooden Lookout bridge */}
          <rect x="80" y="410" width="180" height="12" fill="#854d0e" />
          <line x1="100" y1="410" x2="100" y2="490" stroke="#713f12" strokeWidth="6" />
          <line x1="240" y1="410" x2="240" y2="490" stroke="#713f12" strokeWidth="6" />
        </svg>
      );

    case 'sports-field':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="sportsSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="60%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
            <linearGradient id="stadiumGrass" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#sportsSky)" />
          {/* Running track in background */}
          <path d="M0,380 Q500,340 1000,380 L1000,600 L0,600 Z" fill="#ea580c" />
          <path d="M0,400 Q500,360 1000,400" stroke="#ffffff" strokeWidth="4" fill="none" opacity="0.9" />
          <path d="M0,420 Q500,380 1000,420" stroke="#ffffff" strokeWidth="4" fill="none" opacity="0.9" />
          {/* Emerald Soccer Lawn */}
          <path d="M0,440 Q500,410 1000,440 L1000,600 L0,600 Z" fill="url(#stadiumGrass)" />
          {/* Goal Post in distance */}
          <rect x="420" y="340" width="160" height="80" fill="none" stroke="#ffffff" strokeWidth="6" />
          <line x1="420" y1="340" x2="400" y2="430" stroke="#ffffff" strokeWidth="5" />
          <line x1="580" y1="340" x2="600" y2="430" stroke="#ffffff" strokeWidth="5" />
          {/* Center Circle & Lines */}
          <ellipse cx="500" cy="520" rx="140" ry="50" fill="none" stroke="#ffffff" strokeWidth="5" opacity="0.9" />
          <line x1="500" y1="440" x2="500" y2="600" stroke="#ffffff" strokeWidth="5" opacity="0.9" />
        </svg>
      );

    case 'school-classroom':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="classWall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="60%" stopColor="#fffbeb" />
              <stop offset="100%" stopColor="#fed7aa" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#classWall)" />
          {/* Classroom Floor */}
          <rect x="0" y="460" width="1000" height="140" fill="#92400e" />
          <line x1="0" y1="460" x2="1000" y2="460" stroke="#b45309" strokeWidth="6" />
          {/* Blackboard with cute math & science drawings */}
          <rect x="220" y="100" width="560" height="240" rx="12" fill="#14532d" stroke="#854d0e" strokeWidth="12" />
          <text x="500" y="170" textAnchor="middle" fill="#fef08a" fontSize="32" fontWeight="bold" fontFamily="sans-serif">
            ABC 🌟 1 + 1 = 2
          </text>
          <text x="500" y="230" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="600" fontFamily="sans-serif">
            Bem-vindos à Escola da Alegria!
          </text>
          {/* Chalk & Eraser ledge */}
          <rect x="240" y="340" width="520" height="12" fill="#78350f" />
          <rect x="350" y="336" width="30" height="8" fill="#ffffff" />
          <rect x="400" y="336" width="40" height="8" fill="#f43f5e" />
          {/* Teacher's Desk with Globe & Books */}
          <rect x="100" y="400" width="160" height="90" fill="#b45309" rx="6" />
          <circle cx="150" cy="370" r="22" fill="#38bdf8" stroke="#ca8a04" strokeWidth="4" />
          <rect x="190" y="380" width="40" height="20" fill="#ef4444" rx="3" />
        </svg>
      );

    case 'lake-fishing':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="lakeDawn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient id="lakeWater" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="60%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#lakeDawn)" />
          {/* Mountain Silhouettes */}
          <polygon points="120,240 0,420 280,420" fill="#93c5fd" opacity="0.6" />
          <polygon points="450,180 250,420 650,420" fill="#60a5fa" opacity="0.6" />
          <polygon points="780,220 580,420 980,420" fill="#93c5fd" opacity="0.6" />
          {/* Pine Forest on distant shore */}
          {[180, 220, 260, 310, 680, 720, 760, 810].map((x, i) => (
            <polygon key={i} points={`${x},360 ${x - 20},420 ${x + 20},420`} fill="#15803d" />
          ))}
          {/* Calm Lake */}
          <rect x="0" y="400" width="1000" height="200" fill="url(#lakeWater)" />
          {/* Water lily pads */}
          <ellipse cx="250" cy="460" rx="35" ry="14" fill="#22c55e" />
          <ellipse cx="780" cy="480" rx="40" ry="16" fill="#16a34a" />
          <circle cx="260" cy="455" r="7" fill="#f472b6" />
          {/* Wooden Fishing Pier */}
          <polygon points="420,410 580,410 630,600 370,600" fill="#78350f" />
          <line x1="420" y1="450" x2="580" y2="450" stroke="#92400e" strokeWidth="4" />
          <line x1="400" y1="520" x2="600" y2="520" stroke="#92400e" strokeWidth="4" />
        </svg>
      );

    case 'magic-academy':
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="arcaneSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="60%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
          </defs>
          <rect width="1000" height="600" fill="url(#arcaneSky)" />
          {/* Arcane Astrological Circle */}
          <circle cx="500" cy="240" r="130" stroke="#fef08a" strokeWidth="3" fill="none" opacity="0.6" strokeDasharray="10,6" />
          <circle cx="500" cy="240" r="90" stroke="#38bdf8" strokeWidth="2" fill="none" opacity="0.7" />
          {/* Grand Library Archways */}
          <path d="M120,490 L120,240 Q220,160 320,240 L320,490 Z" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" opacity="0.9" />
          <path d="M680,490 L680,240 Q780,160 880,240 L880,490 Z" fill="#0f172a" stroke="#fbbf24" strokeWidth="4" opacity="0.9" />
          {/* Floating spellbooks with glowing auras */}
          <rect x="470" y="220" width="60" height="40" rx="4" fill="#a855f7" stroke="#fef08a" strokeWidth="2" />
          <rect x="280" y="280" width="50" height="35" rx="4" fill="#ec4899" stroke="#38bdf8" strokeWidth="2" />
          <rect x="670" y="270" width="50" height="35" rx="4" fill="#3b82f6" stroke="#fef08a" strokeWidth="2" />
          {/* Polished Marble Floor */}
          <rect x="0" y="480" width="1000" height="120" fill="#020617" />
          <line x1="0" y1="480" x2="1000" y2="480" stroke="#a855f7" strokeWidth="6" />
        </svg>
      );

    case 'enchanted-forest':
    default:
      return (
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="50%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
            <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
            <linearGradient id="riverStill" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="50%" stopColor="#a5f3fc" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="riverFlowingGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="30%" stopColor="#38bdf8" />
              <stop offset="70%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>

          {/* Sky */}
          <rect width="1000" height="600" fill="url(#skyGrad)" />

          {/* Distant mountains */}
          <path d="M-50,420 Q120,240 320,400 T700,380 T1050,410 L1050,600 L-50,600 Z" fill="#86efac" opacity="0.6" />
          <path d="M50,430 Q280,260 500,410 T950,390 L1050,600 L-50,600 Z" fill="#4ade80" opacity="0.75" />

          {/* Floating Clouds */}
          <g className="animate-pulse">
            <ellipse cx="180" cy="90" rx="80" ry="32" fill="#ffffff" opacity="0.9" />
            <ellipse cx="230" cy="80" rx="60" ry="28" fill="#ffffff" opacity="0.9" />
            <ellipse cx="140" cy="85" rx="50" ry="24" fill="#ffffff" opacity="0.9" />
          </g>
          <g opacity="0.85">
            <ellipse cx="780" cy="110" rx="90" ry="35" fill="#ffffff" />
            <ellipse cx="830" cy="95" rx="65" ry="30" fill="#ffffff" />
          </g>

          {/* Rolling Green Hills */}
          <path d="M-20,460 Q200,380 480,450 T1020,440 L1000,600 L-20,600 Z" fill="url(#grassGrad)" />

          {/* River if in scene */}
          {hasRiver && (
            <>
              <path 
                d="M0,490 C250,480 450,550 1000,520 L1000,600 L0,600 Z" 
                fill={isRiverFlowing ? "url(#riverFlowingGrad)" : "url(#riverStill)"} 
                className="transition-all duration-700"
              />
              {isRiverFlowing && (
                <g className="animate-pulse">
                  <path d="M50,520 Q180,510 320,530 T600,540 T900,535" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" strokeDasharray="20,15" />
                  <path d="M120,550 Q260,540 450,570 T820,560" stroke="#bae6fd" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.9" strokeDasharray="30,20" />
                  <path d="M30,570 Q200,560 380,585 T750,580" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" strokeDasharray="15,25" />
                </g>
              )}
            </>
          )}

          {/* Tree if in scene */}
          {hasTree && (
            <g id="tree-group">
              <path d="M120,490 C130,420 140,320 110,240 C140,240 160,260 170,330 C185,420 190,495 120,490 Z" fill="#854d0e" />
              <path d="M140,300 Q180,240 240,250" stroke="#713f12" strokeWidth="16" strokeLinecap="round" fill="none" />
              <path d="M130,340 Q70,300 50,330" stroke="#713f12" strokeWidth="12" strokeLinecap="round" fill="none" />
              <ellipse cx="140" cy="200" rx="95" ry="75" fill="#22c55e" />
              <ellipse cx="190" cy="180" rx="85" ry="65" fill="#4ade80" />
              <ellipse cx="90" cy="190" rx="75" ry="60" fill="#16a34a" />
              <ellipse cx="150" cy="150" rx="70" ry="55" fill="#86efac" />
              <ellipse cx="220" cy="220" rx="65" ry="50" fill="#22c55e" />
            </g>
          )}
        </svg>
      );
  }
};
