import React, { Component } from 'react';
import formadepagamento from '../images/formadepagamento.jpg';

class Footer extends Component {
    
    render() {
        return (
            <div>
                <footer class="border-top bg-nav">
                    <div class="container text-white my-2 ">
                        
                        <div ><img src={formadepagamento} class="rounded float-right" id="img1" alt="Formas de Pagamento" /></div>
                        <div> &copy; 2022 - VariGUI Airlines - Rio de Janeiro/RJ</div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer