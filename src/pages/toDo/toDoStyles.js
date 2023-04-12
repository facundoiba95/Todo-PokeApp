import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:start;
align-items:center;
width:100%;
height:100%;
gap:10px;
color:white;
padding-top:4rem;
padding-bottom:4rem;

.titleTasksStatus{
    margin-top:4rem;
    text-align:center;
}
`

export const FormContainer = styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:20px;
`

export const InputTask = styled.input`
width: 250px;
height:30px;
color:black;
border-radius:5px;
padding-left:10px;
`

export const Btn = styled.button`
width:140px;
height:30px;
border:none;
border-radius:3px;
cursor:pointer;
font-size:0.9rem;
font-weight: 300;
display: ${prop => prop.visible ? 'block': 'none'};
`


export const ListTask = styled.ul`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
list-style: none;
width:80%;
gap:20px;
`

export const ItemTask = styled.li`
display:flex;
justify-content:space-between;
align-items:center;
color:white;
width:100%;
max-width:500px;
min-width:300px;
border-bottom: 1px solid #383737;
font-size:1.2rem;
padding:5px 5px;

span {
    display:${props => props.isFinish == true ? 'none' : 'flex'};
    gap: 5px;
}
`