const main = () => {

  const a = [10, 9, 7, 101, 23, 44, 12, 78, 34, 23];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (a[i] < a[j]) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  console.log("Prleting Sorted List ...");
  for (let i = 0; i < 10; i++) {
    console.log(a[i]);
  }
}
main();
