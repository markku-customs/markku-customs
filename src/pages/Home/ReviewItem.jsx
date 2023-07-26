import { useTranslation } from 'react-i18next';

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
      className="mr-4 block h-full"
    >
      <article className="duration-400 flex h-full flex-col gap-4 bg-zinc-900 p-4 transition hover:bg-zinc-800">
        <h3 className="font-heading text-lg">{name['en-US']}</h3>

        <div className="flex gap-1">
          {[...Array(rating['en-US']).keys()].map((_) => (
            <img key={_} src="/star-red.svg" alt="" className="h-4 w-4" />
          ))}
          {[...Array(5 - rating['en-US']).keys()].map((_) => (
            <img key={_} src="/star-gray.svg" alt="" className="h-4 w-4" />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {content['en-US']
            .split(/\n/g)
            .filter((e) => e)
            .map((text) => (
              <p className="text-sm text-zinc-200" key={text.slice(0, 32)}>
                {text}
              </p>
            ))}
        </div>

        <p className="mt-auto text-xs capitalize text-zinc-400">
          {new Intl.DateTimeFormat(lng, {
            month: 'long',
            year: 'numeric',
          }).format(new Date(date['en-US']))}
        </p>
      </article>
    </a>
  );
};

export default ReviewItem;
