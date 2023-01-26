import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
    if (props.filteredExpenses.length === 0) {
        return <p className={"expenses-list__fallback"}>No expenses added for selected year!</p>
    }
    return (
        <ul className={"expense-list"}>
            {
                props.filteredExpenses.map((expense) => {
                    return <ExpenseItem expenseData={expense}></ExpenseItem>
                })
            }
        </ul>
    )
}


export default ExpenseList