const express = require('express');
const port = 8080;
const app = express();
app.use(express.json() );

app.listen(port);

app.get('/tshirt', (req, res) =>{
res.status(200).send({
    
    tshirt: 'goodlooking',
    size: 'large'


});
});

app.post('/tshirt/:id', (req, res) => {


const{ id } = req.params;
const{ logo } = req.body;


if(!logo){

res.status(418).send({message:'logo required!'})

}

res.send({tshirt: "tshirt with your ${logo} and ID of ${id}"});

});