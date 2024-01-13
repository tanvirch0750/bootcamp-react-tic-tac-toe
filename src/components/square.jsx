/* eslint-disable react/prop-types */
function Square({ value, onSquareClick }) {
  return (
    <button
      className="text-3xl bg-gray-800 text-white font-semibold border-4 border-emerald-500 h-16 leading-9 w-full"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
