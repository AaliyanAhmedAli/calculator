let result = document.getElementById('result');

function append(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function operate(operator) {
  if (result.value !== '') {
    result.value += operator;
  }
}

function calculate() {
  if (result.value !== '') {
    result.value = eval(result.value);
  }
}
