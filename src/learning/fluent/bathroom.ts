import { EntryHall } from "./entry_hall.ts";

export class Bathroom {
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
        console.log(`Bathroom: Návštěvník ${this.name} vstoupil na toaletu.`);
     }

    returnEntryHall(): EntryHall {
        return new EntryHall(this.name);
    }

    washHands(): Bathroom {
        console.log(`Bathroom: Návštěvník ${this.name} si umyl ruce.`);
        return this;
    }
}