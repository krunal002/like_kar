
// Janamastami
var janLike = document.querySelector("#janLike");
var janDisLike = document.querySelector("#janDisLike");
var janLikeCounter = document.querySelector("#janLikeCounter");
var janDisLikeCounter = document.querySelector("#janDisLikeCounter");
var janOutput = document.querySelector(".janOutput");

var janLikeCount = 0;
var janDisLikeCount = 0;

janLike.addEventListener("click", janCount)
janDisLike.addEventListener("click", janDisCount)

function janCount(){
    janLikeCount++;
    janLikeCounter.innerHTML = janLikeCount;
    showResult(janLikeCount, janDisLikeCount, janOutput);
}

function janDisCount(){
    janDisLikeCount++;
    janDisLikeCounter.innerHTML = janDisLikeCount;
    showResult(janLikeCount, janDisLikeCount, janOutput);
}



// Ganesh chaturthi
var ganLike = document.querySelector("#ganLike");
var ganDisLike = document.querySelector("#ganDisLike");
var ganLikeCounter = document.querySelector("#ganLikeCounter");
var ganDisLikeCounter = document.querySelector("#ganDisLikeCounter");
var ganOutput = document.querySelector(".ganOutput");

var ganLikeCount = 0;
var ganDisLikeCount = 0;

ganLike.addEventListener("click", ganCount)
ganDisLike.addEventListener("click", ganDisCount)

function ganCount(){
    ganLikeCount++;
    ganLikeCounter.innerHTML = ganLikeCount;
    showResult(ganLikeCount, ganDisLikeCount, ganOutput);
}

function ganDisCount(){
    ganDisLikeCount++;
    ganDisLikeCounter.innerHTML = ganDisLikeCount;
    showResult(ganLikeCount, ganDisLikeCount, ganOutput);
}

// Dussehra
var dusLike = document.querySelector("#dusLike");
var dusDisLike = document.querySelector("#dusDisLike");
var dusLikeCounter = document.querySelector("#dusLikeCounter");
var dusDisLikeCounter = document.querySelector("#dusDisLikeCounter");
var dusOutput = document.querySelector(".dusOutput");

var dusLikeCount = 0;
var dusDisLikeCount = 0;

dusLike.addEventListener("click", dusCount)
dusDisLike.addEventListener("click", dusDisCount)

function dusCount(){
    dusLikeCount++;
    dusLikeCounter.innerHTML = dusLikeCount;
    showResult(dusLikeCount, dusDisLikeCount, dusOutput);
}
function dusDisCount(){
    dusDisLikeCount++;
    dusDisLikeCounter.innerHTML = dusDisLikeCount;
    showResult(dusLikeCount, dusDisLikeCount, dusOutput);
}

// Diwali
var diwLike = document.querySelector("#diwLike");
var diwDisLike = document.querySelector("#diwDisLike");
var diwLikeCounter = document.querySelector("#diwLikeCounter");
var diwDisLikeCounter = document.querySelector("#diwDisLikeCounter");
var diwOutput = document.querySelector(".diwOutput");

var diwLikeCount = 0;
var diwDisLikeCount = 0;

diwLike.addEventListener("click", diwCount)
diwDisLike.addEventListener("click", diwDisCount)

function diwCount(){
    diwLikeCount++;
    diwLikeCounter.innerHTML = diwLikeCount;
    showResult(diwLikeCount, diwDisLikeCount, diwOutput);
}

function diwDisCount(){
    diwDisLikeCount++;
    diwDisLikeCounter.innerHTML = diwDisLikeCount;
    showResult(diwLikeCount, diwDisLikeCount, diwOutput);
}

function showResult(like, dislike, output){
    if(like > dislike){
         output.innerHTML = "Event is Successful";
         output.style.backgroundColor = "#fb923c"
    }
    else if(like < dislike){
        output.innerHTML = "Not refreshing";
        output.style.backgroundColor = "#f9a8d4"
    }
    else{
        output.innerHTML = "Waiting for more feedback";
        output.style.backgroundColor = "#fb7185"
    }
}