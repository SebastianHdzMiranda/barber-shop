import './scss/app.scss'
import logo from '../src/assets/logo.png'
import Formulario from './components/formulario'
import { useState } from 'react'

function App() {
  return (
    <>  
      <div className="logoContainer contenedor">
        <a href="/" className='logo-enlace'>
          <img className='logo' src={logo} alt="Logo" />
        </a>
      </div>

      <Formulario/>
    </>
  )
}

export default App
