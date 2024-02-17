export const getAllTasks = async() => {
    const res = await fetch('http://localhost:8080/tasks');
    if(!res.ok) {
        throw new Error('Failed to get tasks');
    }
    const data = await res.json();
    console.log(data);
    return data;
}