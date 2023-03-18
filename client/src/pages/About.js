import React from "react";
import patient from "./image/rafiki.png";
import hospital from "./image/bro.png";

const Home = () => {
  return <a href="/"></a>;
};

const About = () => {
  return (
    <div className="about">
      <h3 className="who">
        ~ WHO WE ARE.
      </h3>
      <div className="patient">
        <div className="assist" style={{ lineHeight: "2" }}>
          <p className="we" style={{ lineHeight:'1', fontSize: "36px", fontWeight: "700"}}>
            WE ASSIST IN RECOVERY.
          </p>
          <p className="para-1" style={{ fontWeight: "400" }}>
            We are dedicated to giving our patients with the best possible
            treatment. We realize that being in a hospital can be stressful, and
            we try to make the atmosphere comfortable, secure, and welcoming for
            everyone.We hope that giving comprehensive maps of our facility will
            make your experience simpler. We want to make sure that you, as a
            patient, guest, or staff member, can easily traverse our facilities.
            Our maps show the position of particular offices, clinics, and
            facilities such as restrooms, elevators, and cafeterias on each
            level.We understand that keeping track of all the schemes available
            can be difficult, which is why we made this website to provide you
            with a complete catalog of all the schemes, as well as information
            on qualifications, perks, and registration processes.
          </p>
        </div>
        <img  className="image" style={{ width: "65%" }} src={patient} alt="image" />
      </div>
      <div className="hospital">
        <img
        className="image"
          style={{ width: "80%", justifyItems: "center", paddingLeft: "60px" }}
          src={hospital}
          alt="image"
        />
        <p style={{ alignItems: "center", lineHeight: "2", fontWeight: "400" }}>
          Apart from that, because we understand that not everyone finds it
          simple to use the website, we have given a scanner with which you can
          scan the qr code accessible at every hospital to gain access to a map
          and determine your position and goal. We provide a full bundle of
          virtual personal help for you somewhere. Our goal is to provide all
          amenities in less time than the average hospital stay. Time is money,
          and we are here to help you save it.
        </p>
      </div>
    </div>
  );
};

export default About;
