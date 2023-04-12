import React, { useState, useEffect } from "react";
import { Btn, Container, FormContainer, InputTask, ItemTask, ListTask } from "./toDoStyles";
import { useSelector, useDispatch } from "react-redux";
import { addTask, finishTask, removeAllTask, removeTask } from "../../features/tasks/taskSlice";

//icons
import { AiOutlineCheck } from 'react-icons/ai';
import { FcCancel } from 'react-icons/fc';

export const ToDo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks)
  const [ valor, setValor ] = useState('')

  const Submit = (e) => {
    e.preventDefault()
    dispatch(addTask(valor));
    setValor('')
  }

  const renderTasks = ( boolean ) => {
   return tasks.filter(task => {
      if ( task.isFinish === boolean ) return task;
   }).map(tarea => {
      const nameTask = tarea.name;
      const upperName = nameTask[0].toUpperCase() + nameTask.substring(1);
        return (
           <ItemTask key={tarea.id} isFinish={tarea.isFinish}>
            {upperName}
            <span>
              <AiOutlineCheck style={{color:'green'}} onClick={() => dispatch(finishTask(tarea))}/>
              <FcCancel onClick={() => dispatch(removeTask(tarea))}/>
            </span>
            </ItemTask>
        )
      })
  }

  const renderFinishTask = () => tasks.filter(task => task.isFinish === true).length
  
  const renderPendingTask = () => tasks.filter(task => task.isFinish === false).length
   
  const tabNotification = () => {
    renderTasks(false).length >= 1
    ? document.title = `(${renderTasks(false).length}) Todo + PokeApp`
    : document.title = `Todo + PokeApp`
  }

  useEffect(()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    tabNotification();
  } , [ tasks ])

    return (
      <div>
      <Container>
        <FormContainer onSubmit={Submit}>
          <h1 style={{textAlign: 'center', color:'white', letterSpacing:'3px'}}>ToDoApp</h1>
          <InputTask placeholder="Agregá una tarea ..." onChange={(e)=> setValor(e.target.value)} value={valor}/>
          <Btn visible={tasks}>Agregar Tarea</Btn>
        </FormContainer>
        <Btn visible={tasks.length} onClick={() => dispatch(removeAllTask())}>Borrar tareas</Btn>
        <small>Tareas pendientes:  { renderPendingTask() }</small>
        <small>Tareas finalizadas: { renderFinishTask() }</small>
        <h2 className="titleTasksStatus">Tareas Pendientes</h2>
        <ListTask>
          {
           renderTasks(false).length < 1 
           ? <>
              <p>Estás al dia!</p>
              <img src="https://i.ytimg.com/vi/oQ4_u_OqleA/maxresdefault.jpg" width='250px'/>
             </>
           : renderTasks(false)
          }
        </ListTask>
        <>
        { 
        renderTasks(true).length < 1
        ? <></>
        : <>
           <h2 className="titleTasksStatus">Tareas Finalizadas</h2>
            <ListTask>
              {
               renderTasks(true)
              } 
            </ListTask>
          </>
        }
        </>
      </Container>
      </div>
    )
}