import { useEffect, useState } from "react";
import "./style.css"

function Quadrado({ valor, aoClicar }) {
    return <button onClick={aoClicar} className="quadrado">{valor}</button>
}


export default function JogoDaVelha() {

    const [quadrados, setQuadrados] = useState(Array(9).fill(""))
    const [Xrodada, setXrodada] = useState(true)
    const [status, setStatus] = useState('')

    function pegarVencedor(quadrados) {
        const padraoVitoria = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ]

        for (let i = 0; i < padraoVitoria.length; i++) {
            const [x, y, z] = padraoVitoria[i]

            if (quadrados[x] && quadrados[x] === quadrados[y] && quadrados[x] === quadrados[z]) {
                return quadrados[x]
            }
        }
        return null
    }

    function lidarClick(pegarQuadradoAtual) {
        let copiarQuadradros = [...quadrados]
        if (pegarVencedor(copiarQuadradros)||copiarQuadradros[pegarQuadradoAtual]) return
        copiarQuadradros[pegarQuadradoAtual] = Xrodada ? 'X' : 'O'
        setXrodada(!Xrodada)
        setQuadrados(copiarQuadradros)
    }

    function lidarRestart(){
        setXrodada(true)
        setQuadrados(Array(9).fill(""))
    }

     useEffect(()=> {
       if (!pegarVencedor(quadrados)&& quadrados.every(item=> item !== '')) {
        setStatus(`Esse   um empate !  Aperte o but o Restart para recome ar o jogo`)
       } else if (pegarVencedor(quadrados)) {
        setStatus(`O vencendor   ${pegarVencedor(quadrados)}`)
       } else {
        setStatus(`A proxima pe a   ${Xrodada ? 'X' : 'O'}`)
       } 
        
    
     }, [quadrados, Xrodada])

    return (

        <div className="ContainerJogoDaVelha">
            <div className="lado">
                <Quadrado valor={quadrados[0]} aoClicar={() => lidarClick(0)} />
                <Quadrado valor={quadrados[1]} aoClicar={() => lidarClick(1)} />
                <Quadrado valor={quadrados[2]} aoClicar={() => lidarClick(2)} />
            </div>
            <div className="lado">
                <Quadrado valor={quadrados[3]} aoClicar={() => lidarClick(3)} />
                <Quadrado valor={quadrados[4]} aoClicar={() => lidarClick(4)} />
                <Quadrado valor={quadrados[5]} aoClicar={() => lidarClick(5)} />
            </div>
            <div className="lado">
                <Quadrado valor={quadrados[6]} aoClicar={() => lidarClick(6)} />
                <Quadrado valor={quadrados[7]} aoClicar={() => lidarClick(7)} />
                <Quadrado valor={quadrados[8]} aoClicar={() => lidarClick(8)} />
            </div>
            <h1>{status}</h1>
            <button onClick={lidarRestart}>Restart</button>
        </div>
    )
}
