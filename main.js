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
  // Fråga 1
  if (document.getElementById("questions1.2").checked) {
    ammoutOfPoints++;
  } else {
    let answer1 = document.querySelector("#Fråga1");
    let text1 = document.createElement("p");
    text1.textContent = "Rätt svar är Falskt"
    answer1.appendChild(text1);
    text1.style.color = "red";
  }
  // fråga 2
  if (document.getElementById("questions2.1").checked) {
    ammoutOfPoints++;
  } else {
    let answer2 = document.querySelector("#Fråga2");
    let text2 = document.createElement("p");
    text2.textContent = "Rätt svar är Sant"
    answer2.appendChild(text2);
    text2.style.color = "red";
  }
  //fråga 3
  if (document.getElementById("questions3.1").checked) {
    ammoutOfPoints++;
  }
  else {
    let answer3 = document.querySelector("#Fråga3");
    let text3 = document.createElement("p");
    text3.textContent = "Rätt svar är Sant"
    answer3.appendChild(text3);
    text3.style.color = "red";
  }
  // fråga 4
  if (document.getElementById("questions4.2").checked) {
    ammoutOfPoints++;
  }
  else {
    let answer4 = document.querySelector("#Fråga4");
    let text4 = document.createElement("p");
    text4.textContent = "Rätt svar är 9"
    answer4.appendChild(text4);
    text4.style.color = "red";
  }
  // fråga 5
  if (document.getElementById("questions5.3").checked) {
    ammoutOfPoints++;
  }
  else {
    let answer5 = document.querySelector("#Fråga5");
    let text5 = document.createElement("p");
    text5.textContent = "Rätt svar är 99"
    answer5.appendChild(text5);
    text5.style.color = "red";
  }
  // fråga 6
  if (document.getElementById("questions6.2").checked) {
    ammoutOfPoints++;
  }
  else {
    let answer6 = document.querySelector("#Fråga6");
    let text6 = document.createElement("p");
    text6.textContent = "Rätt svar är 64"
    answer6.appendChild(text6);
    text6.style.color = "red";
  }
  // fråga 7
  if (
    document.getElementById("questions7.1").checked &&
    document.getElementById("questions7.2").checked &&
    document.getElementById("questions7.3").checked
  ) {let answer7 = document.querySelector("#Fråga7");
  let text7 = document.createElement("p");
  text7.textContent = "Rätt svar är Blixtlås och Pacemaker"
  answer7.appendChild(text7);
  text7.style.color = "red";
  } else if (
    document.getElementById("questions7.1").checked &&
    document.getElementById("questions7.2").checked &&
    document.getElementById("questions7.4").checked
  ) {let answer7 = document.querySelector("#Fråga7");
  let text7 = document.createElement("p");
  text7.textContent = "Rätt svar är Blixtlås och Pacemaker"
  answer7.appendChild(text7);
  text7.style.color = "red";
  } else if (
    document.getElementById("questions7.1").checked &&
    document.getElementById("questions7.2").checked
  ) {
    ammoutOfPoints++;
  } else {
    let answer7 = document.querySelector("#Fråga7");
    let text7 = document.createElement("p");
    text7.textContent = "Rätt svar är Blixtlås och Pacemaker"
    answer7.appendChild(text7);
    text7.style.color = "red";
  }
  // Färgar resultatet efter antal rätt
  if (ammoutOfPoints === 7) {
    message.style.color = "green";
  } else if (ammoutOfPoints >= 4) {
    message.style.color = "orange";
  } else if (ammoutOfPoints < 4) {
    message.style.color = "red";
  }

  document.getElementById("results").disabled = true;
  message.innerHTML = `<h3>You have scored ${ammoutOfPoints} points!</h3>`;
});

