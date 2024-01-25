let calendar = document.querySelector(".calendar");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let dayscontainer = document.querySelector(".days")
let date = document.querySelector(".date")

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();



function initcalendar(){
    let firstDay = new Date(year,month,1);
    let lastDay = new Date(year,month+1,0);
    let prevlastday = new Date(year,month,0);
    let day = firstDay.getDate();
    let lastdate = lastDay.getDate();
    let prevdays =prevlastday.getDate();
   
}
initcalendar();