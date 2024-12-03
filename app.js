let boxes= document.querySelectorAll(".box");
let msg= document.querySelector("#msg");
let resetbtn= document.querySelector("#reset-btn");
let newgamebtn= document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container");

let turnO= true;

//2D Array
const winpattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,6,8],
    [0,4,8],
    [2,4,6]
];
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,6,8],
    [0,4,8],
    [2,4,6]
]

//
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked")
        if(turnO){
            box.innerText= "O";
            turnO= false;
        } else{
            box.innerText= "X";
            turnO= true;
        }
        box.disabled= true;

        checkwinner();
    })
});
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disbled = true;
        checkwinner();
    })
})

//
const checkwinner=() =>{
    for(let pattern of winpattern){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val);
            }
        }
    }
};
const checkWinner = () =>{
    for (let pattern  of winPattern) {
        let pos1val = boxes
    }
}

//it would showwinner and disabled box, enable msg
const showwinner= (winner)=>{
    msg.innerText= `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

//disabled box
const disableboxes= ()=>{
    for(let box of boxes){
        box.disabled= true;
    }
};

//enabled box
const enableboxes= ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText= "";
    };
};

//it would for resetbtn and newgamebtn enable box, disable msg
const resetandnewgamebtn= ()=>{
    turnO= true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

resetbtn.addEventListener("click", resetandnewgamebtn);
newgamebtn.addEventListener("click", resetandnewgamebtn);