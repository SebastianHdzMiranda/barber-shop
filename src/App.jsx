import './scss/app.scss'
import logo from '../src/assets/logo.png'
import Formulario from './components/Formulario';
import Form from './components/Form';

function App() {
  return (
    <>  
      <div className="logoContainer contenedor">
        <a href="/" className='logo-enlace'>
          <img className='logo' src={logo} alt="Logo" />
        </a>
      </div>
      {/* <Formulario /> */}
      <Form />
    </>
  )
}

export default App
