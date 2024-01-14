//JS
const opcionesEl = document.getElementById('opciones')
const areatexto = document.getElementById('areatexto')

areatexto.focus()

areatexto.addEventListener('keyup', (e) => {
  crearOpciones(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)

    randomSelect()
  }
})

function crearOpciones (input) {
  const opciones = input.split(',')
  .filter(opcion => opcion.trim() !== '')
  .map(opcion => opcion.trim())

  opcionesEl.innerHTML = ''

  opciones.forEach(opcion => {
    const opcionEl = document.createElement('span')
    opcionEl.classList.add('opcion')
    opcionEl.innerText = opcion
    opcionesEl.appendChild(opcionEl)
    
  });
}

function randomSelect() {
  const veces = 25
  const velocidadms= 150
  const interval = setInterval (() => {
    const opcionAleatoria = eligeOpcionAleatoria()

    addHighlightOpcion(opcionAleatoria)

    setTimeout(()=> {
      removeHighlightOpcion(opcionAleatoria)
    }, velocidadms)
  }, velocidadms);

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(()=> {
      const opcionAleatoria = eligeOpcionAleatoria()

      addHighlightOpcion(opcionAleatoria)
    }, velocidadms)
  }, veces * velocidadms)

}

function eligeOpcionAleatoria() {
  const opciones = document.querySelectorAll('.opcion')
  return opciones[Math.floor(Math.random() * opciones.length)]
}

function addHighlightOpcion(opcion) {
  opcion.classList.add('highlight')
}

function removeHighlightOpcion(opcion) {
  opcion.classList.remove('highlight')
}