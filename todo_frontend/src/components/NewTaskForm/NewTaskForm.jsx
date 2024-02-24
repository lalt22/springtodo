import { RefreshContext } from "../../context/RefreshContext/RefreshContextProvider";
import {useContext, useEffect} from "react";
import { useForm } from "react-hook-form";
import { addNewTask, updateTaskById } from "../../services/taskServices";
import "./NewTaskForm.scss"

const NewTaskForm = ({setAdding, makeNew, id}) => {
    const {refresh, setRefresh} = useContext(RefreshContext);
    const {
        register,
        handleSubmit,
        watch,
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


    const formClasses = makeNew ? "centered" : "left-aligned"

    useEffect(() => {
    }, [refresh])

    return (
        <form className={["new-form", formClasses].join(" ")} onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Enter description" {...register("description", {required: true})}></input>
            {errors.exampleRequired && <span>Description is required</span>}
            <input type="date" {...register("dueDate")}></input>
            <input type="submit"></input>
        </form>
    )
}

export default NewTaskForm;