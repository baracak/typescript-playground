const myName: string = 'Bára';

const age: number = 13;

function me(): void {
  console.log('Hi my name is ' + myName + ' and I am ' + age + ' years old.');
}

me();

function sum(a: number, b: number): number {
  return a + b;
}

let result: number = 2 + 5;

result = sum(2, 5);

console.log('result is ' + result);

result = sum(4, 6);

console.log('result is ' + result);

const correctAge: boolean = age === 13;

console.log(`Is age correct? ${correctAge}`);
