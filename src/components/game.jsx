import { useState } from 'react';
import Board from './board';
import Tracking from './tracking';

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXisNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setXisNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory([...history, nextSquares]);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setXisNext(move % 2 === 0);
  }

  return (
    <div className="h-full flex items-center justify-center w-[750px]">
      <div className="flex gap-5 w-full justify-center items-start">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <Tracking history={history} onJump={jumpTo} />
      </div>
    </div>
  );
}

export default Game;
