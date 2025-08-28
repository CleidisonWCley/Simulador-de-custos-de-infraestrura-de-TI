function calcular() {
  const servidores = parseInt(document.getElementById("servidores").value);
  const custoKwh = parseFloat(document.getElementById("custoKwh").value);
  const consumo = parseFloat(document.getElementById("consumo").value);
  let limite = parseFloat(document.getElementById("limite").value);

  if (isNaN(servidores) || isNaN(custoKwh) || isNaN(consumo)) {
    document.getElementById("resultado").innerHTML = "⚠️ Preencha todos os campos corretamente!";
    return;
  }

  // Se o usuário não definir limite, assume 2000
  if (isNaN(limite)) {
    limite = 2000;
  }

  // Cálculos
  const consumoTotal = servidores * consumo;
  const custoMensal = consumoTotal * custoKwh;
  const co2 = consumoTotal * 0.084; // 0,084 kg CO₂ por kWh (média Brasil)

  // Resultado básico
  let resultadoHTML =
    `🔹 Consumo Total: <b>${consumoTotal} kWh</b><br>
     💰 Custo Mensal: <b>R$ ${custoMensal.toFixed(2)}</b><br>
     🌱 Emissão estimada: <b>${co2.toFixed(2)} kg de CO₂</b>`;

  // Condição de consumo alto
  if (consumoTotal > limite) {
    resultadoHTML +=
      `<br><br>⚠️ <span style="color:#d32f2f; font-weight:bold;">Consumo elevado detectado!</span><br>
       💡 Dicas de redução:<br>
       • Virtualize servidores sempre que possível.<br>
       • Utilize refrigeração eficiente no data center.<br>
       • Prefira equipamentos com selo de eficiência energética.<br>
       • Monitore e desligue máquinas ociosas.`;
  }

  document.getElementById("resultado").innerHTML = resultadoHTML;
}

// mensagem de aviso + dicas de consumo sustentavel
if (consumoTotal > limite) {
  resultadoHTML +=
    `<div class="alerta">
       ⚠️ <b>Consumo elevado detectado!</b><br>
       💡 Dicas de redução:<br>
       • Virtualize servidores sempre que possível.<br>
       • Utilize refrigeração eficiente no data center.<br>
       • Prefira equipamentos com selo de eficiência energética.<br>
       • Monitore e desligue máquinas ociosas.
     </div>`;
}