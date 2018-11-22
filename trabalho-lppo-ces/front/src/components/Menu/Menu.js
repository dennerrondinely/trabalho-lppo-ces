
import React, { Component } from 'react';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import BurguerIconMenu from './BurguerIconMenu'
import './Menu.css'
import ItemMenuDropDown from './ItemMenuDropDown'
import ItemMenu from './ItemMenu'
import { FiCalendar, FiUsers, FiSettings} from "react-icons/fi"
import { GoPaintcan, GoHome, GoGear } from "react-icons/go"
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')
export default class MenuApp extends Component {

  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false,
      isVisible: 'hidden'
    })
  }

  handleClick = () => {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }

  handleClose() {
    const {isMenuOpened} = this.state
    if(isMenuOpened) {
      this.setState({isMenuOpened: false})
    }
  }

  render() {
    return (
      <OffCanvas width={300} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={"left"}>
        <OffCanvasBody style={{fontSize: '20px'}}>
        <div style={{ display: 'flex', position: 'absolute', alignContent: 'flex-start', background: 'transparent', width: '100px', fontSize: '50px', left: '20px', zIndex: 999, top:'10px'}}>
          <BurguerIconMenu handleClick={this.handleClick} open={this.state.isMenuOpened} color="#2980b9"/>
        </div> 
          <div onClick={this.handleClose.bind(this)}>
          <ReactCSSTransitionGroup transitionName = "example"
            transitionAppear = {true} transitionAppearTimeout = {200}
            transitionEnter = {false} transitionLeave = {false}>
            {this.state.isMenuOpened && <div className="opacity" style={{ top: '-4vh', height:`110vh`, background: 'rgba(0, 0, 0, 0.5)', width: `100vw`, position: 'absolute', zIndex: 9999 }}/> }
            </ReactCSSTransitionGroup> 
              {this.props.children}
          </div>
        </OffCanvasBody>
        <OffCanvasMenu className="menuContainer">
          <div className="logoCes">
            <span>Museu</span>
            <span>Centro de Ensino Superior</span>
          </div>
          <ul className="listMenu">
            <li><ItemMenu name="Home" icon={<GoHome />} link="/" handleClick={this.handleClick}/> </li>
            <li><ItemMenu name="Agendamentos" icon={<FiCalendar />} link="/agendamentos" handleClick={this.handleClick}/></li>
            <li><ItemMenu name="Peças" icon={<GoPaintcan />} link="/pecas" handleClick={this.handleClick}/></li>
          </ul>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }
}
