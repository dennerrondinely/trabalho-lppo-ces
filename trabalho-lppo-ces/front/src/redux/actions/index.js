export const CLIENTE_CREATE = "CLIENTE_CREATE"
export const PECA_CREATE = "PECA_CREATE"
export const PECA_FILL = "PECA_FILL"
export const PECA_UPDATE = "PECA_UPDATE"

export const clienteCreate = (cliente) => ({
            type: CLIENTE_CREATE,
            cliente: cliente 
        }
    )

export const pecaCreate = (peca) => ({
        type: PECA_CREATE,
        peca
    }
)
export const pecaFill = (pecas) => ({
        type: PECA_FILL,
        pecas
    }
)
export const pecaUpdate = ({id, categoria, descricao, observacao}) => ({
        type: PECA_UPDATE,
        id,
        categoria,
        descricao,
        observacao
    }
)

