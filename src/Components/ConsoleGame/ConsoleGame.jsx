import React from "react";
import "./ConsoleGame.css";

export default function ConsoleGame({ name, manufacturer, image }) {
  return (
        <figure className="game">
          <img
            src={image}
            alt={`${name} ${manufacturer}`}
            className="game_image"
          />
          <figcaption className="game_info">
            {name} by <strong>{manufacturer}</strong>
          </figcaption>
        </figure>
  );
}
