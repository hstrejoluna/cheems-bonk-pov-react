import * as React from "react"; // the most future proof import

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>Developed by HS Trejo Luna</p>
      <a>hstrejoluna.com.mx</a>
      <a href="http://u.fsf.org/16e">
        <img
          src="https://static.fsf.org/nosvn/images/badges/fsfs_icons_beige-bg.png"
          alt="We can't live, work or learn in freedom unless the software we use is free."
        />
      </a>
    </div>
  );
};
export default About;
