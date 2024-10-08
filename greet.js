// export function greet(name) {
//   if (name === undefined) {
//     return "Hello stranger!";
//   } else if (name === "Niklas") {
//     return "Hello coach!";
//   } else {
//     return `Hello ${name}!`;
//   }
// }

export function greet(name = "stranger") {
  if (name === "Niklas") {
    return "Hello coach!";
  } else {
    return `Hello ${name}!`;
  }
}
