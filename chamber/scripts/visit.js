const countVisits = document.querySelector('#visitCount');
let lastVisitDate = localStorage.getItem("lastVisitDate");

const currentDate = new Date();

if (lastVisitDate === null) {
  countVisits.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const timeDifference = currentDate - new Date(lastVisitDate);
  const daysBetweenVisits = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysBetweenVisits < 1) {
    countVisits.textContent = "Back so soon! Awesome!";
  } else {
    const daysText = daysBetweenVisits === 1 ? "day" : "days";
    countVisits.textContent = `You last visited ${daysBetweenVisits} ${daysText} ago.`;
  }
}
localStorage.setItem("lastVisitDate", currentDate);
