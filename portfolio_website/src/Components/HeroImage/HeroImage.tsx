import "./HeroImage.scss";

const HeroImage = () => {
  return (
    <div className="heroImage__container">
      <div className="heroImage__greetingContainer">
        <h2 className="heroImage__greeting">Hey! I'm Hamish</h2>
        <img className="heroImage__greetingImg" src="./images/waving_hand.png" />
      </div>
      <h3 className="heroImage__softwareDeveloper">
        A Juniour Software Developer <br />
        based in the UK
      </h3>
      <button className="heroImage__button">Take a look at my work</button>
    </div>
  );
};

export default HeroImage;
