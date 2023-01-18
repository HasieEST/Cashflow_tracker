import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [{
        date: new Date(2023, 0, 10),
        title: 'New book',
        price: 30.99
    }, {
        date: new Date(2023, 0, 12),
        title: 'New jeans',
        price: 19.99
    }]

    const addExpensehanlder = (expense) => {
        console.log('In App.js')
        console.log(expense)
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpensehanlder}></NewExpense>
            <Expenses expenseData={expenses}></Expenses>
        </div>
    );
}

export default App;
