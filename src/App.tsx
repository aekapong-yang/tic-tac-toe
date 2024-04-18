import { useState } from "react";
import Square from "./components/Square";
import "./Style.css";

const App: React.FC = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<string[]>(Array(9));
  
  const handleClick = (idx: number) => {
    if (squares[idx] || calculateWinner(squares)) {
      return;
    }

    const nextSquares: string[] = squares.slice();
    if (xIsNext) {
      nextSquares[idx] = "X";
    } else {
      nextSquares[idx] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner: string = calculateWinner(squares);
  const nextPlayer: string = xIsNext ? "X" : "O";
  let status: string;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${nextPlayer}`;
  }

  const reset = () => {
    setSquares([]);
    setXIsNext(true);
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <h2>{status}</h2>
      <div className={`${winner ? "restart" : "restart-none"}`}>
        <h1>{status}</h1>
        <button onClick={reset} className="btn-restart">RESTART</button>
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

function calculateWinner(squares: string[]): string {
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const element of lines) {
    const [a, b, c] = element;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return "";
}

export default App;
