import React, { Component } from 'react';
import fernandonoronha from "../images/fernandonoronha.jpg"

class BannerHome extends Component {
    render() {
        return (
            <div>

                <img src={fernandonoronha} class="img-fluid" alt="banner home" />
                <div class="topleft">Conheça lugares deslubrantes! </div>

            </div>

        )
    }
}

export default BannerHome 