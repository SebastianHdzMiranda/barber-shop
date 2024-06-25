import { useState } from "react";
import Swal from 'sweetalert2'
import { formatDate, formatTime } from "../helpers";
import { addSale } from "../services/api";
import { productos, servicios } from "../data/db";


export default function useForm() {

    const [cells, setCells] = useState(true);
    const [venta, setVenta] = useState('');
    const [changeDisplay, setChangeDisplay] = useState(false);
    const [nombre, setNombre] = useState('');

    const [alert, setAlert] = useState('');

    const handleCells = (boolean) => {
        setCells(boolean);
        setVenta('')
    }

    const guardarVenta = (nombre)=> {
        setVenta(nombre);
    }

    const sigPag = (e) => {
        e.preventDefault();
        if (venta === '') {
            crearAlerta('*Elige un campo');
            return;
        } 

        setChangeDisplay(true);
    }

    const guardarNombre = (e)=> {
        setNombre(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (nombre === '') {
            crearAlerta('*El campo nombre es obligatorio');
            return;
        }

        const isService = servicios.some( servicio => servicio.sale === venta);
        let data;

        if (isService) {
            const servicioObj = servicios.filter( service => service.sale === venta)[0];
            data = {...servicioObj};
        } else {
            const productoObj = productos.filter( producto => producto.sale === venta)[0];
            data = {...productoObj}
        }

        data = {
            ...data, 
            fecha: formatDate(Date.now()), 
            hora: formatTime(Date.now()), 
            nombre
        }

        const resultado = await Swal.fire({
            title: "¿Está seguro?",
            text: "¡Se enviaran los datos registrados!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#55e6a5",
            cancelButtonColor: "#dc2626",
            confirmButtonText: "¡Si, enviar!",
            cancelButtonText: "¡No, cancelar!"
          });
          if (resultado.isConfirmed) {
            // Enviar datos a la api
            await addSale(data); 
            
            location.reload();
        }


    }

    const crearAlerta = (mensaje) => {
        setAlert(mensaje);
        setTimeout(() => {
            setAlert('')
        }, 2000);
    }
    
    const handleChangeDisplay = () => {
        location.reload();
    }

    return {
        cells,
        changeDisplay,
        alert,
        handleCells,
        guardarVenta,
        sigPag,
        guardarNombre,
        handleSubmit,
        handleChangeDisplay,
    }

}