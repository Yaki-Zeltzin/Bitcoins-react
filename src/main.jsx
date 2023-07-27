import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cuadricula from './components/Cuadricula'
import './main.css'
import Saludo from './components/Saludo.jsx'
import Pagina404 from './404.jsx'
import App from './components/App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Cuadricula />} />
          <Route path='saludo' element={<Saludo />} />
        </Route>
        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </>
)
