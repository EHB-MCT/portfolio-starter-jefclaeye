 // checkProjectFields.test.js

 const checkProjectFields = require('./../../helpers/checkProjectFields.js');

 const dummy = {
     name: "validName",
     date: ""
 }
 describe('checkProjectFields function', () => {
     it('should return true for valid names', () => {
         expect(checkProjectFields({...dummy, name: "otherValidName" })).toBe(true);
         expect(checkProjectFields({...dummy, date: "" })).toBe(true);
     });

     //{...dummy, date: ""}
     //{...dummy, name: ""}

     it('should return false for invalid names', () => {
         expect(checkProjectFields({...dummy, name: null })).toBe(false); // Empty name
         expect(checkProjectFields('123')).toBe(false); // Numbers in name
         expect(checkProjectFields('J')).toBe(false); // Name too short
         expect(() => checkProjectFields(null)).toThrow('Name must be a string'); // Non-string input
         expect(() => checkProjectFiel² ds(undefined)).toThrow('Name must be a string'); // Non-string input
         expect(() => checkProjectFields(42)).toThrow('Name must be a string'); // Non-string input
     });
 });