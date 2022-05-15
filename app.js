

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


// Adding Ladders plus positioning them
let ladder1 = document.createElement('img')
ladder1.src = './img/81ebbffbfce45b15857b6458408b225d.jpg'
ladder1.style.position = 'absolute'
ladder1.style.marginLeft = '390px'
ladder1.style.marginRight = '450px'
ladder1.style.top = '207px'
ladder1.style.opacity = '0.5'
document.body.append(ladder1)


// Adding Ladders plus positioning them
let ladder2 = document.createElement('img')
ladder2.src = './img/images.jpg'
ladder2.style.position = 'absolute'
ladder2.style.marginLeft = '830px'
ladder2.style.marginRight = '400px'
ladder2.style.top = '100px'
ladder2.style.opacity = '0.5'
document.body.append(ladder2)


// Adding Snakes plus positioning them
let snake1 = document.createElement('img')
snake1.src = './img/kisspng-snake-clip-art-purple-snake-5a8d94d64fac23.2785132715192281183263.jpg'
snake1.style.position = 'absolute'
snake1.style.marginLeft = '620.8px'
snake1.style.marginRight = '400px'
snake1.style.top = '288px'
snake1.style.opacity = '0.5'
document.body.append(snake1)


let snake2 = document.createElement('img')
snake2.src = './img/snake-cartoon-png-favpng-t78fjbQvn8CgRCSh9Pj3WaqTz.jpg'
snake2.style.position = 'absolute'
snake2.style.marginLeft = '500px'
snake2.style.marginRight = '400px'
snake2.style.top = '100px'
snake2.style.opacity = '0.5'
document.body.append(snake2)


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

