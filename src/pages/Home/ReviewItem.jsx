import { useTranslation } from 'react-i18next';

const ReviewItem = ({ review }) => {
  const { i18n } = useTranslation();

  const { fields } = review;

  const { name, content, rating, date, link } = fields;

  const lng = i18n.language;

  return (
    <a href={link['en-US']} target="_blank" rel="noreferrer">
      <article className="p-4 flex flex-col gap-2 bg-zinc-900 hover:bg-zinc-800 transition duration-400">
        <h3 className="font-heading text-lg">{name['en-US']}</h3>

        <div className="text-red-600 font-semibold">{rating['en-US']}/5</div>

        {content['en-US']
          .split(/\n/g)
          .filter((e) => e)
          .map((text) => (
            <p className="text-sm" key={text.slice(0, 32)}>
              {text}
            </p>
          ))}

        <p className="text-xs text-gray-400 capitalize">
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
