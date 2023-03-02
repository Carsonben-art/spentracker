// Reducer is a function that takes in the old state, and an action and returns a new state.

    let transactions;
const contextReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':

            transactions = state.filter((t) => t.id !== action.payload);
            localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;
            
        case 'ADD_TRANSACTION':
        
            transactions = [action.payload, ...state];
            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;
                
        default:
            // if no case is met then this shows the current transactions.
            return state;
    }
    
    
}
export default contextReducer;