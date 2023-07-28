import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cuadricula from './components/Cuadricula'
import './main.css'
import Pagina404 from './404.jsx'
import App from './components/App'
import Home from './Home'
import CriptoPage from './components/cripto/CriptoPage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/criptomonedas' element={<App />}>
          <Route index element={<Cuadricula />} />
          <Route path=':id' element={<CriptoPage />} />
        </Route>
        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </>
)
