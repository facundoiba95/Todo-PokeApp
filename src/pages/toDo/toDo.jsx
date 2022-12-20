import React, { useState, useEffect, useContext } from "react";
import { FcCancel } from 'react-icons/fc'
import { Btn, Container, FormContainer, InputTask, ItemTask, ListTask } from "./toDoStyles";
import { Contexto } from "../../Components/NavbarHeader/Context/MiContexto";

export const ToDo = () => {
  const {task,removeAlltask,addTask,removeTask} = useContext(Contexto);
  const [valor, setValor] = useState('')

  const Submit = (e) => {
    e.preventDefault()
   addTask(valor)
   console.log(valor)
   setValor('')
  }

    return (
      <div>
      <Container>
        <FormContainer onSubmit={Submit}>
          <InputTask placeholder="Agregá una tarea ..." onChange={(e)=> setValor(e.target.value)}
          value={valor}></InputTask>
          <Btn visible={task}>Agregar Tarea</Btn>
        </FormContainer>
        <ListTask>{task.map((tarea) => {
          return <ItemTask key={tarea.id}>{tarea.name}<FcCancel onClick={() => removeTask(tarea)}/></ItemTask>
        })}</ListTask>
        <Btn visible={task.length} onClick={removeAlltask}>Borrar tareas</Btn>
      </Container>
      </div>
    )
}