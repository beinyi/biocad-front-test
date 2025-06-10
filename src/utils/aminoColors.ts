const CYSTEINE_COLOR = "#feea00";
const HYDROPHOBIC_COLOR = "#67e4a6";
const GLYCINE_COLOR = "#67e4a6";
const NEGATIVE_COLOR = "#fd9cac";
const POSIRIVE_COLOR = "#bc99ff";
const POLAR_COLOR = "#80bfff";

export const aminoColors: Record<string, string> = {
  // Положительно заряженные
  K: POSIRIVE_COLOR,
  R: POSIRIVE_COLOR,

  // Отрицательно заряженные
  D: NEGATIVE_COLOR,
  E: NEGATIVE_COLOR,

  // Полярные
  S: POLAR_COLOR,
  T: POLAR_COLOR,
  H: POLAR_COLOR,
  N: POLAR_COLOR,
  Q: POLAR_COLOR,

  // Гидрофобы
  A: HYDROPHOBIC_COLOR,
  I: HYDROPHOBIC_COLOR,
  L: HYDROPHOBIC_COLOR,
  M: HYDROPHOBIC_COLOR,
  F: HYDROPHOBIC_COLOR,
  W: HYDROPHOBIC_COLOR,
  Y: HYDROPHOBIC_COLOR,
  V: HYDROPHOBIC_COLOR,
  P: HYDROPHOBIC_COLOR,

  // Цистеин
  C: CYSTEINE_COLOR,

  // Глицин
  G: GLYCINE_COLOR,
};
