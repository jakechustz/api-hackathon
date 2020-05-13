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
var form = document.querySelector("form");
form.addEventListener("change", function () {
  console.log(event.target.value);
  houseKey = event.target.value;
  app.getGrades();
})


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
      var houseEl = document.createElement('td');

      nameEl.textContent = characters[ii].name;
      houseEl.textContent = characters[ii].house;

      tableRow.append(nameEl, houseEl);
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
