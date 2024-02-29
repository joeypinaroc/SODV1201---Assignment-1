// @name: SODV1201 Assignment 1
// @author: Joey Pinaroc
//script for Staff.html (Staff page)

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

//dataset
var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

function displayStaffInfo(data){
    var tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    data.forEach(r =>{
        var row = document.createElement('tr');
        r.forEach(c =>{
            var cell = document.createElement('td');
            cell.textContent = c;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    })
}

displayStaffInfo(dataSet);

//sort table by Name
function sortTableByName(){
    let table = document.getElementById('staffTable');
    let switching = true;
    let shouldSwitch;
    let x, y, i;
    let switchCount;
    let dir = 'asc'; //sorting direction
    while(switching){
        switching = false; //start by saying: no switching is done
        let rows = table.rows;
        for(i=1; i<rows.length-1; i++) //loop through all table rows except 1st
        {
            shouldSwitch = false; //no switching
            //get two elements you want to compare, one from current row and one from the next
            x = rows[i].getElementsByTagName('td')[0]; //Name is 1st column, index 0
            y = rows[i+1].getElementsByTagName('td')[0];
            if(dir == 'asc')
            {
                if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
                {
                    shouldSwitch = true;
                    break;
                }
            }
            else if(dir == 'desc')
            {
                if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())
                {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if(shouldSwitch)
        {
            //if a switch has been marked, make the switch and mark that a switch has been done
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
            switchCount++; //each time a switch is done, increase count by 1
        }
    }
}

function sortTableBySalary(){
    let table = document.getElementById('staffTable');
    let switching = true;
    let shouldSwitch;
    let x, y, i;
    let switchCount;
    let dir = 'asc'; //sorting direction
    while(switching){
        switching = false; //start by saying: no switching is done
        let rows = table.rows;
        for(i=1; i<rows.length-1; i++) //loop through all table rows except 1st
        {
            shouldSwitch = false; //no switching
            //get two elements you want to compare, one from current row and one from the next
            x = rows[i].getElementsByTagName('td')[5]; //Salary is 6th column, index 5
            y = rows[i+1].getElementsByTagName('td')[5];
            if(dir == 'asc')
            {
                if(Number(x.innerHTML.replace(/(^\$|,)/g, '')) > Number(y.innerHTML.replace(/(^\$|,)/g, ''))) //replace $ and , with blank and convert string to number
                {
                    shouldSwitch = true;
                    break;
                }
            }
            else if(dir == 'desc')
            {
                if(Number(x.innerHTML.replace(/(^\$|,)/g, '')) < Number(x.innerHTML.replace(/(^\$|,)/g, ''))) //replace $ and , with blank and convert string to number
                {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if(shouldSwitch)
        {
            //if a switch has been marked, make the switch and mark that a switch has been done
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
            switchCount++; //each time a switch is done, increase count by 1
        }
    }
}
//sort by Name through click event
$(document).ready(()=>{
    $('#sortByName').click(()=>{
        sortTableByName(); //since Name is the 1st column
    })
 })
//sort by Salary through click event
 $(document).ready(()=>{
    $('#sortBySalary').click(()=>{
        sortTableBySalary();
    })
 })