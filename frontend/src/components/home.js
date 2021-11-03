import React, { Component } from 'react';
import Navigation from './navbar';
import userauth from './auth';



export default function home(){


let dername = userauth();

return(


    <div>
       
       <Navigation/>
        hallo welt {dername}
    </div>
)


}