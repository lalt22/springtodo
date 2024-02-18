import { RefreshContext } from "../../context/RefreshContext/RefreshContextProvider";
import {useContext, useEffect} from "react";
import { useForm } from "react-hook-form";
import { addNewTask } from "../../services/taskServices";

const NewTaskForm = ({adding, setAdding}) => {
    const {refresh, setRefresh} = useContext(RefreshContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {        
        addNewTask(data).then(() => setAdding(false)).then(() => setRefresh(refresh+1));
    }


    useEffect(() => {
        console.log(adding, "ADDING");
    }, [refresh])

    return (
        <form className="new-form" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Enter description" {...register("description", {required: true})}></input>
            {errors.exampleRequired && <span>Description is required</span>}
            <input type="date" {...register("dueDate")}></input>
            <input type="submit"></input>
        </form>
    )
}

export default NewTaskForm;