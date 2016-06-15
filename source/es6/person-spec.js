import { Person } from './person.js';

describe('Person es6 class', function () {

  var person;
  beforeEach(function () {
    person = new Person('Andrew', 'Cass');
  });

  it('should be initiated with first name and last name', function () {
    expect(person.getFullName()).toEqual('Andrew Cass');
  });

  it("should be initiated with 0 balance", function() {
    expect(person.getBalance()).toEqual(0);
  });
});




