import React from "react";
import "./index.scss";

export default function Banner(props){
  let items = ["Spotify Voice Scan", "PewDiePie Submissions", "St Jude Hospital for Disablede", "Xbox Recart"];
  return(
    <div className="search-panel">
      <input className="search-bar" type="text" placeholder="Search"/>
      <div className="recent-search">
        {items.map((e, i)=>{
          return (
          <div className="recent-item" key={i}>
            <div className="text">
            {e}
            </div>
          </div>)
        })}
      </div>
    </div>
  );
}