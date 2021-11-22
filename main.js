// Knappar till att ändra bakgrundsfärg och text. 
let darkMode = document.querySelector("#colorMode");

darkMode.addEventListener("click", () => {
  let body = document.body;
  if (body.style.background === "black") {
    body.style.background = "white";
    body.style.color = "black";
    darkMode.textContent = "Dark mode";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    darkMode.textContent = "Light Mode";
  }
});

// knapp för resultat
let buttonResult = document.querySelector("#results");

// ränkar ihop poängen
let ammoutOfPoints = 0;

buttonResult.addEventListener("click", () => {
  if (document.getElementById("questions1.2").checked) {
    ammoutOfPoints++;
  }
  if (document.getElementById("questions2.1").checked) {
    ammoutOfPoints++;
  }
  if (document.getElementById("questions3.1").checked) {
    ammoutOfPoints++;
  }
  if (document.getElementById("questions4.2").checked) {
    ammoutOfPoints++;
  }
  if (document.getElementById("questions5.3").checked) {
    ammoutOfPoints++;
  }
  if (document.getElementById("questions6.2").checked) {
    ammoutOfPoints++;
  }
  if (
    document.getElementById("questions7.1").checked &&
    document.getElementById("questions7.2").checked &&
    document.getElementById("questions7.3").checked
  ) {
  } else if (
    document.getElementById("questions7.1").checked &&
    document.getElementById("questions7.2").checked &&
    document.getElementById("questions7.4").checked
  ) {
  } else if (
    document.getElementById("questions7.1").checked &&
    document.getElementById("questions7.2").checked
  ) {
    ammoutOfPoints++;
  }
  // Färgar resultatet efter antal rätt
  if (ammoutOfPoints === 7) {
    message.style.color = "green";
  } else if (ammoutOfPoints >= 4) {
    message.style.color = "orange";
  } else if (ammoutOfPoints < 4) {
    message.style.color = "red";
  }

  console.log(ammoutOfPoints);
  message.innerHTML = `<h3>You have scored ${ammoutOfPoints} points!</h3>`;
});

