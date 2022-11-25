import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import ReactAnimatedWeather from "react-animated-weather";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div>
        <h1>Weather Search</h1>
        <p>
          Enter City <Search />
        </p>
        
      </div>
    </div>
    <footer>
      Coded by J. Vegas and Hosted on <a href="https://main--prismatic-hummingbird-e3a520.netlify.app/"> Netlify</a>/ <a href="https://github.com/JVegas1/Weather-Search-App">GitHub </a>
    </footer>
  </StrictMode>
);
