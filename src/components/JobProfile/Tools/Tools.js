import React, { useState } from "react"
import Tool from "./Tool"

export default function Tools() {
  //react Hooks note they don't work inside classes
  const[tools, setTools] = useState(['Tool 1', 'Tool 2', 'Tool 3']);

  const toolItems = tools.map((tool) => 
  <Tool tool={tool}/>);

  return (
    <div className="tools">
      <h2>Tool</h2>
      <ul>
        {toolItems}
      </ul>
    </div>
  );
}