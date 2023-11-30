 const checkProjectFields = require('./../../helpers/checkProjectFields.js');



 describe('checkProjectFields function', () => {
     it('should return true for valid names', () => {
         expect(checkProjectFields('John')).toBe(true);
         expect(checkProjectFields('Alice')).toBe(true);
         expect(checkProjectFields('Bob')).toBe(true);
     });



     it('should return false for invalid names', () => {
         expect(checkProjectFields(123)).toBe(false); // Numbers in name
         expect(checkProjectFields('Ab')).toBe(false); // Name too short
         expect(checkProjectFields(undefined)).toBe(false);
         expect(checkProjectFields(null)).toBe(false);
     });
 });