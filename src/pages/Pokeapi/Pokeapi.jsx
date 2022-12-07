import React, { useState,useEffect } from 'react'
import {ContainerCardsPokemonStyled, InputPokeApiStyled } from './PokeapiStyles'
import {GiMineExplosion} from 'react-icons/gi'
import {AiTwotoneSecurityScan} from 'react-icons/ai'
import {BsSpeedometer} from 'react-icons/bs'
import { getRandomIntInclusive, InitialPokemon } from '../../data/InitialPokemon'

const urlBase = `https://pokeapi.co/api/v2/pokemon/`

export const Pokeapi = () => {
  const [inputValue,setInputValue] = useState('')
  const [pokemon, setPokemon] = useState([])

const onChangeCaptureHandler = (e) => setInputValue(e.target.value)

const fetchApi = async (valor) => {
  const datos = await InitialPokemon()
  if(valor === ''){
    setPokemon([datos])
  } else {
    const response = await fetch(urlBase + valor)
    const data = await response.json();
    setPokemon([data])
  }
} 

useEffect(() => {
    fetchApi(inputValue)
},[inputValue])

const altura = altura => {
 let medida = altura /10
 return medida;
}

const peso = peso =>{
  let medida = peso /10
  return medida;
}

return (
    <div>
    <ContainerCardsPokemonStyled>
      <div>
        <h2>PokeApi!</h2>
        <h3>Busca tu pokemon!</h3>
          <InputPokeApiStyled value={inputValue} onChange={onChangeCaptureHandler}
          placeholder={'Porfavor, ingresa un numero!'}>
          </InputPokeApiStyled>
          {/* <ButtonPokeApiStyled onClick={fetchApi}>Buscar</ButtonPokeApiStyled> */}
      </div>
      { 
        pokemon.map(pokemones => {
          const imagePokemonUno = pokemones.sprites.other.dream_world.front_default ? pokemones.sprites.other.dream_world.front_default : pokemones.sprites.other.home.front_default ;
          const moves =  pokemones.moves.length > 1 ? pokemones.moves[getRandomIntInclusive(1,7)].move.name : alert('Error en API! Move Not Found. Acepta para continuar.');

          return <div className="cardPokemon" key={pokemones}>
          <h3 className="id">{pokemones.id}</h3>
               <div className="header-card-container">
                   <h3 className="name">{pokemones.name.toUpperCase()}</h3>
                   <p className="type">Type: {pokemones.types[0].type.name}</p>
                   <span className="hp-info">
                       <p>HP</p>
                       <h2 className="hp">{pokemones.stats[0].base_stat}</h2>
                   </span>
               </div>
               <div className="galeria-container">
                  <img src={imagePokemonUno} alt="" className="imgPrincipal"/> 
                  <h2 className="ability">{pokemones.abilities[0].ability.name.toUpperCase()}</h2>
               </div>
               <div className="info-container">
                   <span className="move">Moves: {moves}</span>
                   <div className="stats">
                       <h4 className="attack"><GiMineExplosion className="fa-solid fa-burst"/> Attack: {pokemones.stats[1].base_stat}</h4>
                       <h4 className="defense"><AiTwotoneSecurityScan className="fa-solid fa-shield"/>Defense: {pokemones.stats[2].base_stat}</h4>
                       <h4 className="speed"><BsSpeedometer className="fa-solid fa-wind"/>Speed: {pokemones.stats[5].base_stat}</h4>
                       <p className="peso">Height: {altura(pokemones.height)}M</p>
                       <p className="kilos">Weight: {peso(pokemones.weight)}Kg</p>
                   </div>
               </div>
          </div>
        })
    }
    </ContainerCardsPokemonStyled>
    </div>
  )
}
