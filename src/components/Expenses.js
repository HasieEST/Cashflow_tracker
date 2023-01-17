import './Expenses.css'
import ExpenseItem from "./ExpenseItem";


function Expenses(props) {
    const recivedExpenseData = props.expenseData
    const expenseitems = []

    recivedExpenseData.forEach(element => {
        expenseitems.push(<ExpenseItem expenseData={element}></ExpenseItem>)
    })

    
    return (
        <div className='expenses'>
            {expenseitems}
        </div>
    )
}

export default Expenses