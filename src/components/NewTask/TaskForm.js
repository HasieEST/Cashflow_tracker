import React, {useState} from 'react'
import './TaskForm.css'


const TaskForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTask: '', enteredDate: '', enteredPriority: ''
    })

    const taskChangeHandler = (event) => {
        setUserInput({
            ...userInput, enteredTask: event.target.value
        })
    }
    const priorityChangeHandler = (event) => {
        setUserInput({
            ...userInput, enteredPriority: event.target.value
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput, enteredDate: event.target.value
        })
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if(userInput.enteredTask !== '' && userInput.enteredPriority !== '' && userInput.enteredDate !== ''){
            const taskData = {
                task: userInput.enteredTask, priority: userInput.enteredPriority, date: new Date(userInput.enteredDate)
            }
            props.onSaveTaskData(taskData)
            setUserInput({
                enteredTask: '', enteredDate: '', enteredPriority: ''
            })
            document.getElementsByClassName('new-expense__buttons')[0].style.display = 'none'
            document.getElementsByClassName('new-expense__controls')[0].style.display = 'none'
            document.getElementsByClassName('new-expense__init')[0].style.display = 'flex'
        }
        else {
            alert('You have forgotten to fill in something. Please check your form!')
        }

    }
    const cancelHandler = (event) => {
        event.preventDefault()
        setUserInput({
            enteredTask: '', enteredDate: '', enteredPriority: ''
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

    return (<form>
            <div className="new-expense__init">
                <button className="new-expense__actions" type="submit" onClick={openFormHandler}>Add a new Task
                </button>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Task</label>
                    <input type='text' onChange={taskChangeHandler} value={userInput.enteredTask}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-18' max='2025-12-31' onChange={dateChangeHandler}
                           value={userInput.enteredDate}/>
                </div>
                <div className='new-expense__control'>
                    <label>Priority</label>
                    <select onChange={priorityChangeHandler} value={userInput.enteredPriority}>
                        <option value='' hidden>Select an Option</option>
                        <option value='High'>High</option>
                        <option value='Mid'>Mid</option>
                        <option value='Low'>Low</option>
                    </select>
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

export default TaskForm