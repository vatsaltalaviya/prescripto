import  {createContext}  from 'react'
import { doctors } from '../assets/assets'

export const AppContext = createContext()

const AppContextProvider = ({children})=>{
    const currencySymbol  = '$'
    const values = {doctors , currencySymbol}

    return(
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider