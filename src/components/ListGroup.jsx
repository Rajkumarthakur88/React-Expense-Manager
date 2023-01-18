import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import ListItem from './ListItem'

function ListGroup() {
    const { transactions } = useContext(GlobalContext)
    // console.log(transactions)
    return (
        <ul className='listgroup'>
            {/* <li className="income transaction">
                <h2>₹500</h2>
                <h3>Stocks</h3>
                <button className="cancel-btn">
                    <i className="bi bi-x-circle"></i>
                </button>
            </li> */}
            {
                transactions.map((transaction) => <ListItem key={transaction.id} transaction={transaction} />)
            }
        </ul>
    )
}

export default ListGroup