import { person } from "./test.js";

function greeting(userName: string): string {
  console.log("Greeting ", userName);
  return "Hello" + " " + userName;
}

greeting(person.name);
