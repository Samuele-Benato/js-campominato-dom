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
  }
  if (difficultSelected == "81") {
    cell.classList.add("difficult_medium");
  }
  if (difficultSelected == "49") {
    cell.classList.add("difficult_hard");
  }

  cell.innerText = i;

  cell.addEventListener("click", function () {
    this.classList.add("azure_cells");
    console.log(i);
  });
  return cell;
}

// const generaNumeroRandom = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generaBombe(max) {
  let bombe = [];
  while (bombe.length < 16) {
    let bomba = generaNumeroRandom(1, max);
    if (!bombe.includes(bomba)) bombe.push(bomba);
  }
  return bombe;
}
