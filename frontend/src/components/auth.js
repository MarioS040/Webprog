import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import localStorage, {get} from 'local-storage';


export default function loggedin(){
  
    
let data;
let userloggedin;   
data = JSON.parse(window.localStorage.getItem('isAuthenticated'));
          
if (data == "true"){

userloggedin = "true";

}
else{

  userloggedin = "false";
}
    
 


}




