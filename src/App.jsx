import React, { useContext, useState } from 'react'
import './App.css'
import Task from './Components/Task';
import  { TaskContext } from './Hooks/useTask';
import { MousePointerClick } from 'lucide-react';
import { BookCheck } from 'lucide-react';


function App() {
  const {tasks, addTask} = useContext(TaskContext)
  const [newTask, setNewTask] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({text: newTask})
    setNewTask("")
  }


  const handleChange = (e) =>{
    const newTasks = e.target.value;
    setNewTask(newTasks);
  }

  return (
    <>
    <header className='appPresentation'>
      <BookCheck className='icon'/>
    <h1>TITIDO</h1>
    </header>

    
    <section className='formSection'>
      <h3>Add a new task!</h3>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Homework, walk dog..."
        />
        <button type='submit' className='btnAdd'>
          <MousePointerClick/>
          Add
        </button>
      </form>
    </section>
    <div className='listTask'>
      <Task tasks={tasks}/>
    </div>
    
    </>
  )
}

export default App
