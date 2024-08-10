import React from 'react'

export default function GameOver({winner, selectRestart}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>X won!</p>}
      {!winner && <p>OH NO, It's a draw!</p>}
      <p>
        <button onClick={selectRestart}>Rematch!</button>
      </p>
    </div>
  );
}
