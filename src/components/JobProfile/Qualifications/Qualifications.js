import React, { useState } from "react"

export default function Qualifications(props) {
    
  const knowledge = props.knowledge
  const knowItems = knowledge.map((item) => {
    let end = item.Content.indexOf("</strong>")
    let result = item.Content.slice(8, end) 
    return <li>{result}</li>
  })

  return (
    <div className="qualifications box-shadow">
        <h2>Qualifications</h2>
        <ul>
            {knowItems}
        </ul>
    </div>
  );
}