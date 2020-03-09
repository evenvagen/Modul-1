var result = document.getElementById('result');

// Liste

// liste();
function liste() {
    var i;
    for (i = 0; i < names.length; i++) {
        result.innerHTML += `${names[i]} <br>`
    }

}


// Objekt

// objekt();
function objekt() {
    let x;
    for (x of store.mat.bakst) {
        result.innerHTML += x;
    }
}


//Objekter og lister

// objektListe();
function objektListe() {
    let y;
    for (y of login.user) {
        result.innerHTML += `
        <div> <br> ${y.username} <br> ${y.password} </div>
        `;
    }
}


// arrayObject2
arrayObject();
function arrayObject() {
    let x;
    for (x of model.users){
        console.log(x.username)
    }

}


