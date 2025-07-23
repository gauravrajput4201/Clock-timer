import React from "react";
import "./ToolsAndLinkContainer.scss";

import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';


function ToolsAndLinkContainer() {
  return (
    <div className="container__tools">
      <a
        href=""
        
        className="link"
      >
       
        <Instagram className="icons" />
      </a>
      <a
        href=""
        
        className="link"
      >
        <Linkedin  className="icons sp" />
      </a>
      {/* <a href=""  className="link">
        <TwitterIcon className="icons sp" />
      </a> */}
    </div>
  );
}

export default ToolsAndLinkContainer;
