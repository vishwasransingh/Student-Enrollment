var token = "90931827|-31949300889492706|90963448";
var dbname = "Employee";
var relationName = "Emp-Rel";
var dbBaseUrl = "http://api.login2explore.com:5577";

function onPageLoad(){
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
    
    if(checkIdInDatabase(id)){
        var jsonObject = loadDataFromDatabase(id);
        
        document.getElementById('roll').value = jsonObject.roll;
        document.getElementById('name').value = jsonObject.name;
        document.getElementById('class').value = jsonObject.class;
        document.getElementById('birthDate').value = jsonObject.birthDate;
        document.getElementById('address').value = jsonObject.address;
        document.getElementById('enrollmentDate').value = jsonObject.enrollmentDate;
        
        document.getElementById('roll').disabled = true;
        document.getElementById('name').disabled = true;
        document.getElementById('class').disabled = true;
        document.getElementById('birthDate').disabled = true;
        document.getElementById('address').disabled = true;
        document.getElementById('enrollmentDate').disabled = true;
        document.getElementById('saveBtn').disabled = true;
        document.getElementById('changeBtn').disabled = false;
        document.getElementById('resetBtn').disabled = true;
    }
    else{
        document.getElementById('name').disabled = false;
        document.getElementById('class').disabled = false;
        document.getElementById('birthDate').disabled = false;
        document.getElementById('address').disabled = false;
        document.getElementById('enrollmentDate').disabled = false;
        document.getElementById('saveBtn').disabled = false;
        document.getElementById('changeBtn').disabled = true;
        document.getElementById('resetBtn').disabled = false;
    }
    
}

function checkIdInDatabase(id){
    // make request, get record.
    // return true if record exists, else false.
    if (id % 2 == 0)
        return true;
    return false;
}

function loadDataFromDatabase(id){
    
    // Todo : Database call, returns jsonString
    var jsonString = '{"roll": ' + id + ',"name": "Satu","class": 12, "birthDate": "2000-12-18", "address": "Ahmednagar, Maharashtra", "enrollmentDate": "2015-07-07"}';
    return JSON.parse(jsonString);
}

function resetForm() {
    // Reset all fields and disable all buttons
    document.getElementById('roll').value = '';
    document.getElementById('name').value = '';
    document.getElementById('class').value = '';
    document.getElementById('birthDate').value = '';
    document.getElementById('address').value = '';
    document.getElementById('enrollmentDate').value = '';
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