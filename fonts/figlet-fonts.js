window.addEventListener('DOMContentLoaded', () => {
  const fontPaths = {
    'Standard': './fonts/Standard.flf',
    'Ghost': './fonts/Ghost.flf',
    '3D-ASCII': './fonts/3D-ASCII.flf',
    'Slant': './fonts/Slant.flf'
  };

  Object.entries(fontPaths).forEach(([name, path]) => {
    fetch(path)
      .then(res => res.text())
      .then(data => {
        figlet.loadFont(name, data);
        console.log(`Fonte ${name} carregada!`);
      })
      .catch(err => console.error(`Erro ao carregar fonte ${name}:`, err));
  });
});
