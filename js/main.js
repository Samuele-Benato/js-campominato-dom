const button = document.getElementById("pulsante");
const grid = document.getElementById("griglia");
const difficult = document.getElementById("difficolta");

button.addEventListener("click", function () {
  const difficultSelected = parseInt(difficult.value);
  let colonne;

  if (difficultSelected == "100") {
    colonne = 10 * 10;
  }
  if (difficultSelected == "81") {
    colonne = 9 * 9;
  }
  if (difficultSelected == "49") {
    colonne = 7 * 7;
  }

  generaGriglia(colonne, difficultSelected);

  return colonne, difficultSelected;
});

function generaGriglia(colonne, difficultSelected) {
  grid.innerHTML = "";
  for (let i = 1; i <= colonne; i++) {
    const cell = generaCella(i, difficultSelected);
    grid.append(cell);
  }
}

function generaCella(i, difficultSelected) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  if (difficultSelected == "100") {
    cell.classList.add("difficult_easy");
    generaNumeroRandom(1, 100);
  }
  if (difficultSelected == "81") {
    cell.classList.add("difficult_medium");
    generaNumeroRandom(1, 81);
  }
  if (difficultSelected == "49") {
    cell.classList.add("difficult_hard");
    generaNumeroRandom(1, 49);
  }

  cell.innerText = i;

  cell.addEventListener("click", function () {
    this.classList.add("azure");
    console.log(i);
  });
  return cell;
}

const generaNumeroRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
