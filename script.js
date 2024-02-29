// @name: SODV1201 Assignment 1
// @author: Joey Pinaroc
//script for index.html (Home page)

//get current date
 var date = new Date();
 var currentDate = date.toLocaleDateString();
 document.getElementById('currentDate').innerHTML = currentDate;

 //display picture name after 10 seconds
 var pictureNameBox = document.getElementById('imageName');
 pictureNameBox.innerHTML = ' ';
 pictureNameBox.style.visibility = 'hidden';
 document.getElementsByTagName('img')[0].after(pictureNameBox);

 const show = () => {
    setTimeout(()=>{
        pictureNameBox.innerHTML = 'Ippnee the cat';
        pictureNameBox.style.visibility = 'visible'
    }, 10000);
 };

 show();

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