import React, { useState } from "react";


export function Counter() {
    const [counter, setCounter] = useState(10) //state ahora es un array que lleva dos parametros

    return (
        <div>
            <h2> Counter: {counter}</h2>

            <button onClick={() => {
                setCounter(counter + 10)
            }}>Sumar</button>

            <button onClick={() => {
                setCounter(counter - 10)
            }}>Restar</button>

            <button onClick={() => {
                setCounter(0)
            }}>Reiniciar</button>

        </div>


    );
}


