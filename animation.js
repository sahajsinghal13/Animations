const TORTOISE = '🐢';
const RABBIT = '🐇';
const desitination = '🏁';

function repeat(string, noOfRepetition) {
  if (noOfRepetition < 1) {
    return '';
  }

  return string + repeat(string, --noOfRepetition);
}

function delay(times) {
  for (let iterations = 0; iterations < 100000000 * times; iterations++) {
  }
}

function run(tIndex, rIndex) {
  if (tIndex < 1) {
    return '';
  }

  console.log(desitination + repeat(' ', tIndex - 2) + TORTOISE);

  if (tIndex < 14 || rIndex >= 101) {
    rIndex = rIndex - 4;
  }
  
  console.log(desitination + repeat(' ', rIndex) + RABBIT);

  delay(5);
  console.clear();
  run(tIndex - 1, rIndex);
}

run(121, 121);