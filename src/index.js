import foodList from "./foods";
import { choice, remove } from "./helper";

const randFruit = choice(foodList);

console.log(`I’d like one ${randFruit}, please.`);
console.log(`Here you go: ${randFruit}`);
console.log(`Delicious! May I have another?`);

const newFoodList = remove(foodList, randFruit);

console.log(
  `I’m sorry, we’re all out. We have ${newFoodList.length} fruits left: ${newFoodList} .`
);
