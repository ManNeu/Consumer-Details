import React from "react";
import Consumers from "../consumers/Consumers";
import ConsumerForm from "../consumers/ConsumerForm";
const Home = () => {
  return (
    <div className="grid2">
      <div>
        <ConsumerForm />
      </div>
      <div>
        <Consumers />
      </div>
    </div>
  );
};
export default Home;
