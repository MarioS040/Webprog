import React from 'react';
import Navigation from './navbar';
import './css/impressum.css';
import Footer from './footer';

export default function Impressum(){

    return(
    <div>

    <div>
    <Navigation/>
    </div>

    <div class="container1 ueberblick shadow-lg">
    <h2 class="Impressum"> Impressum </h2>
    <h3 class="Angaben"> Angaben gemäß § 5 TMG</h3>
    <p class="imprp"> Yabe GmbH </p>
    <p class="imprp"> Musterstraße 20 </p>
    <p class="imprp"> 12345 Musterstadt </p>
    <h3 class="Kontakt"> Kontakt: </h3>
    <p class="Telefon"> Telefon: 01123542456 </p>
    <a class="Mail" href="mailto: kontakt@yabe-support.de"> kontakt@yabe-support.de </a>






    </div>

    <div class="Footer">
    <Footer/>
    </div>
    </div>
    )}