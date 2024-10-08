import { Route, Routes } from "react-router-dom";
import Viloyatlar from "../uzb/Viloyatlar";
import Tumanlar from "../uzb/Tumanlar";
import Oliytalim from "../uzb/Oliytalim";
import Oqish from "../uzb/Oqish";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Viloyatlar />} />
        <Route path="tum/:rayon" element={<Tumanlar />} />
        <Route path="tum/:rayon/:tum_id" element={<Oliytalim />} />
        <Route path="tum/:rayon/:tum_id/:oli_id" element={<Oqish />} />
      </Routes>
    </>
  );
};
export default Router;
