import React, { useContext, useEffect } from "react";
import Consumers from "../consumers/Consumers";
import ConsumerForm from "../consumers/ConsumerForm";
import ConsumerFilter from "../consumers/ConsumerFilter";
import AuthContext from "../../context/auth/authContext";
import landingImage from "../images/landingPage.jpg";
import blueWaterMark from "../images/blueWaterMarks.jpg";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid2">
      <div>
        <div style={{ backgroundImage: "url(" + landingImage + ")" }}>
          <ConsumerForm />
        </div>
      </div>

      <div style={{ backgroundImage: "url(" + blueWaterMark + ")" }}>
        <div>
          <ConsumerFilter />
          <Consumers />
        </div>
      </div>
    </div>
  );
};
export default Home;
