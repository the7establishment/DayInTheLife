import React, { useState } from "react";
import Listing from "./Listing"

export default function Listings() {
  //react Hooks note they don't work inside classes
  const[listing, setList] = useState(['Item 1', 'Item 2', 'Item 3']);

  const listItems = listing.map((item) => 
  <Listing listing={item}/>);
  
  return (
    <div className="listings">
      <h2>Listings</h2>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}