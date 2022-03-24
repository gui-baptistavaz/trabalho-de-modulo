
import React, { Component } from 'react'

class ItemTable extends Component {
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
                    <p class="preco"><small>a partir de R$  </small><strong>{this.props.preco}</strong></p>
                    <button className="btn btn-success btn-comprar" >Comprar</button>  
                    <hr />
                    <br />
                           
            </div>
        )
    }
}

export default ItemTable