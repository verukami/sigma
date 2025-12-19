const pieces = document.querySelectorAll('.piece');

window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  pieces.forEach((piece, i) => {
    piece.style.transform = `translate(${x * (i + 1)}px, ${y * (i + 1)}px)`;
  });
});
