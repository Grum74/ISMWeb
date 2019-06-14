function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function taskGenerator() {
    var a = randomInteger(1, 10);
    var b = randomInteger(1, 10);
    var answ = a + b;
    taskElem.textContent = a + " + " + b + " = ";
    return answ;
}

function checkAnswer (answer) {
    var bool = false;
    if(answElem.value == answer){
        resElem.textContent = "Відповідь правильна";
        bool = true;
    }
    else{
        resElem.textContent = "Помилка, правильна відповідь " + answer;
    }
    return bool;
}

var answElem = document.querySelector("#answ");
var resElem = document.querySelector("#res");
var scoreElem = document.querySelector("#score");
var taskElem = document.querySelector("#task");
var checkButton = document.querySelector("#check");
var nextButton = document.querySelector("#next");

var Answer = taskGenerator();
var bool = false;
var n = 0;
var amount = 10;
var current = 1;

checkButton.onclick = function(){
    bool = checkAnswer(Answer);
}

nextButton.onclick = function () {
    current++;
    Answer = taskGenerator();
    resElem.textContent = "";
    answElem.value = "";
    if (bool == true){
        n++;
    }
    scoreElem.textContent = "Загальний рахунок "+n/amount*100+"% (" + n + " правильних відповідей з "+amount+")";
    bool = false;
    if (current == amount){
        nextButton.textContent = "Завершити";
    }
    if (current>amount){
        nextButton.disabled = true;
        alert(scoreElem.textContent);
        taskElem.textContent = "";
        resElem.classList.add("visibility");
        answElem.classList.add("visibility");
        checkButton.classList.add("visibility");
    }
}


