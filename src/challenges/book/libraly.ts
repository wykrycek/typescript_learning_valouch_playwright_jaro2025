import { Book } from "./book_object";

/*
V tomto programu vytvoř seznam knih pomocí pole.
Přidej do knihovny minimálně 3 knihy.
Cyklem vypiš všechny knihy.

*/

const books: Book[] = [
    new Book("Něco zajímavého", "Pisálek", 2021, 10, true),
    new Book("Něco zajímavého 2", "Pisálek", 2021, 10, true),
    new Book("Něco zajímavého 3", "Pisálek", 2021, 10, true),
];

for (const book of books) {
    book.printInfo();
}