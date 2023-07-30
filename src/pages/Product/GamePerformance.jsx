import { useTranslation } from 'react-i18next';

import { getImageSrc } from '@/utils';

const GamePerformance = ({ gameNames, gameFrameRates }) => {
  const { t } = useTranslation();

  const min = Math.min(
    gameNames['en-US'].length,
    gameFrameRates['en-US'].length
  );

  return (
    <section className="game-grid-container">
      <h2 className="mb-4 text-2xl font-bold">{t('fps-performance')}</h2>
      <p className="mb-4 text-sm text-zinc-400">{t('fps-note')}</p>
      <div className="game-grid">
        {gameNames['en-US'].slice(0, min).map((game, idx) => (
          <Game
            key={game.sys.id}
            game={game}
            fps={gameFrameRates['en-US'][idx]}
          />
        ))}
      </div>
    </section>
  );
};

export default GamePerformance;

const Game = ({ game, fps }) => {
  const { image, name } = game.fields;

  return (
    <div className="game-grid-box">
      <img
        className="aspect-square w-full object-cover"
        src={`${getImageSrc(image['en-US'])}?fm=webp&w=256&h=256`}
        alt={name['en-US']}
      />
      <span className="mt-2 block text-sm text-zinc-400">{name['en-US']}</span>
      <span className="fps-text mt-1 block font-semibold">{fps} FPS</span>
    </div>
  );
};
