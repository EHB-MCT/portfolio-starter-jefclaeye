function checkProjectFields(name) {
    return typeof name === 'string' && name.length > 2; // Assuming a valid name should have at least 3 characters
}





module.exports = checkProjectFields;