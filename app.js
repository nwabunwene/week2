// square brackets to store an array in JS[]
//logging array in the console
console.log("Hello World");
let blogPosts = [
  "power outage in spain",
  "Labour MP doing something",
  "Tech Educators in Norwich",
  "What's on in Norwich",
  "Supporting British farmers",
  "Stores offering lowest prices",
];
console.log(blogPosts[5]);
blogPosts[6] = "The sixth blog post";
console.log(blogPosts[6]);

blogPosts[0] = "The first blog post";
console.log(blogPosts.length);
console.log(blogPosts);

blogPosts.unshift("power outage in spain");
console.log(blogPosts);

let favFoods = ["white soup", "jollof", "semo"];

let favColors = ["purple", "blue", "black"];

let favNums = [7, 30, 30];

let bool = [true, false];

let allArrays = favFoods.concat(favNums, favColors, bool, blogPosts);

console.log(allArrays);
