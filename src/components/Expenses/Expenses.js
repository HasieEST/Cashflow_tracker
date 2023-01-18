import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";


function Expenses(props) {
    const recivedExpenseData = props.expenseData
    const expenseitems = []
    // const [defaultYear, setYear]  = useState({
    //     filteredYear: '',
    //     setYear: '2023'
    // })
    // console.log(filteredYear.setYear)
    // const onChangeFilter = (event) =>{
    //     setYear({
    //         ...defaultYear,
    //         filteredYear: event.target.value
    //     })
    // }
    recivedExpenseData.forEach(element => {
        expenseitems.push(<ExpenseItem expenseData={element}></ExpenseItem>)
    })


    return (
        <Card className='expenses'>
            <ExpensesFilter></ExpensesFilter>
            {expenseitems}
        </Card>
    )
}

export default Expenses