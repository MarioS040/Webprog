import React, { Component } from 'react';
import './css/artikel.css';
import Navigation from './navbar';
import userauth from './auth.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { InputGroup, FormControl, Button } from 'react-bootstrap'


const Artikel = () => {

    const { id } = useParams();
    const [artikel, setArtikel] = useState({});
    const [preis, setPreis] = useState('');

    

    useEffect(() => {    // Update the document title using the browser API

        const getArtikel = async () => {
            let userdaten = await userauth();
            let token = await userdaten.complusertoken;
            fetch(`http://localhost:3000/article/${id}`, {
                method: 'GET',
                headers: { "content-type": "application/json", "Authorization": token }
            })
                .then((response) => response.json())
                .then((artikel) => setArtikel(artikel))
                console.log(artikel)
        };
        getArtikel();
    }, [id]);

    const onClick = async () => {
        console.log('preis: ' + preis)
        let userdaten = await userauth();
        let token = await userdaten.complusertoken;
        fetch(`http://localhost:3000/article/bieten/${id}`, {
            method: 'POST',
            headers: { "content-type": "application/json", "Authorization": token },
            data: { "price": preis }
        }).then((response) => console.log(response.json()))
    }

    return <div>

        <Navigation />

        <div class="produkt">

            <header>
                <hgroup>
                    <h1>{artikel.articleName}</h1>
                    <h4> Das beste X überhaupt </h4>
                </hgroup>
            </header>

            <figure>
                <img src={'http://localhost:3000/uploads/' + artikel.path}></img>
            </figure>

            <section>

                <p>
                    Lorem Ipsum bla bla. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </p>

                <details>
                    <summary> Produkt Beschreibung </summary>
                    <ul>
                        <li>Preis: {artikel.Price}€</li>
                        <li> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                        <li> Lorem ipsum dolor sit amet, consetetur sadipscing elitr </li>
                    </ul>
                </details>

                <InputGroup className="mb-3">
                    <FormControl placeholder="Dein Angebot" onChange={(e) => setPreis(e.target.value)}/>
                    <Button onClick={onClick} variant="outline-secondary" id="button-bieten">
                        Bieten
                    </Button>
                </InputGroup>

            </section>
        </div>


    </div>;
};

export default Artikel;