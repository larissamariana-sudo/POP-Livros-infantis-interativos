/**
 * Serviço de Publicidade Segura para Crianças (Child-Safe Ads Service)
 * 
 * Diretrizes e Conformidade Legal:
 * - LGPD (Lei 13.709/2018 - Art. 14: Tratamento de dados de crianças e adolescentes no melhor interesse da criança)
 * - ECA Digital (Estatuto da Criança e do Adolescente na internet)
 * - Google Play Families Policy (Programa para Famílias do Google Play)
 * - COPPA (Children's Online Privacy Protection Act)
 * 
 * Parâmetros Mandatórios:
 * 1. tagForChildDirectedTreatment: true (Sem rastreamento de perfil)
 * 2. tagForUnderAgeOfConsent: true (Proteção para menores de idade)
 * 3. maxAdContentRating: 'G' (Classificação Livre para todas as idades)
 * 4. zeroPersonalDataCollection: true (Sem identificadores de publicidade GAID/IDFA)
 */

export interface ChildSafeAdConfig {
  tagForChildDirectedTreatment: boolean;
  tagForUnderAgeOfConsent: boolean;
  maxAdContentRating: 'G';
  testMode: boolean;
  minCooldownSeconds: number;
}

export interface KidSafeSponsoredMessage {
  id: string;
  sponsorName: string;
  category: 'educacao' | 'meio-ambiente' | 'saude' | 'leitura';
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  bannerEmoji: string;
  accentColor: string;
  durationSeconds: number;
}

// Mensagens patrocinadas educativas e contextualizadas de demonstração (Classificação Livre - ECA/LGPD)
export const KID_SAFE_ADS: KidSafeSponsoredMessage[] = [
  {
    id: 'ad-leitura',
    sponsorName: 'Mundo dos Livros Infantis',
    category: 'leitura',
    title: 'Ler É Uma Super Aventura!',
    subtitle: 'Conheça novas histórias todos os dias',
    description: 'Quem lê viaja sem sair do lugar, descobre novos mundos e desperta a imaginação. Continue lendo!',
    badge: 'Incentivo à Leitura • Classificação Livre',
    bannerEmoji: '📚✨',
    accentColor: 'from-amber-500 to-orange-500',
    durationSeconds: 5,
  },
  {
    id: 'ad-natureza',
    sponsorName: 'Guardiões da Natureza',
    category: 'meio-ambiente',
    title: 'Cuide dos Nossos Oceanos e Florestas',
    subtitle: 'Pequenas atitudes salvam o nosso planeta',
    description: 'Não jogue lixo nas praias, proteja os animais e cuide das plantinhas. A natureza agradece!',
    badge: 'Cidadania e Planeta • Classificação Livre',
    bannerEmoji: '🌊🐢🌱',
    accentColor: 'from-emerald-500 to-teal-600',
    durationSeconds: 5,
  },
  {
    id: 'ad-saude',
    sponsorName: 'Turma da Vida Ativa',
    category: 'saude',
    title: 'Água Fresca, Frutas e Brincadeiras!',
    subtitle: 'Corpo forte para brincar o dia todo',
    description: 'Lembre-se de beber água enquanto lê e aproveite para correr e brincar ao ar livre com a família!',
    badge: 'Hábitos Saudáveis • Classificação Livre',
    bannerEmoji: '💧🍎⚽',
    accentColor: 'from-sky-500 to-blue-600',
    durationSeconds: 5,
  },
  {
    id: 'ad-adocao',
    sponsorName: 'Amigos dos Bichinhos',
    category: 'educacao',
    title: 'Adotar é um Ato de Amor!',
    subtitle: 'Cãezinhos e gatinhos precisam de carinho',
    description: 'Trate os animais com respeito e proteção. Adote com a sua família e dê um lar para um pet.',
    badge: 'Proteção Animal • Classificação Livre',
    bannerEmoji: '🐶🐱❤️',
    accentColor: 'from-rose-500 to-pink-600',
    durationSeconds: 5,
  }
];

class AdService {
  private lastAdTimestamp = 0;
  private readonly config: ChildSafeAdConfig = {
    tagForChildDirectedTreatment: true,
    tagForUnderAgeOfConsent: true,
    maxAdContentRating: 'G',
    testMode: true,
    minCooldownSeconds: 90, // Cooldown de pelo menos 90 segundos entre anúncios
  };

  /**
   * Verifica se o ambiente possui Capacitor nativo (Android AdMob)
   */
  public isNativeAndroid(): boolean {
    return typeof window !== 'undefined' && !!(window as unknown as { Capacitor?: { isNativePlatform: () => boolean } }).Capacitor?.isNativePlatform();
  }

  /**
   * Obtém a configuração de conformidade para o AdMob Families
   */
  public getAdMobRequestConfiguration() {
    return {
      maxAdContentRating: 'G',
      tagForChildDirectedTreatment: true,
      tagForUnderAgeOfConsent: true,
      testDeviceIdentifiers: ['TEST_DEVICE_EMULATOR'],
    };
  }

  /**
   * Verifica se é permitido exibir anúncio respeitando o tempo de descanso (cooldown)
   */
  public canShowAd(): boolean {
    const now = Date.now();
    const elapsedSeconds = (now - this.lastAdTimestamp) / 1000;
    return elapsedSeconds >= this.config.minCooldownSeconds;
  }

  /**
   * Registra a exibição de um anúncio para iniciar o cooldown
   */
  public recordAdImpression(): void {
    this.lastAdTimestamp = Date.now();
  }

  /**
   * Sorteia uma mensagem educativa e segura para exibição
   */
  public getRandomKidSafeAd(): KidSafeSponsoredMessage {
    const index = Math.floor(Math.random() * KID_SAFE_ADS.length);
    return KID_SAFE_ADS[index];
  }
}

export const adService = new AdService();
