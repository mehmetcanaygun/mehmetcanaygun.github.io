const parent = document.getElementById("parent");
const child = document.getElementById("child");
const otherChild = document.getElementById("other-child");

parent.addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  }
  // true (parent is clicked first)
);

child.addEventListener("click", () => {
  console.log("Child clicked");
});

otherChild.addEventListener("click", () => {
  console.log("Other child clicked");
});
