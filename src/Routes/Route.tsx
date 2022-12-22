import {  Routes, Route } from "react-router-dom";
import Root from "../Root";
import Character from "../pages/CharacterPage";
import CharacterDetail from "../pages/CharacterDetails";
import Episode from "../pages/EpisodePage";
import Location from "../pages/LocationPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route path="/characters" element={<Character />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/episodes" element={<Episode />} />
        <Route path="/locations" element={<Location />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
