import React, { Component } from 'react';
import './css/artikel.css';
import Navigation from './navbar';
import userauth from './auth.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const Artikel = () => {

    const { id } = useParams();
    const [artikel, setArtikel] = useState({});

    useEffect(() => {    // Update the document title using the browser API
        
        const getArtikel = async () => {
            console.log('Get Artikel works: ' + id);
            let userdaten = await userauth();
            let token = await userdaten.complusertoken;
    
            fetch(`http://localhost:3000/article/${id}`,{
            method: 'GET',
            headers: {"content-type": "application/json",
                        "Authorization": token},
            })
            .then((response) => response.json())
            .then((artikel) => setArtikel(artikel))
        };
        getArtikel();
    }, [id]);

  return <div>

        <Navigation/>

        <div class = "produkt">

        <header>
            <hgroup>
                <h1>{artikel.articleName}</h1>
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


  </div>;
};

export default Artikel;

// export default function(){
//     return(

//     <div>
        

//     </div>

//     )
// }
