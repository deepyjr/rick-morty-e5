import { useCallback, useEffect, useMemo, useState } from "react";
import { Character } from "../../api/characters";
import {
  Episode,
  getCharactersDataByEpisodeId,
  getEpisodes,
} from "../../api/episodes";
import withData from "../../hoc/withData";
import Card from "../Cards";

type Props = {
  data: any;
  loading: boolean;
  error: any;
};

const Episodes: React.FC<Props> = ({ data, loading, error }) => {
  const [id, setId] = useState("1");
  const [character, setCharacter] = useState<Character[] | null>(null);

  useEffect(() => {
    const fetchEpisodeData = async () => {
      // attendre que la promesse soit résolue avant d'accéder à ses propriétés
      const result = await getCharactersDataByEpisodeId(id);
      Promise.all(result).then((res) => setCharacter(res));
    };
    fetchEpisodeData();
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
      <div>
        <select
          id="status-select"
          value={id}
          onChange={(e) => setId(e.target.value)}
        >
          {data.map((singleEpisode: Episode) => {
            return (
              <option value={singleEpisode.id} key={singleEpisode.id}>
                {singleEpisode.episode + " - " + singleEpisode.name}
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
      </div>
    </div>
  );
};

const fetchEpisodes = () => {
  return getEpisodes();
};

export default withData(fetchEpisodes)(Episodes);
