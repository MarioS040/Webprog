import React, { Component } from 'react';
import Navigation from './navbar';
import userauth from './auth';



export default function home(){


return(


    <div>
        {userauth()}
       <Navigation/>
        hallo welt
    </div>
)


}