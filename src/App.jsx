import './scss/app.scss'
import logo from '../src/assets/logo.png'
import Form from './components/Form.jsx';

function App() {
  return (
    <>  
      <div className="logoContainer contenedor">
        <a href="/" className='logo-enlace'>
          <img className='logo' src={logo} alt="Logo" />
        </a>
      </div>
      <Form />
    </>
  )
}

export default App;
