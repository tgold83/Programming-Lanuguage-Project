// User Interface Logic

function hideResults() {
  document.getElementById("javaScript").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
}

function handleRadio(event) {
  event.preventDefault();
}

window.addEventListener("load", function() {
  document.getElementById("userInfo").addEventListener("submit", handleRadio);
});

window.onload = function() {
  hideResults();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const holdBreath = parseInt(document.querySelector("input#holdBreath").value);
    const favColor = document.querySelector("input[name='favColor']:checked").value;
    const morningOrNight = document.querySelector("input[name='morningOrNight']:checked").value;
    const movieGenre = document.querySelector("input[name='movieGenre']:checked").value;
    const fav = document.querySelector("input[name='season']:checked").value;

      if (holdBreath >= 20 || favColor === "warmColor") {
        document.getElementById("c#").removeAttribute("class");
      } else if (holdBreath < 20) {
        document.getElementById("ruby").removeAttribute("class");
      } else if (favSeason === "fall") {
        document.getElementById("javaScript").removeAttribute("class");
      }
  }
};