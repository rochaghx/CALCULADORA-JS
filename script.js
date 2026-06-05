function calcular(operacao) {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let resultado = 0;

  if (operacao === "+") {
    resultado = numero1 + numero2;
  } else if (operacao === "-") {
    resultado = numero1 - numero2;
  } else if (operacao === "*") {
    resultado = numero1 * numero2;
  } else if (operacao === "/") {
    if (numero2 === 0) {
      resultado = "Não é possível dividir por zero";
    } else {
      resultado = numero1 / numero2;
    }
  }

  document.getElementById("resultado").textContent = resultado;
}