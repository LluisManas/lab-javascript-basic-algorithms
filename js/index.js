// Itertion 1

let hacker1 = "Lluis";
console.log("The driver's name is " + hacker1);

let hacker2 = "Karo";
console.log("The navigator's name is", hacker2);

//Iteration 2

if (hacker1 > hacker2) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters"
  );
} else {
  console.log(
    "it seems that the navigator has the longest name " +
      hacker2.length +
      " characters!"
  );
}

for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase() + " ");
}

for (let i = hacker2.length; i >= 0; i--) {
  console.log(hacker2[i]);
}

let hackers = [hacker1, hacker2];
console.log(hackers);

let nameOrder = hackers.sort((a, b) => a.localeCompare(b));
console.log(nameOrder);
if (hacker1 > hacker2) {
  console.log("The driver's name goes First");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigators goes first definitely");
} else {
  console.log("What?? You both have the same name?");
}

// Bonus

function wordsCount(str) {
  return str.split(" ").length;
}
let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus est, euismod vel massa a, luctus tristique orci. Donec ac est elit. Curabitur ac arcu vel tellus vulputate lacinia ac quis est. Proin a justo sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur justo orci, tempor et fringilla sit amet, aliquet ut urna. Suspendisse pharetra diam non porttitor cursus. In malesuada dui ac sapien auctor semper. Aliquam ac lacus felis. Quisque tortor augue, efficitur sed erat id, faucibus tincidunt nulla. Sed pulvinar ultricies justo, sit amet faucibus augue. Nulla pretium velit erat, vitae rhoncus eros auctor eu. Integer et nisi vel nisi tincidunt blandit eget et quam. Aliquam non ultrices tortor. Morbi nec tortor nec augue varius faucibus eu sed ipsum. Curabitur vitae suscipit tellus. Integer pretium consectetur ligula, sed vestibulum ipsum facilisis non. Morbi dignissim porttitor convallis. Maecenas aliquam tristique mi, et pharetra est mollis ac. Nullam dolor orci, tristique quis porttitor at, finibus venenatis mauris. Phasellus semper cursus lacus vitae tristique. Ut ultrices ex convallis mauris mattis rhoncus. Fusce vulputate sem ut elit mollis lacinia. Nam porta, nulla ac eleifend consequat, est justo aliquam arcu, placerat vehicula nisi arcu vitae libero. Proin consequat ligula eu sem dictum, eget bibendum libero gravida. Nam hendrerit nisi a faucibus aliquet. Etiam viverra est eu elit dapibus, at finibus purus imperdiet. Proin at elit odio. Phasellus id varius nisl. Vivamus sit amet erat ut elit pharetra vehicula ac nec enim. Donec volutpat convallis nisi eu venenatis. Fusce cursus maximus mauris, at egestas arcu blandit vitae. In at euismod odio, sed interdum leo.";

console.log(wordsCount(lorem));

console.log(lorem.search("et"));
