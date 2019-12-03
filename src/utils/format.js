const MONTH_NAMES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

export const formatMonth = (month, year) => `${MONTH_NAMES[month]} ${year}`;
export const formatNumber = (value, digits = 2) => value.toLocaleString(
  'es-AR',
  { minimumIntegerDigits: digits },
);
export const inflect = (number, singular, plural) => (number === 1 ? singular : plural);
