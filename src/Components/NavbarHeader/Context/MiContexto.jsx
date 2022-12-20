import { createContext, useEffect, useState } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({children})=> {
    const InitialState = JSON.parse(localStorage.getItem('task')) || [];
    const saveLocalStorage = (array) => localStorage.setItem('task', JSON.stringify(array))
    const [task, setTask] = useState(InitialState)

    useEffect(() => saveLocalStorage(task),[task])

   
    const addTask = (valor) => {
        if(!valor.trim().length){
            alert('Debes ingresar una tarea !')
        } else if(task.some(tasks => tasks.name === valor)){
            alert('Ya existe esta tarea !')
        } else {
            setTask([
                ... task, 
                {
                name: valor,
                id: Date.now(),
             }])
            
        }
    }

    const isTask = () => {
        if(task.length <= 1){
            window.confirm('Desea eliminar todas las tareas?') ? setTask([]): setTask(task)
           }
    }
    const removeTask = tarea => {
        setTask(task.filter(item => item.name !== tarea.name))
        isTask()
    }

    const removeAlltask = () => {
       window.confirm('Desea eliminar todas las tareas ?') ? setTask([]) : setTask(JSON.parse(localStorage.getItem('task')))
    }

return (
    <Contexto.Provider value={{addTask,task,setTask,removeTask,removeAlltask}}>
        {children}
    </Contexto.Provider>
)
}