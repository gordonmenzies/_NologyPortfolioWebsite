import "./TechnicalSkills.scss";

const TechnicalSkills = () => {
  return (
    <section className="technicalSkills">
      <h1 className="techicalSkills__title">Technical Skills</h1>
      <div className="technicalSkills__blueBlock"></div>
      <p className="technicalSkills__description--desktop">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="technicalSkills__gridContainer">
        <div className="technicalSkills__gridItem">
          <img className="technicalSkills__gridImage" src="./images/logos/git.png" />
          <p>Git</p>
        </div>
        <div className="technicalSkills__gridItem">
          <img className="technicalSkills__gridImage" src="./images/logos/html.png" />
          <p>HTML</p>
        </div>
        <div className="technicalSkills__gridItem">
          <img className="technicalSkills__gridImage" src="./images/logos/javascript.png" />
          <p>javascript</p>
        </div>
        <div className="technicalSkills__gridItem">
          <img className="technicalSkills__gridImage" src="./images/logos/css3.png" />
          <p>CSS</p>
        </div>
        <div className="technicalSkills__gridItem">
          <img className="technicalSkills__gridImage" src="./images/logos/Java.png" />
          <p>Java</p>
        </div>
        <div className="technicalSkills__gridItem">
          <img className="technicalSkills__gridImage" src="./images/logos/scss.png" />
          <p>SCSS</p>
        </div>
        <div className="technicalSkills__gridItem">
          <img className="technicalSkills__gridImage" src="./images/logos/springboot.PNG" />
          <p>Springboot</p>
        </div>
        <div className="technicalSkills__gridItem">
          <img className="technicalSkills__gridImage" src="./images/logos/react.png" />
          <p>React</p>
        </div>
        <div className="technicalSkills__gridItem">
          <img className="technicalSkills__gridImage" src="./images/logos/BEM.png" />
          <p>BEM</p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
