import { METODOS } from "./login-constants";

const ESTADO_INICIAL = {
    usuario: '',
    senha: '',
    token: undefined,
    erro: ""
}

export default (state = ESTADO_INICIAL, action) => {

    switch (action.type) {

        case METODOS.SET_USUARIO:
            return {
                ...state, usuario: action.payload
            }
        case METODOS.SET_SENHA:
            return {
                ...state, senha: action.payload
            }
        case METODOS.SET_LOGIN:
            return {
                ...state, token: action.payload
            }
        case METODOS.SET_LOGIN_ERRO:
            return {
                ...state, erro: action.payload
            }

        case 'login':
            return action.payload

        default:
            return state
    }
}

