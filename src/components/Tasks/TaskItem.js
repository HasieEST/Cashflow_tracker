import './TaskItem.css'
import './TaskDate'
import TaskDate from "./TaskDate";
import Card from "../UI/Card";

function TaskItem(props) {


    return (
        <Card className="task-item">
            <TaskDate date={props.taskData.date}></TaskDate>
            <div className="task-item__description">
                <h2>{props.taskData.task}</h2>
                <div className="task-item__price">{props.taskData.priority}</div>
            </div>
        </Card>
    )
}

export default TaskItem