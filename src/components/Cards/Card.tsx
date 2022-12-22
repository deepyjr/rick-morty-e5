import React from 'react'
import './Cards.css'
import { Character } from '../../api/characters'
import { useNavigate } from 'react-router-dom';


interface Props {
  content: Character;
}

const Card: React.FC<Props> = ({ content }) => {
  let navigate = useNavigate();
  return (
    <div className="container-card" onClick={() => navigate("/characters/" + content.id)}>
        <div className="img-card">
            <img src={ content.hasOwnProperty("image") ? content.image : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"} alt="" />
        </div>
        <h3>{content.name}</h3>
        {content.hasOwnProperty("species") && <p>Specie : {content.species}</p>}
        {content.hasOwnProperty("location") && <p>Location : {content.location.name}</p>}
    </div>
  )
};

export default Card;
