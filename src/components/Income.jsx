import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

function Income() {
    const { transactions } = useContext(GlobalContext)

    const Income = transactions.filter((item) => {
        if (item.amount > 0) {
            return item
        }
    }).reduce((p, c) => {
        return p + c.amount*1
    }, 0)

    return (
        <div className="income-amount">
            <h1>INCOME</h1>
            <h3>₹{Income}</h3>
        </div>
    )
}

export default Income