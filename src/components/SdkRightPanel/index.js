import React from "react";
import "./index.scss";
function SdkRightPanel() {
  const list = [
    "Open the github repository SDK for python",
    "Learn how to get started with SDK python",
    "Report issues with SDK",
    "Request and vote for alexa features"
  ];
  return(
    <div className="sdk-right-panel">
      <div className="left animated fadeInUp delay-2s">
        <div className="header">Get the Skillfinder SDK Kit</div>
        <div className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.
        </div>
        <div className="actions">
          <div className="btn-download">
            <button>DOWNLOAD</button>
          </div>
          <div className="btn-upload">
            <div className="btn-image"></div>
          </div>
        </div>
      </div>
      <div className="right animated zoomIn delay-2s">
        <div className="image-area">
        </div>
      </div>
      <div className="third animated zoomInUp delay-10s">
          <div className="documentation">
            <div className="header">
              Resources and Documentation
            </div>
            <div className="list">
              <ul>
                {
                  list.map((e, i) => {
                    return <li>{e}</li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SdkRightPanel;