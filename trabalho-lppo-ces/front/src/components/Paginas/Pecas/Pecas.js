import React from "react";
import "./Pecas.css";
import { GoPaintcan } from "react-icons/go";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import Table from "../../Table/Table";
import {GET} from '../../../utils/Api'
class Pecas extends React.Component {

  state = {
    linhas: ''
  }

componentDidMount() {
  GET('pecas').then(resp => {
    this.setState({ linhas: resp })
  })  
}

  render() {
    return (
      <div className="Container">
        <Header name="Peças" icon={<GoPaintcan />} />
        <div className="Main">
          <div className="containerClientes">
            <div className="titleContainerClientes">
              <span>Peças</span>
            </div>
            <div className="containerClienteAdicionar">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/pecas/novo"
              >
                <div className="btnAdicionarCliente">
                  <span>Adicionar</span>
                </div>
              </Link>
            </div>
            <div className="containerClientesBackground">
              <div className="containerClientesConteudo">
                <Table
                  titulos={["Nome", "Data", "Descrição"]}
                  linhas={this.state.linhas}
                  filter={true}
                  history={this.props.history}
                  tela={"pecas"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pecas;
