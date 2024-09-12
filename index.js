function fibs(n) {
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  let arrOfFibs = [0, 1];
  for (i = 0; i < n - 2; i++) {
    arrOfFibs.push(arrOfFibs[i] + arrOfFibs[i + 1]);
  }
  return arrOfFibs;
}

console.log(fibs(8));

function fibsRec(n) {
  console.log("\nThis was printed recursively \n");
  let arrOfFibs = [0, 1];
  if (n === 1) return [0];
  if (n === 2) return [1];
  else {
    for (i = 0; i < n; i++) {
      arrOfFibs.push(fib(i));
    }
  }

  function fib(m) {
    if (m < 2) {
      return m;
    } else {
      return fib(m - 1) + fib(m - 2);
    }
  }

  return arrOfFibs;
}

console.log(fibsRec(8));
