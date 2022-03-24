import React, { Component } from 'react';
import ItemPromo from './ItemPromo';

import RiodeJaneiro from "../images/RiodeJaneiro.jpg"
import Recife from "../images/Recife.jpg"
import CidadedoMexico from "../images/CidadedoMexico.jpg"
import Lisboa from "../images/Lisboa.jpg"
import Londres from "../images/Londres.webp"
import Seul from "../images/Seul.jpg"
import Tokyo from "../images/Tokyo.jpg"
import Cairo from "../images/Cairo.jpg"


class Promocoes extends Component {

    render() {
        return (
            <div>

                <table width="100%" cellpading>
                    <tr>
                        <td class="td-lugares">
                            <ItemPromo src={RiodeJaneiro} nome="Rio de Janeiro" preco="219,96" promo="172,27" />
                        </td>
                        <td class="td-lugares">
                            <ItemPromo src={Recife} nome="Recife" preco="315,96" promo="249,74" />
                        </td>
                        <td class="td-lugares">
                            <ItemPromo src={CidadedoMexico} nome="Cidade do Mexico" preco="2476,06" promo="2128,43" />
                        </td>
                    </tr>
                    <tr>
                        <td class="td-lugares">
                            <ItemPromo src={Lisboa} nome="Lisboa" preco="3942,96" promo="3587,19" />
                        </td>
                        <td class="td-lugares">
                            <ItemPromo src={Londres} nome="Londres" preco="3157,06" promo="2681,83" />
                        </td>
                        <td class="td-lugares">
                            <ItemPromo src={Seul} nome="Seul" preco="4262,06" promo="3842,57" />
                        </td>
                    </tr>
                    <tr>
                        <td class="td-lugares">
                            <ItemPromo src={Tokyo} nome="Tóquio" preco="4128,06" promo="2579,65" />
                        </td>
                        <td class="td-lugares">
                            <ItemPromo src={Cairo} nome="Cairo" preco="3977,06" promo="3145,15" />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Promocoes