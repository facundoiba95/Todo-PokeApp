import React from 'react'
import { useSelector } from 'react-redux'
import { LinkStyle, NavbarHeaderStyled, NavBarStyled } from './NavbarHeaderStyles'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const iconStyle = {fontSize: '2rem', cursor: 'pointer', paddingLeft:'5px' };

const NavBar = () => {
  const task = useSelector(state => state.tasks);
  const isPendingTasks = task.filter(tasks => tasks.isFinish === false);

    return (
    <NavBarStyled>
        <LinkStyle to='/todo' pendiente={isPendingTasks.length}>{isPendingTasks.length >= 1 ? `(${isPendingTasks.length})`: ''} ToDo</LinkStyle>
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
