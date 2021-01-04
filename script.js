let name;
let numberGuessed;
let guess;

let count = 1

name = prompt ("Welkom! Wat is je naam?");
alert ("Hey " + [name]);

let maxNumber = prompt ("Wat is je hoogste nummer?");
let minNumber = prompt ("Wat is je laagste nummer?");
let range = (maxNumber - minNumber + 1);
console.log ("range is " + range)

randomNumber = Math.floor(Math.random() * range);
console.log ("random number is " + randomNumber);


numberGuessed = prompt ("Voer een nummer in uit de opgegeven range om te beginnen met raden...");

while (numberGuessed !== randomNumber) {
    numberGuessed = prompt ("Het antwoord is fout, geef een nieuw nummer. " + "Je hebt " + count + " poging(en) gedaan");
    count++
    if (count == 5) {
        alert (count + " pogingen, je hebt te vaak geprobeerd, tot ziens");
        break; 
    } else if  (numberGuessed == randomNumber){
    alert ("Het antwoord is goed " + name +", je hebt " + count + "poging(en) gedaan. Tot Ziens");
    break;
}
}

