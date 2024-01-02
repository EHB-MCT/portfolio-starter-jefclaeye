 const checkStudentFields = require('../../helpers/checkStudentFields.js');



 describe('checkStudentFields function', () => {
     it('should return true for valid names', () => {
         expect(checkStudentFields('John')).toBe(true);
         expect(checkStudentFields('Alice')).toBe(true);
         expect(checkStudentFields('Bob')).toBe(true);
     });



     it('should return false for invalid names', () => {
         expect(checkStudentFields(123)).toBe(false);
         expect(checkStudentFields('Ab')).toBe(false);
         expect(checkStudentFields(undefined)).toBe(false);
         expect(checkStudentFields(null)).toBe(false);
     });
 });