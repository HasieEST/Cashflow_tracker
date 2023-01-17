import './App.css';
import Expenses from "./components/Expenses";

function App() {
    const expenses = [{
        date: new Date (2023,0,10),
        title: 'New book',
        price: 30.99
    },{
        date: new Date (2023, 0,12),
        title: 'New jeans',
        price: 19.99
    }]

    return (
        <div className="App">
            <Expenses expenseData ={expenses}></Expenses>
        </div>
    );
}

export default App;
