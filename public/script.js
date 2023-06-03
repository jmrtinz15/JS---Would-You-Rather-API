//In order for website to get API data -> need to write another get request to get data from local server
console.log('script.js loaded');

document.querySelector('#btnload').addEventListener('click', () => {
    getquestion();

})

document.querySelector('#option1').addEventListener('click', function() {
    setquestion1();
  });

document.querySelector('#option2').addEventListener('click', function() {
    setquestion2();
});
  

async function getquestion(){
    const response = await fetch('/question'); //response from route
    const data = await response.json(); //Get API data
    let question = data[0].question; //Would you rather question
    data_split = question.split(' or '); // Should return [first question, second question]
    let option1 = data_split[0];
    let option2 = data_split[1];
    console.log(option1);
    console.log(option2);
    document.querySelector('#option1').textContent = option1; //Returns text content of an element 
    document.querySelector('#option2').textContent = option2; //Returns text content of an element 

}

function setquestion1(){
    let resultElement = document.querySelector('#result');
    resultElement.textContent = 'You chose option 1!';
}

function setquestion2(){
    let resultElement = document.querySelector('#result');
    resultElement.textContent = 'You chose option 2!';
}
