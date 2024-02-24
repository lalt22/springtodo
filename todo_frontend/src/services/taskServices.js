export const getAllTasks = async() => {
    const res = await fetch('http://localhost:8100/tasks');
    if(!res.ok) {
        throw new Error('Failed to get tasks');
    }
    const data = await res.json();
    return data;
}

export const getTaskById = async (id) => {
    const res = await fetch(`http://localhost:8100/tasks/${id}`);
    if(!res.ok) {
        throw new Error('Task Not Found');
    }
    const data = await res.json();
    return data;
}

export const toggleTaskById = async (id, completed) => {
    const res = await fetch(`http://localhost:8100/tasks/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "completed": completed
        })
    })
    if(!res.ok) {
        throw new Error('Toggle failed');
    }
    const data = await res.json();
    return data;
}

export const updateTaskById = async(id, newData) => {
    const res = await fetch(`http://localhost:8100/tasks/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "description": newData.description,
            "dueDate": newData.dueDate
        })
    })
    if (!res.ok) {
        throw new Error('Update failed');
    }
    const data = await res.json();
    return data;
}

export const getTasksByDescription = async (descriptionSearch) => {
    const res = await fetch(`http://localhost:8100/tasks?description=${descriptionSearch}`);

    if (!res.ok) {
        throw new Error('Update failed');
    }
    const data = await res.json();
    return data;

}

export const addNewTask = async(data) => {
    data.dueDate = reformatDate(data.dueDate);
    const res = await fetch(`http://localhost:8100/tasks`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            description: data.description,
            dueDate: data.dueDate
        })
    })

    if(!res.ok) {
        throw new Error('Failed to get tasks');
    }
}
export const deleteTaskById = async (id) => {
    const res = await fetch(`http://localhost:8100/tasks/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    if (!res.ok) {
        throw new Error("Failed to delete task");
    }
}

const reformatDate = (dateString) => {
    return dateString.split('-').reverse().join('-');
}