let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screenValue = document.querySelector(".calc-screen div");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screenValue.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "+":
    case "-":
    case "&divide;":
    case "&times;":
      handleMath(symbol);
      break;
  }
}
function flushOperator(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "&times;") {
    runningTotal *= intBuffer;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    //do nothing
    return;
  }

  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperator(intBuffer);
  }

  previousOperator = symbol;
  buffer = "0";
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document.querySelector(".calc-buttons").addEventListener("click", e => {
    buttonClick(e.target.innerText);
  });
}

init();
