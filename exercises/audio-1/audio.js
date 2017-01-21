class Audio {
  constructor () {
    this.context = new AudioContext();
  }

  play (hz, ms) {
    ms = ms  || 250;
    const audio = this.context.createOscillator();
    audio.frequency.value = hz;
    audio.connect(this.context.destination);
    audio.start();
    audio.stop(this.context.currentTime + ms / 1000);
  }


  C0 (secs) {
  	this.play(16.35, secs);
  }

  C_0 (secs) {
  	this.play(17.32, secs);
  }

  Db0 (secs) {
  	this.play(17.32, secs);
  }

  D0 (secs) {
  	this.play(18.35, secs);
  }

  D_0 (secs) {
  	this.play(19.45, secs);
  }

  Eb0 (secs) {
  	this.play(19.45, secs);
  }

  E0 (secs) {
  	this.play(20.60, secs);
  }

  F0 (secs) {
  	this.play(21.83, secs);
  }

  F_0 (secs) {
  	this.play(23.12, secs);
  }

  Gb0 (secs) {
  	this.play(23.12, secs);
  }

  G0 (secs) {
  	this.play(24.50, secs);
  }

  G_0 (secs) {
  	this.play(25.96, secs);
  }

  Ab0 (secs) {
  	this.play(25.96, secs);
  }

  A0 (secs) {
  	this.play(27.50, secs);
  }

  A_0 (secs) {
  	this.play(29.14, secs);
  }

  Bb0 (secs) {
  	this.play(29.14, secs);
  }

  B0 (secs) {
  	this.play(30.87, secs);
  }

  C1 (secs) {
  	this.play(32.70, secs);
  }

  C_1 (secs) {
  	this.play(34.65, secs);
  }

  Db1 (secs) {
  	this.play(34.65, secs);
  }

  D1 (secs) {
  	this.play(36.71, secs);
  }

  D_1 (secs) {
  	this.play(38.89, secs);
  }

  Eb1 (secs) {
  	this.play(38.89, secs);
  }

  E1 (secs) {
  	this.play(41.20, secs);
  }

  F1 (secs) {
  	this.play(43.65, secs);
  }

  F_1 (secs) {
  	this.play(46.25, secs);
  }

  Gb1 (secs) {
  	this.play(46.25, secs);
  }

  G1 (secs) {
  	this.play(49.00, secs);
  }

  G_1 (secs) {
  	this.play(51.91, secs);
  }

  Ab1 (secs) {
  	this.play(51.91, secs);
  }

  A1 (secs) {
  	this.play(55.00, secs);
  }

  A_1 (secs) {
  	this.play(58.27, secs);
  }

  Bb1 (secs) {
  	this.play(58.27, secs);
  }

  B1 (secs) {
  	this.play(61.74, secs);
  }

  C2 (secs) {
  	this.play(65.41, secs);
  }

  C_2 (secs) {
  	this.play(69.30, secs);
  }

  Db2 (secs) {
  	this.play(69.30, secs);
  }

  D2 (secs) {
  	this.play(73.42, secs);
  }

  D_2 (secs) {
  	this.play(77.78, secs);
  }

  Eb2 (secs) {
  	this.play(77.78, secs);
  }

  E2 (secs) {
  	this.play(82.41, secs);
  }

  F2 (secs) {
  	this.play(87.31, secs);
  }

  F_2 (secs) {
  	this.play(92.50, secs);
  }

  Gb2 (secs) {
  	this.play(92.50, secs);
  }

  G2 (secs) {
  	this.play(98.00, secs);
  }

  G_2 (secs) {
  	this.play(103.83, secs);
  }

  Ab2 (secs) {
  	this.play(103.83, secs);
  }

  A2 (secs) {
  	this.play(110.00, secs);
  }

  A_2 (secs) {
  	this.play(116.54, secs);
  }

  Bb2 (secs) {
  	this.play(116.54, secs);
  }

  B2 (secs) {
  	this.play(123.47, secs);
  }

  C3 (secs) {
  	this.play(130.81, secs);
  }

  C_3 (secs) {
  	this.play(138.59, secs);
  }

  Db3 (secs) {
  	this.play(138.59, secs);
  }

  D3 (secs) {
  	this.play(146.83, secs);
  }

  D_3 (secs) {
  	this.play(155.56, secs);
  }

  Eb3 (secs) {
  	this.play(155.56, secs);
  }

  E3 (secs) {
  	this.play(164.81, secs);
  }

  F3 (secs) {
  	this.play(174.61, secs);
  }

  F_3 (secs) {
  	this.play(185.00, secs);
  }

  Gb3 (secs) {
  	this.play(185.00, secs);
  }

  G3 (secs) {
  	this.play(196.00, secs);
  }

  G_3 (secs) {
  	this.play(207.65, secs);
  }

  Ab3 (secs) {
  	this.play(207.65, secs);
  }

  A3 (secs) {
  	this.play(220.00, secs);
  }

  A_3 (secs) {
  	this.play(233.08, secs);
  }

  Bb3 (secs) {
  	this.play(233.08, secs);
  }

  B3 (secs) {
  	this.play(246.94, secs);
  }

  C4 (secs) {
  	this.play(261.63, secs);
  }

  C_4 (secs) {
  	this.play(277.18, secs);
  }

  Db4 (secs) {
  	this.play(277.18, secs);
  }

  D4 (secs) {
  	this.play(293.66, secs);
  }

  D_4 (secs) {
  	this.play(311.13, secs);
  }

  Eb4 (secs) {
  	this.play(311.13, secs);
  }

  E4 (secs) {
  	this.play(329.63, secs);
  }

  F4 (secs) {
  	this.play(349.23, secs);
  }

  F_4 (secs) {
  	this.play(369.99, secs);
  }

  Gb4 (secs) {
  	this.play(369.99, secs);
  }

  G4 (secs) {
  	this.play(392.00, secs);
  }

  G_4 (secs) {
  	this.play(415.30, secs);
  }

  Ab4 (secs) {
  	this.play(415.30, secs);
  }

  A4 (secs) {
  	this.play(440.00, secs);
  }

  A_4 (secs) {
  	this.play(466.16, secs);
  }

  Bb4 (secs) {
  	this.play(466.16, secs);
  }

  B4 (secs) {
  	this.play(493.88, secs);
  }

  C5 (secs) {
  	this.play(523.25, secs);
  }

  C_5 (secs) {
  	this.play(554.37, secs);
  }

  Db5 (secs) {
  	this.play(554.37, secs);
  }

  D5 (secs) {
  	this.play(587.33, secs);
  }

  D_5 (secs) {
  	this.play(622.25, secs);
  }

  Eb5 (secs) {
  	this.play(622.25, secs);
  }

  E5 (secs) {
  	this.play(659.25, secs);
  }

  F5 (secs) {
  	this.play(698.46, secs);
  }

  F_5 (secs) {
  	this.play(739.99, secs);
  }

  Gb5 (secs) {
  	this.play(739.99, secs);
  }

  G5 (secs) {
  	this.play(783.99, secs);
  }

  G_5 (secs) {
  	this.play(830.61, secs);
  }

  Ab5 (secs) {
  	this.play(830.61, secs);
  }

  A5 (secs) {
  	this.play(880.00, secs);
  }

  A_5 (secs) {
  	this.play(932.33, secs);
  }

  Bb5 (secs) {
  	this.play(932.33, secs);
  }

  B5 (secs) {
  	this.play(987.77, secs);
  }

  C6 (secs) {
  	this.play(1046.50, secs);
  }

  C_6 (secs) {
  	this.play(1108.73, secs);
  }

  Db6 (secs) {
  	this.play(1108.73, secs);
  }

  D6 (secs) {
  	this.play(1174.66, secs);
  }

  D_6 (secs) {
  	this.play(1244.51, secs);
  }

  Eb6 (secs) {
  	this.play(1244.51, secs);
  }

  E6 (secs) {
  	this.play(1318.51, secs);
  }

  F6 (secs) {
  	this.play(1396.91, secs);
  }

  F_6 (secs) {
  	this.play(1479.98, secs);
  }

  Gb6 (secs) {
  	this.play(1479.98, secs);
  }

  G6 (secs) {
  	this.play(1567.98, secs);
  }

  G_6 (secs) {
  	this.play(1661.22, secs);
  }

  Ab6 (secs) {
  	this.play(1661.22, secs);
  }

  A6 (secs) {
  	this.play(1760.00, secs);
  }

  A_6 (secs) {
  	this.play(1864.66, secs);
  }

  Bb6 (secs) {
  	this.play(1864.66, secs);
  }

  B6 (secs) {
  	this.play(1975.53, secs);
  }

  C7 (secs) {
  	this.play(2093.00, secs);
  }

  C_7 (secs) {
  	this.play(2217.46, secs);
  }

  Db7 (secs) {
  	this.play(2217.46, secs);
  }

  D7 (secs) {
  	this.play(2349.32, secs);
  }

  D_7 (secs) {
  	this.play(2489.02, secs);
  }

  Eb7 (secs) {
  	this.play(2489.02, secs);
  }

  E7 (secs) {
  	this.play(2637.02, secs);
  }

  F7 (secs) {
  	this.play(2793.83, secs);
  }

  F_7 (secs) {
  	this.play(2959.96, secs);
  }

  Gb7 (secs) {
  	this.play(2959.96, secs);
  }

  G7 (secs) {
  	this.play(3135.96, secs);
  }

  G_7 (secs) {
  	this.play(3322.44, secs);
  }

  Ab7 (secs) {
  	this.play(3322.44, secs);
  }

  A7 (secs) {
  	this.play(3520.00, secs);
  }

  A_7 (secs) {
  	this.play(3729.31, secs);
  }

  Bb7 (secs) {
  	this.play(3729.31, secs);
  }

  B7 (secs) {
  	this.play(3951.07, secs);
  }

  C8 (secs) {
  	this.play(4186.01, secs);
  }

  C_8 (secs) {
  	this.play(4434.92, secs);
  }

  Db8 (secs) {
  	this.play(4434.92, secs);
  }

  D8 (secs) {
  	this.play(4698.63, secs);
  }

  D_8 (secs) {
  	this.play(4978.03, secs);
  }

  Eb8 (secs) {
  	this.play(4978.03, secs);
  }

  E8 (secs) {
  	this.play(5274.04, secs);
  }

  F8 (secs) {
  	this.play(5587.65, secs);
  }

  F_8 (secs) {
  	this.play(5919.91, secs);
  }

  Gb8 (secs) {
  	this.play(5919.91, secs);
  }

  G8 (secs) {
  	this.play(6271.93, secs);
  }

  G_8 (secs) {
  	this.play(6644.88, secs);
  }

  Ab8 (secs) {
  	this.play(6644.88, secs);
  }

  A8 (secs) {
  	this.play(7040.00, secs);
  }

  A_8 (secs) {
  	this.play(7458.62, secs);
  }

  Bb8 (secs) {
  	this.play(7458.62, secs);
  }

  B8 (secs) {
  	this.play(7902.13, secs);
  }
}

window.audio = new Audio;
