import React, { useContext } from "react";
import { ContextoInteiro } from "./ContextoInteiro";

const ComponenteNeto = () => {
  const { inteiro, nextPokemon } = useContext(ContextoInteiro);

  return (
    <div>
      Neto
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${inteiro + 2}.png`}
      />
      <button onClick={() => nextPokemon()}>Próximo</button>
    </div>
  );
};

export default ComponenteNeto;
