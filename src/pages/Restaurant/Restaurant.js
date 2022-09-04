import React from "react";

import "../../assets/global.css";

import Card from "./components/Card/Card";
import NavBar from "../../components/NavBar";

const Restaurant = () => {
  const [keyword, setKeyword] = React.useState("");
  console.log(keyword);
  return (
    <>
      <NavBar setKeyword={setKeyword} />
      <Card keyword={keyword} />
    </>
  );
};

export default Restaurant;
