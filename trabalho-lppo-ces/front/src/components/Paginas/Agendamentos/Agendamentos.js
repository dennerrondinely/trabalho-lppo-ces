import React from 'react'
import { FiUsers } from "react-icons/fi"
import Table from '../../Table/Table'
import Header from '../../Header/Header'
import { Link } from "react-router-dom";
import {GET} from '../../../utils/Api'
import './Agendamentos.css'

class Clientes extends React.Component {
  state = {
    eventos: ""
  };

  componentDidMount() {
    GET("eventos").then(resp => {
      console.log(resp)
      this.setState({ eventos: resp.slice(resp.length -5, resp.length) });
    });
  }

  render() {

    return (
      <div className="Container">
        <Header name="Agendamentos" icon={<FiUsers />} />
        <div className="Main">
          <div className="containerAgendamentos">
            <div className="titleContainerAgendamentos">
              <span>Agendamentos</span>
            </div>
            <div className="containerClienteAdicionar">
              <Link style={{ textDecoration: "none", color: "white" }} to="/Agendamentos/novo">
                <div className="btnAdicionarCliente">
                  <span>Adicionar</span>
                </div>
              </Link>
            </div>
            <div className="containerAgendamentosBackground">
              <div className="containerAgendamentosConteudo">
                <Table
                titulos={["Dia", "Nome", "Inicio", "Fim"]}
                linhas={this.state.eventos}
                history={this.props.history}
                tela={"eventos"}
                filter={true}
                delRow={true} />
              </div>
            </div>
          </div>
        </div>
      </div>)
  }
}

export default Clientes