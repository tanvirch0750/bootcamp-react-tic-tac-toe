/* eslint-disable react/prop-types */
function Tracking({ history, onJump }) {
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move - ${move}`;
    } else {
      description = `No move yet`;
    }

    return (
      <li
        key={move}
        className="bg-gray-800 py-1 px-2 text-emerald-500"
        onClick={() => onJump(move)}
      >
        <button>{description}</button>
      </li>
    );
  });

  return (
    <div className="border-2 border-emerald-600 bg-gray-700 w-full p-4">
      <h2 className="text-center font-semibold text-xl text-emerald-500 uppercase mb-4">
        Tracking board
      </h2>
      <ol className="flex flex-col gap-2">{moves}</ol>
    </div>
  );
}

export default Tracking;
