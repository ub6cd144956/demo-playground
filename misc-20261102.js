// scratch

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const sum = (xs) => xs.reduce((a, b) => a + b, 0);
