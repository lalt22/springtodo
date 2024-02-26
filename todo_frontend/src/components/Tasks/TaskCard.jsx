import { deleteTaskById, getTaskById, toggleTaskById } from "../../services/taskServices";
import { useContext, useEffect, useState } from 'react';
import "./TaskCard.scss";
import { RefreshContext } from "../../context/RefreshContext/RefreshContextProvider";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TaskCard = ({ props }) => {
    const { refresh, setRefresh } = useContext(RefreshContext);
    const [propData, setPropData] = useState(props);
    const [editing, setEditing] = useState(false);


    const handleClick = () => {
        toggleTaskById(propData.id, !propData.completed).then((data) => setPropData(data));
    }

    const handleDelete = () => {
        deleteTaskById(props.id).then(() => setRefresh(refresh + 1));
    }

    const handleEdit = () => {
        setEditing(!editing);
    }

    useEffect(() => {
        if(propData) {
            getTaskById(propData.id).then((res) => setPropData(res));
        }
    }, [editing])


    useEffect(() => {
        setRefresh(refresh+1)
    }, [propData])

    const completeButtonStyle = propData.completed ? "checked" : "unchecked";
    const editingText = editing ? "Cancel" : "Edit";
    const buttonIcons = propData.completed ? "" : faCheck;

    return (
        <div className={[propData.completed ? "completed-task" : "incomplete-task", "task-card"].join(" ")}>
            <button id="complete" onClick={handleClick} className={completeButtonStyle}></button>
            <div className="task-details">
                {!editing &&
                    <div className="current-details">
                        <h4>{propData.description}</h4>
                        <p>{propData.dueDate}</p>
                    </div>
                }
                {editing &&
                    <NewTaskForm adding={editing} setAdding={setEditing}
                        makeNew={false}
                        id={propData.id} />
                }
            </div>


            <div className="options">

                <button onClick={handleDelete}>Delete</button>
                {!propData.completed &&<button onClick={handleEdit}>{editingText}</button>}
            </div>

        </div>
    )
}
export default TaskCard;