// @name: SODV1201 Assignment 1
// @author: Joey Pinaroc
//script for MarkToGrade.html (Mark To Grade page)

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

//Mark to Grade function
const MarkToGrade = () =>{
    let markValue = parseInt(document.getElementById('markInput').value);
    let message = document.getElementById('validationMessage');
    if(markValue > 0 && markValue < 101)
    {
        message.style.color = 'black'; //font color returns to black once proper mark is input
        if(markValue > 90)
        {
            message.innerHTML = 'Equivalent grade is A.';
        }
        else if(markValue > 80)
        {
            message.innerHTML = 'Equivalent grade is B.';
        }
        else if(markValue > 70)
        {
            message.innerHTML = 'Equivalent grade is C.';
        }
        else if(markValue > 50)
        {
            message.innerHTML = 'Equivalent grade is D.';
        }
        else if(markValue <= 50)
        {
            message.innerHTML = 'Equivalent grade is F.';
        }
    }
    else if(isNaN(markValue))
    {
        message.innerHTML = 'Invalid input! Mark should be a number.';
        message.style.color ='red';
    }
    else
    {
        message.innerHTML = 'Invalid input! Mark should be between 0 and 101.';
        message.style.color = 'red';
    }
 }
 $(document).ready(()=>{
    $('#MTGButton').click(()=>{
        MarkToGrade();
    })
 })

