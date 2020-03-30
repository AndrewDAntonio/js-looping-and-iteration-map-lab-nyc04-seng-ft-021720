// Code your solution in this file.
function lowerCaseDrivers(arr) {
    return arr.map(function (ele) {return ele.toLowerCase();
    });
}

function nameToAttributes(arr) {
    return arr.map(function (ele) {
        const eleFirstName = ele.split(" ")[0];
        const eleLastName = ele.split(" ")[1];
        return {firstName : eleFirstName, lastName : eleLastName}
    });
}

function attributesToPhrase(arr) {
    return arr.map(function (ele) {
        return `${ele.name} is from ${ele.hometown}`
    });
}