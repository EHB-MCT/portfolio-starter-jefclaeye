/**
 * Checks if the provided Student name meets certain criteria.
 * @param {string} name - Name of the Student to be checked.
 * @returns {boolean} - Returns true if the Student name is a string with a length greater than 2, otherwise returns false.
 */
function checkStudentFields(name) {
    return typeof name === 'string' && name.length > 2;
}

module.exports = checkStudentFields;