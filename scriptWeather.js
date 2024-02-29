// @name: SODV1201 Assignment 1
// @author: Joey Pinaroc
//script for Weather.html (Weather page)

//get current date for footer
var date = new Date();
var currentDate = date.toLocaleDateString();
document.getElementById('currentDate').innerHTML = currentDate;

//Navigation bar links
var homeLink = document.createElement('a');
var MTGLink = document.createElement('a');
var StaffLink = document.createElement('a');
var WeatherLink = document.createElement('a');

homeLink.innerHTML = 'Home';
homeLink.setAttribute('href', 'index.html');

MTGLink.innerHTML = 'Mark To Grade';
MTGLink.setAttribute('href', 'MarkToGrade.html');

StaffLink.innerHTML = 'Staff';
StaffLink.setAttribute('href', 'Staff.html');

WeatherLink.innerHTML = 'Weather';
WeatherLink.setAttribute('href', 'Weather.html');

document.getElementsByTagName('nav')[0].appendChild(homeLink);
document.getElementsByTagName('nav')[0].appendChild(MTGLink);
document.getElementsByTagName('nav')[0].appendChild(StaffLink);
document.getElementsByTagName('nav')[0].appendChild(WeatherLink);

//conversion functions
const convertFromFToC = (f) =>{
    let result = (5/9)*(f-32);
    return ((result*100)/100).toFixed(2); //rounds answer
}

const convertFromCToK = (c) =>{
    let result = parseFloat(c)+273.15;
    return result;
}

$(document).ready(()=>{
    $('#tempButton').click(()=>{
        var f = $('#weatherInput').val();
        var celsius = convertFromFToC(f);
        $('#tempCelsiusBox').html(celsius);
        var kelvin = convertFromCToK(celsius);
        $('#tempKelvinBox').html(kelvin);
    })
})
