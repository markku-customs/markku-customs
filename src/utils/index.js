import { LNG } from '@/constants';

export const splitLineBreaks = (paragraph, callback) => {
  return paragraph
    .split(/\n/g)
    .filter((e) => e.trim().length > 0)
    .map((text) => callback(text, text.replace(/\s/g, '').slice(0, 32)));
};

export const getImageSrc = (image, lng = LNG.en) => {
  return `https:${image.fields.file[lng].url}`;
};

export const getPlural = (number, singular, plural, inclusive = true) => {
  if (inclusive) {
    return `${number} ${number === 1 ? singular : plural}`;
  }

  return number === 1 ? singular : plural;
};

export const formatPrice = ({
  price,
  locale = LNG.en,
  maximumFractionDigits = 0,
  ...options
}) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits,
    ...options,
  }).format(price);
};

export const formatUnit = ({ number, locale = LNG.en, ...options }) => {
  return new Intl.NumberFormat(locale, {
    style: 'unit',
    ...options,
  }).format(number);
};

export const formatDate = ({ date, locale = LNG.en, ...options }) => {
  return new Intl.DateTimeFormat(locale, { ...options }).format(date);
};

export const formatPercentage = ({ decimal, locale = LNG.en, ...options }) => {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    maximumFractionDigits: 0,
    ...options,
  }).format(decimal);
};

export const getPercentageDifference = (initial, final) => {
  return (final - initial) / initial;
};
