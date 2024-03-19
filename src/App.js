import React from 'react'
import MeusDados from './Atividade00/02MeusDados'
import './App.css'
import Temperatura from './Atividade00/03Temperatura'
import Pai from './atividade01/questao01/01Pai'
import * as PC from './atividade01/02MeuPC';

const App = () => {
  return (
    <div>
      {/* <MeusDados nome="Hermeson Bastos" curso="Sistemas de Informação" campus="Universidade Federal do Ceará" /> */}
      {/* <Temperatura /> */}

      {/* Atividade 01 */}
      <h4>Questão 01</h4>
      <Pai />

      <br />

      <h4>Questão 02</h4>
      <PC.PlacaMae nome="GIGABYTE B450" preco="R$ 648,87" />
      <PC.Memoria nome="VALKYRIE V5 8GB" preco="R$ 158,87" />
      <PC.PlacaDeVideo nome="RTX 4060 8GB" preco="R$ 2098,00" />
    </div>
  )
}

export default App