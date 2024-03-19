export default function Filho({ altura, peso }) {

  const IMC = (altura, peso) => peso / (altura * altura);
  const current_imc = IMC(altura, peso);

  if(current_imc < 18) return <h3>Abaixo do peso</h3>
  if(current_imc > 25) return <h3>Acima do peso</h3>
  else return <h3>Peso ideal</h3>
}
