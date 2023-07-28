import { useTranslation } from 'react-i18next';

const Games = ({ gameNames, gameFrameRates }) => {
  const { t } = useTranslation();

  return (
    <section className="game-grid-container">
      <h2 className="mb-4 text-2xl font-bold">{t('fps-performance')}</h2>
      <p className="mb-4 text-sm text-zinc-400">{t('fps-note')}</p>
      <div className="game-grid">
        {gameNames['en-US'].map((game, idx) => (
          <Game
            key={game.sys.id}
            game={game}
            fps={gameFrameRates['en-US'][idx] || '000'}
          />
        ))}
      </div>
    </section>
  );
};

export default Games;

const Game = ({ game, fps }) => {
  return (
    <div className="game-grid-box" key={game.sys.id}>
      <img
        className="aspect-square w-full object-cover"
        src={game.fields.image['en-US'].fields.file['en-US'].url}
        alt={game.fields.name['en-US']}
      />
      <span className="mt-2 block text-sm text-zinc-400">
        {game.fields.name['en-US']}
      </span>
      <span className="fps-text mt-1 block font-semibold">{fps} FPS</span>
    </div>
  );
};
