// Write your solution in this file!
const employee = {'name': 'Joe Biden', 'streetAddress': 'White House'};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const shallowCopy = {...employee};
    shallowCopy[key] = value;
    return shallowCopy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const shallowCopy = {...employee};
    delete shallowCopy[key];
    return shallowCopy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}