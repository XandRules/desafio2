import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  validOperators = ['*','+','/','-'];

  constructor() { }

  isBinary(str: string):boolean {
    return /^[01]+$/.test(str);
  }

  toNumber(str: string): number {
    return parseInt(str, 2);
  }

  toBinary(integer: number, withPaddingLength: number) {
    let str = integer.toString(2);
    return str.padStart(withPaddingLength, "0");
  }

  isValidOperator(operator: string): boolean{
    return Boolean(this.validOperators.find(op => {return op == operator}));
  }

  doOperation(number1: number, number2: number, operator: string): string{

    let result = 0;

    let firstNumber = number1.toString()
    let secondNumber = number2.toString()

    switch(operator){

      case '*': result = this.toNumber(firstNumber) * this.toNumber(secondNumber);  break;
      case '+': result = this.toNumber(firstNumber) + this.toNumber(secondNumber);  break;
      case '-': result = this.toNumber(firstNumber) - this.toNumber(secondNumber);  break;
      case '/': result = this.toNumber(firstNumber) / this.toNumber(secondNumber);  break;
      case '%': result = this.toNumber(firstNumber) % this.toNumber(secondNumber);  break;

    }

    return this.toBinary(result, result.toString().length);

  }


}
