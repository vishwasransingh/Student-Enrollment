var token = "90931827|-31949307100192889|90960648";
var dbName = "SCHOOL-DB";
var relName = "STUDENT-TABLE";
var dbBaseUrl = "http://api.login2explore.com:5577";

var imlEndpoint = "/api/iml";
var irlEndpoint = "/api/irl";
var islEndpoint = "/api/isl";

function onPageLoad() {
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

function checkStudentID() {
    var roll = document.getElementById('roll').value;

    if (checkStudentIdInDatabase(roll)) {
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
    } else {
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

function checkStudentIdInDatabase(id) {

    var jsonRecord = loadDataFromDatabase(id);
    if (jsonRecord !== null)
        return true;
    else
        return false;

}

function loadDataFromDatabase(roll) {

    var jsonObj = {
        roll: roll
    };
    var jsonObjStr = JSON.stringify(jsonObj);

    var reqString = createGET_BY_KEYRequest(token, dbName, relName, jsonObjStr, true, true);

    jQuery.ajaxSetup({async: false});
    var jsonResponseObject = executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, irlEndpoint);
    jQuery.ajaxSetup({async: true});

    try {
        var jsonData = JSON.parse(jsonResponseObject.data);
    } catch (Exception) {
        return null;
    }
    return jsonData.record;
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
    document.getElementById('updateBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
    // Enable Employee ID field
    document.getElementById('roll').disabled = false;
    document.getElementById('roll').focus();
}

function saveData() {
    var jsonObj = getAndValidateFormData();
    
    if(!jsonObj){
        return;
    }
    
    var jsonObjStr = JSON.stringify(jsonObj);

    var reqString = createPUTRequest(token, jsonObjStr, dbName, relName);

    jQuery.ajaxSetup({ async: false });
    var jsonResponseObject = executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, imlEndpoint);
    jQuery.ajaxSetup({ async: true });

    resetForm();
}

function getAndValidateFormData() {

    var rollVar = $("#roll").val();
    var nameVar = $("#name").val();
    var classVar = $("#class").val();
    var birthDateVar = $("#birthDate").val();
    var addressVar = $("#address").val();
    var enrollmentDateVar = $("#enrollmentDate").val();

    if (rollVar === "") {
        alert("Roll number can't be blank.");
        $("#roll").focus();
        return "";
    }
    
    if (nameVar === "") {
        alert("Name can't be blank.");
        $("#name").focus();
        return "";
    }
    
    if (classVar === "") {
        alert("Class can't be blank.");
        $("#class").focus();
        return "";
    }
    
    if (birthDateVar === "") {
        alert("BirthDate can't be blank.");
        $("#birthDate").focus();
        return "";
    }
    
    if (addressVar === "") {
        alert("Address can't be blank.");
        $("#address").focus();
        return "";
    }
    
    if (enrollmentDateVar === "") {
        alert("Enrollment-Date can't be blank.");
        $("#enrollmentDate").focus();
        return "";
    }
    

    var jsonObj = {
        roll: $("#roll").val(),
        name: $("#name").val(),
        class: $("#class").val(),
        birthDate: $("#birthDate").val(),
        address: $("#address").val(),
        enrollmentDate: $("#enrollmentDate").val()
    };
    return jsonObj;

}

function updateData() {
    var jsonObj = getAndValidateFormData();
    var jsonObjStr = JSON.stringify(jsonObj);
    var roll = jsonObj.roll;
    var reqString = createUPDATERecordRequest(token, jsonObjStr, dbName, relName, jsonObj.roll);
    
    jQuery.ajaxSetup({ async: false });
    var jsonResponseObject = executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, imlEndpoint);
    jQuery.ajaxSetup({ async: true });
    resetForm();
}
