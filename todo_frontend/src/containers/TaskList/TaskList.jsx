import TaskCard from "../../components/Tasks/TaskCard";
import {useState, useEffect, useContext} from "react";
import { getAllTasks, getTasksByDescription } from "../../services/taskServices";
import { RefreshContext } from "../../context/RefreshContext/RefreshContextProvider";
import "./TaskList.scss";

const TaskList = ({searchParam}) => {
    console.log(searchParam);
    const [tasks, setTasks] = useState(null);
    const {refresh} = useContext(RefreshContext);

    useEffect(() => {
        if (!searchParam) {
            getAllTasks().then((data) => setTasks(data))
        }
        else {
            getTasksByDescription(searchParam).then((data) => setTasks(data));
        }
    }, [refresh, searchParam]);


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