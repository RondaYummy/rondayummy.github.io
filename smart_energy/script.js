function onSubmit() {
  event.preventDefault();
  let inputNumbers = document.forms[0];
  let NumDevices = inputNumbers.inputNum.value;
  let NumP = inputNumbers.inputP.value;
  let Numt = inputNumbers.inputt.value;
  let NumT = inputNumbers.inputT.value;
  let allDevices = NumDevices * NumP;
  let result = allDevices * Numt * NumT;
  let inputResult = (document.getElementById("inputResult").value = `${result} кВт`);
  inputResult = result;
}
function onSubmitTranslate() {
  event.preventDefault();
  let translateNum = document.forms[1];
  let Bt = translateNum.Bt.value;
  let result = Bt / 1000;
  let inputResults = document.getElementById("resultTranslate")
  inputResults.value = `${Bt} Вт = ${result} кВт`;
}
