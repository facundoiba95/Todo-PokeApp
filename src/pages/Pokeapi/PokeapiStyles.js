import styled from 'styled-components'

export const InputPokeApiStyled = styled.input`
width:200px;
height:30px;
border-radius:8px;
padding-left:9px;
`
export const ContainerCardsPokemonStyled = styled.div`

height:100vh;
width:100%;
background-color:#191b1f;
color:white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:2rem;

.container{
    height: 100vh;
    display: flex;
    justify-content: center;
}
.form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.inputPokemon{
    text-align: center;
    height: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
}
.btnBuscar{
    width: 80px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
}
.message{
    border: 1px solid yellow;
    animation: headShake 2s infinite ease-in-out;
    margin-top: 10px;
    height: 30px;
    width: 210px;
    border-radius: 5px;
    text-align:center;
    margin-bottom: 2rem;
    
}
.cards-container{
    display: flex;
    justify-content: center;
    width: 100%;
    /* height: auto; */
    padding:1.5rem 0 1.5rem 0;
    
}
.cardPokemon{
    /* background-color: orange; */
    box-shadow: 1px -1px 25px 8px rgba(0,0,0,0.78);
    -webkit-box-shadow: 1px -1px 25px 8px rgba(0,0,0,0.78);
    -moz-box-shadow: 1px -1px 25px 8px rgba(0,0,0,0.78);
    padding: 10px;
    border-radius: 20px;
    width: 300px;
    display:flex;
    flex-direction:column;
    gap:10px;
    
}
.galeria-container{
    width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
}
.imgPrincipal{
    
    width: 10rem;
    height: 10rem;
}
.img-container{
    display: flex;
    width: 100%;
    
}
.img-item,.img{
    width: 100%;
    padding:10px;
}
.img-container li{
    width: 100%;
}
.img-container img{
    width: 100%;
    height: 100%;
}

/* HEADER CARDS */
.header-card-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    width: 100%;
    margin-top:5px;
}
.id{
    background-color: black;
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:50%;
    margin:0 auto;
    padding:2px;
}
.name{
    font-family: 'Nabla';
    font-size:1rem;
    padding-left: 5px;
}
.hp-info{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:2px;
}
.hp{
    font-family:'Anton';
    letter-spacing: 2px;
    padding-right: 5px;
}
.ability{
    letter-spacing: 8px;
    font-family: 'Bungee Spice';
    font-style: italic;
    text-align: center;
}
.move{
    font-size: 1rem;
}
.fa-solid.fa-burst,.fa-solid.fa-shield,.fa-solid.fa-wind{
    color:white;
    font-size: 1.2rem;
    margin-right: 8px;
}
.info-container{
    border-radius: 10px;
    background: url('./simple-pokeball-wallpaper-i-made-1024x768-wallpaper.jpg') center/cover;
    padding:10px 0 0 10px;
    font-size: 0.8rem;
    height:160px;
}

.peso{
    margin-top:10px;
}

@media (max-width:428px ){
    .cardPokemon{
        width: 250px;
    }
}



`
export const CardsPokemonStyled = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border:1px solid yellowgreen;
width:90%;
height:500px;
border-radius:10px;
`

export const ButtonPokeApiStyled = styled.button`
width:100px;
height:30px;
margin-left:10px;
border-radius:10px;
border:none;
color:white;
background-color: blueviolet`



