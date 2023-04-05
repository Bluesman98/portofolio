import { useState } from "react";

function Projects(props) {
  const [projects, setProjects] = useState([
    {
      name: "OdinBook",
      img_url: "odinbook.png",
      github_url: "https://github.com/Bluesman98/odinbook/settings/pages",
      preview_url: "https://bluesman98.github.io/odinbook/",
      desc: "A facebook app with realtime chat and notifications, backend is built with node and frontend with react",
    },
    {
      name: "Weather App",
      img_url: "weather-app.png",
      github_url: "https://github.com/Bluesman98/Weather-App",
      preview_url: "https://bluesman98.github.io/Weather-App/",
      desc: "A weather app that uses OpenWeatherMap API calls to present the user with weather data of the desired city",
    },
    {
      name: "Shopping Cart",
      img_url: "shopping-cart.png",
      github_url: "https://github.com/Bluesman98/Shopping-Cart",
      preview_url: "https://bluesman98.github.io/Shopping-Cart/",
      desc: "A web store app that has a catalog with the available products and allows the user to add them to the cart and checkout",
    },
    {
      name: "Were is Waldo ?",
      img_url: "where-is-waldo.png",
      github_url: "https://github.com/Bluesman98/Where-is-Waldo",
      preview_url: "https://bluesman98.github.io/Where-is-Waldo/",
      desc: "A game were you have to find  characters hidden in an image, built with react and firebase",
    },
    {
      name: "Todo",
      img_url: "todo.png",
      github_url: "https://github.com/Bluesman98/Todo",
      preview_url: "https://bluesman98.github.io/Todo/",
      desc: "A task orginizer app, make projects, set priority of tasks and filter them by date",
    },
    {
      name: "Battleship",
      img_url: "battleship.png",
      github_url: "https://github.com/Bluesman98/Battleship",
      preview_url: "https://bluesman98.github.io/Battleship/",
      desc: "Play the classic game built with javascript versus the AI player",
    },
  ]);

  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((item, i) => {
          return (
            <h2 key={i} className="project">
              <img src={item.img_url}></img>
              <div className="details">
                <div className="top">
                  <p>{item.name}</p>
                  <div>
                    <a
                      href={item.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="devicon-github-original colored"></i>
                    </a>
                    <a
                      href={item.preview_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="open-in-new.svg" />
                    </a>
                  </div>
                </div>
                <div className="bottom">
                  <p>{item.desc}</p>
                </div>
              </div>
            </h2>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
