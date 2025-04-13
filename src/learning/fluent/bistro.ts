// class Bistro s metodami kouputPiti, returnEntryHall

import { EntryHall } from "./entry_hall.ts";

export class Bistro {
    private readonly name: string
    constructor(name: string) {
        this.name = name;
        console.log(`Bistro: je otevřeno...`);
    }
    kouputPiti(): Bistro {
        console.log(`Bistro: ${this.name} si koupil piti.`);
        const price = Math.floor(Math.random() * 100) + 1;
        this.acceptPrice(price);
        return this;
    }
    
    returnEntryHall(): EntryHall {
        return new EntryHall(this.name);
    }

    acceptPrice(price: number): Bistro {
        const accept = Math.random() > 0.5;
        if (accept) {
            console.log(`Bistro: ${this.name} akceptoval cenu $${price} a platí.`);
            this.pay();
        } else {
            console.log(`Bistro: ${this.name} neakceptoval cenu $${price} a odchází.`);
        }
        return this;
    }

    pay(): Bistro {
        const paymentMethod = Math.random() > 0.5 ? "hotově" : "kartou";
        console.log(`Bistro: ${this.name} zaplatil ${paymentMethod}.`);
        return this;
    }
}