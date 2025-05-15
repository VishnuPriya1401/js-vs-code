console.log("test js file created");

function changeText(){
    document.querySelector(".test-case-1").innerHTML="text changed"
    console.log("button clicked - text change - text generated")
}

function runTest(player){
    document.querySelector(".result-text").innerHTML=player;
    console.log(player)
}

// test math.random()

console.log(Math.floor((Math.random()*(3-1+1))))
// result -> 0,1,2