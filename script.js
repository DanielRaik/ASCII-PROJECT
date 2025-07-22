console.log("by: raik");

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('converter-form');
  const resultadoElement = document.getElementById("resultado");
  const fontSelect = document.getElementById("font");

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    convertText();
  });

  function convertText() {
    const texto = document.getElementById('texto').value.trim();
    const fonteEscolhida = fontSelect.value;

    if (!texto) {
      resultadoElement.textContent = 'Digite algo para converter.';
      return;
    }

    try {
      const asciiArt = figlet.textSync(texto, {
        font: fonteEscolhida,
        horizontalLayout: 'default',
        verticalLayout: 'default'
      });

      resultadoElement.textContent = asciiArt;
    } catch (err) {
      console.warn(`Erro ao converter com a fonte ${fonteEscolhida}:`, err);
      resultadoElement.textContent = 'Erro ao converter. Tente outra fonte ou verifique se foi carregada corretamente.';
    }
  }
  const btnCopiar = document.getElementById('btn-copiar');

btnCopiar.addEventListener('click', () => {
  const asciiTexto = resultadoElement.textContent;
  
  if (!asciiTexto.trim()) {
    alert('Não há nada para copiar!');
    return;
  }

  navigator.clipboard.writeText(asciiTexto)
    .then(() => {
      btnCopiar.textContent = 'Copiado!';
      setTimeout(() => {
        btnCopiar.textContent = 'Copiar';
      }, 2000);
    })
    .catch(err => {
      console.error('Erro ao copiar:', err);
      alert('Falha ao copiar. Tente novamente.');
    });
});
});
