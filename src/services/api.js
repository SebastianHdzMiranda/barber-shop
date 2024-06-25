const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/667a35d14d11fd04f00c2cb3"
);

export async function addSale(data) {
    const { id, img, sale, price, nombre, fecha, hora, pago } = data;

    const respuesta = await     store
    .append("hoja1", [
        {
            'Nombre': nombre,
            'Venta': sale,
            'Precio': price,
            'Fecha': fecha,
            'Hora': hora,
            'Imagen': img,
            'Pago': pago,
            'Id': id
        }
    ]);


   return respuesta;
}

// export function deleteSales() {
      
//     store
//     .delete("hoja1", {
//         search: { Nombre: "barbero1" },
//         limit: 80
//     })
//     .then(res => {
//         console.log(res);
//     });

//     store
//     .delete("hoja1", {
//         search: { Nombre: "barbero2" },
//         limit: 80
//     })
//     .then(res => {
//         console.log(res);
//     });
// }