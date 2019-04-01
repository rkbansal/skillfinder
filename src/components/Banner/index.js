import React from "react";
import "./index.scss";
export default function Banner(props){
  return(
    <div className="banner">
      <div className="header">A Global Search Engine for Voice Skills</div>
      <div className="body">
        Now there is a faster way to search and tag over XXX,XXX skills available on
        voice enabled platform such as Amazon Alexa and Google Assistant.
      </div>
    </div>
  );
}