function adicionar(valor) {
  document.getElementById("display").value += valor;
}

function limpar() {
  document.getElementById("display").value = "";
}

function apagar() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calcular() {
  let conta = document.getElementById("display").value;

  if (conta === "") {
    return;
  }

  try {
    let resultado = eval(conta);
    document.getElementById("display").value = resultado;
  } catch {
    document.getElementById("display").value = "Erro";
  }
}