import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "./index.scss";
export default function Footer(props) {
  const list = ["ABOUT", "SEARCH", "SDK", "REGISTER SKILL"];
  return (
    <div className="footer-parent">
      <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
      <div className="footer">
        <div className="logo">SKILLFINDER</div>
        <div className="links">
          {list.map((e, i) => {
            return <div key={i} className="link">{e}</div>
          })}
        </div>

      </div>
      </ScrollAnimation>
    </div>
  )
}