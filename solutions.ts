//Problem 1:

const filterEvenNumbers = (num: number[]): number[] => {
  let evenNumber: number[] = []
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      evenNumber.push(num[i]);
    }
  }
  return evenNumber;
};

const result = filterEvenNumbers([1, 4, 6, 7, 8, 9, 10, 12, 13, 15]);
