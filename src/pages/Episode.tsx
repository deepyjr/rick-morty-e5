import React from 'react'
import Card from '../components/Cards';
import './Episode.css'
function Episode() {
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
      <p>Episode</p>
    </>
  );
}

export default Episode