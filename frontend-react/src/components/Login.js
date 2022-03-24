
import React, { Component } from 'react';

class Login extends Component {

    render() {
            return (
                <div>
                    <div class="container-fluid row bg-light">
                        <div class="col" widht="20%"></div>
                        <div class="col" widht="20%">
                            <form>
                                <br />
                                <h4>Ainda não tem cadastro?</h4>
                                <h5>Faça agora seu cadastro!</h5>
                                <br />

                                <div class="form-group">
                                    <label class="control-label">Nome</label>
                                    <input class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Email</label>
                                    <input class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Senha</label>
                                    <input class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Confirmação de Senha</label>
                                    <input class="form-control" />
                                </div>
                                <br />
                                <div class="form-group">
                                    <input type="submit" value="Realizar Cadastro" class="btn btn-success" />
                                </div>
                                <br />
                            </form>
                        </div>

                        <div class="col" widht="20%"></div>
                        <div class="col" widht="20%">
                            <form>
                                <br />
                                <h4>Entrar</h4>
                                <br />

                                <div class="form-group">
                                    <label class="control-label">Email</label>
                                    <input class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Senha</label>
                                    <input class="form-control" />
                                </div>

                                <br />
                                <div class="form-group">
                                    <input type="submit" value="Entrar" class="btn btn-success" /> |
                                    <a href=""><small> Esqueci minha senha</small></a>
                                </div>
                            </form>
                        </div>
                        <div class="col" widht="20%"></div>

                    </div>
                </div>
            )
        
    }
}
    export default Login
