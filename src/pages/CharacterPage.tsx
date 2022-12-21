import React, { useMemo, useState } from "react";
import Card from "../components/Cards";
import "./Pages.css";
import { getCharacters, Character } from "../api/characters";

function CharacterPage() {
  const [result, setResult] = useState<Character[] | null>(null);

  useMemo(async () => {
    const temp = await getCharacters();
    setResult(temp);
  }, []);

  return (
    <div className="container">
      <div className="container-cards">
        {result?.map((el, index) => {
          return <Card content={el} key={index} />;
        })}
      </div>
      <p>Episode</p>
    </div>
  );
}

export default CharacterPage;
