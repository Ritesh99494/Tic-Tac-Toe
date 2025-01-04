let boxes= document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset");
let newGame= document.querySelector("#msg-btn");
let msgContainer=document.querySelector(".msg-container");
let para=document.querySelector("#msg");

let turnX = true;
const WinPatterns=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];

const resetGame=()=>{
    trueX= true;
    enableBoxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        //console.log("box clicked");
      if (turnX){
        box.innerHTML= "<span style= color:#e36414 >X</span>";
        //box.innerText="X"
        turnX=false;
      }
      else{
       box.innerHTML= "<span style= color:#0077b6 >O</span>";
       //box.innerText="O"
        turnX=true;

      }
      box.disabled =true;
      checkWinner();
    })
});
const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner= (Winner)=>{
     para.innerHTML="<span style= color:green > Congratulations ,Winner is</span>"+" "+`${Winner}`;
    //para.innerHTML= `Congratulations ,Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner= ()=>{
    for (let pattern of WinPatterns){
        
           let pos1Val= boxes[pattern[0]].innerText;
           let pos2Val=boxes[pattern[1]].innerText;
           let pos3Val=boxes[pattern[2]].innerText;
           if(pos1Val!="" && pos2Val !="" && pos3Val != ""){
            if(pos1Val==pos2Val&& pos2Val==pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
           }
          

    }
}

newGame.addEventListener("click",resetGame);
 reset_btn.addEventListener("click",resetGame);
