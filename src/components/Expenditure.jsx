import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

function Expenditure() {
    const { transactions } = useContext(GlobalContext)


    const Expense = transactions.filter((item) => {
        if (item.amount < 0) {
            return item
        }
    }).reduce((p, c) => {
        return p + c.amount*1
    }, 0)

    return (
        <div className="expenditure">
            <h1>EXPENDITURE</h1>
            <h3>₹{Expense}</h3>
        </div>
    )
}

export default Expenditure