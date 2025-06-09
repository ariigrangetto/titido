import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskProvider from './Hooks/useTask.jsx'
import React from 'react'
import { FilterProvider } from './Context/FilterContext.jsx'

createRoot(document.getElementById('root')).render(
  <TaskProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
    
  </TaskProvider>
    ,
)
