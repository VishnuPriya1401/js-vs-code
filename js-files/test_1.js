console.log("test js file created");

function changeText(){
    document.querySelector(".test-case-1").innerHTML="text changed"
    console.log("button clicked - text change - text generated")
}

function runTest(player){
    document.querySelector(".result-text").innerHTML=player;
    console.log(player)
}