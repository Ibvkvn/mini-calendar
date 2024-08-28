const day = document.getElementById("day-name");
const date = document.getElementById("day-number");
const year = document.getElementById("year");
const month = document.getElementById("month-name");
const realTime = new Date();

day.innerHTML = realTime.toLocaleString("en", {
    weekday: "long"
});
date.innerHTML = realTime.getDate();
year.innerHTML = realTime.getFullYear();
month.innerHTML = realTime.toLocaleString("en", {
    month: "long"
});