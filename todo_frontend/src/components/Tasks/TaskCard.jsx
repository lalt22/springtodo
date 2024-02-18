import { deleteTaskById, toggleTaskById } from "../../services/taskServices";
import {useContext, useEffect, useState} from 'react';
import "./TaskCard.scss";
import { RefreshContext } from "../../context/RefreshContext/RefreshContextProvider";

const TaskCard = ({props}) => {
    const {refresh, setRefresh} = useContext(RefreshContext);
    const [propData, setPropData] = useState(props);
    const handleClick = () => {
        toggleTaskById(propData.id, !propData.completed).then((data) => setPropData(data)).then(setRefresh(refresh+1));
    }

    const handleDelete = () => {
        deleteTaskById(props.id).then(() => setRefresh(refresh+1));
    }

    useEffect(() => {
        console.log(propData, "PROPS");
    }, [propData]);

    return (
        <div className={[propData.completed ? "completed-task": "incomplete-task", "task-card"].join(" ")}>
            <div className="task-details">
                <h4>{propData.description}</h4>
                <p>{propData.dueDate}</p>
            </div>
            <div className="options">
                <input id="complete" type="checkbox" onClick={handleClick}></input>
                <button onClick={handleDelete}>Delete</button>
            </div>
           
        </div>
    )
}
export default TaskCard;