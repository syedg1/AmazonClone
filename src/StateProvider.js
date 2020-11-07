import React, { createContext, useContext, useReducer } from 'react';

// This is the data layer
export const StateContext = createContext();

// This is a provider
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

