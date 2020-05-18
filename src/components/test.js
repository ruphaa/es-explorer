let animals = ["🐴", "🐮", "🐤 ", "🐳"];
let names = ["Harry", "Coco", "Chuck", "Boo boo"];
let index = 0;
for (animal of animals) {
  console.log(`${names[index]} the ${animal}`);
  index++;
}
