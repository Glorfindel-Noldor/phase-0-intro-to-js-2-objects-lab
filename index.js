const employee = {
    name : "Bob Bobson",
    streetAddress: "WW33+68Q Guantanamo Bay",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key]= value;
    return newObj;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value; 
    return employee;
};
function deleteFromEmployeeByKey(employee, key){
    delete employee.key; 
    const employeeNewName = {...employee[key]};
    return employeeNewName;
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key]= value;
    return employee;
}
