import './App.css';
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import {useState} from "react";

const App = () => {

    const DummyTasks = []


    const [task, setTask] = useState(DummyTasks)


    const addTaskHandler = (task) => {
        console.log('In App.js')
        setTask((previousExpenses) => {
                return [task, ...previousExpenses]
            }
        )
    }

    return (
        <div className="App">
            <NewTask onAddTask={addTaskHandler}></NewTask>

            <Tasks tasksData={task}></Tasks>
        </div>
    );
}

export default App;
