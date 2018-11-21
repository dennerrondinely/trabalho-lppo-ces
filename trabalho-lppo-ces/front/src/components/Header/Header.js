import React from 'react'
import './Header.css'
function Header(props) {
    return (
            <div className="Header">
              <span>{props.name}</span><span className="IconHeader">{props.icon}</span>
            </div> )
  }

export default Header