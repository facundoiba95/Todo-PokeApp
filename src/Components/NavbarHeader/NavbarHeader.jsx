import React, { useContext, useEffect, useState } from 'react'
import {ItemNavBarStyled, NavbarHeaderStyled, NavBarStyled } from './NavbarHeaderStyles'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { Contexto } from './Context/MiContexto'

const iconStyle = {fontSize: '2rem', cursor: 'pointer', paddingLeft:'5px' }
let liStyle = {fontSize: '1.5rem',cursor: 'pointer'}

const ItemNavBar = ({to,children}) => {
return <ItemNavBarStyled to={to}>{children}</ItemNavBarStyled>
}


const NavBar = () => {
  const {color} = useContext(Contexto)
  const [todo, setTodo]=useState('ToDo')
  
    if(!JSON.parse(localStorage.getItem('task')).length){
      liStyle.color = color[0]
    }else {
      liStyle.color= color[1]
    }
  
    return (
    <NavBarStyled>
        <Link style={liStyle} to='/home'>{todo}</Link>
        <Link  to='/pokeapi'>PokeApi</Link>
    </NavBarStyled>
    )
}

export const NavbarHeader = () => {
  return (
    <NavbarHeaderStyled>
        <AiOutlineMenu style={iconStyle} className='iconStyle'/>
        <NavBar/>  
    </NavbarHeaderStyled>
  )
}
