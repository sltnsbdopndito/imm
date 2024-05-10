document.addEventListener("DOMContentLoaded", function () {
    const dropdownIcon = document.getElementById("dropdownIcon");
    const dropdownContent = document.getElementById("dropdownContent");

    dropdownIcon.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function (event) {
        if (!event.target.matches("#dropdownIcon")) {
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let calendarHTML = `<div class="calendar-header">${getMonthName(
        currentMonth
    )} ${currentYear}</div>`;
    calendarHTML += "<table class='calendar-table'><tr>";

    for (let i = 1; i <= daysInMonth; i++) {
        if (i % 7 === 1 && i !== 1) {
            calendarHTML += "</tr><tr>";
        }
        calendarHTML += `<td>${i}</td>`;
    }
    calendarHTML += "</tr></table>";

    calendar.innerHTML = calendarHTML;
});

function getMonthName(monthIndex) {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return monthNames[monthIndex];
}

// Mencari elemen dengan kelas "calendar-day" yang sesuai dengan tanggal saat ini dan memberi latar belakang warna abu-abu
document
    .querySelector(".calendar-day:nth-child(" + currentDay + ")")
    .classList.add("current-day");

// Mendapatkan tanggal saat ini
var currentDate = new Date();
var currentDay = currentDate.getDate();
