// User Interface Logic

function hideResults() {
  document.getElementById("swings").setAttribute("class", "hidden");
  document.getElementById("coaster").setAttribute("class", "hidden");
  document.getElementById("tower").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResults();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const favColor = parseInt(document.querySelector("input#favColor").value);
    const holdBreath = parseInt(document.querySelector("input#holdBreath").value);
    const morningOrNight = parseInt(document.querySelector("input#morningOrNight").value);
    const movieGenre = parseInt(document.querySelector("input#movie").value);
    const favSeason = parseInt(document.querySelector("input#season").value);

    // if (age && height) {
    //   if (age >= 12 && height >= 60) {
    //     document.getElementById("swings").removeAttribute("class");
    //     document.getElementById("coaster").removeAttribute("class");
    //     document.getElementById("tower").removeAttribute("class");
    //   } else if (age >= 12 || height >= 48) {
    //     document.getElementById("swings").removeAttribute("class");
    //     document.getElementById("coaster").removeAttribute("class");
    //   } else if (age >= 6) {
    //     document.getElementById("swings").removeAttribute("class");
    //   } else {
    //     document.getElementById("sorry").removeAttribute("class");
    //   }
    // } else {
    //   document.getElementById("error-message").removeAttribute("class");
    // }
  };
};