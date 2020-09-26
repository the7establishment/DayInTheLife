import React from "react";

export default class NavSearch extends React.Component {
  render(){
    return (
      <div className={this.props.isLanding ? "none" : "navsearch center"}>
        <input className="navinput" placeholder="Search Jobs, Hobbies, Lifestyles..." maxLength="50"/>
        <a>Advance Search</a>
    </div>
    )
  }
}
