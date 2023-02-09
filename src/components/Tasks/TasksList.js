import React from 'react';
import TaskItem from "./TaskItem";
import "./TasksList.css";

const TasksList = (props) => {
    if (props.filteredTasks.length === 0) {
        return <p className={"expenses-list__fallback"}>No tasks added for selected priority!</p>
    }
    return (
        <ul className={"expense-list"}>
            {
                props.filteredTasks.sort((a,b)=> a.date.getTime()-b.date.getTime()).map((task) => {
                    return <TaskItem taskData={task}></TaskItem>
                })
            }
        </ul>
    )
}


export default TasksList