// DOM Elements
const visualization = document.getElementById("visualization");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");
const resetButton = document.getElementById("reset");
const algorithmSelect = document.getElementById("algorithm");
const speedSelect = document.getElementById("speed");

// Generate random array
let array = [],
  DEDAULT_SIZE = 50;
function generateArray(size = DEDAULT_SIZE) {
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  renderArray();
}

// Render array as bars
function renderArray() {
  visualization.innerHTML = "";
  array.forEach((value) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}%`;
    visualization.appendChild(bar);
  });
}

// Highlight bars
function highlightBars(indices) {
  const bars = document.querySelectorAll(".bar");
  indices.forEach((index) => {
    bars[index].classList.add("highlight");
  });
}

/***************** One Round *****************/
const worker = new Worker("worker.js");

let interval = null, i = 0, steps = [];

function startSorting() {
  const algorithm = algorithmSelect.value;

  worker.postMessage({ array, algorithm });
  worker.onmessage = function (event) {
    const _steps = event.data;
    steps = _steps;
    visualizeSorting(steps);
  };
}

function visualizeSorting(steps) {
  const speed = speedSelect.value;
  interval = setInterval(() => {
    if (i >= steps.length) {
      clearInterval(interval);
      return;
    }
    const {
      step: curArray,
      index: curIndex
    } = steps[i];
    array = curArray;
    renderArray();
    highlightBars([curIndex, curIndex + 1]);
    i++;
  }, speed);
}
/*******************************************/

// Event Listeners
resetButton.addEventListener("click", () => {
  interval && clearInterval(interval);
  i = 0;
  steps = [];
  generateArray();
});
startButton.addEventListener("click", () => startSorting());
pauseButton.addEventListener("click", () => {
  interval && clearInterval(interval);
})
resumeButton.addEventListener("click", () => {
  visualizeSorting(steps);
})


// Initial Array
generateArray();
