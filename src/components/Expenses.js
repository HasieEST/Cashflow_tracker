import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";


function Expenses(props) {
    const recivedExpenseData = props.expenseData
    const expenseitems = []

    recivedExpenseData.forEach(element => {
        expenseitems.push(<ExpenseItem expenseData={element}></ExpenseItem>)
    })


    return (
        <Card className='expenses'>
            {expenseitems}
        </Card>
    )
}

export default Expenses