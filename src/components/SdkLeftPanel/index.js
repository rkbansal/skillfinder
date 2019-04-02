import React from "react";
import Tree from '../Tree';
import "./index.scss";

function SdkLeftPanel(){
  const list = [
      "Alexa Voice Service",
      "Alexa Skills Kit",
      "Alex Voice Service",
      "Alexa Skills Kit"
    ];
  return (
      <div className="sdk-left-panel">
        <div className="tree-base">
          <div className="heading">
            SkillFinder Skills Kit
          </div>
          <Tree />
          <div className="other-resources">
            <div className="heading">Other Resources</div>
            <ul>
              {list.map(e=>{
                return <li>{e}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default SdkLeftPanel;