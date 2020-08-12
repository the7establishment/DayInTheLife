import React from "react";

export default function NavSearch() {
  return (
    <li className="navsearch">
        <input className="navinput" placeholder="Search Jobs" maxLength="50"/>
        <a>Advance Search</a>
    </li>
  );
}
