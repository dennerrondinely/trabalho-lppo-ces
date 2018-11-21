import React from 'react'
import { FiUsers } from "react-icons/fi"
import Table from '../../Table/Table'
import Header from '../../Header/Header'
import { Link } from "react-router-dom";
import './Clientes.css'

function Clientes(props) {
    return (
        <div className="Container">
            <Header name="Clientes" icon={<FiUsers />}/>
          <div className="Main">
            <div className="containerClientes">
              <div className="titleContainerClientes">
                <span>Clientes</span>
              </div>
              <div className="containerClienteAdicionar">
                <Link style={{textDecoration: "none", color: "white"}} to="/clientes/novo">
                    <div className="btnAdicionarCliente">
                        <span>Adicionar</span>
                    </div>
                </Link>
              </div>
              <div className="containerClientesBackground">
                <div className="containerClientesConteudo">
                  <Table titulos={['Nome', 'Endereço', 'Cidade', 'Telefone']} linhas={[ ['Davi Firmino', 'Rua Luiz Sansao, 50', 'Juiz de Fora','(32) 99144-6173'], ['Denner', 'Rua dos Viados, 24', 'Juiz de Fora','(32) 99155-2567'] ]} filter={true}/>
                </div>
              </div>
            </div>
          </div>
        </div> )
}

export default Clientes