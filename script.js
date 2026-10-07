const startDate = new Date("2026-10-01");

const today = new Date();

const diffTime = today - startDate;

const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("days").innerHTML = days;
