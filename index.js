const updateSkill = (skillLevel, idOfTheSkill) => {
    idOfTheSkill.querySelector(".skill__progress").style.width = skillLevel + "%";
    idOfTheSkill.querySelector(".skill__value").innerHTML = skillLevel + " / 100";
}

const skillLevel1 = Number(prompt("Jaká je vaše úroveň znalostí HTML od 1 do 100?"));
const skillLevel2 = Number(prompt("Jaká je vaše úroveň znalostí CSS od 1 do 100?"));
const skillLevel3 = Number(prompt("Jaká je vaše úroveň znalostí JavaScriptu od 1 do 100?"));

const idOfTheSkill1 = document.getElementById("skill1");
const idOfTheSkill2 = document.getElementById("skill2");
const idOfTheSkill3 = document.getElementById("skill3");

console.log(skillLevel1, skillLevel2, skillLevel3);
console.log(idOfTheSkill1, idOfTheSkill2, idOfTheSkill3);

updateSkill(skillLevel1, idOfTheSkill1);
updateSkill(skillLevel2, idOfTheSkill2);
updateSkill(skillLevel3, idOfTheSkill3);


// Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
// Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.

