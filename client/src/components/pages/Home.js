import React from "react";
import Consumers from "../consumers/Consumers";
import ConsumerForm from "../consumers/ConsumerForm";
import ConsumerFilter from "../consumers/ConsumerFilter";

const Home = () => {
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
