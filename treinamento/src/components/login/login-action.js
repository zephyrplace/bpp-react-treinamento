import { METODOS } from "./login-constants";

export function setUsuario(event) {
    return {
        type: METODOS.SET_USUARIO,
        payload: event.target.value
    }
}

export function setSenha(event) {
    return {
        type: METODOS.SET_SENHA,
        payload: event.target.value
    }
}

export function setLogin(dados) {
    console.log("dados", dados)
    return (dispatch) => {
        return fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user": dados.usuario,
                "pass": dados.senha
            })
        }).then(
            response => (response.json().then(responseJson => dispatch({ type: METODOS.SET_LOGIN, payload: responseJson.payload.token }))),
            error => dispatch({ type: METODOS.SET_LOGIN_ERRO, payload: error })
        );
    }
}
