// write your JS code here



// let letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "SPACE" ];
  let text = "";



function typDisplay(alpha){
 let bodyEl = document.querySelector("card");
   text += alpha;
   document.querySelector(".card-header").innerHTML = text;

    
}

function send(){
    alert("your message has been sent");
}
