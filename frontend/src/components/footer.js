import './css/home.css';
import {Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


export default function Footer(){
return(
<footer>
<div class="footer-main">
<Image className="logo2 center-img" src="logo.jpg" roundedCircle />
</div>
<div class="footer-section">
  <table>
  <tbody>
  <tr>
  <td class="footer-header">Social Media</td>
  </tr>
  <tr>
  <td><a href="https://instagram.com"><img class="logo-footer logo" src="logo-ig.png" alt="Instagram"></img></a></td>
  </tr>
  <tr>
  <td><a href="https://twitter.com"><img class="logo-footer logo" src="logo-twitter.png" alt="Twitter"></img></a></td>
  </tr>
  <tr>
  <td><a href="https://facebook.com"><img class="logo-footer logo" src="logo-fb.png" alt="Facebook"></img></a></td>
  </tr>
  </tbody>
  </table>
</div>

<div class="footer-section">
  <table>
  <tbody>
  <tr>
  <td class="footer-header">Bezahlung</td>
  </tr>
  <tr>
  <td><a href="https://paypal.com"><img class="logo-footer logo" src="logo-pp.png" alt="Iban"></img></a></td>
  </tr>
  <tr>
  <td><a href="https://www.iban.de/sepa-ueberweisung.html"><img class="logo-footer logo" src="logo-sepa.png" alt="Iban"></img></a></td>
  </tr>
  <tr>
  <td><a href="https://bitcoin.de"><img class="logo-footer logo" src="logo-btc.png" alt="Facebook"></img></a></td>
  </tr>
  </tbody>
  </table>
</div>

<div class="footer-section">
  <table>
  <tbody>
  <tr>
  <td class="footer-header">Informationen</td>
  </tr>
  <tr>
  <td class="Tabelle"><a class="informationen" href="impressum.html">Impressum</a></td>
  </tr>
  <tr>
  <td  class="Tabelle"><a class="informationen" href="https://www.google.com/maps/dir//Heidenheim+an+der+Brenz/@48.7135491,10.1207437,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47991673f3cf9a8b:0xcc72abe0ccd2b706!2m2!1d10.1610948!2d48.6893963">Anfahrt</a></td>
  </tr>
  <tr>
  <td  class="Tabelle"><a class="informationen" href="https://de.wikipedia.org/wiki/Datenschutz-Grundverordnung">Datenschutz</a></td>
  </tr>
  </tbody>
  </table>
</div>
</footer>

)

}