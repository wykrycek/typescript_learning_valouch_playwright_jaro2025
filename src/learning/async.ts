// ? asynchronní funkce pro získání dat uživatele po 2s
// ? Nyní nemusíme chápat, jak funguje, stačí vědět, že se jedná o asynchronní funkci
async function fetchUserData(): Promise<string> {
  return new Promise((resolve) => {
    console.log("vypíše se hned");
    setTimeout(() => {
      resolve("Načtená data uživatele.");
      console.log("Počkáme na načtení dat až po 2s pomocí klíčového slova await");
    }, 2000);
  });
}

// ? Hlavní funkce, která zavolá asynchronní funkci fetchUserData
// ? klíčové slovo async nám umožní používat await u asynchronních funkcí
async function main() {
  console.log("Načítám data...");
  // ? Počkáme na načtení dat až po 2s pomocí klíčového slova await
  const data = await fetchUserData();
  console.log(data); // Po 2s: "Načtená data uživatele."
}

main();

// ? Výsledky:
// ? Načítám data...
// ? Počkáme na načtení dat až po 2s pomocí klíčového slova await