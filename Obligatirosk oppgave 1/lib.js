function datoErGyldig(text){
    return datoMonth(text) && datoTusen(text) && datoLengde(text) && datoDot(text) && datoDD(text);
}


function datoLengde(dato) {
    return dato.length == 10;
}

function datoDot(dato) {
    const punkt1 = dato.charAt(2);
    const punkt2 = dato.charAt(5);

    return punkt1.includes('.') && punkt2.includes('.') ? true : false;
}

// function datoSifr(dato) {

//     var nr1 = dato.slice(0, 2);
//     var nr2 = dato.slice(3, 5);
//     var nr3 = dato.slice(6);

//     return nr1.match(/^[0-9]+$/) && nr2.match(/^[0-9]+$/) && nr3.match(/^[0-9]+$/) ? true : false;
// }

function datoTusen(dato) {
    const year = dato.substring(6);
    return year >= 0 && year <= 9999;
}

function datoMonth(dato) {
   const date = dato.slice(3, 5)
   return date >= 0 && date <= 12;

}

function datoDD(dato) {

    var day = dato.slice(0, 2);
    var month = dato.slice(3, 5);
    var year = dato.slice(6, 10)
    var feb = month == '02';
    var febLenght = isLeapYear(year) ? 29 : 28;

    var ajsn = ['04', '06', '09', '11'];
    var jmmjaod = ['01', '03', '05', '07', '08', '10', '12'];
    var tretti = ajsn.includes(month);
    var trettiEn = jmmjaod.includes(month);
    var validDay = (day <= febLenght && feb && day != 00) || (tretti && day <= 30 && day != 00) || (trettiEn && day <= 31 && day != 00);

    return validDay;
}


function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}







