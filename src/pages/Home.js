import React from "react";

const Home = () => {
  return (
    <div>
      <div className="bg-main rounded-b-3xl" style={{ height: "200px" }}>
        <div
          className="absolute top-20 left-10 p-4 rounded-xl bg-white shadow-lg z-10 w-4/5"
          style={{ height: "150px" }}
        >
          <h1>Ini main header</h1>
        </div>
      </div>
      <div>
        <h1>ini body</h1>
      </div>
    </div>
  );
};

export default Home;
