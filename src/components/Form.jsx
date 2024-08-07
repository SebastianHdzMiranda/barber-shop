import { pagos, productos, servicios, users } from '../data/db';
import useForm from '../hooks/useForm';
import Alert from './Alert';

function Form() {

    const {
        nombre,
        pago,
        cells,
        changeDisplay,
        alert,
        handleCells,
        venta,
        guardarVenta,
        sigPag,
        guardarNombre,
        guardarPago,
        handleSubmit,
        handleChangeDisplay,
    } = useForm();

    return(
        <div>
            <form className="formulario" onSubmit={handleSubmit}>

                {!changeDisplay &&
                    <div className="formulario__cells">

                        <div className="formulario__buttons">
                            <button className='formulario__button' type='button' onClick={() => handleCells(true)}>Servicios</button>
                            <button className='formulario__button' type='button' onClick={() => handleCells(false)}>Productos</button>
                        </div>


                        {cells ? 
                        
                            <div className="formulario__grid">
                                {servicios.map( (servicio, i) => 
                                    <div className="formulario__cell" key={servicio.id} >
                                        <input className="formulario__radio" type="radio" name="servicios" value={servicio.servicio} id={servicio.id} onChange={()=> guardarVenta(servicio.sale)}/>
                                        <label className='formulario__radio-label' htmlFor={servicio.id}>
                                            <img className='formulario__radio-img' src={`/${servicio.img}.png`} alt={`servicio${i+1}`} />
                                            <p className='formulario__radio-text'>{servicio.sale}</p>
                                            <p className='formulario__radio-price'>${servicio.price}</p>
                                        </label>
                                    </div>
                                )}
                            </div>
                            :
                            <div className="formulario__grid">
                                {productos.map( (product, i) => 
                                    <div className="formulario__cell" key={product.id}>
                                        <input className="formulario__radio" type="radio" name="productos" value={product.sale} id={product.id} onChange={()=> guardarVenta(product.sale)} />
                                        <label className='formulario__radio-label' htmlFor={product.id}>
                                            <img className='formulario__radio-img' src={`/${product.img}.png`} alt={`producto${i+1}`} />
                                            <p className='formulario__radio-text'>{product.sale}</p>
                                            <p className='formulario__radio-price'>${product.price}</p>
                                        </label>
                                    </div>
                                )}
                            </div> 
                        }
                    </div>
                }


                {(changeDisplay) && 
                    <div className='formulario__nombre'>
                        <label className='formulario__heading' htmlFor="nombre">Digita tu nombre</label>
                        <select name="nombre" id="nombre" className='formulario__select' value={nombre} onChange={guardarNombre}>
                            <option value='' disabled hidden>-- Elige tu nombre --</option>
                            { users.map( (user, i) => 
                                <option value={user.name} key={i}>{user.name}</option>
                            )}
                        </select>

                        {venta !== 'C-G' &&
                            <>
                                <label className='formulario__heading' htmlFor="pago">Forma de pago</label>
                                <select name="pago" id="pago" className='formulario__select' value={pago} onChange={guardarPago}>
                                    <option value='' disabled hidden>-- Elige la forma de pago --</option>
                                    { pagos.map( (pago, i) => 
                                        <option value={pago.name} key={i}>{pago.name}</option>
                                    )}
                                </select>
                            </>
                        }


                    </div>
                }
                {alert && <Alert>{alert}</Alert>}


                <div className="formulario__botones">
                    
                    {!changeDisplay ?
                        <button className='formulario__btn formulario__btn--next' onClick={sigPag}>Siguiente</button>
                        :
                        <>
                            <button type='button' className='formulario__btn' onClick={()=> handleChangeDisplay()}>Atras</button>
                            <input type="submit" className='formulario__btn formulario__btn--submit'/>
                        </>
                    }
                </div>

                

            </form>

            
                
        </div>
    )
}

export default Form
