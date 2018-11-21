package com.web.museu.dto;


import com.web.museu.domain.*;

import java.io.Serializable;
import java.util.Date;


public class EventoDTO implements Serializable {

   private static final long serialVersionUID = 1L;
   private Integer id;
   private String descricao;
   private Date data;
   private Date inicioEvento;
   private Date fimEvento;



    public EventoDTO() {
    }

    public EventoDTO(Evento obj) {
        this.id = obj.getIdEvento();
        this.data = obj.getData();
        this.inicioEvento = obj.getInicioEvento();
        this.fimEvento = obj.getFimEvento();
        this.setDescricao(obj.getDescricao());

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public Date getInicioEvento() {
        return inicioEvento;
    }

    public void setInicioEvento(Date inicioEvento) {
        this.inicioEvento = inicioEvento;
    }

    public Date getFimEvento() {
        return fimEvento;
    }

    public void setFimEvento(Date fimEvento) {
        this.fimEvento = fimEvento;
    }


    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
