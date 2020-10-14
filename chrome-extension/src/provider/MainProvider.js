import React, { useReducer, createContext, useContext } from 'react';
import { FaChrome } from 'react-icons/fa';

const initUrl = '';
const initAccess = {
    login : {
        status : "fail",
        id : "",
        password : ""
    },
    signup : {

    }
}

function UrlReducer(state, action) {
    switch (action.type) {
        case 'SET_CURRENT_TAB_URL' :
            state = action.value;
        default :
            throw new Error('Unhandled action type');
    }
}

function AccessReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_LOGIN_INFO' :
            state.login.id = action.id
            state.login.password = action.passwd
            state.login.status = action.status
            return state
        case 'ACCESS_RESET' :
            return state = initAccess
        default :
            throw new Error('Unhandled action type')
    }
}

const TabUrlStateContext = createContext();
const TabUrlDispatchContext = createContext();
const AccessStateContext = createContext();
const AccessDispatchContext = createContext();

export default function MainProvider({ children }) {
    const [tabUrlState, tabUrlDispatch] = useReducer(UrlReducer, initUrl);
    const [accessState, accessDispatch] = useReducer(AccessReducer, initAccess);

    return (
        <TabUrlStateContext.Provider value={tabUrlState}>
            <TabUrlDispatchContext.Provider value={tabUrlDispatch}>
                <AccessStateContext.Provider value={accessState}>
                    <AccessDispatchContext.Provider value={accessDispatch}>
                        {children}
                    </AccessDispatchContext.Provider>
                </AccessStateContext.Provider>
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

export function useAccessState() {
    const context = useContext(AccessStateContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

export function useAccessDispatch() {
    const context = useContext(AccessDispatchContext);
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}