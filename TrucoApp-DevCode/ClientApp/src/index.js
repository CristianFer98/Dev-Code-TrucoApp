import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from 'react-router-dom';
import { Counter } from './components/Counter'
import { Boton } from './components/FetchData'
const root = ReactDOM.createRoot(document.getElementById("root"));
//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');


root.render(
    <>
        <h1>Hola mundo</h1>
        <Counter></Counter>
        <Boton/>
    </>
);


