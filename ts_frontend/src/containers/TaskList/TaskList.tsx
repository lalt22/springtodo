import TaskCard from "../../components/Tasks/TaskCard";
import {useState, useEffect, useContext} from "react";
import { getAllTasks, getTasksByDescription, orderByCompleted } from "../../services/taskServices";
import { RefreshContext } from "../../context/RefreshContext/RefreshContextProvider";
import "./TaskList.scss";

const TaskList = ({searchParam}:any) => {
    const [tasks, setTasks] = useState<any>(null);
    const {refresh} = useContext(RefreshContext);

    useEffect(() => {
        if (!searchParam) {
            getAllTasks().then((data) => setTasks(data));
        }
        else {
            getTasksByDescription(searchParam).then((data) => setTasks(data));
        }

    }, [refresh, searchParam]);

    useEffect(() => {
        console.log("Refresh: " + refresh);
    }, [refresh])

    useEffect(() => {
        // setRefresh(refresh + 1);
    }, [tasks])




    return (
        <div className="task-list">
            {tasks && tasks.map((task: any) => {
                return (
                    <TaskCard key={task.id} props={task} />
                )
            })}
        </div>
    )
}

export default TaskList;