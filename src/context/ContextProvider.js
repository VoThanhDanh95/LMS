import { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'


const initState = {
    currentUser: null,
}

const Context = createContext(initState)

export const useValue = () => {
    return useContext(Context)
}

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <Context.Provider
            value = {{state, dispatch}}
            >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider