let records = [{type: 'in', amount: 0}];

export class Person {

  constructor(first, last) {
    this.firstname = first;
    this.lastname = last;
  }
   
  addTransaction(trans) {
    if (trans.hasOwnProperty('type') && trans.hasOwnProperty('amount')) {
      records.push(trans);
    }
  }

  getBalance() {
    let total = 0;

    for(let {type, amount} of records) {
      total += amount;
    }

    return total;
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }

}
