let p = document.querySelector('p');

window.addEventListener("keydown", e => {

  let currentSize = parseInt(p.style.fontSize);


  if (isNaN(currentSize)) {
    currentSize = 50;
  }

  let changeAmount = 10;

  if (e.key === "ArrowUp") {
    p.style.fontSize = (currentSize + changeAmount) + 'px';
  } else {

    p.style.fontSize = Math.max(changeAmount, currentSize - changeAmount) + 'px';

  }


  let c = document.getElementById('change').innerHTML;
  if (currentSize === 100) {
    document.getElementById('change').innerHTML = c.replace(/🎈/g, '💥');

  }

});

