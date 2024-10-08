import { Link, useNavigate, useParams } from "react-router-dom";
import { oliytalim, oqish } from "../birlash/Bog'lash";

const Oqish = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>Talim turivkkkk</h1>
      <br />
      <button onClick={() => navigate(-1)}>orqaga</button>

      {oliytalim
        .filter((o) => o.tum_id === parseInt(params?.tum_id))
        .map((item, index) => (
          <div key={index}>
            {item?.name}
            <br />
            {oqish
              .filter((o) => o.oli_id === item?.id)
              .map((uitem, uindex) => (
                <Link
                  key={uindex}
                  to={
                    "/tum/" +
                    params?.rayon +
                    "/" +
                    params?.tum_id +
                    "/" +
                    params?.oli_id +
                    "/" +
                    item.id
                  }
                >
                  <br />
                  {uitem?.name}
                </Link>
              ))}
          </div>
        ))}
    </>
  );
};
export default Oqish;
