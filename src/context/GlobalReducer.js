
const GlobalReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case "DELETE_TRANSACTION":
            // console.log(action.payload);
            return {
                ...state,
                transactions: (state.transactions.filter((item) => item.id !== action.payload))
            }
        case "EDIT_TRANSACTION":
            return {
                ...state,
                Edit: { EditTransaction: action.payload, isEdit: true }
            }
        case "UPDATE_TRANSACTION":
            console.log(action.payload);
            return {

                transactions: state.transactions.map(item => item.id === action.payload.id ? { ...item, amount: action.payload.amount, text: action.payload.text } : item),
                Edit: {
                    EditTransaction: {},
                    isEdit: false
                }
            }
        default:
            return state
    }
}

export default GlobalReducer