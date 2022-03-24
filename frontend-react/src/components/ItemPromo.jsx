
import React, { Component } from 'react'

class ItemPromo extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>   
                    <img src={this.props.src} alt={this.props.nome} class="img-td" />
                    <br />
                    <p class="descricao">{this.props.nome}</p>
                    <p class="preco"><small>de </small><s>R$ {this.props.preco}</s></p>
                    <p class="text-danger"><small>por </small>R$ <strong>{this.props.promo}</strong></p>
                    <button className="btn btn-success btn-comprar" >Comprar</button>  
                    <hr />
            </div>
        )
    }
}

export default ItemPromo