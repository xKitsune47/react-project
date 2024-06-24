// import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./PlayerList.css";

const defaultIcon = <i className="bi bi-person"></i>;

const players = [
  {
    pIcon: defaultIcon,
    pName: "Nomadiction",
    pWord: "familiar",
    turn: true,
  },
  {
    pIcon: defaultIcon,
    pName: "RowanTree",
    pWord: "entertain",
    turn: false,
  },
  {
    pIcon: defaultIcon,
    pName: "Ultralex",
    pWord: "archive",
    turn: false,
  },
  {
    pIcon: defaultIcon,
    pName: "Scupperly",
    pWord: "range",
    turn: false,
  },
];

export default function PlayerList() {
  return (
    <div className="player__list">
      {players.map((player) => (
        <Player player={player} />
      ))}
    </div>
  );
}

function Player(props) {
  const player = props.player;
  if (player.turn) {
    return (
      <p className="player__list--player player__list--active">
        {player.pIcon} {player.pName}: {player.pWord}
      </p>
    );
  }
  if (!player.turn) {
    return (
      <p className="player__list--player">
        {player.pIcon} {player.pName}: {player.pWord}
      </p>
    );
  }
}
