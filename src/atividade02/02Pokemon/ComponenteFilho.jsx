import React, { useContext } from "react";
import ComponenteNeto from "./ComponenteNeto";
import { ContextoInteiro } from "./ContextoInteiro";

const ComponenteFilho = () => {
  const { inteiro, nextPokemon } = useContext(ContextoInteiro);

  return (
    <div>
      Filho
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${inteiro + 1}.png`}
      />
      <button onClick={() => nextPokemon()}>Próximo</button>
      <ComponenteNeto />
    </div>
  );
};

export default ComponenteFilho;
