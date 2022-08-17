import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Count from "../components/Count";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Count />
    </div>
  );
};

export default Home;
