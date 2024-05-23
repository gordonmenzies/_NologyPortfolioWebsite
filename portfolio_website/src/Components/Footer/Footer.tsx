import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer__container">
      <p className="footer__email--desktop">heymish96@gmail.com</p>
      <div className="footer__imgContainer">
        <a href="https://github.com/gordonmenzies">
          <img className="footer__img" src="./images/logos/github.png" />
        </a>
        <a href="https://www.linkedin.com/in/hamish-lawson-509931135/">
          <img className="footer__img" src="./images/logos/linkedin.png" />
        </a>
        <p className="footer__img--desktop">CV</p>
      </div>
      <p className="footer__email">heymish96@gmail.com</p>
    </footer>
  );
};

export default Footer;
