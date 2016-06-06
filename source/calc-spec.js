import {Calculator} from './calculator.js';


describe('Calculator', () => {
  it('should add two numbers', () => {

    let calculator = new Calculator();
    let sum = calculator.add(1,4);

    expect(sum).toBe(5);
    
  });

  it('should subtract tow numbers', function() {
    let calc = new Calculator();
    let sub = calc.subtract(4,1);

    expect(sub).toBe(3);
  });
});
