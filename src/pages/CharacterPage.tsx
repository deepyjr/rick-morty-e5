import "./Pages.css";
import Characters from "../components/Character/characters";

function CharacterPage() {
  return (
    <div className="container">
      <div className="container-cards">
        <Characters />
      </div>
    </div>
  );
}

export default CharacterPage;
