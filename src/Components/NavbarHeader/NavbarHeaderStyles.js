import styled from "styled-components";

export const NavbarHeaderStyled = styled.header`
height:50px;
width:100%;
background-color:white;
position:sticky;
top:0;
display:flex;
justify-content:center;
align-items:center;

.iconStyle{
    display:none;
}
@media (max-width: 480px){
    justify-content:space-between;
    .iconStyle{
    display:block;
    }

}
`
export const NavBarStyled = styled.ul`
display:flex;
justify-content:center;
align-items:center;
gap:10px;
font-weight:500;
`
export const ItemNavBarStyled = styled.li`
font-size:1.5rem;
cursor: pointer;
`




