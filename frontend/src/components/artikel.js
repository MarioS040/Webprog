import React, { Component } from 'react';
import './css/artikel.css';
import Navigation from './navbar';


export default function(){
    return(

    <div>
        <Navigation/>
        
        <div class = "produkt">

        <header>
            <hgroup>
                <h1> Produkt X </h1>
                <h4> Das beste X überhaupt </h4>
            </hgroup>
        </header>
        
        <figure>
            <img></img>
        </figure>

        <section>

            <p> 
            Lorem Ipsum bla bla. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </p>

            <details> 
                <summary> Produkt Beschreibung </summary>
                <ul>
                    <li> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                    <li> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                    <li> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                </ul>
            </details>

            <button> Bieten </button>
        </section>
        </div>


    </div>

    )
}
