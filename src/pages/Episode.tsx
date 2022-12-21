import React, { useMemo, useState } from "react";
import Card from "../components/Cards";
import "./Episode.css";
import { getCharacters, Character } from "../api/characters";
import Characters from "../components/Characters";
function Episode() {
  const [result, setResult] = useState<Character[] | null>(null);

  useMemo(async () => {
    const temp = await getCharacters();
    setResult(temp);
  }, []);

  return (
    <div className="container">
      <div className="container-cards">
        {result?.map((el, index) => {
          return <Characters character={el} key={index} />;
        })}
      </div>
      <p>Episode</p>
    </div>
  );
}

export default Episode;
