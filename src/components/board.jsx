import { useState } from 'react';
import Square from './square';
import { calculateWinner, isDraw } from '../utils/calculateWinner';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw(squares)) {
    status = 'Draw - No Winner';
  } else {
    status = `Next Player - ${xIsNext ? 'X' : 'O'}`;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares) || isDraw(squares)) return;

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXisNext(!xIsNext);
  }

  return (
    <div className="h-full flex items-center justify-center w-[700px]">
      <div className="flex gap-5 w-full justify-center">
        <div className="border-2 border-emerald-600 bg-gray-700 w-full p-4">
          <div>
            <h2 className="text-center font-semibold text-xl text-emerald-500 uppercase mb-2">
              Game board
            </h2>
            <p className="text-center font-semibold text-lg text-white uppercase mb-6">
              {status}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
          </div>
        </div>
        <div className="border-2 border-emerald-600 bg-gray-700 w-full p-4">
          <h2 className="text-center font-semibold text-xl text-emerald-500 uppercase">
            Tracking board
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Board;
