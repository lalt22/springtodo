import "./TaskCard.scss";

const TaskCard = ({props}) => {
    const handleClick = () => {
        
    }

    return (
        <div className={[props.completed ? "completed-task": "incomplete-task", "task-card"].join(" ")}>
            <h4>{props.description}</h4>
            <h4>Due: {props.dueDate}</h4>
            <button onClick={handleClick}>Update</button>
        </div>
    )
}
export default TaskCard;