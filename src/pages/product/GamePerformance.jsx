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
    <li>
      <figure className="group relative">
        <img
          className="aspect-square w-full object-cover"
          src={`${getImageSrc(image['en-US'])}?fm=webp&w=256&h=256`}
          alt={name['en-US']}
        />
        <figcaption className="absolute inset-0 hidden bg-black/80 p-4 text-xs group-hover:block">
          <p>{image['en-US'].fields.description['en-US']}</p>
        </figcaption>
      </figure>
      <h3 className="mt-2 text-sm text-zinc-400">{name['en-US']}</h3>
      <p className="mt-1 font-semibold">{fps} FPS</p>
    </li>
  );
};
