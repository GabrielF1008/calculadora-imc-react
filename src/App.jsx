import { useState } from "react"

function App() {
  let [altura, setAltura] = useState(parseInt(0))
  let [peso, setPeso] = useState(parseInt(0))

  const renderizaIMC = () => {
    altura = altura / 100
    const soma = peso / (altura * altura)
    const media = soma 

    if(media <= 16.9){
      return (
        <p>Muito abaixo do peso</p>
      )
    } else if (media >= 17 && media <= 18.4) {
      return (
        <p>Abaixo do peso</p>
      )
    } else if (media >= 18.5 && media <= 24.9 ) {
      return (
        <p>Peso normal</p>
      )
    } else if (media >= 25 && media <= 29.9 ) {
      return (
        <p>Acima do peso</p>
      )
    }
    else if (media >= 30 && media <= 34.9 ) {
      return (
        <p>Obesidade grau 1</p>
      )
    }
    else {
      return (
        <p>Obesidade grau 2</p>
      )
    }
  }

  return (
    <>
      <form action="#">
        <input type="number" placeholder="Altura em centímetros" onChange={evento => setAltura(evento.target.value)}/>
        <br /> <br />
        <input type="number" placeholder="Peso em kg" onChange={evento => setPeso(evento.target.value)}/>
        <br />
        <br />
        <hr />
        {renderizaIMC()}
      </form>
    </>
  )
}

export default App
