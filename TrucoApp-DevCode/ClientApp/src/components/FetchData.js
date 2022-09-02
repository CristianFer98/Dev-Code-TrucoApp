import React from 'react'



    export const Boton = () => {

        return <button onClick={() => {
            fetch('weatherforecast')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
        }}>
            traer datos
        </button>

    }

   
   
