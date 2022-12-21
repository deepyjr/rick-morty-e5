import React from 'react'
import './Cards.css'
import { Character } from '../../api/characters'

interface Props {
  content: Character;
}

const Card: React.FC<Props> = ({ content }) => {
  return (
    <div className="container-card">
        <div className="img-card">
            <img src={content.image} alt="" />
        </div>
        <h3>{content.name}</h3>
        <p>Specie : Human</p>
        <p>Last location  : Citadel of Ricks</p>
    </div>
  )
};

export default Card;
