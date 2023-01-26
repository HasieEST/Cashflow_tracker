import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";
import ExpenseList from "./ExpenseList";


function Expenses(props) {
    const [filterYear, setFilterYear] = useState('')


    const saveSelectYearhandler = (year) => {
        setFilterYear(year)
    }

    const filterExpenseItems = props.expenseData.filter((expense)=> {if(filterYear !== '')  return expense.date.getFullYear().toString() === filterYear
    else return expense})
    console.log(filterExpenseItems)
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onSelectChange={saveSelectYearhandler}></ExpensesFilter>
            <ExpenseList filteredExpenses={filterExpenseItems}></ExpenseList>
        </Card>
    )
}

export default Expenses