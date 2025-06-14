import React, {useState } from 'react'
import './App.css'
import Task from './Components/Task';
import  { useTask } from './Hooks/useTask';
import { MousePointerClick } from 'lucide-react';
import { BookCheck } from 'lucide-react';
import useFilter from "./Hooks/useFilter"


function App() {
  const {tasks, addTask} = useTask();
  const [newTask, setNewTask] = useState("")

  const {filterTask} = useFilter()

  const filteredTask = filterTask(tasks)

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
      <h2>📝 Add a new task!</h2>
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
      
         <Task tasks={filteredTask}/>
      
    </div>
    </>
  )
}

export default App
