import { useTranslation } from 'react-i18next';

import StarRating from '@/components/ui/StarRating';

import { formatDate, splitLineBreaks } from '@/utils';

const ReviewItem = ({ review }) => {
  const { i18n } = useTranslation();

  const { fields } = review;

  const { name, content, rating, date, link } = fields;

  const lng = i18n.language;

  return (
    <a
      href={link['en-US']}
      target="_blank"
      rel="noreferrer"
      className="block h-full"
    >
      <article className="duration-400 flex h-full flex-col gap-4 bg-zinc-900 p-4 transition hover:bg-zinc-800">
        <h3 className="font-heading text-lg">{name['en-US']}</h3>

        <div className="flex items-center gap-2">
          <StarRating rating={rating['en-US']} />
          <span className="text-sm text-zinc-400">{rating['en-US']}/5</span>
        </div>

        <div className="flex flex-col gap-2">
          {splitLineBreaks(content['en-US'], (text, key) => (
            <p className="text-sm text-zinc-400" key={key}>
              {text}
            </p>
          ))}
        </div>

        <p className="mt-auto text-xs capitalize text-zinc-500">
          {formatDate(
            new Date(date['en-US']),
            {
              month: 'long',
              year: 'numeric',
            },
            lng
          )}
        </p>
      </article>
    </a>
  );
};

export default ReviewItem;
