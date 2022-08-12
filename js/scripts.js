// User Interface Logic
function hideResults(onsubmit) {
  document.getElementById("javaScript").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
}

// Business Logic
window.onload = function() {
  hideResults();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const holdBreath = parseInt(document.querySelector("input#holdBreath").value);
    const favColor = document.querySelector("input[name='favColor']:checked").value;
    const morningOrNight = document.querySelector("input[name='morningOrNight']:checked").value;
    const movieGenre = document.querySelector("input[name='movieGenre']:checked").value;
    const favSeason = document.querySelector("input[name='season']:checked").value;

      if (holdBreath >= 40 || favColor === "warmColor" || favSeason === "winter" || movieGenre === "drama") {
        document.getElementById("c#").removeAttribute("class");
      } else if (holdBreath < 40 || movieGenre === "comedy" || favColor === "coolColor" || favSeason === "summer") {
        document.getElementById("ruby").removeAttribute("class");
      } else if (favSeason === "fall" || movieGenre === "horrorThriller" || favSeason === "spring" || favColor === "altColor") {
        document.getElementById("javaScript").removeAttribute("class");
      }
  }
};