import React, { Component } from 'react';
import ItemTable from './ItemTable';

import fernandonoronha from "../images/fernandonoronha.jpg"
import BeloHorizonte from "../images/BeloHorizonte.jpg"
import Salvador from "../images/Salvador.jpg"
import Curitiba from "../images/Curitiba.jpg"
import SaoPaulo from "../images/SaoPaulo.jpg"
import Florianopolis from "../images/Florianopolis.jpg"
import Londrina from "../images/Londrina.jpg"
import Cuiaba from "../images/Cuiaba.jpg"
import Teresina from "../images/Teresina.jpg"
import Goiania from "../images/Goiania.jpg"
import RioBranco from "../images/RioBranco.jpg"
import Manaus from "../images/Manaus.jpg"
import BuenosAires from "../images/BuenosAires.jpg"
import Santiago from "../images/Santiago.jpg"
import Montevideu from "../images/Montevideu.jpg"
import Orlando from "../images/Orlando.jpg"
import Miami from "../images/Miami.jpg"
import LosAngeles from "../images/LosAngeles.webp"
import Paris from "../images/Paris.jpeg"
import Berlim from "../images/Berlim.jpg"
import Roma from "../images/Roma.jpg"
import HongKong from "../images/HongKong.jpg"
import CapeTown from "../images/CapeTown.webp"
import Sydney from "../images/Sydney.jpg"


class Home extends Component {
    render() {
        return (
            <div>
                <table width="100%" cellpading>
                    <tr>
                        <td class="td-lugares">
                            <ItemTable src={fernandonoronha} nome="Fernando de Noronha" preco="339,96"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={BeloHorizonte} nome="Belo Horizonte" preco="158,96"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={Salvador} nome="Salvador" preco="248,96"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-lugares">
                            <ItemTable src={Curitiba} nome="Curitiba" preco="248,96"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={SaoPaulo} nome="São Paulo" preco="228,06"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={Florianopolis} nome="Florianópolis" preco="233,06"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-lugares">
                            <ItemTable src={Londrina} nome="Londrina" preco="266,96"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={Cuiaba} nome="Cuiabá" preco="327,96"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={Teresina} nome="Teresina" preco="334,06"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-lugares">
                            <ItemTable src={Goiania} nome="Goiânia" preco="417,96"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={RioBranco} nome="Rio Branco" preco="591,06"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={Manaus} nome="Manaus" preco="617,06"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-lugares">
                            <ItemTable src={BuenosAires} nome="Buenos Aires" preco="1574,96"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={Santiago} nome="Santiago" preco="1437,06"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={Montevideu} nome="Montevidéu" preco="2182,96"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-lugares">
                            <ItemTable src={Orlando} nome="Orlando" preco="3182,96"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={Miami} nome="Miami" preco="3743,96,00"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={LosAngeles} nome="Los Angeles" preco="4084,96"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-lugares">
                            <ItemTable src={Paris} nome="Paris" preco="4250,06"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={Berlim} nome="Berlim" preco="3987,96"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={Roma} nome="Roma" preco="3849,06"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="td-lugares">
                            <ItemTable src={HongKong} nome="Hong Kong" preco="6273,06"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={CapeTown} nome="Cape Town" preco="5972,60"/>
                        </td>
                        <td class="td-lugares">
                            <ItemTable src={Sydney} nome="Sydney" preco="6142,06"/>
                        </td>
                    </tr>
                </table>
            </div>

        )
    }
}

export default Home 