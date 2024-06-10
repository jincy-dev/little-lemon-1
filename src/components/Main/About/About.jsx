import React from "react";
import { AppWrap } from "../../../wrapper";
import "./About.css";
import { images } from "../../../constants";

const aboutData = {
  title: "Little Lemon",
  subTitle: "Trivandrum",
  description: `Lemon-scented oasis: Welcome to Little Lemon, where every bite is a burst of sunshine. Our restaurant offers a delightful fusion of zesty flavors and cozy ambiance, creating an inviting retreat for food lovers. From tangy lemon-infused dishes to refreshing drinks, we craft each experience with care and creativity. Join us to savor the taste of summer all year round at Little Lemon! `,
  image1: images.MarioandAdrianA,
  image2: images.resturantChefB,
};
const About = () => {
  return (
    <div className="app_about-section">
      <div className="app_about-description-box">
        <h1 className="app__about-title">{aboutData.title}</h1>
        <br />
        <h4 className="app__about-subtitle">{aboutData.subTitle}</h4>
        <br />
        <p className="app__about-description">
          {aboutData.description}
          <br />
          <br />
          {aboutData.description}
        </p>
      </div>

      {/* <div className="app__about-image-box-section"> */}
      <div className="app__about-image-holder">
        <div
          className="app__about-image-box img-box-1"
          style={{
            backgroundImage: `url(${aboutData.image2})`,
          }}
        />
        <div
          className="app__about-image-box img-box-2"
          style={{
            backgroundImage: `url(${aboutData.image1})`,
          }}
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default AppWrap(About, "About", "app__about");
