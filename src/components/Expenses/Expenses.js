import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";


function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2023')

    const [expenseItems, setExpenseItems] = useState(
        props.expenseData.map((expense) => {
            return <ExpenseItem expenseData={expense}></ExpenseItem>
        })
    )
    const saveSelectYearhandler = (year) => {
        setFilterYear(year)
    }
    console.log(props.expenseData[0].date)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onSelectChange={saveSelectYearhandler}></ExpensesFilter>
            {expenseItems}
        </Card>
    )
}

export default Expenses