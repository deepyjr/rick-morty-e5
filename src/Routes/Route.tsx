import {  Routes, Route } from "react-router-dom";
import Root from "../Root";
import Character from "../pages/Character";
import CharacterDetail from "../components/CharacterDetail";
import Episode from "../pages/Episode";
import Location from "../pages/Location";

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
