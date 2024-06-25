import './scss/app.scss'
import logo from '../src/assets/logo.png'
import Formulario from './components/Formulario';

function App() {
  return (
    <>  
      <div className="logoContainer contenedor">
        <a href="/" className='logo-enlace'>
          <img className='logo' src={logo} alt="Logo" />
        </a>
      </div>
      <Formulario />
    </>
  )
}

export default App
