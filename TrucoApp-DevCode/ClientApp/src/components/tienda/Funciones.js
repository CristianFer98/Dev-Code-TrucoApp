import React from 'react';
import  './mp';

export const checkout = async (url, id)=>{    
    const urlApi=url+id;
    fetch(urlApi)
       .then(res=> res.json())
       .then(data=>{
        console.log(data.result)
        
           const mp = new MercadoPago('TEST-266fb749-17ee-4759-b90f-ffa5a3e4c8c0', {
              locale: 'es-AR'});

              mp.checkout({
              preference: {
                id: `${data.result}`
              },
              autoOpen: true,
              render: {
                container: '.cho-container',
                label: 'Pagar',
              }
            });
   
        });

        

}

