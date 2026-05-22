import React from 'react'

export default function GameBoard({ onSelectSquare, board, winningCombination }) {
  const winningSquares = winningCombination
    ? winningCombination.map(s => `${s.row}-${s.column}`)
    : [];

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => {
              const isWinning = winningSquares.includes(`${rowIndex}-${colIndex}`);
              return (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}
                    className={playerSymbol ? (isWinning ? 'winning' : 'filled') : ''}
                  >
                    {playerSymbol}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}
