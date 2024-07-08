import { useState } from "react";
import QRCode from "react-qr-code";



export default function QRCodeGerador(){

const [qrCode, setQrCode] = useState("");
const [input, setInput] = useState("");


function lidarGerarQrCode() {
    setQrCode(input);
    setInput('')
  }
    return(
      <div>
        <input 
        onChange={(e) => setInput(e.target.value)}
        type="text" 
        name="qr-code" 
        value={input}
        placeholder="Entre o valor aqui"/>
      <button
       disabled={input && input.trim() !== "" ? false : true}
      onClick={lidarGerarQrCode}
      >Gerar</button>
      <div>
        <QRCode
         id= "valor-qr-code" 
         value={qrCode} size={400} 
         bgColor="#fff"
        />
      </div>
    </div>  
    )
}