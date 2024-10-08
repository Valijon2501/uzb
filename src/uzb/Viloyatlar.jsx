import { Link } from "react-router-dom";
import { viloyat } from "../birlash/Bog'lash";

const Viloyatlar = () => {
  return (
    <>
      <h1>UZB viloyatlari</h1>
      <br />
      {viloyat.map((item, index) => (
        <>
          <Link to={"/tum/" + item?.id} key={index}>
            {" "}
            {item?.name}{" "}
          </Link>
          <br />
        </>
      ))}
    </>
  );
};
export default Viloyatlar;
