function arrPair(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === 8) {
      return [arr[i], arr[i + 1]];
    }
  }
}

arr = [1, 2, 4, 4];
console.log(arrPair(arr));
