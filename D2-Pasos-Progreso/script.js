const progreso = document.getElementById('progreso')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circulos = document.querySelectorAll('.circulo')

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++
  
  if(currentActive>circulos.length) {
    currentActive = circulos.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--
  
  if(currentActive<1) {
    currentActive = 1
  }
  update()
})

function update() {
  //actualización estado circulos
  circulos.forEach((circulo, idx) => {
    if(idx < currentActive) {
      circulo.classList.add('active')
    } else {
      circulo.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
 //Barra progreso actualizacion
  progreso.style.width = ((actives.length -1) / (circulos.length -1)) * 100 + '%'

  //Control estado botones
  if (currentActive == 1) {
    prev.disabled = true
  } else if(currentActive === circulos.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }

}