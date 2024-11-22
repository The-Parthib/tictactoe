let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let win = document.querySelector(".msgcontainer");
let winMsg = document.querySelector("#msg");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let player1 = true;

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (player1) {
      box.innerText = "X";
      player1 = false;
    } else {
      box.innerText = "O";
      player1 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

function restgame() {
  player1 = true;
  enableBoxes();
  win.classList.add("hide");
}

function enableBoxes() {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

function disableBoxes() {
  for (let box of boxes) {
    box.disabled = true;
  }
}

function winnermsg(pos1) {
  winMsg.innerText = `🏆  "${pos1}"   is Winner 🏆`;
  win.classList.remove("hide");
  disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        winnermsg(pos1);
      }
    }
  }
};

reset.addEventListener("click", restgame);
