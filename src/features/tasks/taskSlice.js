import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: ( state, action ) => {
            const value = action.payload;

            if(!value.trim().length){
                alert('Debes ingresar una tarea !')
            } else if(state.some(tasks => tasks.name === value)){
                alert('Ya existe esta tarea !')
            } else {
                state.push({name: value, id: Date.now(), isFinish:false})
            }
        },

        removeTask: ( state, action ) => {
             const name = action.payload.name;

              if(window.confirm(`Desea eliminar la tarea "${name}" ?`)){
                return state.filter(item => item.name !== name);
              } else {
                return;
              }
        },

        removeAllTask: ( state, action ) => {
           return window.confirm('Desea eliminar todas las tareas ?') ? state = [] : initialState;
        },

        finishTask: ( state, action ) => {
            const currentTask = action.payload.name;
            return state.map(task => {
                if(task.name == currentTask){
                    if(window.confirm(`Desea finalizar la tarea "${currentTask}"?`)){
                        return { ... task, isFinish: true }
                    } else {
                        return { ... task, isFinish: false}
                    }
                } else {
                    return task;
                }
            })
        }
    }
    
})

export const { addTask,removeAllTask, removeTask, finishTask } = taskSlice.actions;
export default taskSlice.reducer;
