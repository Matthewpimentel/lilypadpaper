import blank from "../Images/lily-note-blank.JPG.webp";
import blank2 from "../Images/lily-note-blank-2.webp";
import blank3 from "../Images/lily-note-blank-3.webp";
import blank4 from "../Images/lily-note-blank-4.webp";
import meal from "../Images/lily-note-meal.webp";
import meal2 from "../Images/lily-meal-2.webp";
import meal3 from "../Images/lily-meal-3.webp";
import meal4 from "../Images/lily-meal-4.webp";
import grocery from "../Images/lily-note-grocery.webp";
import grocery2 from "../Images/lily-grocery-2.webp";
import grocery3 from "../Images/lily-grocery-3.webp";
import grocery4 from "../Images/lily-grocery-4.webp";
import planner from "../Images/lily-note-planner.webp";
import planner2 from "../Images/lily-note-planner-2.webp";
import planner3 from "../Images/lily-note-planner-3.webp";
import planner4 from "../Images/lily-note-planner-4.webp";

function MakeItems(id, title, images, price, description, productInfo) {
  this.id = id;
  this.title = title;
  this.images = images;
  this.price = price;
  this.description = description;
  this.productInfo = productInfo;
}

let notepad = new MakeItems(
  0,
  "lily notes, notepad",
  [blank, blank2, blank3, blank4],
  8,
  "Add a bit of luxury and simplicity to your writing with our Lily Notes Notepad. The perfect size for writing down to do lists, goals, don’t forgets, personal reflection and much more + it makes a very thoughtful gift. ",
  "50 pages of high quality paper. 4” x 6”. Exclusive to Lily Pad Paper & Co."
);

let mealPlanner = new MakeItems(
  1,
  "weekly meal planner",
  [meal, meal2, meal3, meal4],
  16,
  "The Weekly Meal Planner is a simple and functional way to plan meals for you and your family. It makes planning meals easy - no more scrambling to figure out what’s for dinner!",
  "30 pages of high quality paper. 5” x 7”. Exclusive to Lily Pad Paper & Co. "
);

let groceryList = new MakeItems(
  2,
  "grocery list",
  [grocery, grocery2, grocery3, grocery4],
  16,
  "Pair our Grocery List with our Weekly Meal Planner - the ultimate duo!",
  "30 pages of high quality paper. 4” x 9”. Exclusive to Lily Pad Paper & Co."
);

let weeklyPlanner = new MakeItems(
  3,
  "weekly planner",
  [planner, planner2, planner3, planner4],
  16,
  "The Weekly Meal Planner is a simple and functional way to plan meals for your family. It makes planning meals easy - no more scrambling to figure out what’s for dinner!",
  "30 pages of high quality paper. 10” x 8” Exclusive to Lily Pad Paper & Co."
);
export let itemsArray = [notepad, mealPlanner, groceryList, weeklyPlanner];
