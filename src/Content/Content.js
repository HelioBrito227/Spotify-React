import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="playlist-container">
      <div id="result-playlists">
        <div className="playlists">
          <h1 id="greetings">Boas vindas</h1>
          <h2 className="greetings-subtitle">Navegar por todas as seções</h2>
        </div>
        <div className="offer__scroll-container">
          <div className="offer__list">
            <section className="offer__list-item">
              <a href="" className="cards">
                <div className="cards card1">
                  <img
                    src={require("../assets/playlist/1.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Boas festas</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card2">
                  <img
                    src={require("../assets/playlist/2.png")}
                    alt="Imagem de Card"
                  />
                  <span>Feitos para você</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card3">
                  <img
                    src={require("../assets/playlist/3.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Lançamentos</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card4">
                  <img
                    src={require("../assets/playlist/4.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Creators</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card5">
                  <img
                    src={require("../assets/playlist/5.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Para treinar</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card6">
                  <img
                    src={require("../assets/playlist/6.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Podcasts</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card7">
                  <img
                    src={require("../assets/playlist/7.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Sertanejo</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card8">
                  <img
                    src={require("../assets/playlist/8.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Samba e pagode</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card9">
                  <img
                    src={require("../assets/playlist/9.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Funk</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card10">
                  <img
                    src={require("../assets/playlist/10.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>MPB</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card11">
                  <img
                    src={require("../assets/playlist/11.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Rock</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card12">
                  <img
                    src={require("../assets/playlist/12.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Hip Hop</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card13">
                  <img
                    src={require("../assets/playlist/13.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Indie</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card14">
                  <img
                    src={require("../assets/playlist/14.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Relax</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card15">
                  <img
                    src={require("../assets/playlist/15.jpeg")}
                    alt="Imagem de Card"
                  />
                  <span>Música Latina</span>
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>
      <div id="result-artist" className="hidden">
        <div className="grid-container">
          <div className="artist-card" id="">
            <div className="card-img">
              <img
                id="artist-img"
                className="artist-img"
                alt="Imagem de Artista"
              />
              <div className="play">
                <span className="fa fa-solid fa-play"></span>
              </div>
            </div>
            <div className="card-text">
              <a title="Foo Fighters" className="vst" href=""></a>
              <span className="artist-name" id="artist-name"></span>
              <span className="artist-categorie">Artista</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
