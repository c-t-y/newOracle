// for (let i = 0; i < lines; i++) {
//   console.log(i + 1);
//   document.querySelector(`#line-${i + 1}`).style.opacity = 1;
// }

let counter = 0;

document.addEventListener('click', () => {
  counter = counter + 1;
  console.log(counter);
  if (counter === 1) {
    playAudio('./assets/SNAKE_NOISE_PROCESSED.mp3');
  }
  if (counter === 20) {
    function OpenWin() {
      window.open('./manifesto/index.html', '_self');
    }
    window.onclick = OpenWin();
  }
  document.querySelector(`#line-${counter}`).style.opacity = 1;
});

function playAudio(url) {
  new Audio(url).play();
}
