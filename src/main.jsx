import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskProvider from './Hooks/useTask.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <TaskProvider>
    <App />
  </TaskProvider>
    ,
)
