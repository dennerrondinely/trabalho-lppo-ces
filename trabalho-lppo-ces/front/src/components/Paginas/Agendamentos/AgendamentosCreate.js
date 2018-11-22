import React from 'react'
import Header from '../../Header/Header'
import { FiUsers, FiUserPlus, FiPhone, FiList, FiHome, FiCornerDownLeft } from "react-icons/fi"
import { GoCalendar } from "react-icons/go";
import './AgendamentosCreate.css'
import moment from 'moment'
import { apiPost, GET, PUT } from '../../../utils/Api'
import { Redirect } from 'react-router'

class AgendamentosCreate extends React.Component {

    state = {
        descricao: null,
        data: null,
        inicioEvento: null,
        fimEvento: null,
        redirect: false,
        id: null
    }

    componentDidMount() {
        const {id} = this.props.match.params
        if(id !== 'novo') {
          this.setState({id})
          GET(`eventos/${id}`)
          .then(response => {
            console.log(response)
            this.setState({descricao: response.descricao, inicioEvento: response.inicioEvento, fimEvento: response.fimEvento, data: response.data})
          })
        }
      }
  
      handleChange = (event) => {
        const value = event.currentTarget.value
        const target = event.currentTarget.name
        this.setState({[target]:value})
      }
      handleClick = () => {//T14:32:02-02:00 T14:32:02-02:00
        let {descricao, inicioEvento, fimEvento, data} = this.state
        const {id} = this.props.match.params
        
        if(this.state.id){
          PUT(`eventos/${this.state.id}`,{id, descricao, inicioEvento: `2018-11-21T${inicioEvento}-02:00`, fimEvento: `2018-11-21T${fimEvento}-02:00`, data: `${data}T14:32:02-02:00`})
          .then(response => { 
            this.props.history.push('/agendamentos')
          })
        }else {
          apiPost('eventos',{id: 0, descricao, inicioEvento: `2018-11-21T${inicioEvento}-02:00`, fimEvento: `2018-11-21T${fimEvento}-02:00`, data: `${data}T14:32:02-02:00`})
          .then(response => { 
            this.props.history.push('/agendamentos')
          })
        }
        
        
      }

    render() {
        const {descricao, inicioEvento, fimEvento, data} = this.state
        return (
            <div className="Container">
                <Header name="Cadastro de Agendamentos" icon={<FiUsers />} />
                <div className="voltar" onClick={() => this.props.history.push('/agendamentos')}>
                    <span>Voltar</span>
                    <FiCornerDownLeft />
                </div>
                <div className="HeaderCadastroAgendamentos">
                    <span>Preencha os dados do cadastro</span>
                </div>
                <div className="formClient">

                    <div className="formContainer">
                        <label htmlFor="nome">Nome</label>
                        <div className="formInput">
                            <input className="input" type="text" id="descricao" name="descricao" value={descricao} onChange={this.handleChange}/>
                            <span className="icon"><FiUserPlus /></span>
                        </div>
                    </div>
                    <div className="formContainer">
                        <label htmlFor="nome">Data</label>
                        <div className="formInput">
                            <input className="input" type="date" id="data" name="data" value={data} onChange={this.handleChange}/>
                            <span className="icon"><GoCalendar /></span>
                        </div>
                    </div>
                    <div className="formContainer">
                        <div className="formInput">
                            <div className="inputLabel">
                                <label>Inicio</label>
                                <input className="input" type="time" id="inicioEvento" placeholder="Inicio" name="inicioEvento" value={inicioEvento} onChange={this.handleChange}/>
                                <span className="icon"><GoCalendar /></span>
                            </div>
                            <div className="inputLabel">
                                <label>Fim</label>
                                <input className="input" type="time" id="fim" placeholder="Fim" name="fimEvento" value={fimEvento} onChange={this.handleChange}/>
                                <span className="icon"><GoCalendar /></span>
                            </div>
                        </div>
                    </div>
                    <div className="formContainer">                        
                        <div className="formContainer">
                            <span className="btnAdicionarCliente" onClick={this.handleClick}>
                                Salvar
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AgendamentosCreate