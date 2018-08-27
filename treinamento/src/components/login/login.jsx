import React, { Component } from 'react'
import * as actions from './login-action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Button } from 'react-bootstrap'

class Login extends Component {
    render() {
        return (
            <div>
                <span>Usuario</span>
                <input type="text" onChange={this.props.setUsuario} value={this.props.login.usuario} />
                <br />

                <span>Senha</span>
                <input type="password" onChange={this.props.setSenha} value={this.props.login.senha}></input>

                <br />
                <Button onClick={() => this.props.setLogin(this.props.login)}>Login</Button>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.LoginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)