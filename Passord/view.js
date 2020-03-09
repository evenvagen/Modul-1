var result = document.getElementById('result');


show();
function show() {
    if (model.login.loggedInUser == null) {
        showLogin();
    } else {
        showMainPage();
    }
}

function showLogin(){
result.innerHTML = `
<input type="text" oninput="model.login.usernameEntry=this.value"> </br>
<input type="password" oninput="model.login.passwordEntry=this.value"> </br>
<button onclick="logIn()">Logg inn</button>
`}

function showMainPage(){
    result.innerHTML = 'hei'
}
