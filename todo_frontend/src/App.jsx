import { useEffect, useState } from 'react'
import './App.css'
import TaskList from './containers/TaskList/TaskList';
import RefreshContextProvider from './context/RefreshContext/RefreshContextProvider';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';

function App() {
  const [adding, setAdding] = useState(false);


  const handleClick = () => {
    setAdding(true);
  }

  return (
    <RefreshContextProvider>
      <div className='page-wrapper'>
        <h1>TODOs</h1>
        <button onClick={handleClick}>Add New...</button>
        {adding && <NewTaskForm adding={adding} setAdding={setAdding} />}
        <TaskList />
      </div>
    </RefreshContextProvider>
    
  )
}

export default App
