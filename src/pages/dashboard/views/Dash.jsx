import React from "react";
import Categories from "../components/home/Categories";
import Transactions from "../components/home/Transactions";

const Dash = () => {

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          <Categories />
        </div>
        <Transactions/>
      </div>  
    </>
  );
};

export default Dash;
