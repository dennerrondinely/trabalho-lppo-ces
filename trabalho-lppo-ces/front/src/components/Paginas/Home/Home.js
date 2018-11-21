import React from "react";
import "./Home.css";
import { GoHome, GoClock, GoPaintcan, GoCalendar } from "react-icons/go";
import Header from "../../Header/Header";
import Table from "../../Table/Table";
import Grafico from "../../Grafico/Grafico";
import {GET} from '../../../utils/Api'

class Home extends React.Component {
  state = {
    linhas: "",
    eventos: ""
  };

  componentDidMount() {
    GET("pecas").then(resp => {
      console.log(resp)
      this.setState({ linhas: resp.slice(resp.length -5, resp.length) });
    });
    GET("eventos").then(resp => {
      console.log(resp)
      this.setState({ eventos: resp.slice(resp.length -5, resp.length) });
    });
  }
  render() {
    return (
      <div className="Container">
        <Header name="Inicio" icon={<GoHome />} />
        <div className="Main">
          <div className="row">
            <div className="containerVisitas">
              <div className="titleContainerVisitas">
                <span>Proximas Visitas</span>
                <span className="icon">
                  <GoClock />
                </span>
              </div>
              <div className="containerVisitaBackground">
                <div className="containerVisitaConteudo">
                  <Table
                    titulos={["Dia", "Nome"]}
                    linhas={this.state.eventos}
                    tela={"eventos"}
                  />
                </div>
              </div>
            </div>

            <div className="containerPecas">
              <div className="titleContainerPecas">
                <span>Ultimas Peças Adicionadas</span>
                <span className="icon">
                  <GoPaintcan />
                </span>
              </div>
              <div className="containerPecasBackground">
                <div className="containerPecasConteudo">
                  <Table
                    titulos={["Nome", "Data", "Descrição"]}
                    linhas={this.state.linhas}
                    tela={"pecas"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="containerGrafico">
              <div className="titleContainerPecas">
                <span>Visitas Durante o Ano</span>
                <span className="icon">
                  <GoCalendar />
                </span>
              </div>
              <Grafico />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
