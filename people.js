const {createFullnameObject} = require('./names.js')
const {createHobbiesArray} = require('./hobbies.js')

function createPeopleObject() {
    const peopleObject = {
        fullname: createFullnameObject('Mattia', 'Pennisi'),
        hobbies: createHobbiesArray('Coding', 'Reading', 'Travelling')
    }

    return peopleObject
}

console.log(createPeopleObject())