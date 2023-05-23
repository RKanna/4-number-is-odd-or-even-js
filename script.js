function funOddEven() {
  var getValue = parseInt(document.getElementById(`inputValue`).value);
  var resultValue = document.getElementById(`result`);

  if (getValue % 2 === 0) {
    resultValue.textContent = getValue + ` ` + `Number is Even`;
  } else {
    resultValue.textContent = getValue + ` ` + `Number is Odd`;
  }
}
