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
    if(Checked == answer){
        resElem.textContent = "Відповідь правильна";
        bool = true;
    }
    else{
        resElem.textContent = "Помилка, правильна відповідь " + answer;
    }
    return bool;
    for(i = 0; i<radioElem.length; i++){
        radioElem[i].disabled = true;
    }
}

function answersGenerator(answer) {
    var correct = randomInteger(1,radioElem.length);
    for (var i = 0; i < radioElem.length; i++){
        if (i==correct-1){
            radioElem[i].value = answer;
        }
        else{
            radioElem[i].value = randomInteger(1,20);
        }
        console.log(radioElem[i].value);
    }
    console.log("***********");
    for (i = 0; i<radioElem.length; i++){
        for(j=i+1; j<radioElem.length;j++){
            if(radioElem[i].value == radioElem[j].value){
                radioElem[j].value = 0;
            }
        }
        answElem[i].textContent = radioElem[i].value;
    }
    for (i = 0; i<radioElem.length; i++){
        console.log(radioElem[i].value);
    }
    console.log("correct"+correct);
}

function getCheckedValue() {
    for (i = 0; i < radioElem.length; i++){
        if(radioElem[i].checked){
            return radioElem[i].value;
        }
    }
}

var answElem = document.querySelectorAll(".textAnsw");
var resElem = document.querySelector("#res");
var scoreElem = document.querySelector("#score");
var taskElem = document.querySelector("#task");
var checkButton = document.querySelector("#check");
var nextButton = document.querySelector("#next");
var radioElem = document.querySelectorAll(".radio");


var Answer = taskGenerator();
var Checked;
answersGenerator(Answer);
var bool = false;
var n = 0;
var amount = 10;
var current = 1;

for (i=0;i<radioElem.length;i++) {
    radioElem[i].onclick = function () {
        Checked = getCheckedValue();
        checkAnswer(Answer);
    }
}


nextButton.onclick = function () {
    current++;
    Answer = taskGenerator();
    answersGenerator(Answer);
    resElem.textContent = "";
    for(i = 0; i<radioElem.length; i++){
        radioElem[i].checked = false;
        radioElem[i].disabled = false;
    }
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


