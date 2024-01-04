const sounds = ['clap', 'crash', 'hithat', 'kick', 'openhat', 'ride', 'rimshot', 'snap', 'snare']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {

    stopPlaying()

    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

function stopPlaying() {
  sounds.forEach(sound => {
    const playing = document.getElementById(sound)

    playing.pause()
    playing.currentTime = 0;
  })
}