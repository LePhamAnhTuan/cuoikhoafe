import React from "react";
import Banner from "../../Components/Banner/Banner";
import ProductRoom from "../../Components/ProductRoom/ProductRoom";

const HomePage = () => {
  return (
    <div className="container mx-auto ">
      <div>
        <Banner />
      </div>
      <div className="my-10">
        <ProductRoom />
      </div>
    </div>
  );
};

export default HomePage;
