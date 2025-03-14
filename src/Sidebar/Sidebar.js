import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGlobe,
  faHome,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="">
            <img
              src={require("../assets/icons/logo-spotify.png")}
              alt="logo do spotify"
            />
          </a>
        </div>
        <ul>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faHome} />
              <span> Início</span>
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faSearch} />
              <span> Buscar</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="library">
        <div className="library__content">
          <button className="library__button">
            <FontAwesomeIcon className="fa" icon={faBook} />
            <span>Sua Biblioteca</span>
          </button>
          <FontAwesomeIcon className="fa-plus" icon={faPlus} />
        </div>
        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title"> Crie sua primeira playlist </span>
            <span className="text subtitle"> É fácil, vamos te ajudar </span>
            <button className="section-playlist__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>
        <div className="cookies">
          <a href="">Cookies</a>
        </div>
        <div className="languages">
          <button className="languages__button">
            <FontAwesomeIcon icon={faGlobe} />
            <span> Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
