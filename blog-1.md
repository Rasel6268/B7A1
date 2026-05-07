### Title : Comprehension "any" vs "unknown" in TypeScript: Type Safety, Type Narrowing

### Introduction

**any** and **Unknown** both are the primitive data type in **TypeScript**. Both can store values of any type. But they differ when it comes to type safety.For a **TypeScript** developer, it is important to know the difference between these two data types in order to write reliable and bug-free applications.

### What Is **any**?

**any** is a primitive data type in **TypeScript** that can store values of any type. It disables type checking, allowing us to perform any operation without compile-time errors.

### Example

```ts
let value: any = "Hello";

value = 10;
value = true;
```

**Note**: In this example, we can store or change values of any type. TypeScript does not show any type errors because the variable uses the any type.

### Why Is any Called a **“Type Safety Hole”**?

TypeScript mainly focuses on type safety. When we use any, TypeScript stops checking the type completely.

For define **any** TypeScript disable

-- Invalid operations are allowed
-- Errors are hidden from the compiler
-- Bugs can appear at runtime
-- Autocomplete and IntelliSense become weaker

### Example

```ts
let user: any = "Hello Developer";

user.age.toUpperCase();
```

**Note** : In this example, TypeScript does not show any compile-time error because the variable uses the **any** type. For this reason, the code will produce a runtime error because the string "Hello Developer" does not have an age property.

That is why **any** is called a type safety hole,it breakdown TypeScript’s protection system.

### What Is unknown?

The **unknown** type can also store any value, but it does not allow unsafe operations directly.

### Example

```ts
let value: unknown = "Hello developer";

value.toUpperCase();
```

**Note** In this example TypeScript, this will give a compile-time error because value is of type unknown.

Even though the actual value is a string, TypeScript does not allow us to use string methods directly on unknown.

### Why Is unknown Safer?
When we use unknown, TypeScript’s type safety keeps active, meaning we must check the type before performing any operations on the value.

```ts
let value: unknown = "Hello developer";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```
**Note** In this example, TypeScript uses type narrowing. This allows TypeScript to safely treat value as a string inside the if block, so methods  work without errors.

### Benefits of using unknown instead of any in TypeScript
-- Prevents unsafe operations
-- Encourages validation
-- Maintains TypeScript safety
-- Better for API responses and user input

### What Is Type Narrowing?
In TypeScript, narrowing refers to the process of reducing a variable’s type from a broader type to a more specific type within a certain code block or context. This is done using conditionals or type guards, which help TypeScript understand the exact type of a value at a specific point in the code.

### Example

```ts
let value: unknown = "Hello Developer";

if (typeof value === "string") {
  console.log(value.toUpperCase()); 
}
```


### Here are the some way for Narrow type
-- typeof
-- instanceof
-- in

### Example of theme
 # Typeof
 ```ts
 if (typeof value === "number") {
  console.log(value.toFixed(2));
}
```

 # instanceof
 ```ts
if (date instanceof Date) {
  console.log(date.getFullYear());
}
```
 # in
 ```ts
 if ("name" in user) {
  console.log(user.name);
}
```
### Conclusion
Although both any and unknown can store any type of value, they serve different purposes. The any type disables TypeScript’s protection system and can lead to hidden bugs, which is why it is known as a “type safety hole.” On the other hand, unknown is safer because it forces developers to verify the type before using the value.

By using type narrowing techniques such as typeof, instanceof, and in, developers can safely work with unpredictable data while still benefiting from TypeScript’s powerful type system.


