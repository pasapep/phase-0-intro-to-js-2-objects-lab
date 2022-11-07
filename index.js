// Write your solution in this file!
const employee = {
    name: "Josh", 
    streetAddress : "Eleven" 
};
/*
const myobject = {
    name: "Mike",
    favoriteMovie: "topgun",
    
}*/
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = {...employee};
    newemployee[key] = value;

    return newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const nowemployee = {...employee}
    
    delete nowemployee[key]

    return nowemployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]

    return employee
}

/*
console.log(updateEmployeeWithKeyAndValue(myobject,"favoriteSport","Baseball"))
console.log(myobject)*/