import './scss/app.scss'
import logo from '../src/assets/logo.svg'
import Formulario from './components/formulario'
import { useState } from 'react'

function App() {
  return (
    <>  
      <div className="logoContainer contenedor">
        <img className='logo' src={logo} alt="Logo" />
      </div>

      <Formulario/>
    </>
  )
}

export default App
