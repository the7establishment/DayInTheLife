import React, { useState } from "react"

export default function Qualifications() {
    
    //react Hooks note they don't work inside classes
    const[qualifications, setQualifications] = useState(['Qualification 1', 'Qualification 2', 'Qualification 3']);

    const qualItems = qualifications.map((item) => 
      <li>{item}</li>)

  return (
    <div className="qualifications">
        <h2>Qualifications</h2>
        <ul>
            {qualItems}
        </ul>
    </div>
  );
}