import React, {createContext,useContext,useReducer} from "react";

//prepare the data layer for what is about to come
export const DataLayerContext = createContext();

export const DataLayer = ({initialState,reducer,children }) => (
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
);

//Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.
export const useDataLayerValue = () => useContext(DataLayerContext);