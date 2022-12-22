import React from "react";
import "./index.css";

interface Props {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  statusFilter: string;
  setStatusFilter: (statusFilter: string) => void;
  genderFilter: string;
  setGenderFilter: (genderFilter: string) => void;
  speciesFilter: string;
  setSpeciesFilter: (speciesFilter: string) => void;
}

const CharacterFilter: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  genderFilter,
  setGenderFilter,
  speciesFilter,
  setSpeciesFilter,
}) => {
  return (
    <form className="character-filter">
      <div>
        <p>Search</p>
        <input
          type="text"
          id="search-input"
          placeholder="Enter a character"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="fieldSelector">
        <div>
          <p>Status</p>
          <select
            id="status-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div>
          <p>Gender</p>
          <select
            id="gender-select"
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        <div>
          <p>Species</p>
          <select
            id="species-select"
            value={speciesFilter}
            onChange={(e) => setSpeciesFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Alien">Alien</option>
            <option value="Human">Human</option>
            <option value="Humanoid">Humanoid</option>
            <option value="Mytholog">Mytholog</option>
            <option value="Poopybutthole">Poopybutthole</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default CharacterFilter;
