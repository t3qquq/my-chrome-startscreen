const greeting = document.querySelector('.greeting');
const greetingAsk = greeting.querySelector('form');
const greetingInput = greetingAsk.querySelector('input');
const greetingGreeting = greeting.querySelector('h2');

function greetName(text){
    greetingGreeting.classList.remove('no-show');
    greetingGreeting.classList.add('show');
    greetingGreeting.innerText = `${text}님, 환영합니다.`
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = greetingInput.value;
    localStorage.setItem('currentUser', currentValue)
    greetingAsk.classList.remove('show');
    greetingAsk.classList.add('no-show');
    greetName(currentValue);
}

function askName(){
    greetingAsk.classList.remove('no-show');
    greetingAsk.classList.add('show');
    greetingAsk.addEventListener('submit', handleSubmit);
}

function init(){
    const username = localStorage.getItem('currentUser');
    if(username === null){
        askName();
    }
    else{
        greetName(username);
    }
}

init();