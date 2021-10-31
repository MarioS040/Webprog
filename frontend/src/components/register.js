import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/register.css'
import { Link } from 'react-router-dom';
import NavBar from './navbar';


export default function register(){

return(


<div class="back">


<div class="div-center">


  <div class="content">


    <h3>Registerieren</h3>
    <hr />
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"></input>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <hr />
      <button type="button" class="btn btn-link">Signup</button>
      <button type="button" class="btn btn-link">Reset Password</button>

    </form>

  </div>


</div>
</div>


)


}