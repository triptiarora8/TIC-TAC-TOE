import React, { useState } from 'react'

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [editName, setEditName] = useState(false);


    function handleEdit() {
        setEditName((editing) => !editing);
    }

    function handleChangePlayerName(event) {
        setPlayerName(event.target.value);
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            setEditName(false);
        }
    }
    let editPlayerName = <span className="player-name">{playerName}</span>
    // let btnCaption = "Edit";

    if (editName) {
        editPlayerName = <input type="text" value={playerName} onChange={handleChangePlayerName} onKeyDown={handleKeyPress} ></input>
        // btnCaption = "Save";
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{editName ? 'Save' : 'Edit'}</button>
        </li>
    )
}   
