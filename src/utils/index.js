export const splitLineBreaks = (paragraph, callback) => {
  return paragraph
    .split(/\n/g)
    .filter((e) => e.trim().length > 0)
    .map((text) => callback(text, text.replace(/\s/g, '').slice(0, 32)));
};

export const getImageSrc = (image, lang = 'en-US') => {
  return `https:${image.fields.file[lang].url}`;
};
