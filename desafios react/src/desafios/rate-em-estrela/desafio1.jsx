import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css';

export default function RateEstrela({noEstrela = 5}){
    const [rating, setRating] =useState(0)
    const [hover, setHover ] =useState(0)

    function lidarClick(getIndexAtual){
     setRating(getIndexAtual)
    }

    function lidarMouseEnter(getIndexAtual){
        setHover(getIndexAtual)
    }

    function lidarMouseLeave(){
        setHover(rating)
    }



  return (
<div className="rate">
  {[...Array(noEstrela)].map((_, index) => {
    index+= 1
    return(
        <FaStar
        key={index}
        className={index <= (hover || rating) ? "ativo" : "inativo"}
        onClick={() => lidarClick(index)} 
        onMouseMove={() => lidarMouseEnter(index)}
        onMouseLeave={() => lidarMouseLeave()}
        size={40}
        />
    )
  })}

</div>
  )
}