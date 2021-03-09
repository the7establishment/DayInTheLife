import React, { Component } from "react"
import eye from '../../resource/icons/eye.png'
import slash_eye from '../../resource/icons/slash_eye.png'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'

export class Form1 extends Component {
  
  render(){
    return(
      <div className="signup">
        <div className="modalbody">
          <div className='wrapper'>
            <p className="errMsg">{this.props.serviceErrMsg}</p>
            <input className="modalinput" id="firstName" placeholder="First Name" value={this.props.firstName} onBlur={()=>this.props.validateName("first")} onChange={()=>this.props.validateName("first")} maxLength="50" />
            <p className="errMsg">{this.props.firstNameErrMsg}</p>
          </div>
          <div className='wrapper'>
            <input className="modalinput" id="lastName" placeholder="Last Name" value={this.props.lastName} onBlur={()=>this.props.validateName("last")} onChange={()=>this.props.validateName("last")} maxLength="50" />
            <p className="errMsg">{this.props.lastNameErrMsg}</p>
          </div>
          <div className="wrapper">
            <input className="modalinput" id="signupEmail" placeholder="Email" value={this.props.email} onBlur={()=>this.props.validateEmail('signup')} onChange={()=>this.props.validateEmail('signup')} maxLength="50" />
            <p className="errMsg">{this.props.emailErrMsg}</p>
          </div>
          <div className="wrapper">
            <input className="modalinput" id="signupPassword" placeholder="Password" type={this.props.show ? "text" : "password"} value={this.props.password} onChange={()=>this.props.validatePwd('signup')} onBlur={()=>this.props.validatePwd('signup')} maxLength="20" />
            <img className="showicon" alt="eye" src={this.props.show ? slash_eye : eye} onClick={this.props.showHidePassword}></img>
            <p className="errMsg">{this.props.passErrMsg}</p>
          </div>
          <button className={this.props.valid ? "ditl-button-modal button-blue" : "ditl-button-modal button-blue button-disabled"} onClick={() => this.props.changeForm("Form2")}>NEXT</button>
        </div>
      </div>  
    )
  }
}

export class Form2 extends Component {

  constructor(props) {
    super(props)
    this.state={
      country: ''
    }
  }

  render() {
    return(
      <div className="signup">
        <div className="modalbody">
          <p className="errMsg">{this.props.serviceErrMsg}</p>
          <div className="modal-group">
            <label className="modal-label">Gender</label>
            <select className="modal-combobox" name="gender" value={this.props.gender} onChange={this.props.update} maxLength="50">
              <option>Other</option> 
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="modal-group">
            <label className="modal-label">Country</label>
            <CountryDropdown className="modal-combobox" name="country" defaultOptionLabel={this.props.country} value={this.props.country} onChange={this.props.updateCountry} maxLength="50" />
            <label className="modal-label">Region</label>
            <RegionDropdown className="modal-combobox" name="region" value={this.props.region} country={this.props.country} onChange={this.props.updateRegion} maxLength="50" />
          </div>
          <div>
            <button className="ditl-button-modal button-white" onClick={() => this.props.changeForm("Form1")}>BACK</button>
            <button className={this.props.valid ? "ditl-button-modal button-blue" : "ditl-button-modal button-blue button-disabled"} onClick={this.props.submit}>SUBMIT</button>
          </div>
        </div>
      </div>
    )
  }
}