import "./Nav.scss";

const Nav = () => {
  return (
    <header className="navigation">
      <img className="navigation__logo" src="./images/logo.png" />
      <h1 className="navigation__name">HamishLawson</h1>
      <img className="navigation__menu" src="./images/hamburger.png" />

      <div className="navigation__menuContainer--desktop">
        <div className="navigation__menu--desktop">
          <h1>Home</h1>
        </div>
        <div className="navigation__menu--desktop">
          <a href="#about">
            <h1>About</h1>
          </a>
        </div>
        <div className="navigation__menu--desktop">
          <a href="#Projects">
            <h1>Projects</h1>
          </a>
        </div>
        <div className="navigation__menu--desktop">
          <button>Get In Touch</button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
