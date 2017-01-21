const roll = () => {
  let n = Math.floor(Math.random() * 6) + 1;

  if (n === 1) {
    die.roll1();
  }

  if (n === 2) {
    die.roll2();
  }

  if (n === 3) {
    die.roll3();
  }

  if (n === 4) {
    die.roll4();
  }

  if (n === 5) {
    die.roll5();
  }

  if (n === 6) {
    die.roll6();
  }

  return n;
};

const showRoll = (n=roll()) => {
  if (roll() === n) {
    return;
  }

  setTimeout(() => {
    showRoll(n);
  }, 100);
};

button.onclick = () => showRoll();
