import React, { useReducer, createContext } from "react";

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":200,"category":"Clothes","type":"Expense","date":"2023-03-03","id":"bd16499a-9f2e-4bc8-b4d9-3cf782f2cda2"}];
 
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ( {children}) => {

    const [ transactions, dispatch] = useReducer(contextReducer, initialState );

    // Action 
    const deleteTransaction = (id) =>{
        dispatch({ type: 'DELETE_TRANSACTION', payload: id});
    }
    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction});
    }
    // const balance = transactions.reduce()
    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount,0);

    // console.log(transactions)
    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}
//  context is like a global store where all the app components can grab data from.
