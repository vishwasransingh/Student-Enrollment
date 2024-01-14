var token = "90931827|-31949300889492706|90963448";
var dbName = "Student";
var relName = "Stud-Rel";
var dbBaseUrl = "http://api.login2explore.com:5577";

var imlEndpoint = "/api/iml";
var irlEndpoint = "/api/irl";
var islEndpoint = "/api/isl";

function onPageLoad(){
    // Disable all fields and buttons
    document.getElementById('name').disabled = true;
    document.getElementById('class').disabled = true;
    document.getElementById('birthDate').disabled = true;
    document.getElementById('address').disabled = true;
    document.getElementById('enrollmentDate').disabled = true;
    document.getElementById('saveBtn').disabled = true;
    document.getElementById('updateBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
    // Enable Employee ID field
    document.getElementById('roll').disabled = false;
    document.getElementById('roll').focus();
}

function checkStudentID(){
    var id = document.getElementById('roll').value;
    console.log(id);
    
    if(checkStudentIdInDatabase(id)){
        var jsonObject = loadDataFromDatabase(id);

        document.getElementById('roll').value = jsonObject.roll;
        document.getElementById('name').value = jsonObject.name;
        document.getElementById('class').value = jsonObject.class;
        document.getElementById('birthDate').value = jsonObject.birthDate;
        document.getElementById('address').value = jsonObject.address;
        document.getElementById('enrollmentDate').value = jsonObject.enrollmentDate;

        document.getElementById('roll').disabled = true;
        document.getElementById('name').disabled = false;
        document.getElementById('class').disabled = false;
        document.getElementById('birthDate').disabled = false;
        document.getElementById('address').disabled = false;
        document.getElementById('enrollmentDate').disabled = false;
        document.getElementById('saveBtn').disabled = true;
        document.getElementById('updateBtn').disabled = false;
        document.getElementById('resetBtn').disabled = false;
        
        document.getElementById('name').focus();
    }
    else{
        document.getElementById('name').disabled = false;
        document.getElementById('class').disabled = false;
        document.getElementById('birthDate').disabled = false;
        document.getElementById('address').disabled = false;
        document.getElementById('enrollmentDate').disabled = false;
        document.getElementById('saveBtn').disabled = false;
        document.getElementById('updateBtn').disabled = true;
        document.getElementById('resetBtn').disabled = false;
        document.getElementById('name').focus();
    }
    
}

function checkStudentIdInDatabase(id){
    // make request, get record.
    // return true if record exists, else false.
    console.log("checkStudentIdInDatabase() --> id : " + id);
    if (id % 2 == 0)
        return true;
    return false;
}

function loadDataFromDatabase(id){
    
    /* Done:-
    var reqString = createGET_BY_KEYRequest(token, dbname, relationName, jsonObjStr, true, true);
    var jsonResponseObject = executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, imlEndpoint);
    */
    var jsonResponseObject = '{"roll": ' + id + ',"name": "Satu","class": 12, "birthDate": "2000-12-18", "address": "Ahmednagar, Maharashtra", "enrollmentDate": "2015-07-07"}';
    return JSON.parse(jsonResponseObject);
}

function resetForm(){
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
    document.getElementById('updateBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
    // Enable Employee ID field
    document.getElementById('roll').disabled = false;
    document.getElementById('roll').focus();
}

function saveData(){

    var jsonObj = getFormData();

    console.log("Saved: " + jsonObj);
    /* Done:-
    var reqString = createPUTRequest(connToken, jsonObjStr, dbName, relName);
    
    var jsonResponseObject = executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, imlEndpoint);
    
    console.log(jsonResponseObject);
    
    resetForm();
     */
}

function getFormData(){
    
    var jsonObj = {
        roll: $("#roll").val(),
        name: $("#name").val(),
        class: $("#class").val(),
        birthDate:$("#birthDate").val(),
        address:$("#address").val(),
        enrollmentDate:$("#enrollmentDate").val()
    };
    console.log("returning from form :" + jsonObj);
    return jsonObj;
    
}

function updateData(){
    var jsonObj = getFormData();
    console.log("Updated: " + jsonObj);
    // resetForm();
}