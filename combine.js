const textForDate = document.querySelector("#textForDate")
const textForUp = document.querySelector("#textForUp")
const textForDown = document.querySelector("#textForDown")
let count = 0
let count1 = 0
let count2 = 0

function buttonDate(){
    count ++
    if(count % 2 !==0){
        textForDate.style.display = "block"
        textForUp.style.display = "none"
        textForDown.style.display = "none"
        count1 = 0
        count2 = 0
    }
}

function buttonForUp(){
    count1 ++
    if(count1 % 2 !==0){
        textForUp.style.display = "block"
        textForDate.style.display = "none"
        textForDown.style.display = "none"
        count = 0
        count2 = 0
    }
    
}

function buttonForDown(){
    count2 ++
    if(count2 % 2 !==0){
        textForDown.style.display = "block"
        textForUp.style.display = "none"
        textForDate.style.display = "none"
        count1 = 0
        count0 = 0
    }
    
}

/////////////////////////////////////////////////////////////////////////
const clock1 = document.getElementById("clock1")
function clockDate(){
    const date = new Date()
    let hours1 = date.getHours().toString().padStart(2,0)
    let secs1 = date.getMinutes().toString().padStart(2,0)
    let mins1 = date.getSeconds().toString().padStart(2,0)

    clock1.innerHTML = `${hours1}:${secs1}:${mins1}`
}
setInterval(clockDate)

/////////////////////////////////////////////////////////////////////////
const clock2 = document.getElementById("clock2")

let timer = null
let starter = 0
let hold = 0
let currentValue = 0
let isRunning = false

function start(){
    if(!isRunning){
        starter = Date.now() - hold
        timer = setInterval(update,10)
        isRunning = true
    }
    else if(isRunning){
        clearInterval(timer)
        hold = Date.now() - starter
        isRunning = false
    }
}
function reset(){
    clearInterval(timer)
    starter = 0
    hold = 0
    clock2.innerHTML = `00:00:00`
}

function update(){
    currentValue = Date.now()
    hold = currentValue - starter
    let hours2 = Math.floor(hold / (1000* 60 *60))
    let secs2 = Math.floor(hold / (1000* 60)%60)
    let mins2 = Math.floor(hold / (1000)%60)

    hours2 = String(hours2).padStart(2,0)
    secs2 = String(secs2).padStart(2,0)
    mins2 = String(mins2).padStart(2,0)

    clock2.innerHTML = `${hours2}:${secs2}:${mins2}`
}

/////////////////////////////////////////////////////////////
const clock3 = document.getElementById("clock3")
const hours3 = document.getElementById("clock3hours")
const mins3 = document.getElementById("clock3mins")
const secs3 = document.getElementById("clock3secs")

let total = 0
let isRunning1 = false
let timer1 = null
const takevalue = document.getElementById("takevalue")


takevalue.onclick = function(){
    const takeHours3 = hours3.value
    const takeMins3 = mins3.value
    const takeSecs3 = secs3.value
    total = (takeHours3 * 1000 * 60 *60) + (takeMins3 * 1000*60)+(takeSecs3*1000)
    clockValue(takeHours3,takeMins3,takeSecs3)
    if(isNaN(takeHours3)||isNaN(takeMins3)|| isNaN(takeSecs3)){
        clock3.innerHTML = "ERROR"
    }   
}

function start3(){
    if(!isRunning1){
        timer1 = setInterval(update1,1000)
        isRunning1 = true
    }
    else if(isRunning1){
        clearInterval(timer1)
        isRunning1 = false
    }
}
function reset3(){
    clearInterval(update1)
    total = 0
    clockValue(0,0,0)
    hours3.value = 0
    mins3.value = 0 
    secs3.value = 0
}

function update1(){
    if(total > 0){
        total -= 1000
        const finalhours = Math.floor(total / (1000*60*60))
        const finalmins = Math.floor(total / (1000*60)%60)
        const finalsecs = Math.floor(total / (1000) %60)
        clockValue(finalhours,finalmins,finalsecs)
    }
    else if(total < 0){
        clockValue(0,0,0)
    }
}

function clockValue(hours, mins,secs){
    const gio0 = String(hours).padStart(2,0)
    const phut0 = String(mins).padStart(2,0)
    const giay0 = String(secs).padStart(2,0)
    clock3.innerHTML = `${gio0}:${phut0}:${giay0}`
}