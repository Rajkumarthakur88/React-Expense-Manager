import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { deleteTransaction, EditTransaction } from '../context/GlobalActions'
function ListItem({ transaction }) {

    const { dispatch } = useContext(GlobalContext)

    const handleDelete = (id) => {
        const data = deleteTransaction(id)
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: data
        })
    }
    const handleEdit = (transaction) => {
        const data = EditTransaction(transaction)
console.log(data);
        dispatch({
            type: "EDIT_TRANSACTION",
            payload: data
        })
    }
    return (
        <li className={transaction.amount > 0 ? "income list-item" : "expense list-item"}>
            <h2>₹{transaction.amount}</h2>
            <h3>{transaction.text}</h3>

            <span>
                <button className="edit-btn" onClick={() => handleEdit(transaction)} >
                    Edit
                </button>

                <button className="cancel-btn" onClick={(id) => handleDelete(transaction.id)} >
                <i className="bi fs-1 bi-archive-fill"></i>
                </button>

            </span>
        </li>
    )
}

export default ListItem