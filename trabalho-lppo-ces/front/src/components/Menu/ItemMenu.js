import React from 'react'
import { Link } from "react-router-dom";

export default class ItemMenu extends React.Component {
    state = {
        open: false,
        style : {
            list: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'

            },
            listTitle: {
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignContent: 'center',
                alignItems: 'center',
                fontSize: '20px'
            },
            icon: {
                top: '3px',
                left: '10px',
                position: 'relative',
                marginRight: '30px'
            },
            link: {
                color: 'white',
                margin: 'inherit',
                padding:'inherit',
                textDecoration: 'none',
                width: '100%',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center'
            
              }
        }
    }
    renderListTitle = () => {
        const { style } = this.state
        const { name, icon } = this.props
        return (
            <Link to={this.props.link} style={style.link} onClick={this.props.handleClick}>
                <div style={style.listTitle} onClick={() => this.setState({open: !this.state.open})}>
                    <span style={style.icon}>{icon}</span> <span>{name} </span>
                </div>
             </Link>
        )
    }



    render() {
        const { style } = this.state
        return (<div style={this.state.style.list}>
                   {this.renderListTitle()}
                </div>
        )
    }
}