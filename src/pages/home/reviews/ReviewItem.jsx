import { useTranslation } from 'react-i18next';

import StarRating from '@/components/ui/StarRating';

import { formatDate, splitLineBreaks } from '@/utils';

import { LNG } from '@/constants';

const ReviewItem = ({ review }) => {
  const { i18n } = useTranslation();

  const { fields } = review;

  const { name, content, rating, date, link } = fields;

  const lng = i18n.language;

  return (
    <a
      href={link[LNG.en]}
      target="_blank"
      rel="noreferrer"
      className="block h-full"
    >
      <article className="duration-400 flex h-full flex-col gap-4 bg-zinc-900 p-4 transition hover:bg-zinc-800">
        <h3 className="font-heading text-lg">{name[LNG.en]}</h3>

        <div className="flex items-center gap-2">
          <StarRating rating={rating[LNG.en]} />
          <span className="text-sm text-zinc-400">{rating[LNG.en]}/5</span>
        </div>

        <div className="flex flex-col gap-2">
          {splitLineBreaks(content[LNG.en], (text, key) => (
            <p className="text-sm text-zinc-400" key={key}>
              {text}
            </p>
          ))}
        </div>

        <p className="mt-auto text-xs capitalize text-zinc-500">
          {formatDate({
            date: new Date(date[LNG.en]),
            locale: lng,
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </article>
    </a>
  );
};

export default ReviewItem;
