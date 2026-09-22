"use client"

import { useEffect, useState } from "react";

export default function Receitas(){

  const [ ListaReceitas, setListaReceitas] = useState([]);
  const [ msgErro, setMsgErro ] = useState("");
  
  useEffect ( () => {
    fetch("https://dummyjson.com/recipes/?limit=10")
    .then ( res => res.json() )
    .then ( data => {
      console.log(data);
      setListaReceitas(data.recipes);
      setMsgErro("");
    } )
    .catch( error => setMsgErro(error.message))
  }, [] );

  return(
    <main>
      <h1>Lista de Receitas</h1>
      {msgErro != "" && <p>Erro: {msgErro}</p>}

      {ListaReceitas.length > 0 ?
      <div>
        {ListaReceitas.map((receita, idx)=> {
          return (
            <div key={idx}>
              <img src={receita.image} />
              <h4>{receita.name}</h4>
              <p>{receita.ingredients}</p>
              <p>{receita.instructions}</p>
              <span>{receita.cuisine}</span>
            </div>
          )
        } )}
      </div>
      :
      <div>
        <p>Sem receitas...</p>
      </div>
      }

    </main>
  )
}
