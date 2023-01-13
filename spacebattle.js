let attack = document.getElementById('attack');
let exit = document.getElementById('exit');

class USAssembly {
    constructor() {
        this.hull = 20,
        this.firepower = 5,
        this.accuracy = 0.7
    }
    attack(enemy) {
        if(Math.random() < this.accuracy) {
            enemy.hull = enemy.hull - this.firepower;
        }
    }
}

const soldier = new USAssembly();

class AlienShip {
    constructor() {
        this.shipArr = [];
    }

    addArr = () =>{
        // let hull = Math.floor(Math.random()*(7-3) + 3);
        // let firepower = Math.floor(Math.random()*(5-2) + 2);
        // let accuracy = Math.random() * (.8-.6) + .6;
        let arrHull = [3,4,5,6];
        // get random index value
        const randomHullIndex = Math.floor(Math.random() * arrHull.length);
        // get random item
        let hull = arrHull[randomHullIndex];
  
        let arrfirePower = [2,3,4];
        // get random index value
        const randomfirePowerIndex = Math.floor(Math.random() * arrfirePower.length);
        // get random item
        let firepower = arrfirePower[randomfirePowerIndex];
  
        let arraccuracy = [0.6,0.7,0.8];
        // get random index value
        const randomarraccuracyIndex = Math.floor(Math.random() * arraccuracy.length);
        // get random item
        let accuracy = arraccuracy[randomarraccuracyIndex];
        this.shipArr.push({hull:hull,firepower:firepower,accuracy:accuracy,attack:this.attack});
    }

    attack(enemy) {
        if(Math.random() < this.accuracy) {
            enemy.hull = enemy.hull - this.firepower;
        }
    }
}

const alien1 = new AlienShip();

const alienDiv = document.getElementById('aliens');
const numberOfShip = 6;
let i = 0;
while(i < numberOfShip) {
    alien1.addArr();
    i++;
}

const attackOnCaptain = () =>{
    
    if(soldier.hull >0){
        soldier.hull = soldier.hull - soldier.firepower;
    }
    else{
        alert('Alien won as USS Assembly health reached to zero');
        exit1();
       
    }
}

const currentStatus = (hull,firepower,accuracy) => {
        return alert(`Player\n HULL : ${soldier.hull}\n FIREPOWER: ${soldier.firepower}\n ACCURACY: ${soldier.accuracy}`+ 
        `\n\n Alian\n Alien Hull: ${hull}\n Alien Firepower: ${firepower}\n Alien Accuracy: ${accuracy}`);
    
}
const exit1 = () => {
    let answer = prompt('Do you want to exit the screen if yes type "Y" or no type "N"');
    if(answer.toLowerCase() =="y") {
        alert('Good Bye');
        gameExit();
    }
    if(answer.toLowerCase() =="n") {
        alert('Welcome Again');
        gameStart();
    }
}

const gameStart = () => {
    let arr = alien1.shipArr.length;
    let soldierDead = false;
    let s = soldier.hull;
    //currentStatus();
    while(arr > 0) {
        for (let index = 0; index < alien1.shipArr.length; index++) {
            //soldier.attack(alien1.shipArr[index]);
            if(alien1.shipArr[index].hull > 0) {
                if(alien1.shipArr[index].hull == 0){
                    break;
                }
                console.log(alienDiv.childNodes[arr+2]);
                console.log("length of img", alienDiv.childNodes.length);
                console.log("Array length is", alien1.shipArr.length);
        
                alert("Successfull you defeat alien. Ready to attack next alien ship");
                alien1.shipArr[index].hull= Math.abs(alien1.shipArr[index].hull - alien1.shipArr[index].firepower);
                alien1.shipArr[index].firepower = Math.abs(alien1.shipArr[index].firepower -  Math.floor(Math.random()*(5-2) + 2));
                alien1.shipArr[index].accuracy = Math.abs(alien1.shipArr[index].accuracy - Math.random() * (.8-.6)/10);
               
                currentStatus(alien1.shipArr[index].hull,alien1.shipArr[index].firepower,alien1.shipArr[index].accuracy);

                    if(alien1.shipArr[index].hull <= 0){
                        alert("Alien health reached to zero or less, so alien ship destroyed.");
                        alert("Congratulations. You won the game.");
                        exit1();
                   
                    }   
                }
                else {
                    alert("The Alien is alive");
                    alert("Alien is going to attack you All The Best!");
                    attackOnCaptain();
                }
            }
        }
        //winner();
    }

// const winner = () => {
//     let arr = alien1.shipArr.length;
//     if(arr===0) {
//         winnerSoldier();
//         setTimeout(()=>{
//             exit1();
//         },2000)
//     }

//     if(soldier.hull == 0) {
//         winnerAlien();
//         setTimeout(()=>{
//             exit1();
//         },2000)
//     }
// }

const gameExit = () => {
    let window;
    window.close();
}

const start = ()=>{
    alert('Welcome to My Space Battle Game');
    const answer = prompt('Do you want to start the game? If yes type "Y" or no type "N" ');
    if(answer.toLowerCase()=='y'){
        alert('Welcome player, you are going to attack the first alien ship Be prepared!!');
        gameStart();
    }
    else {
        exit1();
    }

    window.onload = function() {
        setTimeout(start, 1000);
    }   
}