import React, { useReducer, createContext, useContext } from 'react';

const initUrl = '';

function UrlReducer(state, action) {
    switch (action.type) {
        case 'SET_CURRENT_TAB_URL' :
            state = action.value;
        default :
            throw new Error('Unhandled action type');
    }
}

const TabUrlStateContext = createContext();
const TabUrlDispatchContext = createContext();

export default function MainProvider({ children }) {
    const [tabUrlState, tabUrlDispatch] = useReducer(UrlReducer, initUrl);

    return (
        <TabUrlStateContext.Provider value={tabUrlState}>
            <TabUrlDispatchContext.Provider value={tabUrlDispatch}>
                {children}
            </TabUrlDispatchContext.Provider>
        </TabUrlStateContext.Provider>
    )
}

export function useTabUrlState() {
    const context = useContext(TabUrlStateContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

export function useTabUrlDispatch() {
    const context = useContext(TabUrlDispatchContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}