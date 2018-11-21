import React from 'react'
import Header from '../../Header/Header'
import { FiUsers, FiUserPlus, FiPhone, FiList, FiHome, FiCornerDownLeft } from "react-icons/fi"
import {getCep} from '../../../utils'
import './ClientesCreate.css'

export default class ClientesCreate extends React.Component {
    state = {
        cep: null,
        logradouro: null,
        complemento: null,
        bairro: null,
        cidade: null,
        uf: null,
        disabled: true
    }
    alterCep = async event => {
        const cep = event.currentTarget.value;
        this.setState({cep})
        if(cep.length === 8){
            const response = await getCep(cep)
            let {logradouro, complemento, bairro, localidade, uf} = response
            this.setState({ logradouro, complemento, bairro, cidade:localidade, uf, disabled: false })
        }
    }

    render () {
        let {cep, logradouro, complemento, bairro, cidade, uf, disabled} = this.state
    return (
        <div className="Container">
            <Header name="Cadastro de Clientes" icon={<FiUsers />}/>
            <div className="voltar">
                <span>Voltar</span>
                <FiCornerDownLeft/>
            </div>
            <div className="HeaderCadastroClientes">
                <span>Preencha os dados do cadastro</span>
            </div>
            <div className="formClient">
                
                <div className="formContainer">
                    <label htmlFor="nome">Nome</label>
                    <div className="formInput">
                        <input className="input" type="text" id="nome" placeholder="nome"/>
                        <span className="icon"><FiUserPlus/></span>
                    </div>
                </div>
                <div className="formContainer">
                    <div className="formInput">
                        <div className="inputLabel">
                            <label>Telefone</label>
                            <input className="input" type="text" id="nome" placeholder="Telefone"/>
                            <span className="icon"><FiPhone/></span>
                        </div>
                        <div className="inputLabel">
                            <label>Documento</label>
                            <input className="input" type="text" id="nome" placeholder="CPF"/>
                            <span className="icon"><FiList/></span>
                        </div>
                    </div>
                </div>
                <div className="formContainer">
                    <div className="formInput">
                        <div className="inputLabel">
                            <label>Cep</label>
                            <input className="input" value={cep} type="text" id="nome" placeholder="cep" maxLength={8} onChange={this.alterCep}/>
                            <span className="icon"><FiHome/></span>
                        </div>
                        <div className="inputLabel">
                            <label>Cidade</label>
                            <input className="input" type="text" id="nome" placeholder="Cidade" value={cidade} disabled={disabled}/>
                            <span className="icon"><FiHome/></span>
                        </div>
                    </div>
                </div>
                <div className="formContainer">
                    <div className="formInput">
                        <div className="inputLabel">
                            <label>Estado</label>
                            <input className="input" type="text" id="nome" placeholder="Estado" value={uf} disabled={disabled}/>
                            <span className="icon"><FiHome/></span>
                        </div>
                        <div className="inputLabel">
                            <label>Rua</label>
                            <input className="input" type="text" id="nome" placeholder="rua" value={logradouro} disabled={disabled}/>
                            <span className="icon"><FiHome/></span>
                        </div>
                    </div>
                </div>
                <div className="formContainer">
                    <div className="formInput">
                        <div className="inputLabel">
                            <label>Bairro</label>
                            <input className="input" type="text" id="nome" placeholder="bairro" value={bairro} disabled={disabled}/>
                            <span className="icon"><FiHome/></span>
                        </div>
                        <div className="inputLabel">
                            <label>Numero</label>
                            <input className="input" type="text" id="nome" placeholder="numero" disabled={disabled}/>
                            <span className="icon"><FiHome/></span>
                        </div>
                        <div className="inputLabel">
                            <label>Complemento</label>
                            <input className="input" type="text" id="nome" placeholder="complemento" value={complemento} disabled={disabled}/>
                            <span className="icon"><FiHome/></span>
                        </div>
                    </div>
                    <div className="formContainer">
                        <span className="btnAdicionarCliente">
                            Salvar
                        </span>
                    </div>
                </div>
            </div>
      </div>)
    }
}