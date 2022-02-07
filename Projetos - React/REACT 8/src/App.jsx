
import React from "react";
import './App.css'

import Primeiro from "./components/basicos/Primeiro";
import Segundo from './components/basicos/Segundo'
import ComParamentro from './components/basicos/ComParamentro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from './components/mega/Mega'


export default (props) =>(
    <div className="App">
        <Card titulo="#00 - Exercicio" color="#888888">
            conteudo
        </Card>
        <Card titulo="#01 - Primeiro Componente" color="#92B06A">
            <Primeiro />
        </Card>
        <Card titulo="#02 - Segundo Componente" color="#FF85CB">
            <Segundo/>
        </Card>
        <Card titulo="#03 - Componente Com Paramentro" color="#D96459">
            <ComParamentro titulo="esse eo titulo novo" subtitulo="esse e o novo subtitulo" />    
            <ComParamentro titulo="rechamando o paramentro" subtitulo="esse e o novo subtitulo" />
        </Card>
        <Card titulo="#04 - Componente Com filhos" color="#008BBA">
            <ComFilhos>
                <ul>
                    <li>Jefferson</li>
                    <li>Jasmine</li>
                    <li>Kiara</li>
                    <li>Lydia</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#05 - Repetição" color="#E94C6F">
            <Repeticao/>
        </Card>
        <Card titulo="#06 - Condicional v1" color="#FA6900">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#07 - Condicional v2" color="#FA6960">
            <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>
        
        <Card titulo="#08 - Comunicação Direta" color="#4298B5">
            <Pai sobrenome="Santos"></Pai>
        </Card>

        <Card titulo="#09 - Comunicação Indireta" color="#000">
            <Super></Super>
        </Card>

        <Card titulo="#10 - Input" color="#9C0F5F">
            <Input></Input>
        </Card>

        <Card titulo="#11 - Contador" color="#293E6A">
            <Contador passo={10} valor={100}></Contador>
        </Card>
        <Card titulo="#12 - Mega" color="#73503C">
        <Mega qtdeNumero={8}></Mega>
        </Card>
    </div>
);