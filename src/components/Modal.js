import React from "react"
import PropTypes from 'prop-types'
import "../css/LoginSignup.css"

export default function Modal({ children, title, id }) {
  return (
    <div id={id} className="none modalbackground">
      <div className="modal">
        <div className="modalheader">
          <span className="modaltitle">{title}</span>
        </div>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}