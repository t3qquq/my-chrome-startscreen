const clockContainer = document.querySelector('.clock-box');
const clockinfo = clockContainer.querySelector('.time-info')
const AMPM = clockinfo.querySelector('h2')
const clocktime = clockinfo.querySelector('h1') 
const dateInfo = clockContainer.querySelector('.date-info')

function getTime(){
    const time = new Date();
    const minutes = time.getMinutes();
    const hours = time.getHours();
    const seconds = time.getSeconds();

    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const year = time.getFullYear();

    if(hours===12){
        clocktime.innerText= `12 : ${minutes<10 ? `0${minutes}`:minutes} : ${seconds<10? `0${seconds}`:seconds}`
    }
    else if(hours===24){
        clocktime.innerText= `0 : ${minutes<10 ? `0${minutes}`:minutes} : ${seconds<10? `0${seconds}`:seconds}`
    }else{
        clocktime.innerText= `${hours<12?hours:hours-12} : ${minutes<10 ? `0${minutes}`:minutes} : ${seconds<10? `0${seconds}`:seconds}`
    }

    if(hours<12 || hours===24)
    AMPM.innerText = "오전";
    else
    AMPM.innerText = "오후";
    
    switch(day){
        case 0:
            dateInfo.innerText = `${month+1}월 ${date}일 일요일, ${year}`;
            break;
        case 1:
            dateInfo.innerText = `${month+1}월 ${date}일 월요일, ${year}`;
            break;
        case 2:
            dateInfo.innerText = `${month+1}월 ${date}일 화요일, ${year}`;
            break;
        case 3:
            dateInfo.innerText = `${month+1}월 ${date}일 수요일, ${year}`;
            break;
        case 4:
            dateInfo.innerText = `${month+1}월 ${date}일 목요일, ${year}`;
            break;
        case 5:
            dateInfo.innerText = `${month+1}월 ${date}일 금요일, ${year}`;
            break;
        case 6:
            dateInfo.innerText = `${month+1}월 ${date}일 토요일, ${year}`;
            break;
    }
}
function init(){
    getTime();
    setInterval(getTime, 1000)
}

init();