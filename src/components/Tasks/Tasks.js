import './Tasks.css'
import Card from "../UI/Card";
import TasksFilter from "../TasksFilter/TasksFilter";
import {useState} from "react";
import TasksList from "./TasksList";


function Tasks(props) {
    const [filterTask, setFilterTask] = useState('All')


    const saveSelectTaskhandler = (task) => {
        setFilterTask(task)
    }

    const filterTasksItems = props.tasksData.filter((task)=> {if(filterTask !== 'All')  return task.priority === filterTask
    else return task})

    return (
        <Card className='tasks'>
            <TasksFilter selected={filterTask} onSelectChange={saveSelectTaskhandler}></TasksFilter>
            <TasksList filteredTasks={filterTasksItems}></TasksList>
        </Card>
    )
}

export default Tasks