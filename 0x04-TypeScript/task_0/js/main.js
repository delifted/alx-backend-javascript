"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayStudents = void 0;
var studentA = {
    firstName: 'Oluwasegun',
    lastName: 'Jesujoba',
    age: 25,
    location: 'Lagos, Nigeria',
};
var studentB = {
    firstName: 'Kenny',
    lastName: 'Jesutoba',
    age: 22,
    location: 'Lagos, Nigeria',
};
var studentsList = [
    studentA,
    studentB,
];
var styleSheet = "\n    html {\n        margin: 0;\n        height: 100%;\n    }\n    body {\n        box-sizing: border-box;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 80%;\n        margin: 10%;\n    }\n    table {\n        border-collapse: collapse;\n    }\n    thead {\n        font-weight: bold;\n    }\n    td {\n        padding: 10px;\n        border: 1px solid gray;\n        cursor: pointer;\n    }\n    td:hover {\n        background: gainsboro;\n    }\n\n    td:nth-child(1) {\n        text-align: center;\n    }\n";
var displayStudents = function (students) {
    var table = document.createElement('table');
    var tableHead = document.createElement('thead');
    var headRow = document.createElement('tr');
    var tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
    // for (const student of students) {
    //     const bodyRow = document.createElement('tr')
    //     bodyRow.insertAdjacentElement('beforeend', `<td>${student.firstName}</td`);
    //     bodyRow.insertAdjacentElement('beforeend', `<td>${student.firstName}</td`);
    //     tableBody.insertAdjacentElement('beforeend', bodyRow);
    // }
    // table.insertAdjacentElement('beforeend', tableHead);
    // table.insertAdjacentElement('beforeend', tableBody);
    // document.body.insertAdjacentElement('beforeend', table);
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        var bodyRow = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName; // Set text content
        var locationCell = document.createElement('td');
        locationCell.textContent = student.location; // Set text content
    }
    bodyRow.appendChild(firstNameCell); // Append the cell to the row
    bodyRow.appendChild(locationCell); // Append the cell to the row
    tableBody.appendChild(bodyRow); // Append the row to the table body
};
exports.displayStudents = displayStudents;
(0, exports.displayStudents)(studentsList);
var styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
