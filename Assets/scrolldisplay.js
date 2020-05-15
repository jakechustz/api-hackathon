var houseKey = ' ';
/*
var houseKey = 'Gryffindor';
//If button is being clicked, run this function
var gButton = document.querySelector("#Slytherin");

gButton.addEventListener("click", clickSlytherin);

function clickSlytherin() {
  houseKey = 'Slytherin';
}
*/
var th = document.querySelector("th");
th.addEventListener("onload", hidden());


function hidden () {
  document.getElementById("name").style.visibility = "hidden";
  document.getElementById("tableid").style.visibility = "hidden";

  document.getElementById("gryff-headline").style.visibility = "hidden";
  document.getElementById("sly-headline").style.visibility = "hidden";
  document.getElementById("huffle-headline").style.visibility = "hidden";
  document.getElementById("raven-headline").style.visibility = "hidden";
}


var form = document.querySelector("form");
form.addEventListener("change", function () {
  showTableElements();
  console.log(event.target.value);
  houseKey = event.target.value;
  app.getGrades();
  colorChange();
  headlineChange();
})

function showTableElements() {
  document.getElementById("name").style.visibility = "visible";
  document.getElementById("tableid").style.visibility = "visible";
}

function colorChange() {
  if(houseKey === 'Gryffindor') {
    document.getElementById("tableid").style.backgroundColor = "lightcoral";
  } else if (houseKey === 'Slytherin') {
    document.getElementById("tableid").style.backgroundColor = "green";
  } else if (houseKey === 'Hufflepuff') {
    document.getElementById("tableid").style.backgroundColor = "yellow";
  } else if (houseKey === 'Ravenclaw'){
    document.getElementById("tableid").style.backgroundColor = "lightblue";
  }
}

function headlineChange() {
  if(houseKey === 'Gryffindor') {
    document.getElementById('gryff-headline').style.visibility = "visible";
    document.getElementById('gryff-headline').style.color = "lightcoral";
    document.getElementById('sly-headline').style.visibility = "hidden";
    document.getElementById('huffle-headline').style.visibility = "hidden";
    document.getElementById('raven-headline').style.visibility = "hidden";
    document.getElementById('intro-headline').style.visibility = "hidden";
  } else if (houseKey === 'Slytherin') {
    document.getElementById('sly-headline').style.visibility = "visible";
    document.getElementById('sly-headline').style.color = "green";
    document.getElementById('gryff-headline').style.visibility = "hidden";
    document.getElementById('huffle-headline').style.visibility = "hidden";
    document.getElementById('raven-headline').style.visibility = "hidden";
    document.getElementById('intro-headline').style.visibility = "hidden";
  } else if (houseKey === 'Hufflepuff') {
    document.getElementById('huffle-headline').style.visibility = "visible";
    document.getElementById('huffle-headline').style.color = "yellow";
    document.getElementById('gryff-headline').style.visibility = "hidden";
    document.getElementById('sly-headline').style.visibility = "hidden";
    document.getElementById('raven-headline').style.visibility = "hidden";
    document.getElementById('intro-headline').style.visibility = "hidden";
  } else if (houseKey === 'Ravenclaw') {
    document.getElementById('raven-headline').style.visibility = "visible";
    document.getElementById('raven-headline').style.color = "lightblue";
    document.getElementById('gryff-headline').style.visibility = "hidden";
    document.getElementById('sly-headline').style.visibility = "hidden";
    document.getElementById('huffle-headline').style.visibility = "hidden";
    document.getElementById('intro-headline').style.visibility = "hidden";
  }
}



class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(characters) {
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = " ";
    for (var ii = 0; ii < characters.length; ii++) {
      var tableRow = document.createElement('tr');
      var nameEl = document.createElement('td');

      nameEl.textContent = characters[ii].name;

      tableRow.append(nameEl);
      tbody.append(tableRow);
    }
  }
}

class App {
  constructor(gradeTable) {
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(characters) {
    this.gradeTable.updateGrades(characters);
  }
  getGrades() {
    $.ajax({
      method: "GET",
      url: "https://www.potterapi.com/v1/characters",
      data: {
        key: hpAPIKey,
        house: houseKey,
      },
      success: this.handleGetGradesSuccess,
    });
  }
  start() {
    this.getGrades();
  }
}



var docTable = document.querySelector('table');
var gradeTable = new GradeTable(docTable);
var app = new App(gradeTable);
app.start();
