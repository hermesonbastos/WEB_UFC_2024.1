import React from "react";
import MeusDados from "./Atividade00/02MeusDados";
import "./App.css";
import Temperatura from "./Atividade00/03Temperatura";
import Pai from "./atividade01/questao01/01Pai";
import * as PC from "./atividade01/02MeuPC";
import { Arena, Enemy, Hero, World } from "./atividade01/03Batalha";
import * as bnh from "./atividade01/Imagens";
import FunctionContextA from "./atividade02/FunctionContextA";
import ComponenteAvo from "./atividade02/02Pokemon/ComponenteAvo";

const App = () => {
  return (
    <div>
      {/* Atividade 01 */}
      {/* <h4>Questão 01</h4>
      <Pai />
      <br />

      <h4>Questão 02</h4>
      <PC.PlacaMae nome="GIGABYTE B450" preco="R$ 648,87" />
      <PC.Memoria nome="VALKYRIE V5 8GB" preco="R$ 158,87" />
      <PC.PlacaDeVideo nome="RTX 4060 8GB" preco="R$ 2098,00" />
      <br />

      <h4>Questão 03</h4>
      <div>
        <World>
          <Arena arena="U.A. High School">
            <Hero name="Mirio Togata" img={bnh.mirio} />
            <span>
              <strong>VS</strong>
            </span>
            <Enemy name="Overhaul" img={bnh.overhaul} />
          </Arena>
          <Arena arena="Class 1-A">
            <Hero name="All Might" img={bnh.all_might} />
            <span>
              <strong>VS</strong>
            </span>
            <Enemy name="One For All" img={bnh.one_for_all} />
          </Arena>
          <Arena arena="Musutafu, Japan">
            <Hero name="Bakugo" img={bnh.bakugo} />
            <span>
              <strong>VS</strong>
            </span>
            <Enemy name="Deku" img={bnh.deku} />
          </Arena>
        </World>
      </div>
      <br /> */}

      {/* Atividade 02 */}
      <h4>Questão 01</h4>
      <FunctionContextA />
      <h4>Questão 02</h4>
      <ComponenteAvo />
      <h4>Questão 03</h4>
      
    </div>
  );
};

export default App;
