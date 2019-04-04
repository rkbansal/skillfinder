import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.onload = ev => {
  // const IPheight = 1024;
  const IPWidth = 1920;
  const uiWidth = 1920 / 100;
  // const uiHight = 1024 / 100;
  const onResize = () => {
    document.body.style.width = `100%`;
    document.body.style.height = `100%`;
    document.body.style.transformOrigin = `0 0`;
    const docWidth = document.body.clientWidth;
    const docHeight = document.body.clientHeight;
    // if (docHeight * (IPWidth / docWidth) < IPheight) {
    //   const zoomProp = docHeight / uiHight / 100;
    //   document.body.style.height = `${IPheight}px`;
    //   document.body.style.width = `${docWidth * (IPheight / docHeight)}px`;
    //   document.body.style.transform = `scale(${zoomProp.toString()})`;
    // } else {
      const zoomProp = docWidth / uiWidth / 100;
      document.body.style.width = `${IPWidth}px`;
      // document.body.style.height = `${docHeight * (IPWidth / docWidth)}px`;
      document.body.style.transform = `scale(${zoomProp.toString()})`;
    // }
  };

  // window.addEventListener("resize", onResize);
  // onResize();
  document.body.innerHTML = `<div id='root'><div>`;
  ReactDOM.render(
      <App />,
    document.getElementById("root")
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
