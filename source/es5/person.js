// es5 constructor(as class) definition 
// JavaScript is prototype-based language
function Person(firstname, lastname) {

  // public attribute
  this.firstname = firstname;
  this.lastname = lastname;

  // private attribute 
  var records = [{type: 'in', amount: 0}];

  // public function
  // it needs to be instance method to access private attributes
  this.addTransaction = function(trans) {
    if (trans.hasOwnProperty('type') && trans.hasOwnProperty('amount')) {
      records.push(trans);
    }
  }

  // public function
  this.getBalance = function() {
    var total = 0;

    records.forEach(function(record){
      if (record.type === 'in') {
        total += record.amount;
      } else {
        total -= record.amount;  
      }
    });

    return total;
  }
}

// Prototype function
Person.prototype.getFullName = function() {
  return this.firstname + " " + this.lastname;
};

module.exports = Person;
