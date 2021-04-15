import React, { createContext, useState } from 'react'

export const CurrencyContext = createContext();

export const CurrencyContextProvider = ({children}) => {
    const [currencyToggle, setCurrencyToggle] = useState(true)
    const handleCurrencyToggel = () => {
        setCurrencyToggle( !currencyToggle )
    }

    const value = { currencyToggle, handleCurrencyToggel }

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    )
}
