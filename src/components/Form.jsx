import React, { useContext, useEffect, useState } from 'react'
import { saveTransactions, updateTransactions } from '../context/GlobalActions'
import GlobalContext from '../context/GlobalContext'
function Form() {
    const { dispatch, Edit } = useContext(GlobalContext)
    const [amount, setAmount] = useState("")
    const [text, setText] = useState("")
    console.log(Edit)
    const handleSubmit = (e) => {
        e.preventDefault() 
        if (Edit.isEdit) {
            const data = updateTransactions(Edit.EditTransaction.id, amount, text)
            dispatch({
                type: "UPDATE_TRANSACTION",
                payload: data
            })
        }
        else {
            const data = saveTransactions(text, amount)
            dispatch({
                type: "ADD_TRANSACTION",
                payload: data
            })
        }
        setAmount("")
        setText("")

    }
    useEffect(() => {
        // console.log(Edit.EditTransaction.amount);
        setAmount(Edit.EditTransaction.amount)
        setText(Edit.EditTransaction.text)
    }, [Edit])
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="number" value={amount} required placeholder="Enter Your Amount" onChange={(e) => setAmount(e.target.value)} />
            <input type="text" value={text} required placeholder="Enter Your Transaction" onChange={(e) => setText(e.target.value)} />
            <button className="submit-btn">SUBMIT</button>
        </form>
    )
}

export default Form