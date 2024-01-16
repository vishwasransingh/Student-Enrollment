# Student Enrollment Form


## Description

The Student Enrollment Form is a web application designed to capture and manage student information, storing data in the STUDENT-TABLE relation of the SCHOOL-DB database. It features a user-friendly interface with fields such as Roll-No, Full-Name, Class, Birth-Date, Address, and Enrollment-Date. The primary key for this form is Roll No.




## Benefits of using JsonPowerDB

JsonPowerDB is a NoSQL database that provides several advantages for this project:

- **Schema-less**: JsonPowerDB is schema-less, allowing flexibility in handling various forms of data without the need for predefined structures.

- **High Performance**: It offers high-performance database operations, ensuring efficient data retrieval and storage.

- **Low Learning Curve**: JsonPowerDB's simple and intuitive API makes it easy to integrate with the application, reducing the learning curve for developers.



## Release History

- **v1.0.0** (January 14, 2024)
  - Initial release of the Student Enrollment Form project on Github.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scope of Functionalities](#scope-of-functionalities)
- [Examples of Use](#examples-of-use)
- [Project Status](project-status)




## Installation
  - Clone the repository to your local machine.

```bash
git clone https://github.com/vishwasransingh/Student-Enrollment.git
```

    Example:

  https://github.com/vishwasransingh/Student-Enrollment/assets/142225419/d727ab0f-e8e2-480f-aa35-a8a0ac1869b2



  - Change the connection token manually :
    - Generate a new token :
        - Navigate to `http://api.login2explore.com:5577/user/index.html`.
        - Create a new developer's account / login with your development account credentials.
        - On dashboard, on the right, navigate to 'Tools' -> 'Tokens' -> 'Select Type of Token' -> 'Connection Token' -> 'Generate Connection_Token'
          

https://github.com/vishwasransingh/Student-Enrollment/assets/142225419/ba450404-f68d-4aeb-ba8a-49511e7bdc30


    - Navigate to the index.js file location.
      `\Your-Path\Student Enrollment\public_html\js`

    - Open index.js file and edit the gloabal variable `var token = "enter-your-connection-token-here";`


https://github.com/vishwasransingh/Student-Enrollment/assets/142225419/d22da0d0-26c3-48a8-83f6-5d90f16ba04c


    
    

## Usage

1. Navigate to the index file location : 

    `\Your-Path\Student Enrollment\public_html`

3. Launch the index.html file in your browser.


https://github.com/vishwasransingh/Student-Enrollment/assets/142225419/f6033cb1-9023-437b-9afc-5e137e555d54


4. The form will be displayed with the cursor in the Roll-Number field, and all other fields and buttons disabled.

5. Enter data in the Roll-Number field.
   - If the Roll No. does not exist in the database, [Save] and [Reset] buttons will be enabled. Move the cursor to the next field to enter data.
     - Ensure all fields are filled with valid data.
     - Click [Save] to store the data in the database and repeat the process.
   
   - If the Roll No. exists in the database, the form will display existing data. [Update] and [Reset] buttons will be enabled. Modify other fields as needed.
     - Ensure all fields are filled with valid data.
     - Click [Update] to update the data in the database or click [Reset] to start a new entry.



## Examples of Use
1. Create a record :

https://github.com/vishwasransingh/Student-Enrollment/assets/142225419/1c17c4f8-cf10-4485-9199-e5c4465ecef9

2. Retreive a record (Load a record if roll number already exists in database) :

https://github.com/vishwasransingh/Student-Enrollment/assets/142225419/9c1d4357-639b-422f-8d01-ae4be73a70d0

3. Update a record :

https://github.com/vishwasransingh/Student-Enrollment/assets/142225419/5ab44944-f9ce-49e5-b023-2e4cc7c032d1

4. Using 'Reset' button :

https://github.com/vishwasransingh/Student-Enrollment/assets/142225419/67d68e9b-2f00-4c60-82b0-c5ede688cb73

https://github.com/vishwasransingh/Student-Enrollment/assets/142225419/3df0e7a3-39d0-459b-a46e-2dc7174b22c4


## Scope of Functionalities

The Student Enrollment Form provides the following functionalities:

- **Data Entry**: Users can enter student data, including Roll-No, Full-Name, Class, Birth-Date, Address, and Enrollment-Date.

- **Data Validation**: The form ensures that all entered data is valid and no fields are left empty.

- **Database Interaction**: The application interacts seamlessly with the JsonPowerDB database to store and retrieve student information.


## Project Status

This project is currently in its initial release stage (v1.0.0). Future updates may include additional features, improvements, and bug fixes.
