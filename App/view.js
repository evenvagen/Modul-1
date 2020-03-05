var result = document.getElementById('indexDiv');

show();
function show() {
    showLogin();
}



function showLogin() {

    //funksjon der jeg kan bruke Enter til å logge inn
    {
        result.innerHTML = ` <div class="logInBox"> <h1>Journal</h1>
       <input type="text" class="user" oninput="model.login.usernameEntry=this.value"> </br>
        <input type="password" class="passord" oninput="model.login.passwordEntry=this.value"> </br>
        <button class="logSignUp" onclick="showMainPage()">Logg inn</button>
        <button class="logSignUp" onclick="newUser()">Lag Konto</button></div>
        </div>`
    };
}
function showMainPage() {
    result.innerHTML = `<div class="grid-container">
    <div class="grid-item">Dag<div class="desc">(daglige mål, utfordringer, og logging)</div></div>
    <div class="grid-item">Uke<div class="desc">(ukentlige mål, utfordringer, og logging)</div></div>
    <div class="grid-item">Måned<div class="desc">(måntlige mål, utfordringer, og logging)</div></div>  
    <div class="grid-item">År<div class="desc">(årlige mål, utfordringer, og logging)</div> 
    </div>
    <div class="buttonMainPage">
    <button onclick="logOut()">Log out</button>
    </div>
    <div class="loggedIn"></div>
    `
}

function newUser(){
    result.innerHTML = `
    <div class="registrerBox">
    <h2>Opprett konto</h2>
    E-post: <input class="third" type="text"> </br>
    Brukernavn: <input class="third" type="text"> </br>
    Nytt passord: <input class="third" type="text"> </br>
    Bekreft Passord: <input class="third" type="text"> </br>
    <button onclick="logOut()">Opprett bruker</button>
    </div>`
}








