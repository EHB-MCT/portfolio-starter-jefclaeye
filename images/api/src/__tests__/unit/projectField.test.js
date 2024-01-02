// File: projectFields.test.js

const { checkProjectName, checkProjectInfo } = require('./../../helpers/checkProjectFields.js');

// Tests for checkProjectName function
test('Check project name with valid input', () => {
    expect(checkProjectName('My Project')).toBe(true);
});

test('Check project name with invalid input', () => {
    expect(checkProjectName('A')).toBe(false);
});

test('Check project name with empty string', () => {
    expect(checkProjectName('')).toBe(false);
});

test('Check project name with null input', () => {
    expect(checkProjectName(null)).toBe(false);
});

test('Check project name with undefined input', () => {
    expect(checkProjectName(undefined)).toBe(false);
});

test('Check project name with valid long input', () => {
    expect(checkProjectName('This is a very long project name that exceeds the character limit')).toBe(true);
});


test('Check project name with valid input length', () => {
    expect(checkProjectName('Valid Project Name')).toBe(true);
});

// Tests for checkProjectInfo function
test('Check project info with valid string input', () => {
    expect(checkProjectInfo('Some additional information')).toBe(true);
});

test('Check project info with invalid input', () => {
    expect(checkProjectInfo(123)).toBe(false);
});

test('Check project info with empty string', () => {
    expect(checkProjectInfo('')).toBe(true);
});

test('Check project info with null input', () => {
    expect(checkProjectInfo(null)).toBe(false);
});

test('Check project info with undefined input', () => {
    expect(checkProjectInfo(undefined)).toBe(false);
});

test('Check project info with valid long input', () => {
    const longInfo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    expect(checkProjectInfo(longInfo)).toBe(true);
});

test('Check project info with valid string input length', () => {
    expect(checkProjectInfo('Valid information about the project')).toBe(true);
});