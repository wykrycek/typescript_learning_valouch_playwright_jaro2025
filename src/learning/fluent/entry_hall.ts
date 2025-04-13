import { Bathroom } from "./bathroom.ts";
import { Bistro } from "./bistro.ts";
import { SecondFloor } from "./second_floor.ts";

export class EntryHall {
    private readonly name: string;
    private readonly capacity: number;

    constructor(name: string, capacity: number=Infinity) {
        this.name = name;
        this.capacity = capacity;
        console.log(`EntryHall: Návštěvník ${this.name} vstoupil do haly s kapacitou ${this.capacity}.`);
    }

    entryBathroom(): Bathroom {
        // ? : Bathroom je typová anotace (metoda vždy vrátí objekt z class Bathroom)
        console.log(`EntryHall: ${this.name} jde na toaletu.`);
        return new Bathroom(this.name);
    }

    askReceptionistQuestion(question: string): EntryHall {
        console.log(`EntryHall: ${this.name} chce zjistit, "${question}".`);
        console.log(`EntryHall: Recepční mlčí...`);
        
        // return new EntryHall(this.name);
        return this;
    }

    goToBistro(): Bistro {
        console.log(`EntryHall: ${this.name} jde do bistra.`);
        return new Bistro(this.name);
    }

    async takeElevatorToSecondFloor(): Promise<SecondFloor> {
        console.log(`EntryHall: ${this.name} jde do druhého patra.`);
        return new SecondFloor(this.name);
    }
}