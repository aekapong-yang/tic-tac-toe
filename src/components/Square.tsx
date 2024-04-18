import "../Style.css";

type Props = {
  value: string;
  onSquareClick: () => void;
};
const Square: React.FC<Props> = ({ value, onSquareClick }) => {
  const color: string = value === "X" ? "x" : "o";

  return (
    <button className={`square ${color}`} onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
