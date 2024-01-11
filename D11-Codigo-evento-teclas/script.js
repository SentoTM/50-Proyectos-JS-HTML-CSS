const insert = document.getElementById('inserto')


window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="tecla">
  ${event.key === ' ' ? 'Space' : event.key}
  <small>event.key</small>
</div>

<div class="tecla">
${event.keyCode}
  <small>event.keyCode</small>
  <small class="subtext">(deprecated)</small>
</div>

<div class="tecla">
${event.code}
  <small>event.code</small>
</div>
  `
})