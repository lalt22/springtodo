import TaskCard from "../../components/Tasks/TaskCard";
import {useState, useEffect, useContext} from "react";
import { getAllTasks } from "../../services/taskServices";
import { RefreshContext } from "../../context/RefreshContext/RefreshContextProvider";
import "./TaskList.scss";

const TaskList = () => {
    const [tasks, setTasks] = useState(null);
    const {refresh, setRefresh} = useContext(RefreshContext);

    useEffect(() => {
        getAllTasks().then((data) => setTasks(data))
    }, [refresh]);


    return (
        <div className="task-list">
            {tasks && tasks.map((task) => {
                return (
                    <TaskCard key={task.id} props={task} />
                )
            })}
        </div>
    )
}

export default TaskList;