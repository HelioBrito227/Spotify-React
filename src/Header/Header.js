import React, { useEffect } from "react";
import "./Header.css";
import Content from "../Content/Content";

const Header = () => {
  useEffect(() => {
    const searchInput = document.getElementById("search-input");
    const resultArtist = document.getElementById("result-artist");
    const resultPlaylist = document.getElementById("result-playlists");

    function requestApi(searchTerm) {
      const url = `http://localhost:3500/artists?name_like=${searchTerm}`;
      fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm));
    }

    function displayResults(result, searchTerm) {
      resultPlaylist.classList.add("hidden");
      const gridContainer = document.querySelector(".grid-container");
      gridContainer.innerHTML = "";

      const filteredArtists = result.filter((artist) =>
        artist.name.toLowerCase().includes(searchTerm)
      );

      filteredArtists.forEach((artist) => {
        const artistCard = document.createElement("div");
        artistCard.classList.add("artist-card");

        artistCard.innerHTML = `
          <div class="card-img">
              <img class="artist-img" src="${artist.urlImg}"/>
              <div class="play">
                  <FontAwesomeIcon icon={faHome} />
              </div>
          </div>
          <div class="card-text">
              <span class="artist-name">${artist.name}</span>
              <span class="artist-categorie">Artista</span>
          </div>
          `;
        gridContainer.appendChild(artistCard);
      });
      resultArtist.classList.remove("hidden");
    }

    document.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase().trim();
      if (searchTerm === "") {
        resultPlaylist.classList.remove("hidden");
        resultArtist.classList.add("hidden");
        return;
      }

      requestApi(searchTerm);
    });
    return;
  }, []);

  return (
    <div className="main-container">
      <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img
              src={require("../assets/icons/small-left.png")}
              alt="Seta esquerda"
            />
          </button>
          <button className="arrow-right">
            <img
              src={require("../assets/icons/small-right.png")}
              alt="Seta Direta"
            />
          </button>
        </div>
        <div className="header__search">
          <img src={require("../assets/icons/search.png")} alt="" />
          <input
            id="search-input"
            type="text"
            maxLength="800"
            placeholder="O que você quer ouvir?"
          />
        </div>
        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>
      <Content />
    </div>
  );
};

export default Header;
