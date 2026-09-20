// Web Audio API procedural sound engine for Pop!
class SoundManager {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;
  public speechEnabled: boolean = true;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Sweet tactile pop
  playPop(pitchMultiplier = 1) {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const now = this.ctx.currentTime;
    const startFreq = 420 * pitchMultiplier;
    const endFreq = 880 * pitchMultiplier;

    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.12);
  }

  // Dragon breathing fire (warm roar & sparkling flame)
  playFireWhoosh() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // Pink noise buffer for flame crackle
    const bufferSize = this.ctx.sampleRate * 1.2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      data[i] = (b0 + b1 + b2) * 0.4;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    // Bandpass filter to sculpt fiery breath
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, now);
    filter.frequency.exponentialRampToValueAtTime(1400, now + 0.4);
    filter.frequency.exponentialRampToValueAtTime(200, now + 1.2);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.01, now);
    noiseGain.gain.linearRampToValueAtTime(0.35, now + 0.3);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    // Warm undertone oscillator (dragon belly roar)
    const lowOsc = this.ctx.createOscillator();
    lowOsc.type = 'sawtooth';
    lowOsc.frequency.setValueAtTime(90, now);
    lowOsc.frequency.linearRampToValueAtTime(140, now + 0.3);
    lowOsc.frequency.exponentialRampToValueAtTime(60, now + 1.1);

    const lowFilter = this.ctx.createBiquadFilter();
    lowFilter.type = 'lowpass';
    lowFilter.frequency.value = 180;

    const lowGain = this.ctx.createGain();
    lowGain.gain.setValueAtTime(0.2, now);
    lowGain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    lowOsc.connect(lowFilter);
    lowFilter.connect(lowGain);
    lowGain.connect(this.ctx.destination);

    noise.start(now);
    noise.stop(now + 1.2);
    lowOsc.start(now);
    lowOsc.stop(now + 1.1);
  }

  // River rushing & babbling water
  playWaterRush() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const dur = 1.6;

    // Bubbling water frequency modulation
    const carrier = this.ctx.createOscillator();
    const modulator = this.ctx.createOscillator();
    const modGain = this.ctx.createGain();
    const mainGain = this.ctx.createGain();

    carrier.type = 'sine';
    carrier.frequency.setValueAtTime(520, now);
    carrier.frequency.exponentialRampToValueAtTime(320, now + dur);

    modulator.type = 'sine';
    modulator.frequency.setValueAtTime(16, now);
    modulator.frequency.linearRampToValueAtTime(28, now + dur);

    modGain.gain.setValueAtTime(120, now);
    modGain.gain.exponentialRampToValueAtTime(40, now + dur);

    modulator.connect(carrier.frequency);

    mainGain.gain.setValueAtTime(0.01, now);
    mainGain.gain.linearRampToValueAtTime(0.22, now + 0.2);
    mainGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    carrier.connect(mainGain);
    mainGain.connect(this.ctx.destination);

    carrier.start(now);
    carrier.stop(now + dur);
    modulator.start(now);
    modulator.stop(now + dur);

    // Water droplet blips
    [0.1, 0.35, 0.6, 0.85, 1.1].forEach((delay, idx) => {
      const dropOsc = this.ctx!.createOscillator();
      const dropGain = this.ctx!.createGain();
      dropOsc.type = 'sine';
      const f = 800 + idx * 120 + Math.random() * 80;
      dropOsc.frequency.setValueAtTime(f, now + delay);
      dropOsc.frequency.exponentialRampToValueAtTime(f * 1.5, now + delay + 0.08);

      dropGain.gain.setValueAtTime(0.12, now + delay);
      dropGain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.1);

      dropOsc.connect(dropGain);
      dropGain.connect(this.ctx!.destination);

      dropOsc.start(now + delay);
      dropOsc.stop(now + delay + 0.1);
    });
  }

  // Fruit falling and plop
  playFruitPlop() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // Branch rustle
    const rustleOsc = this.ctx.createOscillator();
    const rustleGain = this.ctx.createGain();
    rustleOsc.type = 'triangle';
    rustleOsc.frequency.setValueAtTime(320, now);
    rustleOsc.frequency.exponentialRampToValueAtTime(120, now + 0.2);
    rustleGain.gain.setValueAtTime(0.1, now);
    rustleGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    rustleOsc.connect(rustleGain);
    rustleGain.connect(this.ctx.destination);
    rustleOsc.start(now);
    rustleOsc.stop(now + 0.2);

    // Bouncy "PLOP!" landing at +0.35s
    const landTime = now + 0.35;
    const plopOsc = this.ctx.createOscillator();
    const plopGain = this.ctx.createGain();

    plopOsc.type = 'sine';
    plopOsc.frequency.setValueAtTime(260, landTime);
    plopOsc.frequency.exponentialRampToValueAtTime(80, landTime + 0.15);

    plopGain.gain.setValueAtTime(0.35, landTime);
    plopGain.gain.exponentialRampToValueAtTime(0.001, landTime + 0.2);

    plopOsc.connect(plopGain);
    plopGain.connect(this.ctx.destination);

    plopOsc.start(landTime);
    plopOsc.stop(landTime + 0.22);
  }

  // Play resonance bell chime
  playBell() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const freqs = [880, 1760, 2640]; // A5 with crisp harmonics
    freqs.forEach((f, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);

      gain.gain.setValueAtTime(0.2 / (i + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(now);
      osc.stop(now + 1.3);
    });
  }

  // Magical sparkles chime
  playMagicChime() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98]; // C E G C E G

    notes.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      const startTime = now + idx * 0.08;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.5);
    });
  }

  // Sparkle chime alias
  playSparkle() {
    this.playMagicChime();
  }

  // Creature chirp / cute sound
  playCreatureChirp() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(1600, now + 0.07);
    osc.frequency.exponentialRampToValueAtTime(1100, now + 0.14);
    osc.frequency.exponentialRampToValueAtTime(1800, now + 0.22);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // Victory fanfare for discovering secrets or completing chapter
  playFanfare() {
    if (!this.enabled) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const chords = [
      { t: 0, f: 523.25 },
      { t: 0.12, f: 659.25 },
      { t: 0.24, f: 783.99 },
      { t: 0.38, f: 1046.50 },
    ];

    chords.forEach(({ t, f }) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + t);

      gain.gain.setValueAtTime(0.2, now + t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + t + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(now + t);
      osc.stop(now + t + 0.65);
    });
  }

  // Button choice click
  playChoiceClick() {
    this.playPop(1.4);
  }

  // Read text aloud using SpeechSynthesis
  speakStoryText(
    text: string, 
    onStart?: () => void, 
    onEnd?: () => void,
    onBoundary?: (charIndex: number) => void,
    langCode: string = 'pt-BR'
  ) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    this.stopSpeaking();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    utterance.rate = 0.92; // slightly slower, clear for children
    utterance.pitch = 1.12; // slightly warmer, engaging tone

    // Try to find a good voice matching the selected language
    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(v => v.lang.toLowerCase().includes(langCode.toLowerCase().replace('_', '-')));
    if (targetVoice) {
      utterance.voice = targetVoice;
    }

    utterance.onstart = () => {
      onStart?.();
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      onEnd?.();
    };

    utterance.onerror = () => {
      this.currentUtterance = null;
      onEnd?.();
    };

    utterance.onboundary = (e) => {
      if (e.name === 'word') {
        onBoundary?.(e.charIndex);
      }
    };

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  stopSpeaking() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
  }

  isSpeaking(): boolean {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      return window.speechSynthesis.speaking;
    }
    return false;
  }
}

export const soundManager = new SoundManager();
