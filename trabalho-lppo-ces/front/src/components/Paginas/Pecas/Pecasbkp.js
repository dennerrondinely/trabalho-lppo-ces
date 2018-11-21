import React from 'react'
import './Pecas.css'
import { GoHome, GoClock, GoPaintcan } from "react-icons/go"
import Header from '../../Header/Header'
import Table from '../../Table/Table'
function Home(props) {
    return (
          <div className="Container">
              <Header name="Inicio" icon={<GoHome />}/>
            <div className="mainPecas">
            <div className="containerPecas">
                <div className="titleContainerPecas">
                  <span>Cadastro de peças</span><span className="icon"><GoPaintcan/></span>
                </div>
                <div className="containerPecasBackground">
                  <div className="containerPecasConteudo cadastroPecas">
                    <label>Nome da peça</label>
                    <input type="text" className="namePeca"/>
                    <label>Estado de conservação</label>
                    <select className="estadoPeca">
                      <option>Seleciona um estado</option>
                      <option>Bom</option>
                      <option>Medio</option>
                      <option>Ruim</option>
                    </select>
                    <label>Descrição</label>
                    <textarea className="descricaoPeca"></textarea>                  
                    <div className="btnSalvaPeca">Salvar</div>
                  </div>
                </div>
              </div>
              <div className="containerPecas">
                <div className="titleContainerPecas">
                  <span>Ultimas Peças Adicionadas</span><span className="icon"><GoPaintcan/></span>
                </div>
                <div className="containerPecasBackground">
                  <div className="containerPecasConteudo">
                    <Table titulos={['Dia', 'Descriçao']} linhas={[ ['18/10/2018 10:05', 'Quadro de Da Vinci'], ['20/10/2018 11:15', 'Quadro de Alejadinho'] ]} />
                  </div>
                </div>
              </div>
            </div>
          </div> )
  }

export default Home