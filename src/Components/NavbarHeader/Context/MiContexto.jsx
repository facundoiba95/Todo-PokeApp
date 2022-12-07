import { createContext } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({children})=> {
return (
    <Contexto.Provider value={{isTodo : true, color:['green','red']}}>
        {children}
    </Contexto.Provider>
)
}