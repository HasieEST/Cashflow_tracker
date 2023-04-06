import './App.css';
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import { useState } from "react";
import { useEffect } from 'react';
import Login from './components/Login/Login';
import AuthContext from './store/AuthContext';
import Header from './components/Header/Header';
const App = () => {

    const DummyTasks = [{
        id: 'i1',
        date: new Date(2023, 0, 10),
        task: 'Gamma',
        priority: "Mid"
    }, {
        id: 'i2',
        date: new Date(2024, 0, 10),
        task: 'Beta',
        priority: "High"
    }, {
        id: 'i3',
        date: new Date(2024, 0, 12),
        task: 'Alpha',
        priority: "Low"
    }]


    const [task, setTask] = useState(DummyTasks)
    const [logged, setLogged] = useState(false)

    const addTaskHandler = (task) => {
        console.log('In App.js')
        setTask((previousExpenses) => {
            return [task, ...previousExpenses]
        }
        )
    }

    const loginHandler = (email, password) => {
        localStorage.setItem('loggedIn', '1')
        setLogged(true)
    }

    const logoutHandler = () => {
        localStorage.removeItem('loggedIn')
        setLogged(false)
    }

    useEffect(() => {
        const storedLoggedStatus = localStorage.getItem('loggedIn')
        if (storedLoggedStatus === '1') {
            setLogged(true)
        }
    }, [])




    return (
        <div className="App">
            <AuthContext.Provider value={{
                logged: logged,
                onLogout: logoutHandler
            }}>
                <Header onLogout={logoutHandler} />
                <main> 
                
                {!logged && <NewTask onAddTask={addTaskHandler}></NewTask>} 
                {logged && <Login onLogin={loginHandler}></Login>}
            </main>


            </AuthContext.Provider>
            
            <Tasks tasksData={task}></Tasks>
        </div>
    );
}

export default App;
