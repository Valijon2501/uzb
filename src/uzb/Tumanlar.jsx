import { Link, useNavigate, useParams } from "react-router-dom";
import { tuman } from "../birlash/Bog'lash";

const Tumanlar = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>Uzb viloyat tumanlari</h1>
      <br />
      <button onClick={() => navigate(-1)}>orqaga</button>
      {tuman
        .filter((o) => o.vil_id === parseInt(params?.rayon))
        .map((item, index) => (
          <div>
            <Link key={index} to={"/tum/" + params?.rayon + "/" + item.id}>
              <br />
              {item?.name}
            </Link>
          </div>
        ))}
    </>
  );
};
export default Tumanlar;
