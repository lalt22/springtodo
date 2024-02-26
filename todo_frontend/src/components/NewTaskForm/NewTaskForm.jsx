import { RefreshContext } from "../../context/RefreshContext/RefreshContextProvider";
import {useContext, useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { addNewTask, getTaskById, updateTaskById } from "../../services/taskServices";
import "./NewTaskForm.scss"

const NewTaskForm = ({setAdding, makeNew, id}) => {
    const {refresh, setRefresh} = useContext(RefreshContext);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        if (makeNew) {
            addNewTask(data).then(() => setAdding(false)).then(() => setRefresh(refresh+1));
        }
        else {
            updateTaskById(id, data).then(() => setAdding(false)).then(() => setRefresh(refresh+1));
        }
    }

    useEffect(() => {
        if(id) {
            getTaskById(id).then((res) => setTaskToEdit(res));
        }
    }, [id])

    const formClasses = makeNew ? "centered" : "left-aligned"

    console.log("New:" + makeNew + " taskToEdit: "+ taskToEdit);

    return (
        <form className={["new-form", formClasses].join(" ")} onSubmit={handleSubmit(onSubmit)}>
            {makeNew &&
             <div className="inputs">
                <input type="text" placeholder="Enter description" {...register("description", {required: true})}></input>
                <input type="date" {...register("dueDate")}></input>
                <input type="submit"></input>
            </div>
            }
            {!makeNew && taskToEdit &&
                <div className="inputs">
                    <input type="text" placeholder="Enter description" {...register("description", {required: true})} defaultValue={taskToEdit.description}></input>
                    <input type="date" {...register("dueDate", {required: true})} ></input>
                    <input type="submit"></input>
                </div>
            }

        </form>
    )
}

export default NewTaskForm;