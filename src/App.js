import React from "react";
import NavBar from "./components/NavBar/NavBar";
import JobProfile from "./components/JobProfile/JobProfile";
import "./styles.css";
import AccountProfile from "./components/AccountProfile/AccountProfile";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <JobProfile />
    </div>
  );
}
