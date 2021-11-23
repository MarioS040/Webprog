import Cookies from 'universal-cookie';


/*
Funktion zum erhalten des Cookies, der den Token entählt, so kann in den weiteren 
Files diese Datei importiert werden und mit userauth() eine Variable beschrieben werden, 
die den Token enthält.

Wird benötigt um bei einer Anfrage an das Backend diesen Token mitzusenden und somit sich gegenüber des Backends zu Authentifizieren.
*/


const cookies = new Cookies();

let derusername;
let usertoken = cookies.get('token');
let complusertoken = 'Bearer ' + usertoken;

async function userauth(){






await fetch('http://localhost:3000/users/current', {
method: 'GET',
headers: {"content-type": "application/json",
         "Authorization": complusertoken}
})
.then((response) => response.json())
.then((responseJson) => {derusername = responseJson.username;
})

    




return {derusername, complusertoken}


}

export default userauth;