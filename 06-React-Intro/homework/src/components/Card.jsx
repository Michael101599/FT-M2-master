import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
    
    // <div className = {styles.card}
    <div>
      <button onClick = {props.onClose}> X </button>
      <h4>{props.name}</h4>
      <div>
        <p>Temperatura mínima</p>
        <p>{props.min}</p>
        <p>Temperatura máxima</p>
        <p>{props.max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={props.name} />

    </div>
  )
};