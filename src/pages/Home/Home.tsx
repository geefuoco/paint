import React from "react";
import Canvas from "../../components/Canvas/Canvas";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <main className="home">
      <h1 className="title">Paint</h1>
      <Canvas />
    </main>
  );
};

export default Home;
