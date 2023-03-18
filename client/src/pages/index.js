import React from "react";
import About from "./About";
import glass from "./image/glass.png";
import Scheme from "./scheme";
import backgroundImage from "./image/bg.jpeg";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor:'#728aac',
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <input
          style={{
            border: "solid 5px black",
            width: "50%",
            fontSize: "17px",
            color:'black',
            fontWeight:'600',
            height: "40px",
            position: "relative",
            bottom: "100px",
            backgroundColor: "#e8ffe5",
          }}
          type={Text}
          placeholder="Location"
        ></input>
        <button
          value={"hospital-name"}
          style={{
            border: "none",
            background: "none",
            position: "relative",
            bottom: "100px",
            right: "72.2px",
          }}
          type="button"
        >
          <img style={{ height: "30px" }} src={glass} />
        </button>
      </div>
      <Scheme />
      <About />
    </div>
  );
};

export default Home;
