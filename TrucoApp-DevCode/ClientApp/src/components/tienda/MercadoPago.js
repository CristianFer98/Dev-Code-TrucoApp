import React from 'react';
import './mp';
const MercadoPago = () =>{
    const mp = new MercadoPago('TEST-266fb749-17ee-4759-b90f-ffa5a3e4c8c0');
    mp.checkout({
        preference: {
          id: localStorage.getItem("IdPreferencia")
        },
        render: {
          container: '.cho-container',
          label: 'Pagar com Mercado Pago',
          type: 'wallet',
        }
      }) 

    return(
        <div class="cho-container"></div>
    );
}

export default MercadoPago;