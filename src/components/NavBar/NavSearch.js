import React from "react";

export default function NavSearch() {
  return (
    <div className="navsearch center">
        <input className="navinput" placeholder="Search Jobs, Hobbies, Lifestyles..." maxLength="50"/>
        <a>Advance Search</a>
    </div>
  );
}
