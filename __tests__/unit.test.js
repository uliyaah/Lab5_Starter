// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//Tests for isPhoneNumber function
test('898-800-1234 to equal true', () => {
  expect(isPhoneNumber('898-800-1234')).toBe(true);
});
test('(214)-301-2358 to equal true', () => {
  expect(isPhoneNumber('(214)-301-2358')).toBe(true);
});
test('(214)-301-235 to equal false', () => {
  expect(isPhoneNumber('(214)-301-235')).toBe(false);
});
test('24-30-2358 to equal false', () => {
  expect(isPhoneNumber('24-30-2358')).toBe(false);
});

//Tests for isEmail function
test('johndoe@gmail.com to equal true', () => {
  expect(isEmail('johndoe@gmail.com')).toBe(true);
});
test('jane123@yahoo.com to equal true', () => {
  expect(isEmail('jane123@yahoo.com')).toBe(true);
});
test('johndoe to equal false', () => {
  expect(isEmail('johndoe')).toBe(false);
});
test('johndoe@.com to equal false', () => {
  expect(isEmail('johndoe@.com')).toBe(false);
});

//Tests for isStrongPassword function
test('strongpassword to equal true', () => {
  expect(isStrongPassword('strongpassword')).toBe(true);
});
test('password1234 to equal true', () => {
  expect(isStrongPassword('password1234')).toBe(true);
});
test('1234password to equal false', () => {
  expect(isStrongPassword('1234password')).toBe(false);
});
test('passwordpassword to equal false', () => {
  expect(isStrongPassword('passwordpassword')).toBe(false);
});

//Tests for isDate function
test('05/21/2022 to equal true', () => {
  expect(isDate('05/21/2022')).toBe(true);
});
test('4/20/2002 to equal true', () => {
  expect(isDate('04/20/2002')).toBe(true);
});
test('05/21/20222 to equal false', () => {
  expect(isDate('05/21/20222')).toBe(false);
});
test('05-21-2022 to equal false', () => {
  expect(isDate('05-21-2022')).toBe(false);
});

//Tests for isHexColor function
test('#FF5733 to equal true', () => {
  expect(isHexColor('FF5733')).toBe(true);
});
test('#f0c to equal true', () => {
  expect(isHexColor('#f0c')).toBe(true);
});
test('#FF57333 to equal false', () => {
  expect(isHexColor('#FF57333')).toBe(false);
});
test('#06 to equal false', () => {
  expect(isHexColor('#06')).toBe(false);
});