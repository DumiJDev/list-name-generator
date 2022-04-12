const nomes = document.getElementById("nomes");
const sobrenomes = document.getElementById("sobrenomes");
const resultado = document.getElementById("nomes-gerados");
let num = 1;
const geraTabela = (dados) =>
  "<h2 style='color: blue'>Nomes</h2><table border><thead><th>Nome Completo</th></thead>" +
  dados.map((nome) => `<tr><td>${num++} - ${nome}</td></tr>`) +
  "</table>";

document.getElementById("bt").addEventListener("click", () => {
  const dados = [];
  for (const nome of nomes.value.split(";"))
    for (const sobrenome of sobrenomes.value.split(";"))
      dados.push(`${nome} ${sobrenome}`);
  num = 1;
  resultado.innerHTML = geraTabela(dados).replace("[,;]", "");
});
