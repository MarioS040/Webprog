class Auth{

constructor(){
this.authenticated = false;

}

login(cb){
this.authenticated = true;
cb()
}

logout(cb){

    this.authenticated = false;
    cb();
}


isAtuhenticated(){

    return this.authenticated;
}

}

export default new Auth()