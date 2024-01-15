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
- [Sources](sources)




## Installation
  - Clone the repository to your local machine.

```bash
git clone https://github.com/vishwasransingh/Student-Enrollment.git
```

## Usage

1. Navigate to the index file location : 

    `\Your-Path\Student Enrollment\public_html`

2. Launch the index.html file in your browser.

3. The form will be displayed with the cursor in the Roll-No field, and all other fields and buttons disabled.

4. Enter data in the Roll-No field.
   - If the Roll No. does not exist in the database, [Save] and [Reset] buttons will be enabled. Move the cursor to the next field to enter data.
     - Ensure all fields are filled with valid data.
     - Click [Save] to store the data in the database and repeat the process.
   
   - If the Roll No. exists in the database, the form will display existing data. [Update] and [Reset] buttons will be enabled. Modify other fields as needed.
     - Ensure all fields are filled with valid data.
     - Click [Update] to update the data in the database or click [Reset] to start a new entry.







## Scope of Functionalities

The Student Enrollment Form provides the following functionalities:

- **Data Entry**: Users can enter student data, including Roll-No, Full-Name, Class, Birth-Date, Address, and Enrollment-Date.

- **Data Validation**: The form ensures that all entered data is valid and no fields are left empty.

- **Database Interaction**: The application interacts seamlessly with the JsonPowerDB database to store and retrieve student information.




## Examples of Use



## Project Status

This project is currently in its initial release stage (v1.0.0). Future updates may include additional features, improvements, and bug fixes.


## Sources
