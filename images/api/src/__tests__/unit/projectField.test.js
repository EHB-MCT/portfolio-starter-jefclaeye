 const { checkProjectName, checkProjectInfo } = require('./../../helpers/checkProjectFields.js');



 // Tests for checkProjectName function
 test('Check project name with valid input', () => {
     expect(checkProjectName('My Project')).toBe(true);
 });

 test('Check project name with invalid input', () => {
     expect(checkProjectName('A')).toBe(false);
 });

 // Tests for checkProjectInfo function
 test('Check project info with valid string input', () => {
     expect(checkProjectInfo('Some additional information')).toBe(true);
 });

 test('Check project info with invalid input', () => {
     expect(checkProjectInfo(123)).toBe(false);
 });