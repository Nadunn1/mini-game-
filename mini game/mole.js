
let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;


window.onload = function() {
      setGame();

}

function setGame() {
    // set up the game grid for the game board in html
    for (let i=0;i<9; i++){
        //i goes from 0 to 8, stops at 9
        // <div id ="0.8"></div>
        let tile = document.createElement("div")
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
        
    }

    setInterval(setMole,2000); //2000 millisecond =2 seconds
    setInterval(setPlant,3000); //3000 millisecond =3 seconds
}

function getRandomTile() {
    // math.random --> (0-1) * 9 =(0.9) --> round down to (0-8) integers
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setMole() {

    if (gameOver) {
        return;
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

     let mole = document.createElement("img");
     mole.src= "./bison.png";

     let num = getRandomTile();

      if (currPlantTile && currPlantTile.id == num) {
        return;
      }
     currMoleTile = document.getElementById(num);
     currMoleTile.appendChild(mole);

   
    }
    
    function setPlant() {

        if (gameOver) {
            return;
        }

        if (currPlantTile) {
            currPlantTile.innerHTML = "";
        }
        
        let plant = document.createElement("img");
        plant.src = "./skull.png";

     let num = getRandomTile();
     if (currMoleTile && currMoleTile.id == num) {
        return;
      }
     
     currPlantTile = document.getElementById(num);
     currPlantTile.appendChild(plant);

    }

    function selectTile() {
        if (gameOver) {
            return;
        }

        if (this == currMoleTile) {
            score += 10 ;
            document.getElementById("score").innerText = score.toString(); //updating the score

        }
        else if  (this == currPlantTile) {
            document.getElementById("score").innerText = "GAME OVER: " + score.toString();
            gameOver = true;
        }
    }

    