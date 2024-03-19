import { useState } from "react";
import Filho from "./02Filho";

export default function Pai() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [submetido, setSubmetido] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmetido(true);
  }

  function handleChange(event, setFunc) {
    setFunc(event.target.value);
    setSubmetido(false);
  }

  return (
    <div
      className="imc"
      style={{ display: "flex", flexDirection: "column", width: "10rem" }}
    >
      <form onSubmit={handleSubmit}>
        <input
          placeholder="peso em Kg"
          type="number"
          name="peso"
          value={peso}
          onChange={(event) => handleChange(event, setPeso)}
        />
        <input
          placeholder="altura em m"
          type="number"
          name="altura"
          value={altura}
          onChange={(event) => handleChange(event, setAltura)}
        />
        <button>Verificar</button>
      </form>
      {submetido && <Filho altura={altura} peso={peso} />}
    </div>
  );
}
