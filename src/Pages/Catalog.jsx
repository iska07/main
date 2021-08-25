import React from "react";

const Catalog = () => {
  const number = 5;
  const fn = () => {
    return { number: number };
  };
  return <button onClick={() => fn()}>Нажать сюда</button>;
};

export default Catalog