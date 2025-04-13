/*
Výzva

Vytvoř složku: src/challenges, soubor: type_annotations_challenge.ts
Vytvoř program, který:
Vytvoří proměnnou s polem cities a 5 hodnotami včetně typové anotace. Alespoň jedno město bude mít hodnotu: Tábor
Pomocí forEach města procyklí.
V každém cyklu vypíše hodnotu cykleného města do konzole.
Pokud bude město v cyklu Tábor, program vypíše text:
Tábor byl založen na jaře roku 1420 husity a pojmenován podle hory Thabor u Nazaretu, v dnešním Izraeli.
Spusť program, zkontroluj, jestli vypisuje správné výsledky

Výzva 2
V programu na výpis informací o městě táboře .. zařiď, aby informace byly vypsány i když bude město napsáno různými velikostmi písmen (tábor, TÁBOR, tÁBor atd.).
*/


const cities: string[] = ["Tábor", "Praha", "Ostrava", "Brno", "Pardubice", "TÁBOR", "tÁBor", "táBOR", "tábOR"];

// I.
cities.forEach((city: string) => {
    console.log(city);
    if (city === "Tábor") {
        console.log("Tábor byl založen na jaře roku 1420 husity a pojmenován podle hory Thabor u Nazaretu, v dnešním Izraeli.");
    }
});

// II.
cities.forEach((city: string) => {
    console.log(city);
    if (city.toLowerCase() === "tábor") {
        console.log("Tábor byl založen na jaře roku 1420 husity a pojmenován podle hory Thabor u Nazaretu, v dnešním Izraeli.");
    }
});