/**
 * Checks if the provided project name meets certain criteria.
 * @param {string} name - Name of the project to be checked.
 * @returns {boolean} - Returns true if the project name is a string with a length greater than 2, otherwise returns false.
 */
function checkProjectName(name) {
    return typeof name === 'string' && name.length > 2;
}

/**
 * Checks if the provided project info meets certain criteria.
 * @param {string} info - Additional information about the project.
 * @returns {boolean} - Returns true if the project info is a string, otherwise returns false.
 */
function checkProjectInfo(info) {
    return typeof info === 'string';
}

module.exports = {
    checkProjectName,
    checkProjectInfo
};