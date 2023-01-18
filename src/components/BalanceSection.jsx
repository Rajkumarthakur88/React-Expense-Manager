import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import bag from '../images/bag.gif'

function BalanceSection() {
    const { transactions } = useContext(GlobalContext)

    const Balance = transactions.reduce((p, c) => {
        return p + c.amount*1
    }, 0)

    return (

        <div className="balance-section">
            <h1>BALANCE</h1>
            <h2>₹{Balance}</h2>
            <img src={bag} alt="" />
        </div>
    )
}

export default BalanceSection