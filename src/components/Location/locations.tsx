import { useEffect, useState, useContext } from "react";
import { Character } from "../../api/characters";
import {
  Location,
  getCharactersDataByLocationId,
  getLocations,
} from "../../api/locations";
import withData from "../../hoc/withData";
import Card from "../Cards";
import { PreferenceContext } from "../../Contexts/preferenceContext";

type Props = {
  data: any;
  loading: boolean;
  error: any;
};

const Locations: React.FC<Props> = ({ data, loading, error }) => {
  const { state } = useContext(PreferenceContext);
  const [id, setId] = useState("1");
  const [character, setCharacter] = useState<Character[] | null>(null);
  useEffect(() => {
    const fetchLocationData = async () => {
      // attendre que la promesse soit résolue avant d'accéder à ses propriétés
      const result = await getCharactersDataByLocationId(id);
      Promise.all(result).then((res) => setCharacter(res));
    };
    fetchLocationData();
  }, [id]);

  if (error) {
    return (
      <div className="error">Une erreur s'est produite : {error.message}</div>
    );
  }

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="container">
      <div style={{ margin: "100px 0" }}>
        <select
          id="status-select"
          value={id}
          onChange={(e) => setId(e.target.value)}
        >
          {data.map((singleLocation: Location) => {
            return (
              <option value={singleLocation.id} key={singleLocation.id}>
                {singleLocation.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="container-cards">
        {character &&
          character.map((el: Character, index: number) => {
            return <Card content={el} key={index} />;
          })}
        {character && character.length === 0 && (
          <h1
            style={{ color: state.theme === "light" ? "#5b5757" : "#d1c7c8" }}
          >
            No Character Found
          </h1>
        )}
      </div>
    </div>
  );
};

const fetchLocations = () => {
  return getLocations();
};

export default withData(fetchLocations)(Locations);
