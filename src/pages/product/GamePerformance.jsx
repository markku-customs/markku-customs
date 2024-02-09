import { useTranslation } from 'react-i18next';

import { getImageSrc } from '@/utils';

const GamePerformance = ({ gameNames, gameFrameRates }) => {
  const { t } = useTranslation();

  const min = Math.min(
    gameNames['en-US'].length,
    gameFrameRates['en-US'].length
  );

  return (
    <section className="game-performance-container">
      <h2 className="mb-4 text-2xl font-semibold">{t('fps-performance')}</h2>
      <p className="mb-4 text-sm text-zinc-400">{t('fps-note')}</p>
      <ul className="game-grid">
        {gameNames['en-US'].slice(0, min).map((game, idx) => (
          <Game
            key={game.sys.id}
            game={game}
            fps={gameFrameRates['en-US'][idx]}
          />
        ))}
      </ul>
    </section>
  );
};

export default GamePerformance;

const Game = ({ game, fps }) => {
  const { image, name } = game.fields;

  return (
    <li className="flex flex-col">
      <figure className="group relative">
        <img
          className="aspect-square w-full object-cover"
          src={`${getImageSrc(image['en-US'])}?fm=webp&w=192&h=192`}
          alt={name['en-US']}
          width={192}
          height={192}
          loading="lazy"
        />
        {image['en-US'].fields.description['en-US'] && (
          <figcaption className="transition-200 absolute inset-0 bg-black/80 p-4 text-xs opacity-0 transition group-hover:opacity-100">
            <p>{image['en-US'].fields.description['en-US']}</p>
          </figcaption>
        )}
      </figure>
      <h3 className="mb-1 mt-2 text-sm text-zinc-400">{name['en-US']}</h3>
      <p className="mt-auto font-semibold">{fps} FPS</p>
    </li>
  );
};
