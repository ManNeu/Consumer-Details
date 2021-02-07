import React, { useContext, useEffect } from "react";
import Consumers from "../consumers/Consumers";
import ConsumerForm from "../consumers/ConsumerForm";
import ConsumerFilter from "../consumers/ConsumerFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid2">
      <div>
        <ConsumerForm />
      </div>
      <div>
        <ConsumerFilter />
        <Consumers />
      </div>
    </div>
  );
};
export default Home;
