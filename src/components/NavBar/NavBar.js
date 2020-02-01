import React from "react"
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import NavSearch from './NavSearch'
import '../../css/Navbar.css'

export default function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <NavLeft />
        <NavSearch />
        <NavRight />
      </ul>
    </div>
  );
}
{/* <li className="navbrand">
<a href="#">My Test App</a>
</li>
{/* <li>
<a href="#">Item 1</a>
</li>
<li>
<a href="#">Item 2</a>
</li> */}