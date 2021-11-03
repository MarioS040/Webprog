import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/register.css'
import Cookies from 'universal-cookie';
import Navigation from './navbar';


const cookies = new Cookies();

function logout (){


    function userlogout(){

        window.localStorage.removeItem("isAuthenticated");
        cookies.remove('token');
        console.log("erfolg")
        }



return(



<div class="back">
<Navigation />

{userlogout()}
<div class="div-center">


  <div class="content">
 

    <h1>Sie wurden Erfolgreich ausgeloggt</h1>

    
  </div>


</div>
</div>


)


}

export default logout;
