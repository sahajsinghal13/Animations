function repeat(string, noOfRepetition) {
  if (noOfRepetition < 1) {
    return '';
  }

  return string + repeat(string, --noOfRepetition);
}

function delay() {
  for (let iterations = 0; iterations < 100000000; iterations++) {
  }
  return '';
}

function wave1(index, min, max) {
  const y = Math.floor((Math.sin(min / 5) * max / 2) + max / 2);

  if (min >= (max / 2)) {
    return repeat("\n", y) + (repeat(" ", index)) + "🎁";
  }

  console.log((repeat("\n", Math.floor(y / 2))) + (repeat(" ", index)) + "🎁");
  delay();
  console.clear();
  return wave1(index + 1, min + 1, max);
}

// function wave1(index, max) {
//   const y = Math.floor((Math.sin(index / 14) * max/2) + max/2);
//   console.log((repeat(" ", y)) + "🔴");

//   if (index === max) {
//     return '';
//   }

//   delay();
//   return wave1(index + 1, max);
// }

// function wave1(index, max, divisor) {
//   const y = Math.floor((Math.sin(index / 14) * max/2) + max/2);
//   const z = Math.floor((Math.sin(-1 * index / 14) * max) + max/2);
//   const yLine = repeat("\n", y/divisor);
//   const zLine = repeat("\n", Math.abs(z/divisor));
//   const space = (repeat(" ", index))
//   console.log(yLine + space + "🔴");
//   console.log(zLine + space + "🔴");
//   console.log(Math.floor(y/divisor))

//   if (index === max) {
//     return '';
//   }
//   delay();
//   console.clear();
//   return wave1(index + 1, max, divisor);
// }

// function animate() {
//   wave1(0, 0, 33);
//   wave1(0, 33, 66);
//   delay();
//   console.clear()
// }

// for (let index = 0; index < 10; index++) {
//   animate();
// }
console.log(wave1(0, 0, 33));