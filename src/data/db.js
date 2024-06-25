import { v4 as uuidv4 } from 'uuid';

export const servicios = [
    {id:uuidv4(), img: 'adulto', sale:'Corte Adulto', price: 100},
    {id:uuidv4(), img: 'niho', sale:'Corte Niño', price: 80},
    {id:uuidv4(), img: 'barba', sale:'Barba', price: 70},
    {id:uuidv4(), img: 'bigote', sale:'Bigote', price: 50},
    {id:uuidv4(), img: 'adultoCD', sale:'Corte Adulto C/D', price: 140},
    {id:uuidv4(), img: 'nihoCD', sale:'Corte Niño C/D', price: 120},
    {id:uuidv4(), img: 'cejas', sale:'Arreglo de Cejas', price: 50},
    {id:uuidv4(), img: 'adultoConBarba', sale:'Adulto con barba', price: 150},
    {id:uuidv4(), img: 'corteBarbaDisenho', sale:'Corte Barba C/D', price: 190},
    // {id:uuidv4(), img: 'ritualBarba', sale:'Ritual Barba', price: 120},
    {id:uuidv4(), img: 'servicioVip', sale:'Servicio Vip', price: 300},
    {id:uuidv4(), img: 'c-1', sale:'C-1', price: 50},
    {id:uuidv4(), img: 'c-1', sale:'C-2', price: 40},

];

export const productos = [
    {id:uuidv4(), img: 'nishman', sale: 'Nishman', price: 200},
    {id:uuidv4(), img: 'FixMe', sale: 'FixMe', price: 120},
    {id:uuidv4(), img: 'baregk', sale: 'Baregk', price: 90},
    {id:uuidv4(), img: 'barbiux', sale: 'Barbiux', price: 180},
    {id:uuidv4(), img: 'nishmanP0', sale: 'Nishman p0', price: 230},
]

export const users = [
    { name: 'Yael'},
    { name: 'Jesus'},
    { name: 'Liam'},
]