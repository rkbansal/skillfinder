import React from "react";
import "./index.scss";
const imageUrl = require(`../../assets/images/spotifyLogo.png`);
const data = [
  {
    title: "SPOTIFY",
    color: "rgb(51, 204, 102)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    related: "Music, Sonos, Spotify, muzik, Disco Jack",
    icon: require("../../assets/images/spotifyLogo.png")
  },
  {
    title: "BOSE AUDIO",
    color: "rgb(0, 0, 0)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    related: "Music, Sonos, Spotify, muzik, Disco Jack",
    icon: require("../../assets/images/spotifyLogo.png")
  },
  {
    title: "GANNA",
    color: "rgb(204, 51, 51)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    related: "Music, Sonos, Spotify, muzik, Disco Jack",
    icon: require("../../assets/images/spotifyLogo.png")
  },
  {
    title: "AMAZON MUSIC",
    color: "rgb(51, 153, 204)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    related: "Music, Sonos, Spotify, muzik, Disco Jack",
    icon: require("../../assets/images/spotifyLogo.png")
  }
];

function Result(){
  return(
    <div className="search-results-parent">
      <div className="search-results">
        {data.map((e, i) => {
          return(
          <div key={i} className="search-result-item">
            <div className="logo">
              <img className="img" src={e.icon} />
            </div>
            <div className="info">
              <div className="title" style={{color: e.color}}>{e.title}</div>
              <div className="desc">{e.description}</div>
              <div className="related">Related Search Terms : {e.related}</div>
              <div className="actions">
              <div className="btn-download">
                <button>DOWNLOAD</button>
              </div>
              <div className="btn-upload">
                <div className="btn-image"></div>
              </div>
            </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}
export default Result;