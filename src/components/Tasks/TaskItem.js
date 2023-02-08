import './TaskItem.css'
import './TaskDate'
import TaskDate from "./TaskDate";
import Card from "../UI/Card";

function TaskItem(props) {


    return (
        <Card className="expense-item">
            <TaskDate date={props.taskData.date}></TaskDate>
            <div className="expense-item__description">
                <h2>{props.taskData.task}</h2>
                <div className="expense-item__price">{props.taskData.priority}</div>
            </div>
        </Card>
    )
}

export default TaskItem