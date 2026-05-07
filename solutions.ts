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
//problem6
class Person {
    name: string;
    age: number;

    constructor(name: string,age: number){
        this.name = name;
        this.age = age
    };
    stdInfo(): string {
      return `Name: ${this.name},age: ${this.age}`
    }
}
class Student extends Person {
     grade: string;
    constructor(name: string,age:number,grade:string){
    
    super(name,age);
    this.grade = grade
    }
    getDetails():string {
        return `${this.stdInfo()},Grade: ${this.grade}`
    }
}


// class Person {
//   constructor(public name: string) {}

//   greet(): void {
//     console.log(`Hello, ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name: string, public roll: number) {
//     super(name);
//   }
// }

// const student1 = new Student("Rasel", 101);

// student1.greet();
// console.log(student1.roll);
