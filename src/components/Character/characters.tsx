import { useEffect, useState } from "react";
import { Character, getCharacters } from "../../api/characters";
import withData from "../../hoc/withData";
import Card from "../Cards";
import CharacterFilter from "./characterFilter";

type Props = {
  data: any;
  loading: boolean;
  error: any;
};

const Characters: React.FC<Props> = ({ data, loading, error }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");

  useEffect(() => {
    setSearchTerm("");
  }, [statusFilter, genderFilter, speciesFilter]);

  const filteredCharacters = data
    ? data.filter((character: Character) => {
        return (
          character.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (statusFilter === "" || character.status === statusFilter) &&
          (genderFilter === "" || character.gender === genderFilter) &&
          (speciesFilter === "" || character.species === speciesFilter)
        );
      })
    : [];
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
      <CharacterFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        speciesFilter={speciesFilter}
        setSpeciesFilter={setSpeciesFilter}
      />
      <div className="container-cards">
        {filteredCharacters.length > 0 &&
          filteredCharacters.map((el: any, index: number) => {
            return <Card content={el} key={index} />;
          })}
      </div>
    </div>
  );
};

const fetchCharacters = () => {
  return getCharacters();
};

export default withData(fetchCharacters)(Characters);
