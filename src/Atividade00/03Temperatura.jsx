import React, { useState } from "react";

const Temperatura = () => {
  const [celcius, setCelcius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kel, setKel] = useState("");

  console.log(celcius);

  function celciusParaFahrenheit(c) {
    return (9 * c) / 5 + 32;
  }

  function fahrenheitParaCelcius(f) {
    return ((f - 32) / 9) * 5;
  }

  function kelvin(k) {
    const c = ((k - 273) / 5) * 5;
    const f = ((k - 273) / 5) * 9 + 32;

    return { c, f };
  }

  return (
    <div>
      <input
        type="text"
        name="celcius"
        placeholder="celcius para fahrenheit"
        value={celcius}
        onChange={({ target }) => setCelcius(target.value)}
      />
      <button onClick={celciusParaFahrenheit}>Calcular</button> {celcius}
      <input
        type="text"
        name="fahrenheit"
        placeholder="fahrenheit para celcius"
        value={fahrenheit}
        onChange={({ target }) => setFahrenheit(target.value)}
      />
      <input
        type="text"
        name="celcius"
        placeholder="kelvin para cel. e fahr."
        value={kel}
        onChange={({ target }) => setKel(target.value)}
      />
    </div>
  );
};

export default Temperatura;
