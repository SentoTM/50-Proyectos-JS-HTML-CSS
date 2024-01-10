const apiUrl = "https://boardgamegeek.com/xmlapi/collection/SentoTM?own=1&subtype=boardgame&excludesubtype=boardgameexpansion"
const bgame = document.getElementById('bgame')
const juegoBtn = document.getElementById('juegoBtn')

juegoBtn.addEventListener('click', generateGame)
generateGame()

function generateGame() {
  fetch(apiUrl)
  .then( res => res.text())
  .then(data => { 
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(data, 'text/xml')

    const iNodes = xmlDoc.querySelectorAll('item')
  
    if (iNodes.length > 0) {
      const randomIndex = Math.floor(Math.random() * iNodes.length)
      const randomJuego = iNodes[randomIndex]

      const name = randomJuego.querySelector('name').textContent
      const imageUrl = randomJuego.querySelector('image').textContent
      const year = randomJuego.querySelector('yearpublished').textContent
      const average = randomJuego.querySelector('average').getAttribute('value')
      console.log(name, year, average)

      generateHTML(name, imageUrl, year, average)
    } else {
      console.log('No hay datos')
    }
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  }) 
}

function generateHTML(name, imageUrl, year, average) {

  bgame.innerHTML= 
  `<img id="game-image" class="game-image" src="${imageUrl}" alt="Imagen del juego">
  
  <div id="game-info class="game-info">
    <h3>${name}</h3>
    <p>Año de Publicación: ${year}</p> 
    <p> Nota: ${average}</p>
  </div>
  `;

}



