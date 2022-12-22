import { useEffect, useState } from "react";
import { Character, getCharacterById } from "../../api/characters";

type Props = {
  id: string;
};

const CharacterDetail: React.FC<Props> = ({ id }) => {
  const [data, setData] = useState({} as Character);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCharacterById(id);
      setData(result);
    };
    fetchData();
  }, [id]);
  return (
    <div className="container">
      <img src={data.image} style={{ width: "600px", margin: " 100px 0" }} alt=""/>
      <h1>Nom : {data.name}</h1>
      <h2>Espèce : {data.species}</h2>
      <h3>Localisation : {data.location?.name}</h3>
    </div>
  );
};

export default CharacterDetail;
