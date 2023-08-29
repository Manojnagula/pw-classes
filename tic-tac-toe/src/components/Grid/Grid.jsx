import { useCallback, useState } from "react";
import Card from "../Card/Card";
import {ToastContainer, toast} from 'react-toastify'
import "./Grid.css";
import 'react-toastify/dist/ReactToastify.css';
function isWinner(board,symbol){
  if(board[0]===board[1]&&board[1]===board[2]&&board[2]===symbol) return symbol;
  if(board[3]===board[4]&&board[4]===board[5]&&board[5]===symbol) return symbol;
  if(board[6]===board[7]&&board[7]===board[8]&&board[8]===symbol) return symbol;

  if(board[0]===board[3]&&board[3]===board[6]&&board[6]===symbol) return symbol;
  if(board[1]===board[4]&&board[4]===board[7]&&board[7]===symbol) return symbol;
  if(board[2]===board[5]&&board[5]===board[8]&&board[8]===symbol) return symbol;

  if(board[0]===board[4]&&board[4]===board[8]&&board[8]===symbol) return symbol;
  if(board[6]===board[4]&&board[4]===board[2]&&board[2]===symbol) return symbol;

  return null;
}

function Grid({ numberOfCards }) {
  const [turn, setTurn] = useState(true); //false --> X, true --> O;
  const [board,setBoard] = useState(Array(numberOfCards).fill(" "))
  const [winner, setWinner] = useState(null);



  const play = useCallback(function playCallback(index) {
    console.log("move played",index);
    if(turn==true){
      board[index]="O";
    }else{
      board[index]="X";
    }
    const win = isWinner(board, turn? "O":"X");

    if(win){
      setWinner(win);
      toast.success(`congratulations ${win} won the game.`)
    }
    setBoard([...board]);  
    setTurn(!turn);
  },[turn
  ]);

  function reset(){
    setBoard(Array(numberOfCards).fill(" "));
    setWinner(null);
    setTurn(null);
  }
  return (
    <>
      {winner && (
        <>
        <h1 className="turn-highlight">Winner is {winner}</h1>
        <><button className="reset" onClick={reset}>Click to reset</button></>
        <ToastContainer position="top-center" />
        </>
      )}
      <h1 className="turn-highlight">Current Turn: {turn ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((value, idx) => {
            return <Card onPlay={play} gameEnd={winner ? true : false}  player={value}  key={idx} index={idx} />;
          })}
      </div>
    </>
  );
}
export default Grid;