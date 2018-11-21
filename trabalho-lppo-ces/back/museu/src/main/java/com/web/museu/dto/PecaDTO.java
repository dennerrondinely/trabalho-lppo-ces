package com.web.museu.dto;


import com.web.museu.domain.Peca;

import java.io.Serializable;
import java.util.Date;

public class PecaDTO implements Serializable {

    private static final long serialVersionUID = 1L;
    private Integer  id;
    private Date dataCadastro;
    private Date data;
    private String observacao;
    private String codigoInterno;
    private String descricao;
    private String idCategoria;

    public PecaDTO() {
    }

    public PecaDTO(Peca obj) {
        this.setId(obj.getIdPeca());
        this.setDataCadastro(obj.getDataCadastro());
        this.setData(obj.getData());
        this.setObservacao(obj.getObservacao());
        this.setCodigoInterno(obj.getCodigoInterno());
        this.setDescricao(obj.getDescricao());
        this.setIdCategoria(obj.getIdCategoria());

    }


    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
        return idCategoria;
    }

    public void setIdCategoria(String idCategoria) {
        this.idCategoria = idCategoria;
    }
}

