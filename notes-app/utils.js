const { uniqueNamesGenerator, starWars } = require('unique-names-generator');

const config = {
    dictionaries: [starWars]
}


function printName(firstName, lastName) {
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
}

function generateName() {
    return uniqueNamesGenerator(config);
}

module.exports = { printName, generateName };