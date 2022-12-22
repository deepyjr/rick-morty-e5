import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Character, getCharacters } from "../../api/characters";
import withData from "../../hoc/withData";
import Card from "../Cards";
import CharacterFilter from "./characterFilter";
import { PreferenceContext } from "../../Contexts/preferenceContext";

type Props = {
  data: any;
  loading: boolean;
  error: any;
};
let page: string;

const Characters: React.FC<Props> = ({ data, loading, error }) => {
  const { state } = useContext(PreferenceContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const { pageParam } = useParams();
  const navigate = useNavigate();

  page = pageParam ? pageParam : "1";
  const pageButtons = Array.from(
    { length: parseInt(data?.info.pages) },
    (_, i) => i + 1
  );
  useEffect(() => {
    setSearchTerm("");
  }, [statusFilter, genderFilter, speciesFilter]);

  const filteredCharacters = data
    ? data.results.filter((character: Character) => {
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
        {filteredCharacters.length === 0 && (
          <h1
            style={{ color: state.theme === "light" ? "#5b5757" : "#d1c7c8" }}
          >
            No Character Found
          </h1>
        )}
      </div>
      <div className="pagination">
        {pageButtons.map((pageNumber) => {
          if (
            Math.abs(pageNumber - parseInt(page)) > 3 &&
            pageNumber !== 1 &&
            pageNumber !== pageButtons.length
          )
            return <span style={{ margin: "2px" }}>.</span>;
          return (
            <button
              key={pageNumber}
              className="pagination__btn"
              onClick={() => {
                navigate("/characters/page/" + pageNumber.toString());
                window.location.reload();
              }}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const fetchCharacters = () => {
  return getCharacters(page);
};

export default withData(fetchCharacters)(Characters);
