import { useState } from "react";

function Board (){
    const [square, setSquares] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer]  = useState<"X" | "0">(
        Math.round(Math.random() * 1) === 1 ? "X" : "0"
    );

    const [winner, setWinner] = useState(null)
return (

    <div>
        <p>Hey {currentPlayer}, its your turn</p>
        
        This is a board</div>
)
}
export default Board