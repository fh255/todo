import React, {useEffect, useState} from 'react'
import './App.css';
import { Header } from './component/Header';
import { AddTask } from './component/AddTask';
import { ShowTask } from './component/ShowTask';

export const App = () => {
  const [taskList,setTaskList]= useState(JSON.parse(localStorage.getItem('taskList'))|| []);
  const [task, setTask] = useState({});

  useEffect(()=> {
    localStorage.setItem('taskList ', JSON.stringify(taskList))
  }, [taskList])
  return (
    <div>
      < Header />
       <AddTask 
       taskList ={taskList} 
       setTaskList= {setTaskList} 
       task = {task}
       setTask = {setTask}
       />
       <ShowTask 
       taskList ={taskList} 
       setTaskList= {setTaskList} 
       task = {task}
       setTask = {setTask}
       /> 
    </div>
  )
}
