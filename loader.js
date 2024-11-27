function repeat(string, noOfRepetition) {
  if (noOfRepetition < 1) {
    return '';
  }

  return string + repeat(string, --noOfRepetition);
}

function delay() {
  for (let iterations = 0; iterations < 600000000; iterations++){
  }
  return '';
}

function loading(index) {
  const load = "LOADING "
  return load + repeat("● ", index);
}

function loader(iterations) {
  console.clear();
  if (iterations < 1) {
    return '';
  }
  for (let i = 0; i < 6; i++) {
    console.log(loading(i));
    delay();
    console.clear();
  }
  
  return loader(--iterations);
}

loader(10);