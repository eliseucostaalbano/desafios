import { useEffect, useState } from "react";

export default function CorAleatoria() {
  const [tipoCor, setTipoCor] = useState("hex");
  const [cor, setCor] = useState("#000000");

     function corAleatoriaUtilidade(length) {
    return Math.floor(Math.random() * length);
  }


  function lidarCriarHexCorAleatoria() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexCor = "#";

    for (let i = 0; i < 6; i++) {
      hexCor += hex[corAleatoriaUtilidade(hex.length)];
    }
    setCor(hexCor);
  }

  function lidarCriarRgbCorAleatoria() {
    const r = corAleatoriaUtilidade(256);
    const g = corAleatoriaUtilidade(256);
    const b = corAleatoriaUtilidade(256);

    setCor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (tipoCor === "rgb") lidarCriarRgbCorAleatoria();
    else lidarCriarHexCorAleatoria();
  }, [tipoCor]);

  return (
    <>
    
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: cor,
      }}
    >
      <button onClick={() => setTipoCor("hex")}>Criar Cor Hex</button>
      <button onClick={() => setTipoCor("rgb")}>Criar Cor RGB</button>
      <button
        onClick={
          tipoCor === "hex"
            ? lidarCriarHexCorAleatoria
            : lidarCriarRgbCorAleatoria
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{tipoCor === "rgb" ? "Cor RGB" : " Cor HEX "}</h3>
        <h2>{cor}</h2>
      </div>
    </div>
    
    </>
  )
}
