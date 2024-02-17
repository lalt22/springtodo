import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllTasks } from './services/taskServices';
import TaskCard from './components/Tasks/TaskCard';

function App() {
  const [tasks, setTasks] = useState(null);
  
  useEffect(() => {
    getAllTasks().then((data) => setTasks(data))
  }, [])

  return (
    <div className='page-wrapper'>
      <h1>TODOs</h1>
      {tasks && tasks.map((task) => {
        return (
          <TaskCard key={task.id} props={task} />
        )
      })
      }
    </div>
  )
}

export default App
