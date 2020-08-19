import React, { useState } from "react";
import { getMenuOptions } from '../AccountProfile/HeaderMenu'

export default function Result(props) {

  return (
    <div className="result-card">
        <div className="result-left">
          
        </div>
        <div className="result-right">
          <div className="result-tabmenu">
            <span className="tab">Tool</span>
            <span className="tab">Qualifications</span>
            <div className="tab-active"></div>
          </div>
          <div className="result-tabbody">
            Body
          </div>
        </div>
    </div>
  );
}