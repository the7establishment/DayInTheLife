import React from "react";

export default class NavSearch extends React.Component {

  searchJobs = (event) => {
    if (event.key === "Enter") {
      var query = event.target.value
      console.log("Hit Enter")
      window.location.href = `/Results?keyword=${query}`
    }
  }

  render() {
    return (
      <div className={this.props.isLanding ? "none" : "navsearch center"}>
        <input className="navinput" placeholder="Search Jobs, Hobbies, Lifestyles..." maxLength="50" onKeyPress={this.searchJobs} />
      </div>
    )
  }
}
