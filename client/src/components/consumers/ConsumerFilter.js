import React, { useContext, useRef, useEffect } from "react";
import ConsumerContext from "../../context/consumer/consumerContext";

const ConsumerFilter = () => {
  const consumerContext = useContext(ConsumerContext);
  const text = useRef("");
  const { filterConsumers, clearFilter, filtered } = consumerContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterConsumers(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="enter your filter keywords here..."
        onChange={onChange}
      />
    </form>
  );
};

export default ConsumerFilter;
