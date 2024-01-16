// Token for API authentication, edit when using newly generated token.
var token = "90931827|-31949306753306419|90960640";

// Database name
var dbName = "SCHOOL-DB";
// Relationship name (table) in the database
var relName = "STUDENT-TABLE";
// Base URL for the database API
var dbBaseUrl = "http://api.login2explore.com:5577";

// API endpoints for different operations
var imlEndpoint = "/api/iml"; // Index Manipulation Language query endpoint.
var irlEndpoint = "/api/irl"; // Index Retreival Language query endpoint.

// Function to be executed when the page loads
function onPageLoad() {
    // Disable all fields and buttons, except roll-number
    document.getElementById('name').disabled = true;
    document.getElementById('class').disabled = true;
    document.getElementById('birthDate').disabled = true;
    document.getElementById('address').disabled = true;
    document.getElementById('enrollmentDate').disabled = true;
    document.getElementById('saveBtn').disabled = true;
    document.getElementById('updateBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
    // Enable Roll-Number field and focus on it
    document.getElementById('roll').disabled = false;
    document.getElementById('roll').focus();
}

// Function to check if a student ID exists in the database
function checkStudentID() {
    var roll = document.getElementById('roll').value;

    if (checkStudentIdInDatabase(roll)) {
        // If the ID exists, load the data and enable input fields for update
        var record = loadDataFromDatabase(roll);
        
        // Populate form fields with the database values
        document.getElementById('roll').value = record.roll;
        document.getElementById('name').value = record.name;
        document.getElementById('class').value = record.class;
        document.getElementById('birthDate').value = record.birthDate;
        document.getElementById('address').value = record.address;
        document.getElementById('enrollmentDate').value = record.enrollmentDate;

        // Disable roll-number field and allow user to edit other fields
        document.getElementById('roll').disabled = true;
        document.getElementById('name').disabled = false;
        document.getElementById('class').disabled = false;
        document.getElementById('birthDate').disabled = false;
        document.getElementById('address').disabled = false;
        document.getElementById('enrollmentDate').disabled = false;
        
        // Disable save button, enable update and reset buttons
        document.getElementById('saveBtn').disabled = true;
        document.getElementById('updateBtn').disabled = false;
        document.getElementById('resetBtn').disabled = false;

        // Focus on name field
        document.getElementById('name').focus();
    } else {
        // If ID doesn't exist, enable input fields for new data entry
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

/**
 * Function to check if a student ID exists in the database
 * @param {type} id
 * @returns {Boolean}
 */
function checkStudentIdInDatabase(id) {

    var jsonRecord = loadDataFromDatabase(id);
    console.log(jsonRecord);
    
    if (jsonRecord === undefined)
        return false;
    else if (jsonRecord !== null)
        return true;
    else
        return false;

}

// Function to load data from the database based on student ID
function loadDataFromDatabase(roll) {
    var jsonObj = {roll: roll};
    var jsonObjStr = JSON.stringify(jsonObj);
    var reqString = createGET_BY_KEYRequest(token, dbName, relName, jsonObjStr, true, true);

    // Synchronous AJAX request to the database
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

// Function to reset the form and disable all fields and buttons except roll-number
function resetForm() {
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
    document.getElementById('roll').disabled = false;
    document.getElementById('roll').focus();
}

// Function to save data to the database
function saveData() {
    var jsonObj = getAndValidateFormData();
    
    if(!jsonObj){
        return;
    }
    
    var jsonObjStr = JSON.stringify(jsonObj);

    var reqString = createPUTRequest(token, jsonObjStr, dbName, relName);
    
    // Synchronous AJAX request to the database
    jQuery.ajaxSetup({ async: false });
    var jsonResponseObject = executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, imlEndpoint);
    jQuery.ajaxSetup({ async: true });
    alert("Record saved successfully!");
    resetForm();
}

// Function to get and validate form data
function getAndValidateFormData() {
    var rollVar = $("#roll").val();
    var nameVar = $("#name").val();
    var classVar = $("#class").val();
    var birthDateVar = $("#birthDate").val();
    var addressVar = $("#address").val();
    var enrollmentDateVar = $("#enrollmentDate").val();

    // Validation for each field
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
    
    // Return validated form data as JSON object
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

// Function to update data in the database
function updateData() {
    var jsonObj = getAndValidateFormData();
    var jsonObjStr = JSON.stringify(jsonObj);
    var roll = jsonObj.roll;
    var reqString = createUPDATERecordRequest(token, jsonObjStr, dbName, relName, jsonObj.roll);
    
    // Synchronous AJAX request to the database
    jQuery.ajaxSetup({ async: false });
    var jsonResponseObject = executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, imlEndpoint);
    jQuery.ajaxSetup({ async: true });
    alert("Record updated successfully.");
    resetForm();
}
