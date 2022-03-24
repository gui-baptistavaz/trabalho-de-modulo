import React, { Component } from 'react'
import logoH from '../images/logoH.jpeg'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm navbar-toggleable-sm bg-nav border-bottom box-shadow mb-3">
                    <div class="container-fluid">
                        <a class="navbar-brand nav-logo" href="http://localhost:3000/"><img src={logoH} class="nav-logo" /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="navbar-collapse collapse  bg-nav">
                            <ul class="navbar-nav flex-grow-1 row-cols-6">

                                <li class="nav-item col">
                                    <a class="nav-link text-white small" href="http://localhost:3000/destinos">Destinos</a>
                                </li>
                                <li class="nav-item col">
                                    <a class="nav-link text-white small" href="http://localhost:3000/promocoes">Promoções</a>
                                </li>
                                <li class="nav-item col">
                                    <a class="nav-link text-white small" href="http://localhost:3000/contatos">Contatos</a>
                                </li>
                            </ul>
                        </div>
                        <div class="align-right small nav-item"><a class="nav-link text-white" href="http://localhost:3000/cadastros">Cadastros</a></div>

                        <div class="align-right small nav-item"><a class="nav-link text-white" href="http://localhost:3000/login">Login</a></div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header