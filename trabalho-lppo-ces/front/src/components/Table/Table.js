import React, { Component } from 'react'
import './Table.css'
import { GoSearch } from "react-icons/go";
import moment from 'moment'
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
    render() {
        if (this.props.tela === "pecas") {
        let filteredLinhas = this.props.linhas ? this.props.linhas.filter(
            (linha) => {
                return linha.observacao.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
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
                            </div>
                        </div>
                        <div className="table-body">
                            {filteredLinhas.map((linha, indice) =>
                                <tr className={indice % 2 === 0 ? "table-row" : "table-row-bordered"} onClick={() => this.props.history.push(`/pecas/${linha.id}`)}>
                                    <div className="table-data">{linha.descricao}</div>
                                    <div className="table-data">{linha.data ? moment(linha.data).format('DD/MM/YYYY') : null}</div>
                                    <div className="table-data">{linha.observacao}</div>
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
                            </div>
                        </div>
                        <div className="table-body">
                            {filteredLinhas.map((linha, indice) =>
                                <tr className={indice % 2 === 0 ? "table-row" : "table-row-bordered"} onClick={() => this.props.history.push(`/agendamentos/${linha.id}`)}>
                                    <div className="table-data">{linha.data}</div>
                                    <div className="table-data">{linha.descricao}</div>
                                    <div className="table-data">{linha.inicioEvento}</div>
                                    <div className="table-data">{linha.fimEvento}</div>
                                </tr>
                            )}
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}