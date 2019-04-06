import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "./index.scss";

export default function MiddleLeft(){
  const list = [
    "Feature Benefit Lorem Ipsum is simply dummy text of the printing an set",
    "Feature Benefit #2 lorem ipsum dolor sit amet, consectetur adipiscing left",
    "Feature Benefit #3 lorem ipsum dolor sit amet, consectetur adipiscing left"
  ];
  return(
    <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce={true}>
      <div className="middle-left">
        <div className="heading">
          Add our SDK to your code and
          get valuable analytics.
        </div>
        <div>
          <button className="btn-download-sdk">Download SkillFinder SDK</button>
        </div>
        <ul className="features">
          {list.map((e, i)=>{
            return <li key={i}>{e}</li>
          })}
        </ul>
      </div>
      </ScrollAnimation>
  );
}