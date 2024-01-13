import Board from './components/board';

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div>
        <h1 className="text-center text-4xl text-emerald-500 uppercase mb-8 font-bold">
          Tic tac toe game
        </h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
