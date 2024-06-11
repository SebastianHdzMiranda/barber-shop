import { useState } from 'react';
import adulto from '../assets/adulto.png';
import niho from '../assets/niho.png';
import barba from '../assets/barba.png';
import bigote from '../assets/bigote.png';
import adultoCD from '../assets/adultoCD.png';
import nihoCD from '../assets/nihoCD.png';
import cejas from '../assets/cejas.png';

import AdultoConBarba from '../assets/adultoConBarba.png';
import ritualBarba from '../assets/barbaRitual.png';
import corteBarbaDisenho from '../assets/corte-barba-diseño.png';
import servicioVip from '../assets/servicioVip.png';
import Example from './Example';

const servicios = [
    {img: adulto, servicio:'Corte Adulto', price: 100},
    {img: niho, servicio:'Corte Niño', price: 80},
    {img: barba, servicio:'Barba', price: 70},
    {img: bigote, servicio:'Bigote', price: 50},
    {img: adultoCD, servicio:'Corte Adulto C/D', price: 140},
    {img: nihoCD, servicio:'Corte Niño C/D', price: 120},
    {img: cejas, servicio:'Arreglo de Cejas', price: 50},
    {img: AdultoConBarba, servicio:'Adulto con barba', price: 150},
    {img: corteBarbaDisenho, servicio:'Corte Barba C/D', price: 140},
    {img: ritualBarba, servicio:'Ritual Barba', price: 120},
    {img: servicioVip, servicio:'Servicio Vip', price: 300},
];

function Formulario() {
    const [servicio, setServicio] = useState('');
    const [changeDisplay, setChangeDisplay] = useState(false);
    const [nombre, setNombre] = useState('');

    const guardarServicio = (nombre)=> {
        // console.log(`Selecciono el servicio: ${nombre}`);
        setServicio(nombre);
    }

    const sigPag = (e) => {
        e.preventDefault();
        if (servicio === '') {
            console.log('Tienes que elegir un servicio');
            return;
        } else {
            setChangeDisplay(true);
        }

        if (servicio !== '' && nombre === '') {
            console.log('Tienes que elegir un nombre');
        }
    }

    const guardarNombre = (e)=> {
        console.log(e.target.value);
        setNombre(e.target.value);
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        // const servicioObj = servicios.filter( service => service.servicio === servicio)[0];
        // const data = {...servicioObj, nombre};

        // Enviar data
        // console.log(data);

        
    }
    
    return(
        <div className="contenedor-formulario contenedor">
            <form className="formulario" onSubmit={handleSubmit}>

                {!changeDisplay &&
                    <div className="formulario__servicios">
                        <h2 className='formulario__heading'>Selecciona un Servicio</h2>
                        <div className="formulario__grid">
                            {servicios.map( (servicio, i) => 
                                <div className="formulario__servicio" key={i} /*onClick={guardarServicio}*/>
                                    <input className="formulario__radio" type="radio" name="servicios" value={servicio.servicio} id={`servicio${i+1}`} onChange={()=> guardarServicio(servicio.servicio)}/>
                                    <label className='formulario__radio-label' htmlFor={`servicio${i+1}`}>
                                        <img className='formulario__radio-img' src={servicio.img} alt={`servicio${i+1}`} />
                                        <p className='formulario__radio-text'>{servicio.servicio}</p>
                                        <p className='formulario__radio-price'>${servicio.price}</p>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                }
                {(changeDisplay) && 
                    <div className='formulario__nombre'>
                        <label className='formulario__heading' htmlFor="nombre">Digita tu nombre</label>
                        <select name="nombre" id="nombre" className='formulario__select' onChange={guardarNombre}>
                            <option value="" disabled selected>Elige tu nombre</option>
                            <option value="barbaro1">Barbaro1</option>
                            <option value="barbero2">Barbero2</option>
                        </select>
                    </div>
                }

                <div className="formulario__botones">
                    
                    {!changeDisplay ?
                        <button className='formulario__btn formulario__btn--next' onClick={sigPag}>Siguiente</button>
                        :
                        <>
                            <button className='formulario__btn'>Atras</button>
                            <input type="submit" className='formulario__btn formulario__btn--submit'/>
                        </>
                    }
                </div>

            </form>

        </div>
    )
}

export default Formulario
