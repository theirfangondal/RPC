let choices=document.querySelectorAll(".choice");
let userScore=document.querySelector("#userScore");
let compScore=document.querySelector("#compScore");
let msg=document.querySelector("#msg");
let userSelected;
let compSelected;
let userCounter=0;
let compCounter=0;
let userWin;

// User-turn
choices.forEach((choice)=>
choice.addEventListener("click",()=>{
userSelected=choice.getAttribute("id");
console.log(`User selected ${userSelected}`);
compTurn();

})

) //User-turn


// Comp-turn
function compTurn(){
    const compIndex=Math.floor(Math.random()*3); // will multiply randomly generated number with index+=1
    compSelected=choices[compIndex].getAttribute("id");
    console.log(`Comp selected ${compSelected}`);
    compareSelected()


} //Comp-turn

function compareSelected(){
    if(userSelected===compSelected){
        draw();
    }
    else{
       if(userSelected==="rock"){
        userWin=compSelected==="paper"? false : true; 
       }
       else if(userSelected==="paper"){
        userWin=compSelected==="scissors"? false : true;
       }
       else if(userSelected==="scissors"){
        userWin=compSelected==="rock" ? false : true;
       }
       console.log(userWin); 
       winner();
       
    }
} //compareSelected






// winner function

function winner(){
if(userWin){
    userWonFnc();
}

else{
    compWonFnc();
}
} //winner function



//draw function

function draw(){
    msg.innerText="That was a Draw!"
    msg.style.backgroundColor = "orange";
} //draw function


//user-won function
function userWonFnc(){
    userCounter+=1;
    userScore.innerText=userCounter;
    msg.innerText=`You Won! Your ${userSelected} beats Comp's ${compSelected}`;
     msg.style.backgroundColor="green";
}//user-won function



//comp-won function
function compWonFnc(){
    compCounter+=1;
    compScore.innerText=compCounter;
    msg.innerText=`You Lost! Comp's ${compSelected} beats your ${userSelected}`;  
    msg.style.backgroundColor="red";
}
//comp-won function