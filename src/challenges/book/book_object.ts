/*
Vytvoř třídu Book se všemi klíčovými prvky. Použij složku: src/challenges:

name: string (název knihy)

author: string (autor knihy)

year: number (datum vydání)

pages: number (počet stránek v knize)

isPrinted: boolean (je kniha tištěná?)


Vytvoř metody:

Na získání všech informací (budou navracet informace) pro každou property 1 metoda.

Na změnu údajů (oprava)

Vypsání informací o knize.
*/

export class Book {
    name: string;
    author: string;
    year: number;
    pages: number;
    isPrinted: boolean;
    constructor(name: string, author: string, year: number, pages: number, isPrinted: boolean) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.isPrinted = isPrinted;
    }
    getName() {
        return this.name;
    }
    getAuthor() {
        return this.author;
    }
    getYear() {
        return this.year;
    }
    getPages() {
        return this.pages;
    }
    getIsPrinted() {
        return this.isPrinted;
    }
    setName(name: string) {
        this.name = name;
    }
    setAuthor(author: string) {
        this.author = author;
    }
    setYear(year: number) {
        this.year = year;
    }
    setPages(pages: number) {
        this.pages = pages;
    }
    setIsPrinted(isPrinted: boolean) {
        this.isPrinted = isPrinted;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Author: ${this.author}`);
        console.log(`Year: ${this.year}`);
        console.log(`Pages: ${this.pages}`);
        console.log(`Is printed: ${this.isPrinted}`);
    }
}