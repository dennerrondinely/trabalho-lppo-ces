/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.web.museu.domain;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name = "Peca")
public class Peca implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idPeca")
    private Integer idPeca;
    @Column(name = "dataCadastro")
    private Date dataCadastro;
    @Column(name = "data")
    @Temporal(TemporalType.DATE)
    private Date data;
    @Column(name = "observacao")
    private String observacao;
    @Column(name = "codigoInterno")
    private String codigoInterno;
    @Column(name = "descricao")
    private String descricao;
    private String categoria;

    public Peca() {
    }

    public Peca(Integer id, Date dataCadastro, Date data, String observacao, String codigoInterno, String descricao,String idCategoria ) {
        this.idPeca = id;
        this.dataCadastro = dataCadastro;
        this.data = data;
        this.observacao = observacao;
        this.codigoInterno = codigoInterno;
        this.descricao = descricao;
        this.setIdCategoria(idCategoria);
    }
    public Peca(Integer idPeca) {
        this.idPeca = idPeca;
    }

    public Integer getIdPeca() {
        return idPeca;
    }

    public void setIdPeca(Integer idPeca) {
        this.idPeca = idPeca;
    }

    public Date getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(Date dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }

    public String getCodigoInterno() {
        return codigoInterno;
    }

    public void setCodigoInterno(String codigoInterno) {
        this.codigoInterno = codigoInterno;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getIdCategoria() {
        return categoria;
    }

    public void setIdCategoria(String idCategoria) {
        this.categoria = idCategoria;
    }
}
