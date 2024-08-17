export const splitLineBreaks = (paragraph, callback) => {
  return paragraph
    .split(/\n/g)
    .filter((e) => e.trim().length > 0)
    .map((text) => callback(text, text.replace(/\s/g, '').slice(0, 32)));
};

export const getImageSrc = (image, lang = 'en-US') => {
  return `https:${image.fields.file[lang].url}`;
};

export const getPlural = (number, singular, plural, inclusive = true) => {
  if (inclusive) {
    return `${number} ${number === 1 ? singular : plural}`;
  }

  return number === 1 ? singular : plural;
};

export const formatPrice = (price, locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatUnit = (number, options, locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'unit',
    ...options,
  }).format(number);
};

export const formatDate = (date, options, locale = 'en-US') => {
  return new Intl.DateTimeFormat(locale, options).format(date);
};

export const getPercentageDifference = (initial, final, decimals = 0) => {
  return (((final - initial) / initial) * 100).toFixed(decimals);
};
