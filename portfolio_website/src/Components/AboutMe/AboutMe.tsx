import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <a id="about">
        <section className="aboutMe" />
      </a>
      <div className="aboutMe__text">
        <h1 className="aboutMe__title">About Me</h1>
        <p className="aboutMe__description--desktop">I am currently training to be a software developer on the _Nology Software Engineering Program. Outside of teaching myself new skills and developing projects I enjoy sports like climbing, surfing and slacklining.</p>
      </div>
      <img className="aboutMe__image" src="./images/East_Timor_4.jpg" />
      <p className="aboutMe__description">I am currently training to be a software developer on the _Nology Software Engineering Program. Outside of teaching myself new skills and developing projects I enjoy sports like climbing, surfing and slacklining.</p>
    </div>
  );
};

export default AboutMe;
