import linkedList from "./linkedList.js";
import LinkedList from "./LinkedList.js";

console.log("FACTORY")
console.log()

const list = linkedList()

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString())

console.log()

console.log("CLASS")

// Class
const list2 = new LinkedList();

list2.append("dog");
list2.append("cat");
list2.append("parrot");
list2.append("hamster");
list2.append("snake");
list2.append("turtle");
console.log(list.toString())