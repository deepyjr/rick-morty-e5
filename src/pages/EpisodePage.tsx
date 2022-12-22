import "./Pages.css";
import Episodes from "../components/Episode/episodes";

function EpisodePage() {
  return (
    <div className="container">
      <div className="container-cards">
        <Episodes id={1}/>
      </div>
    </div>
  );
}

export default EpisodePage;
