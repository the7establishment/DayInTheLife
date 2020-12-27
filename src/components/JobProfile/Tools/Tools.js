import React, { useState } from "react"

export default function Tools(props) {
  //react Hooks note they don't work inside classes
  // const[tools, setTools] = useState(['Tool 1', 'Tool 2', 'Tool 3']);
  // const toolList = tools.map((tool) => <li>{tool}</li>);

  let toolsTech = props.toolsTech.match(/<strong>.*?<\/strong>/g)
  let toolsList = toolsTech.map((tool) => {
    let end = tool.indexOf("</strong>")
    let result = tool.slice(8,end) 
    if(result !== "Tools") return <li>{result}</li>
  })
  return (
    <div className="tools box-shadow">
      <h2>Tools</h2>
      <ul>
        {/* {toolList} */}
        {toolsList}
      </ul>
    </div>
  );
}

function removeTags(str) { 
  if ((str===null) || (str==='')) 
      return false; 
  else
      str = str.toString(); 
        
  // Regular expression to identify HTML tags in  
  // the input string. Replacing the identified  
  // HTML tag with a null string. 
  return str.replace( /(<([^>]+)>)/ig, ' '); 
} 