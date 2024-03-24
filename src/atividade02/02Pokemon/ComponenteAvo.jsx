import React, { createContext, useState } from 'react'
import ComponenteFilho from './ComponenteFilho'
import { ContextoInteiro } from './ContextoInteiro';

const ComponenteAvo = () => {
  const [inteiro, setInteiro] = useState(1);

  function nextPokemon() {
    setInteiro((i) => i + 1);
  }

  return (
    <div style={{ width: "40rem", display: "flex" }}>
      <ContextoInteiro.Provider value={{ inteiro, nextPokemon }}>
        Avô
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${inteiro}.png`} />
        <ComponenteFilho />
      </ContextoInteiro.Provider>
    </div>
  )
}

export default ComponenteAvo