function fibs(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let arr = [0, 1];

  for (i = 2; i < n; i++) {
    let fibNum = arr[i - 1] + arr[i - 2];
    arr.push(fibNum);
  }
  return arr;
}

console.log(fibs(8));

function fibsRec(n, arr = [0, 1]) {
  if (n <= 1) {
    return arr.slice(0, n);
  } else if (arr.length < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibsRec(n, arr);
  }
  return arr;
}

console.log(fibsRec(8));
