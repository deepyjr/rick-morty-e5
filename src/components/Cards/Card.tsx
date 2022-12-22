import React from 'react'
import './Cards.css'
import { Character } from '../../api/characters'
import { Episode } from '../../api/episodes';
import { Location } from '../../api/locations';

interface Props {
  content: Character | Episode | Location ;
}

const Card: React.FC<Props> = ({ content }) => {
  return (
    <div className="container-card">
        <div className="img-card">
            <img src={ content.hasOwnProperty("image") ? (content as Character).image : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"} alt="" />
        </div>
        <h3>{content.name}</h3>
        {content.hasOwnProperty("species") && <p>Specie : {(content as Character).species}</p>}
        {content.hasOwnProperty("location") && <p>Location : {(content as Character).location.name}</p>}
    </div>
  )
};

export default Card;
