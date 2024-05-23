import "./Projects.scss";
import ProjectItem from "../ProjectItem/ProjectItem";

const Projects = () => {
  return (
    <div className="myProject">
      <h1 className="myProject__title">My Projects</h1>
      <div className="myProject__blueBlock"></div>
      <div className="myProject__container">
        <ProjectItem
          technology={"React"}
          title={"A Simple Trivia Game"}
          description={"A simple trivia game built through connecting to an open trivia API. This project is implemented in React."}
          descriptionDesktop={"A simple trivia game built through connecting to an open trivia API. This project is implemented in React."}
          codeLink={"https://github.com/gordonmenzies/TriviaAppReactImplementation/tree/main/src"}
          previewLink={"https://github.com/gordonmenzies/TriviaAppReactImplementation/tree/main/src"}
          imagePath={"./images/projectImages/Screenshot 2024-03-04 at 13.52.53.png"}
        />
        <ProjectItem
          technology={"Java"}
          title={"Java Casino Card Game"}
          description={"A card game built as part of a pair programming project that allows the player to play two different card games within the terminal. There is business logic for blackjack and 3 card poker included in the game as well of a system for setting scores and navigating a menu."}
          descriptionDesktop={"This project runs in the terminal and allows a player to play Blackjack and Three Card Poker."}
          codeLink={"https://github.com/gordonmenzies/card-games"}
          previewLink={"https://github.com/gordonmenzies/card-games"}
          imagePath={"./images/Java_Casino.png"}
        />

        <ProjectItem
          technology={"React, Typescript"}
          title={"WOV Client Project"}
          description={"A client project built as part of a 12 person Agile team. The app utilises a React Front End and access the Firebase Database Storage System API to Save client data and allow administrators to update details within the app."}
          descriptionDesktop={"A client project built as part of a 12 person Agile team. The app utilises a React Front End and access the Firebase Database Storage System API."}
          codeLink={"https://github.com/gordonmenzies/wov-client-project"}
          previewLink={"https://github.com/gordonmenzies/wov-client-project"}
          imagePath={"./images/WayOfTheViking.png"}
        />
      </div>

      <div className="myProject__container--desktop">
        <ProjectItem
          technology={"React, Typescript"}
          title={"Punk API Beers"}
          description={"A React project implementing the now deprecated PUNK API database. The project allows the user to filter and identify beers based on a number of characteristics provided by the now deprecated API."}
          descriptionDesktop={"A React project implementing the now deprecated PUNK API database. The project allows the user to filter and identify beers based on a number of characteristics provided by the now deprecated API."}
          codeLink={"https://github.com/gordonmenzies/Punk_Api_Project"}
          previewLink={"https://github.com/gordonmenzies/Punk_Api_Project"}
          imagePath={"./images/punkAPI.png"}
        />

        <ProjectItem
          technology={"Javascript"}
          title={"Calculator"}
          description={"A recreation of the Iphone calculator built with javascript and hosted with Github pages."}
          descriptionDesktop={"A recreation of the Iphone calculator built with javascript and hosted with Github pages."}
          codeLink={"https://github.com/gordonmenzies/calculator_waiheke"}
          previewLink={"https://github.com/gordonmenzies/calculator_waiheke"}
          imagePath={"./images/Calculator.png"}
        />

        <ProjectItem
          technology={"Javascript"}
          title={"Calculator"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autLorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut"
          }
          descriptionDesktop={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
          codeLink={""}
          previewLink={""}
          imagePath={"./images/tales_from_the_loop_3.jpg"}
        />
      </div>
    </div>
  );
};

export default Projects;
