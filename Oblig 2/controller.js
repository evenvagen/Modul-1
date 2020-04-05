// controller

function choose(x) {
        chosenPole = (x == chosenPole) ? 'ingen' :  x;
    show();
}

function add() {
    let num = parseInt(document.getElementById('addBar').value);
    let checkValue = num <= 10 && num >= 1 ? true : alert('ugyldig verdi');
    if(checkValue){
        numbers.push(num);
    } show();
}


function removePole() {
    numbers.splice(chosenPole -1, 1);
    show();
}


function changePole() {
    let num = parseInt(document.getElementById('addBar').value);
    let checkValue = (num <= 10 && num >= 1) ? true : alert('ugyldig');
    if(checkValue){
        numbers[chosenPole-1] = num;
    }
 show();
}

