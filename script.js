var wrap = document.getElementsByClassName("wrapper")[0];

let dragonHealth = 10;
let userHealth = 5;
while(dragonHealth > 0 && userHealth > 0){
  var damage = window.prompt("Enter the number of hits you are going to attempt to hit the dragon Max damage upto 5");
  
  randDamage = Math.floor(Math.random() * damage) + 1;
  if(randDamage > 5){
    dragonHealth = dragonHealth - 1;
  }
  else{
    dragonHealth = dragonHealth - randDamage;
  }
  if(dragonHealth > 0){
    dragRandDamage = Math.floor(Math.random() * 2) + 1;
    userHealth = userHealth - dragRandDamage;
  }

  else{
    wrap.innerHTML = "User Wins! " + "User Health = " + userHealth + ", Draon Health = " + dragonHealth;
    break;
  }
  if(userHealth <= 0){
     wrap.innerHTML = "Dragon Wins! " + "User Health = " + userHealth + ", Draon Health = " + dragonHealth;
    break;
  }
  
  
}