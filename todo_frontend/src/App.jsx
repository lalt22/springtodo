import { useState } from 'react'
import './App.css'
import TaskList from './containers/TaskList/TaskList';
import RefreshContextProvider from './context/RefreshContext/RefreshContextProvider';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [adding, setAdding] = useState(false);
  const [searchParam, setSearchParam] = useState("");

  const handleClick = () => {
    setAdding(!adding);
  }

  const addingText = adding ? "Cancel" : "Add New";

  return (
    <RefreshContextProvider>
      <div className='page-title'>
          <h1>TODOs</h1>
        </div>
      <div className='page-wrapper'>
        <div className='inputs'>
          <div className='adding'>
              <button onClick={handleClick}>{addingText}</button>
              {adding &&
                <NewTaskForm adding={adding} setAdding={setAdding} makeNew="true"/>}
            </div>
            <div className='searching'>
              <SearchBar setSearchParam={setSearchParam}/>
            </div>
        </div>


          <TaskList searchParam={searchParam}/>
      </div>
    </RefreshContextProvider>

  )
}

export default App
