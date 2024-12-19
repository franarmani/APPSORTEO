const textarea = document.getElementById('personas');
const botonSorteo = document.getElementById('realizarSorteo');
const ganador = document.getElementById('ganador');
const resultado = document.getElementById('resultado');

textarea.addEventListener('input', () => {
  botonSorteo.disabled = !textarea.value.trim();
});

botonSorteo.addEventListener('click', () => {
  const listaPersonas = textarea.value.trim().split('\n').map(persona => persona.trim()).filter(persona => persona.length > 0);
  
  if (listaPersonas.length === 0) {
    alert('Por favor, ingresa al menos un nombre.');
    return;
  }
  
  const ganadorAleatorio = listaPersonas[Math.floor(Math.random() * listaPersonas.length)];

  ganador.textContent = `¡Ganador/a: ${ganadorAleatorio}!`;
  resultado.classList.add('show');
  resultado.style.display = 'block'; 
});
