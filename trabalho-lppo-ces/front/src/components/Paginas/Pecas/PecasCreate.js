import React from "react";
import Header from "../../Header/Header";
import "./pecasCreate.css";
import { connect } from "react-redux"
import moment from 'moment'
import { FiUsers, FiUserPlus, FiCornerDownLeft, FiChevronDown } from "react-icons/fi"
import { pecaCreate } from '../../../redux/actions'
import { apiPost, GET, PUT } from '../../../utils/Api'
import { Redirect } from 'react-router'
class PecasCreate extends React.Component {
  state = {
    descricao: null,
    dataCadastro: null,
    categoria: 1,
    observacao: null,
    redirect: false,
    id: null
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id !== 'novo') {
      this.setState({ id })
      GET(`pecas/${id}`)
        .then(response => {
          this.setState({ descricao: response.descricao, observacao: response.observacao, categoria: response.idCategoria })
        })
    }
  }

  handleChange = (event) => {
    const value = event.currentTarget.value
    const target = event.currentTarget.name
    this.setState({ [target]: value })
  }
  handleClick = () => {
    const { descricao, categoria, observacao } = this.state

    if (this.state.id) {
      PUT(`pecas/${this.state.id}`, { descricao, idCategoria: categoria, observacao, data: moment().format() })
        .then(response => {
          this.props.history.push('/pecas')
        })
    } else {
      apiPost('pecas', { descricao, idCategoria: categoria, observacao, data: moment().format() })
        .then(response => {
          this.props.history.push('/pecas')
        })
    }
  }

  render() {
    const { descricao, categoria, observacao, redirect } = this.state
    return (
      <div className="Container">
        {redirect && <Redirect from="/pecas/create/" to="/pecas" />}
        <Header name="Cadastro de Peças" icon={<FiUsers />} />
        <div className="voltar" onClick={() => this.props.history.push('/pecas')}>
          <span>Voltar</span>
          <FiCornerDownLeft />
        </div>
        <div style={{ marginTop: '90px' }}>
          <span>Preencha os dados do cadastro</span>
        </div>
        <div className="formPecas">

          <div className="formContainer">
            <label htmlFor="nome">Nome</label>
            <div className="formInput">
              <input className="input" type="text" id="nome" placeholder="nome" name="descricao" value={descricao} onChange={this.handleChange} />
              <span className="icon"><FiUserPlus /></span>
            </div>
          </div>
          <div className="formContainer">
            <div className="formInput">
              <label>Estado de conservação</label>
              <select onChange={this.handleChange} value={categoria} name="categoria">
                <option value="1">Muito boa</option>
                <option value="2">Boa</option>
                <option value="3">Regular</option>
                <option value="4">Ruim</option>
              </select>
              <span className="icon"><FiChevronDown /></span>
            </div>
          </div>
          <div className="formContainer">
            <div className="formInput">
              <label>Descrição</label>
              <textarea value={observacao} name="observacao" onChange={this.handleChange}></textarea>
            </div>
          </div>
          <div className="formContainer">
            <span className="btnAdicionarCliente" onClick={this.handleClick}>
              Salvar
                  </span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ appReducer }) {
  return {
    ...appReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pecaCreate: (peca) => dispatch(pecaCreate(peca))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PecasCreate);
