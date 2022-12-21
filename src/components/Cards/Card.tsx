import React from 'react'
import './Cards.css'
function Card() {
  return (
    <div className="container-card">
        <div className="img-card">
            <img src="https://picsum.photos/250/200" alt="" />
        </div>
        <h3>Rick Sanchez</h3>
        <p>Specie : Human</p>
        <p>Last location  : Citadel of Ricks</p>
    </div>
  )
}

export default Card