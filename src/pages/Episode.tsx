import React from 'react'
import Card from '../components/Cards';
import './RickAndMortyPage.css'
function RickAndMortyPage() {
  return (
    <>
      <div className="container">
        <div className="container-cards">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <p>RickAndMortyPage</p>
    </>
  );
}

export default RickAndMortyPage