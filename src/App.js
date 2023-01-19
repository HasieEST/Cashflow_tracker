import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const App = () => {
    const DummyExpenses = [{
        id: 'i1',
        date: new Date(2023, 0, 10),
        title: 'New book',
        amount: 30.99
    }, {
        id: 'i2',
        date: new Date(2024, 0, 10),
        title: 'New ice',
        amount: 30.99
    }, {
        id: 'i3',
        date: new Date(2025, 0, 12),
        title: 'New jeans',
        amount: 19.99
    }]

    const [expenses, setExpenses] = useState(DummyExpenses)


    const addExpensehanlder = (expense) => {
        console.log('In App.js')
        setExpenses((previousExpenses) => {
                return [expense, ...previousExpenses]
            }
        )
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpensehanlder}></NewExpense>

            <Expenses expenseData={expenses}></Expenses>
        </div>
    );
}

export default App;
