import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { FilterProvider } from './Context/FilterContext.jsx'
import TaskProvider from './Context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <TaskProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
    
  </TaskProvider>
    ,
)
