import React, { Component } from 'react';
import BannerHome from './BannerHome';

class Home extends Component {
    render() {
        return (
            <div class="container">

                <BannerHome/>

                <div class="my-5 rounded row text-center ">
                    <div class="d-inline p-5 bg-nav text-white h1 col">Melhores Preços</div>
                    <div class="d-inline p-5 bg-info text-white h1 col">Maior Segurança</div>
                    <div class="d-inline p-5 bg-nav text-white h1 col">Atendimento Especializado</div>

                </div>
            </div>

        )
    }
}

export default Home 