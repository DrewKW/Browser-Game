

//Rolling the Dice

function rollDice () {
    var die1 = document.getElementById("die1");
    var status = document.getElementById("display");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1;
    die1.innerHTML = d1;
}
    

// Adding the character and positioning him

// let playerAfrican = document.createElement('img')
// playerAfrican.src = './img/png-transparent-africa-cartoon-dancing-africans-cartoon-character-vertebrate-dark.png'
// playerAfrican.style.position = 'fixed'
// playerAfrican.style.left = '138px'
// playerAfrican.style.right = '10px'
// playerAfrican.style.bottom = '40px'
// document.body.append(playerAfrican)



// Adding a dice and positioning it
let dice = document.createElement('img')
dice.src = './img/images copy.jpg'
dice.style.position = 'absolute'
dice.style.marginLeft = '400px'
dice.style.marginLeft = '400px'
dice.style.top = '500px'
document.body.append(dice)






// Waiting for dice roll then move character





//     function move(playerAfrican) {
//     playerAfrican.style.position = 'fixed'
    

    // function moveToCoordinates(right, up) {
    //     playerAfrican.style.right = right + 'px'
    //     playerAfrican.style.up = up + 'px'
    // }

    // function moveWithArrowKeys(right, up, callback){
    //     let direction = null;
    //     let x = right;
    //     let y = up;

    //     playerAfrican.style.right = x + 'px'
    //     playerAfrican.style.up = y + 'px'
        
    //     function movePlayer(){ 
    //         if(direction === 'east'){
    //             x-=1
    //         }
    //         if(direction === 'north'){
    //             y+=1
    //         }
    //         if(direction === 'west'){
    //             x+=1
    //         }
    //         if(direction === 'south'){
    //             y-=1
    //         }
    //         playerAfrican.style.right = x + 'px'
    //         playerAfrican.style.up = y + 'px'
    //     }
        
    //     setInterval(movePlayer, 1)
        
    //     document.addEventListener('keyup', function(e){
    //         if(e.repeat) return;
        
    //         if(e.key === 'ArrowRight'){
    //             direction = 'east'
    //         }
    //         if(e.key === 'ArrowUp'){
    //             direction = 'north'
    //         }
    //         if(e.key === 'ArrowLeft'){
    //             direction = 'west'
    //         }
    //         if(e.key === 'ArrowDown'){
    //             direction = 'south'
    //         }
    //         callback(direction)
    //     })
        
    //     document.addEventListener('keydown', function(e){
    //         direction = null
    //         callback(direction)
    //     })
    // }

    // return {
    //     to: moveToCoordinates,
    //     withArrowKeys: moveWithArrowKeys
    // }

