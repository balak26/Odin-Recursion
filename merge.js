function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.ceil(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  return merge(leftSorted, rightSorted);
}

let arr_1 = [3, 2, 1, 13, 8, 5, 0, 1];
let arr_2 = [105, 79, 100, 110];
console.log(mergeSort(arr_1));
console.log(mergeSort(arr_2));

function merge(left, right) {
  const sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }

  return sortedArray;
}
