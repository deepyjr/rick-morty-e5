import "./Pages.css";
import CharacterDetail from "../components/CharacterDetail";
import { useParams } from "react-router-dom";

function CharacterPage() {
  const { id } = useParams();
  return (
    <div className="container">
      <CharacterDetail id={id!} />
    </div>
  );
}

export default CharacterPage;
