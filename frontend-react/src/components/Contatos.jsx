import React, { Component } from 'react';
import RiodeJaneiro from "../images/RiodeJaneiro.jpg"
import SaoPaulo from "../images/SaoPaulo.jpg"


class Contatos extends Component {
    render() {
        return (

            <table class="container">
                <tr>
                    
                    <th>
                        <div class="col text-center h3">
                            <p>Rio de Janeiro</p>
                            <p>atendimento.rj@varigui.br</p>
                            <p>(21) 2222-2222</p>
                        </div>
                    </th>
                    <td class="text-center">
                        <img src={RiodeJaneiro} alt="Rio de Janeiro" class="col img-lj" />
                    </td>
                </tr>
                <hr/>
                <tr>
                    <th>
                        <div class="col text-center h3">
                            <p>São Paulo</p>
                            <p>atendimento.sp@varigui.br</p>
                            <p>(11) 2222-2222</p>
                        </div>
                    </th>
                    <td class="text-center">
                        <img src={SaoPaulo} alt="São Paulo" class="col img-lj" />
                    </td>
                </tr>           
            </table>

        )
    }
}

export default Contatos 