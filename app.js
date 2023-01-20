var translateBtn = document.querySelector("#btn-translate");
var userTextElement = document.querySelector("#txt-user");
var txtOutput = document.querySelector("#txt-translated-output");

var url = "https://api.funtranslations.com/translate/ferb-latin.json";

function urlGenerator(text){
    return url+"?text="+text;
}

function onClick(){
    var userInput = userTextElement.value;
    fetch(urlGenerator(userInput)).then(response=> response.json()).then(json=>txtOutput.innerText=json.contents.translated);

}
//console.log(translateBtn);
translateBtn.addEventListener("click",onClick);  