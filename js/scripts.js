// User Interface Logic

function hideResults() {
  document.getElementById("javaScript").setAttribute("class", "hidden"); //swings
  document.getElementById("ruby").setAttribute("class", "hidden"); //coaster
  document.getElementById("c#").setAttribute("class", "hidden"); //tower
}

function handleRadio(event) {
  event.preventDefault();
  const favColor = document.querySelector("input[name='favColor']:checked").value;
  const morningOrNight = document.querySelector("input[name='morningOrNight']:checked").value;
  const movieGenre = document.querySelector("input[name='movieGenre']:checked").value;
  const fav = document.querySelector("input[name='season']:checked").value;
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