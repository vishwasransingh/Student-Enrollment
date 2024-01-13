var token = "90931827|-31949300889492706|90963448";
var dbname = "Employee";
var relationName = "Emp-Rel";
var dbBaseUrl = "http://api.login2explore.com:5577";

function onPageLoad() {
    // Disable all fields and buttons
    document.getElementById('name').disabled = true;
    document.getElementById('class').disabled = true;
    document.getElementById('birthDate').disabled = true;
    document.getElementById('address').disabled = true;
    document.getElementById('enrollmentDate').disabled = true;
    document.getElementById('saveBtn').disabled = true;
    document.getElementById('changeBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
    // Enable Employee ID field
    document.getElementById('roll').disabled = false;
    document.getElementById('roll').focus();
}

function checkStudentID(){
    var id = document.getElementById('roll').value;
    console.log(id);
}