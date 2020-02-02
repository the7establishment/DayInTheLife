import React from "react"
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import NavSearch from './NavSearch'
import '../../css/NavBar/NavBar.css'

export default function NavBar() {
  return (
    <div className="navbar">
        <NavLeft />
        <NavSearch />
        <NavRight />
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