import React, { useContext, useEffect, useState } from 'react'
import {ItemNavBarStyled, LinkStyle, NavbarHeaderStyled, NavBarStyled } from './NavbarHeaderStyles'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { Contexto } from './Context/MiContexto'
const iconStyle = {fontSize: '2rem', cursor: 'pointer', paddingLeft:'5px' }

const NavBar = () => {
  const {task} = useContext(Contexto)

    return (
    <NavBarStyled>
        <LinkStyle to='/home' pendiente={task.length}>ToDo</LinkStyle>
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
