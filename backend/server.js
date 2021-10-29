const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const bycrpyt = require('bcrypt');
app.use(express.json() );
const db_con = require('./db_connection');

const users = [];



app.get('/users', (req, res) => {
res.json(users)

})

// async wird hier verwendet, da bycrypt auch die async library verwendet!
// durch bcrpyt werden die Passwörter gehashed um die Passwörter später nicht im Klartext
// in der Datenbank zu haben
/* Per Post /users wird ein user gespeichert, welcher  sein Passwort
und Nutzernamen eigeben kann, hierbei wird das Passwort
gehashed + "gesalted" und erst anschließend gespeichert
*/
app.post('/users', async (req, res) => {

 try{

   // await verwenden, da asynch funktion 
 const salt = await bycrpyt.genSalt()
 const hashedPassword = await bycrpyt.hash(req.body.password, 10)
 const user = {name: req.body.name, password: hashedPassword}
 const name = req.body.name;
 db_con.connection.query("INSERT INTO `user` ( `username`, `password`) VALUES ("user.name", 'adasasdasdaddad')")
 users.push(user)
 res.status(201).send()

 }
catch{

    res.status(500).send()
}

});

//selbiges wie oben, auch async, da bcrypt verwendung 
app.post('/users/login', async (req, res) => {
const user = users.find(user => user.name = req.body.name)

if (user == null){
 return res.status(400).send('Benutzer nicht gefunden');
}
try{
if (await bycrpyt.compare(req.body.password, user.password)){

    res.send('Erfolg, Sie sind eingeloggt')
}
else{

    res.send('Falsche Passwort eingabe')
}

}
catch{
   res.status(500).send() 
}



})




app.listen(port);