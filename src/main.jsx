import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App'
import './main.css'
import Saludo from './components/Saludo.jsx'
import Pagina404 from './404.jsx'
import Menu from './components/menu/Menu'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Menu />
    <BrowserRouter>
      <Routes>
        <Route path='/saludo' element={<Saludo />} />
        <Route path='*' element={<Pagina404 />} />
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
)
