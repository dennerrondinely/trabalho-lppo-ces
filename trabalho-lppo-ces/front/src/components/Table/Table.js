import React, { Component } from 'react'
import './Table.css'
import { GoSearch } from "react-icons/go"
import {TiDelete, TiEdit} from "react-icons/ti"
import moment from 'moment'
import {DELETE} from '../../utils/Api'
export default class Table extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) })
    }
    deletar = (event, rota) => {
        let linha = event.currentTarget.parentNode.parentNode.parentNode
        DELETE(rota)
        .then(linha.style.display = 'none')
    }
    render() {
        if (this.props.tela === "pecas") {
        let filteredLinhas = this.props.linhas ? this.props.linhas.filter(
            (linha) => {
                return linha.descricao.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        ) : [];
            return (
                <React.Fragment>
                    {this.props.filter && <div className="filter">
                        <input type="text" placeholder="Digite o que gostaria de buscar na tabela"
                            value={this.state.search}
                            onChange={this.updateSearch.bind(this)}
                        /><span><GoSearch /></span>
                    </div>}
                    <div className="table">
                        <div className="table-header-container">
                            <div className="table-row">
                                {this.props.titulos.map(titulo => <div className="table-header">{titulo}</div>)}
                                <div className="table-header">Ações</div>
                            </div>
                        </div>
                        <div className="table-body">
                            {filteredLinhas.map((linha, indice) =>
                                <tr className={indice % 2 === 0 ? "table-row" : "table-row-bordered"}>
                                    <div className="table-data">{linha.descricao}</div>
                                    <div className="table-data">{linha.data ? moment(linha.data).format('DD/MM/YYYY') : null}</div>
                                    <div className="table-data">{linha.observacao}</div>
                                    <div className="table-data">
                                        <div className="actionsTable">
                                            <span className="editarBtn" onClick={() => this.props.history.push(`/agendamentos/${linha.id}`)}>
                                            <TiEdit/>
                                            </span>
                                            <span className="deletarBtn" onClick={(event) => this.deletar(event, `pecas/${linha.id}`)}>
                                                <TiDelete/>
                                            </span>
                                        </div>
                                    </div>
                                </tr>
                            )}
                        </div>
                    </div>
                </React.Fragment>
            )
        } else if (this.props.tela === "eventos") {
            let filteredLinhas = this.props.linhas ? this.props.linhas.filter(
                (linha) => {
                    return linha.descricao.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            ) : [];
            return (
                <React.Fragment>
                    {this.props.filter && <div className="filter">
                        <input type="text" placeholder="Digite o que gostaria de buscar na tabela"
                            value={this.state.search}
                            onChange={this.updateSearch.bind(this)}
                        /><span><GoSearch /></span>
                    </div>}
                    <div className="table">
                        <div className="table-header-container">
                            <div className="table-row">
                                {this.props.titulos.map(titulo => <div className="table-header">{titulo}</div>)}
                                <div className="table-header">Ações</div>
                            </div>
                        </div>
                        <div className="table-body">
                            {filteredLinhas.map((linha, indice) =>
                                <tr className={indice % 2 === 0 ? "table-row" : "table-row-bordered"} >
                                    <div className="table-data">{linha.data}</div>
                                    <div className="table-data">{linha.descricao}</div>
                                    <div className="table-data">{linha.inicioEvento}</div>
                                    <div className="table-data">{linha.fimEvento}</div>
                                    <div className="table-data">
                                        <span className="editarBtn" onClick={() => this.props.history.push(`/agendamentos/${linha.id}`)}>
                                           <TiEdit/>
                                        </span>
                                        <span className="deletarBtn" onClick={(event ) => this.deletar(event,`eventos/${linha.id}`)}>
                                            <TiDelete/>
                                        </span>
                                    </div>
                                </tr>
                            )}
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}