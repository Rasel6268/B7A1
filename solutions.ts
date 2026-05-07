//Problem 1:

const filterEvenNumbers = (num: number[]): number[] => {
  let evenNumber: number[] = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      evenNumber.push(num[i]);
    }
  }
  return evenNumber;
};

//Problem2
const reverseString = (str: string): String => {
  let reverseStr: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};
//problem3
const checkType = (type: String | number): string => {
  return typeof type;
};

//problem4
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};
//problem5

interface Book {
  title: String;
  author: String;
  publishedYear: number;
}

interface readBook extends Book {
    isRead: boolean
}

const toggleReadStatus = (book: Book): readBook  => {
  return {
    ...book,
    isRead: true,
  };
};
