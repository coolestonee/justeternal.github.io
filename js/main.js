let li = document.querySelectorAll("li");
let navbarBtn = document.querySelector("#navbarBtn");
let navbar = document.querySelector("#navbar");
let hide = document.querySelector("#hide");

let days = document.querySelector("#days");
let hrs = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let secs = document.querySelector("#secs");

li.forEach(items =>{
    items.addEventListener("click" , ()=>{
        //first remove all "active" classes and then add new active class
        li.forEach(remove =>{
            remove.classList.remove("active");
        });       
        // add "active" class
        items.classList.add("active");
    });
});

// when navbar "open" button clicked
navbarBtn.addEventListener("click" , ()=>{
    navbar.style.display = "grid";
});

// when navbar "hide" button clicked
hide.addEventListener("click" , ()=>{
    navbar.style.display = "none";
});

// countdown timers start
// Set the date we're counting down to
let countdown = new Date("march 31, 2022 10:30:00").getTime();

// update time every 1 second
let interval = setInterval(()=>{

// get today date and time
let now = new Date().getTime();

// find the distance
let distance = countdown - now;

// time calculation for days, hours minutes and seconds 
// mili seconds in 1 second = 1000;
// seconds in 1 minute = 60
// minutes in 1 hour = 60
// hours in 1 day = 24
let day = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
let seconds = Math.floor(distance % (1000 * 60) / 1000);


days.innerHTML = day + "<b>d</b>";
hrs.innerHTML = hours + "<b>h</b>";
mins.innerHTML = minutes + "<b>m</b>";
secs.innerHTML = seconds + "<b>s</b>";

// if countdown is over OR equal to 0 so
if(distance < 0){
    clearInterval(interval);
    // change text
}
},1000);