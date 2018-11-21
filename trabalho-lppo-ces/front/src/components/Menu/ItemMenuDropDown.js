import React from 'react'
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default class ItemMenuDropDown extends React.Component {
    state = {
        open: false,
        style : {
            list: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'

            },
            ulList: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 0
            },
            listTitleOpen: {
                width: '108%',
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                background: '#2C5364'
            },
            listTitle: {
                width: '108%',
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
            },
            listItem: {
                marginTop: '10px',
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                borderBottom: 'none',
                textAlign:  'center',
                cursor: 'pointer'
            },
            icon: {
                top: '3px',
                left: '7%',
                position: 'relative'
            }
        }
    }
    renderListTitle = () => {
        const { style } = this.state
        const { name, icon } = this.props
        return (
            <div className="titleDropdown" 
                style={this.state.open ? style.listTitleOpen : style.listTitle} 
                onClick={() => this.setState({open: !this.state.open})}>
                 <span style={style.icon}>{icon}</span> 
                    <span> {name} </span> 
                <span style={{alignSelf: 'flex-end', marginLeft: '10px'}}>
                    { this.state.open ? <GoChevronUp /> : <GoChevronDown />}
                </span>
             </div>
        )
    }

    componentDidUpdate() {
        if(!this.props.isMenuOpened && this.state.open) {
            this.setState({open: false})
        }
    }
    renderItem = (name) => {
        const { style } = this.state
        return (
            <div style={this.state.style.listItem}>
                {name}
            </div>
        )
    }
    render() {
        return (<div style={this.state.style.list}>
                    {this.renderListTitle()}
                    {this.state.open &&
                        <div style={this.state.style.ulList}>
                        {this.renderItem('Estado das Peças')}
                        {this.renderItem('Unidades')}
                        </div>}
                </div>
        )
    }
}