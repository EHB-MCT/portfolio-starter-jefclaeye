/**
 * Checks if the provided project name meets certain criteria.
 * @param {string} name - Name of the project to be checked.
 * @returns {boolean} - Returns true if the project name is a string with a length greater than 2, otherwise returns false.
 */
function checkProjectFields(name) {
    return typeof name === 'string' && name.length > 2;
}

module.exports = checkProjectFields;