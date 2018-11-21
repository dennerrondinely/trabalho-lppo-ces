import {CLIENTE_CREATE, PECA_CREATE, PECA_FILL, PECA_UPDATE} from '../actions/index'

export default function appReducer (state = {pecas: []}, action) {
    switch(action.type) {
        case CLIENTE_CREATE:
            return {
                ...state,
                clientes: [ ...state.cliente, action.cliente ]
            }
            case PECA_CREATE:
            return {
                ...state,
                pecas: [ ...state.pecas, action.peca ]
            }
            case PECA_FILL:
            return {
                ...state,
                pecas: action.pecas
            }
            case PECA_UPDATE:
            return {
                ...state,
                pecas: state.pecas.map(peca => {
                    if (peca.id === action.id) {
                        peca.descricao = action.descricao
                        peca.categoria = action.categoria
                    }
                    return peca
                })
}
        default :
            return state
    }
}