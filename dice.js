// DICE ROLLER PROGRAM

function rolldice(){
    const numofDice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceResult");
    const diceimages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numofDice; i++){
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="./dice_images/${value}.png">`);
      
    }
    diceresult.textContent = `dice: ${values.join(`, `)}`;
    diceimages.innerHTML = images.join();
}