var token = "90931827|-31949307100192889|90960648";
var dbName = "SCHOOL-DB";
var relName = "STUDENT-TABLE";
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
    var roll = document.getElementById('roll').value;
    console.log(roll);
    
    if(checkStudentIdInDatabase(roll)){
        var record = loadDataFromDatabase(roll);
        document.getElementById('roll').value = record.roll;
        document.getElementById('name').value = record.name;
        document.getElementById('class').value = record.class;
        document.getElementById('birthDate').value = record.birthDate;
        document.getElementById('address').value = record.address;
        document.getElementById('enrollmentDate').value = record.enrollmentDate;

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

    var jsonRecord = loadDataFromDatabase(id);
    if(jsonRecord !== null)
        return true;
    else
        return false;
    
    console.out("checkStudentIdInDatabase():" + jsonObject);
    
}

function loadDataFromDatabase(roll){
    
    var jsonObj = {
        roll: roll
    };
    var jsonObjStr = JSON.stringify(jsonObj);

    var reqString = createGET_BY_KEYRequest(token, dbName, relName, jsonObjStr, true, true);
    
    jQuery.ajaxSetup({ async: false });
    var jsonResponseObject = executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, irlEndpoint);
    jQuery.ajaxSetup({ async: true });
    
    try{
        var jsonData = JSON.parse(jsonResponseObject.data);
    }catch(Exception){
        return null;
    }
    //console.log(jsonData.record);
    return jsonData.record;
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
    
    // Todo : Write validations for form data.
    
    var jsonObj = getFormData();

    console.log("Saved: " + jsonObj);
   
    var reqString = createPUTRequest(connToken, jsonObjStr, dbName, relName);
    
    var jsonResponseObject = executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, imlEndpoint);
    
    console.log(jsonResponseObject);

    resetForm();
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
    console.log("Updated roll no: " + jsonObj.roll);
    
    var reqString = createUPDATERecordRequest(token, jsonObj, dbName, relName, jsonObj.roll);
    var jsonResponseObject = executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, imlEndpoint);
    
    console.log(jsonResponseObject);
    
    resetForm();
}








function saveStudent() {
    
        var jsonStrObj = {
        mobileno: $("#mobileno").val()
    };
        var jsonStr = JSON.stringify(jsonStrObj);

        if (!jsonStr) {
          return;
        }

        var putReqStr = createPUTRequest(token, jsonStr, "Student", "Student-Rel");
        alert(putReqStr);

        jQuery.ajaxSetup({ async: false });
        var resultObj = executeCommandAtGivenBaseUrl(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
 
        jQuery.ajaxSetup({ async: true });
        
        alert(JSON.stringify(resultObj));

        //resetForm();
  }