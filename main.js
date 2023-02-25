
const DaysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const yearEl = document.getElementById("year");

addSpan();


const allSpan = document.querySelectorAll(".span");

/* interval for span colour change */
setInterval(colourChange,3000);

/* Gets The current year and then 10+ years for selection */
var min = new Date().getFullYear();
    max = min + 10;
    select = document.getElementById('year-select');

for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.classList.add("small");
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}

/* Gets value for the current year and sets it as the first value */
const Cyear = new Date().getFullYear();
select.value = Cyear;

/* Gets the selected year and sets it */
function FindDate(selectYear){
    let newDate = "25 Dec " + selectYear;
   return newDate
}

/* creates the coutdown timer */
var myTimer = window.setInterval(countdown,1000);

/* time formatting */
function format(time){
    return time <10 ? (`0${time}`): time;
}



/* function that gets the input year and returns it to be declared, also resets the timer to get the new year values */
function changeFunc() {
    var selectBox = document.getElementById("year-select");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
     let christmas = FindDate(selectedValue);
     window.clearInterval(myTimer);
     window.setInterval(countdown,1000);
     return christmas
   }


/* main fucntion */
function countdown(){
    let christmas = changeFunc();
    let CDate = new Date(christmas);
    let Current = new Date();
    


    totalSecs = (CDate -Current)/1000;


    const years = CDate.getFullYear() -Current.getFullYear();


/* if its the current year, years dosnt need to be displayed */
    if(years == 0){
        const yearLa = document.getElementById("yearLa");
        yearEl.classList.add("display-none");
        yearLa.classList.add("display-none");
    }else{
        yearEl.classList.remove("display-none");
        yearLa.classList.remove("display-none");

    }




    const days = Math.floor(totalSecs/3600/24)% 365;
    const hours = Math.floor(totalSecs/3600) % 24;
    const mins = Math.floor(totalSecs/60) % 60;
    const seconds = Math.floor(totalSecs)% 60;

/* if all values are 0 or lower, its christmas */
    if(years & days & hours & mins & seconds <= 0){
        const con = document.getElementById("con");
        const h1 = document.getElementById("h1");

        con.classList.add("display-none");
        h1.innerHTML = "ITS CHRISTMAS!"

        if(hours == -24){
            /* if a whole day passes the year will change to begin next years countdown */
            con.classList.remove("display-none");
            h1.innerHTML = "Christmas Countdown"
            let Ndate = new Date().getFullYear();
            christmas = "25 Dec " + (Ndate + 1);

        }

    }

yearEl.innerHTML= years
DaysEl.innerHTML =days
hoursEl.innerHTML =format(hours);
minEl.innerHTML= format(mins);
secEl.innerHTML= format(seconds);



}

/* Adds all the spans to the page to then be styled, this creates the backround */
function addSpan(){
    for(let i =0; i<600; i++){
        let span = this.document.createElement("SPAN");
        let sec = this.document.querySelector(".main");
        span.classList.add("span");
        sec.appendChild(span);
    }}

    function colourChange(){
    

        allSpan.forEach(element => {
            /* change colours here, make sure the X is divided by the correct number for the array */
            let x = Math.floor(Math.random()*3);
            let colour = ["red","green","white"];
        
            element.style.background=colour[x];
        
        
            
        });
        }

