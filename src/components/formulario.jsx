import { useState } from 'react';
import adulto from '../assets/adulto.png';
import niho from '../assets/niho.png';
import barba from '../assets/barba.png';
import bigote from '../assets/bigote.png';
import adultoCD from '../assets/adultoCD.png';
import nihoCD from '../assets/nihoCD.png';
import cejas from '../assets/cejas.png';

import AdultoConBarba from '../assets/adultoConBarba.png';
import Example from './Example';

const servicios = [
    {img: adulto, nombre:'Corte Adulto'},
    {img: niho, nombre:'Corte Niño'},
    {img: barba, nombre:'Barba'},
    {img: bigote, nombre:'Bigote'},
    {img: adultoCD, nombre:'Corte Adulto C/D'},
    {img: nihoCD, nombre:'Corte Niño C/D'},
    {img: cejas, nombre:'Arreglo de Cejas'},
    {img: AdultoConBarba, nombre:'Adulto con barba'},
];

function Formulario() {
    const [servicio, setServicio] = useState('');
    const [mostrarUsuario, setMostrarUsuario] = useState(false);

    const [nombre, setNombre] = useState('');
    const [mostrarPrecio, setMostrarPrecio] = useState(false);

    const guardarServicio = (nombre)=> {
        console.log(`Selecciono el servicio: ${nombre}`);
        setServicio(nombre);
    }

    const sigPag = (e) => {
        e.preventDefault();
        if (servicio === '') {
            console.log('Tienes que elegir un servicio');
            return;
        } else {
            setMostrarUsuario(true);
        }

        if (servicio !== '' && nombre === '') {
            console.log('Tienes que elegir un nombre');
        } else {
            setMostrarPrecio(true);
        }
    }

    const guardarNombre = (e)=> {
        console.log(e.target.value);
        setNombre(e.target.value);
    }
    
    return(
        <div className="contenedor-formulario contenedor">
            <form className="formulario">

                {!mostrarUsuario &&
                    <div className="formulario__servicios">
                        <div className="formulario__grid">
                            {servicios.map( (servicio, i) => 
                                <div className="formulario__servicio" key={i} /*onClick={guardarServicio}*/>
                                    <input className="formulario__radio" type="radio" name="servicios" value={servicio.nombre} id={`servicio${i+1}`} onChange={()=> guardarServicio(servicio.nombre)}/>
                                    <label className='formulario__radio-label' htmlFor={`servicio${i+1}`}>
                                        <img className='formulario__radio-img' src={servicio.img} alt={`servicio${i+1}`} />
                                        <p className='formulario__radio-text'>{servicio.nombre}</p>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                }
                {(mostrarUsuario && !mostrarPrecio) && 
                    <div className='formulario__nombre'>
                        <label htmlFor="nombre">Digita tu nombre</label>
                        <select name="nombre" id="nombre" className='formulario__select' onChange={guardarNombre}>
                            <option value="" disabled selected>Elige tu nombre</option>
                            <option value="sebastian">Sebastian</option>
                            <option value="rodrigo">Rodrigo</option>
                        </select>
                    </div>
                }

                {mostrarPrecio && 
                    <div className='formulario__precio'>
                        <label htmlFor="precio">Digita el precio</label>
                        <input type="number" className='formulario__select'/>
                    </div>
                }

                <div className="formulario__botones">
                    
                    {mostrarUsuario &&
                        <button className='formulario__btn'>Atras</button>
                    }

                    {!mostrarPrecio ?
                        <button className='formulario__btn formulario__btn--next' onClick={sigPag}>Siguiente</button>
                        :
                        <input type="submit" className='formulario__btn formulario__btn--submit'/>
                    }
                </div>

            </form>

        </div>
    )
}

export default Formulario
