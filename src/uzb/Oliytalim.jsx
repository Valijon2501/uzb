import { Link, useNavigate, useParams } from "react-router-dom";
import { oliytalim, institut, maktab, oqish, tuman } from "../birlash/Bog'lash";

const Oliytalim = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <br />
      <br />
      <h1>Talim</h1>
      <button onClick={() => navigate(-1)}>orqaga</button>
      <br />
      <div>
        {tuman
          .filter((o) => o.id === parseInt(params?.tum_id))
          .map((item, index) => (
            <div key={index}>
              {item?.name}
              <br />
              <br />{" "}
              {oliytalim
                .filter((o) => o.tum_id === item?.id)
                .map((oitem, oindex) => (
                  <Link
                    key={oindex}
                    to={
                      "/tum/" +
                      params?.rayon +
                      "/" +
                      params?.tum_id +
                      "/" +
                      item.id
                    }
                  >
                    <br />
                    {oitem?.name}
                    {/* {oqish
                      .filter((o) => o.tum_id === item?.id)
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
                      ))} */}
                  </Link>
                ))}
              <br />
              <br />
              {institut
                .filter((o) => o.tum_id === item?.id)
                .map((pitem, pindex) => (
                  <span key={pindex}>
                    <br />
                    {pitem?.name}
                  </span>
                ))}
              <br />
              <br />
              {maktab
                .filter((o) => o.tum_id === item?.id)
                .map((aitem, aindex) => (
                  <span key={aindex}>
                    <br />
                    {aitem?.name}
                  </span>
                ))}
            </div>
          ))}
      </div>
    </>
  );
};
export default Oliytalim;
