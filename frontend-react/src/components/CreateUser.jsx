import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {

            id: this.props.match.params.id,
            nome: '',
            username: '',
            email: '',
            datNasc: ''
        }
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDatNascHandler = this.changeDatNascHandler.bind(this);
    }


    componentDidMount() {


        if (this.state.id === '_add') {
            return
        } else {
            UserService.getUserById(this.state.id).then((res) => {
                let user = res.data;
                this.setState({
                    nome: user.nome,
                    username: user.username,
                    email: user.email,
                    datNasc: user.datNasc
                });
            });
        }
    }

    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = { nome: this.state.nome, username: this.state.username, datNasc: this.state.datNasc };
        console.log('user => ' + JSON.stringify(user));


        if (this.state.id === '_add') {
            UserService.createUser(user).then(res => {
                this.props.history.push('/cadastros');
            });
        } else {
            UserService.updateUser(user, this.state.id).then(res => {
                this.props.history.push('/cadastros');
            });
        }
    }

    changeNomeHandler = (event) => {
        this.setState({ nome: event.target.value });
    }

    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changeDatNascHandler = (event) => {
        this.setState({ datNasc: event.target.value });
    }

    cancel() {
        this.props.history.push('/cadastros');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Novo Usuário</h3>
        } else {
            return <h3 className="text-center">Atualizar Usuário</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Nome: </label>
                                        <input placeholder="Nome Completo" name="nome" className="form-control"
                                            value={this.state.nome} onChange={this.changeNomeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Username: </label>
                                        <input placeholder="Nome de Usuário" name="username" className="form-control"
                                            value={this.state.username} onChange={this.changeUsernameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input placeholder="Email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Data de Nascimento: </label>
                                        <input placeholder="DD/MM/AAAA" name="datNasc" className="form-control"
                                            value={this.state.datNasc} onChange={this.changeDatNascHandler} />
                                    </div>
                                    <br />

                                    <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Salvar</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancelar</button>
                                </form>

                            </div>
                            
                        </div>
                        
                    </div>

                </div>
                <br />
            </div>
            
        )
    }
}

export default CreateUser