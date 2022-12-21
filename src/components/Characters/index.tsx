import React from "react";
import { Character } from "../../api/characters";
import "./index.css"
interface Props {
  character: Character;
}

const Characters: React.FC<Props> = ({ character }) => {
  return (
    <div className="container-card">
      <img
        src={character.image}
        alt={character.name}
        style={{ maxWidth: "100%" }}
      />
      <div className="character-info">
        <h2>{character.name}</h2>
        <p>
          <strong>Species:</strong> {character.species}
        </p>
        <p>
          <strong>Status:</strong> {character.status}
        </p>
        <p>
          <strong>Location:</strong> {character.location.name}
        </p>
      </div>
    </div>
  );
};

export default Characters;
