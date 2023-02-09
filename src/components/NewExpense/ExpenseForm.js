import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if (userInput.enteredTitle !== '' && userInput.enteredAmount !== '' && userInput.enteredDate !== '') {
            const expenseData = {
                title: userInput.enteredTitle,
                amount: userInput.enteredAmount,
                date: new Date(userInput.enteredDate)
            }
            props.onSaveExpenseData(expenseData)
            setUserInput({
                enteredTitle: '',
                enteredDate: '',
                enteredAmount: ''
            })
            document.getElementsByClassName('new-expense__buttons')[0].style.display = 'none'
            document.getElementsByClassName('new-expense__controls')[0].style.display = 'none'
            document.getElementsByClassName('new-expense__init')[0].style.display = 'flex'
        } else {
            alert('You have failed to fill fields properly!')
        }
    }
    const cancelHandler = (event) => {
        event.preventDefault()
        setUserInput({
            enteredTitle: '',
            enteredDate: '',
            enteredAmount: ''
        })
        document.getElementsByClassName('new-expense__buttons')[0].style.display = 'none'
        document.getElementsByClassName('new-expense__controls')[0].style.display = 'none'
        document.getElementsByClassName('new-expense__init')[0].style.display = 'flex'
    }
    const openFormHandler = (event) => {
        event.preventDefault()
        document.getElementsByClassName('new-expense__buttons')[0].style.display = 'flex'
        document.getElementsByClassName('new-expense__controls')[0].style.display = 'flex  '
        document.getElementsByClassName('new-expense__init')[0].style.display = 'none'
    }

    return (
        <form>
            <div className="new-expense__init">
                <button className="new-expense__actions" type="submit" onClick={openFormHandler}>Add a new expense
                </button>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={userInput.enteredTitle}/>

                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}
                           value={userInput.enteredAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-18' max='2025-12-31' onChange={dateChangeHandler}
                           value={userInput.enteredDate}/>
                </div>
            </div>
            <div className='new-expense__buttons'>
                <div className='new-expense__actions'>
                    <button type='submit' onClick={submitHandler}>Add Expense</button>
                </div>
                <div className='new-expense__actions'>
                    <button type="submit" onClick={cancelHandler}>Cancel</button>
                </div>
            </div>
        </form>

    )
}

export default ExpenseForm