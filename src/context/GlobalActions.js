import { v4 as uuidv4 } from 'uuid';

// SAVE TRANSACTIONS
export const saveTransactions = (text, amount) => {
    const NewTransaction = {
        id: uuidv4(),
        text: text,
        amount: parseInt(amount)
    }
    return NewTransaction
}

// DELETE TODO
export const deleteTransaction = (id) => {
    return id
}

// EDIT TRANSACTIONS
export const EditTransaction = (transaction) => {

    return transaction
}
export const updateTransactions =(id,amount,text)=>{
    const NewUpdate = {
        id:id,
        amount:amount,
        text:text
    }
    return NewUpdate
}