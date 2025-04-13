//first.ts
// src/learning

console.log("Programujeme v Typescriptu!");

const message: string = "Ahoj světe!";
console.log(message);


// hraju si...

// kalkulačka v TS

const calculator = {
    secti: (a: number, b: number) => a + b,
    odecti: (a: number, b: number) => a - b,
    vynasob: (a: number, b: number) => a * b,
    vydel: (a: number, b: number) => a / b,
    umocni: (a: number, b: number) => a ** b,
    odmocni: (a: number, b: number) => a ** (1 / b),
    logaritmuj: (a: number, b: number) => a ** (1 / b),
};

console.log(calculator.secti(1, 2));
console.log(calculator.odecti(1, 2));
console.log(calculator.vynasob(1, 2));
console.log(calculator.vydel(1, 2));
console.log(calculator.umocni(1, 2));
console.log(calculator.odmocni(1, 2));
console.log(calculator.logaritmuj(1, 2));

// TS functions

function sum(a: number, b: number): number { return a + b; }
function difference(a: number, b: number): number { return a - b; }
function product(a: number, b: number): number { return a * b; }
function quotient(a: number, b: number): number { return a / b; }
function power(a: number, b: number): number { return a ** b; }
function root(a: number, b: number): number { return a ** (1 / b); }
function log(a: number, b: number): number { return a ** (1 / b); }

console.log(sum(1, 2));
console.log(difference(1, 2));
console.log(product(1, 2));
console.log(quotient(1, 2));
console.log(power(1, 2));
console.log(root(1, 2));
console.log(log(1, 2));

// TS classes

class Calculator {
    sum(a: number, b: number): number { return a + b; }
    difference(a: number, b: number): number { return a - b; }
    product(a: number, b: number): number { return a * b; }
    quotient(a: number, b: number): number { return a / b; }
    power(a: number, b: number): number { return a ** b; }
    root(a: number, b: number): number { return a ** (1 / b); }
    log(a: number, b: number): number { return a ** (1 / b); }
}

const calculator2 = new Calculator();
console.log(calculator2.sum(1, 2));
console.log(calculator2.difference(1, 2));
console.log(calculator2.product(1, 2));
console.log(calculator2.quotient(1, 2));
console.log(calculator2.power(1, 2));
console.log(calculator2.root(1, 2));
console.log(calculator2.log(1, 2));