import lined from "../lily-note-notepad.jpg";
import meal from "../lily-note-meal.jpg";
import grocery from "../lily-note-grocery.jpg";
import planner from "../lily-note-planner.jpg";

const Items = [
  {
    id: 1,
    title: "lily notes, notepad",
    image: lined,
    price: 12,
    description:
      "Add a bit of luxury and simplicity to your writing with our Lily Notes Notepad. Keeping all of your thoughts, notes and reminders close by. The perfect size for writing down to do lists, goals, don’t forgets, personal reflection and much more + it makes a very thoughtful gift. ",
    productInfo:
      "50 pages of high quality paper. 4” x 6” Exclusive to Lily Pad Paper & Co.",
  },
  {
    id: 2,
    title: "weekly meal planner",
    image: meal,
    price: 16,
    description:
      "The Weekly Meal Planner is a simple and functional way to plan meals for your family. It makes planning meals easy - no more scrambling to figure out what’s for dinner!",
    productInfo:
      "30 pages of high quality paper. 5” x 7” Exclusive to Lily Pad Paper & Co.",
  },
  {
    id: 3,
    title: "grocery list",
    image: grocery,
    price: 16,
    description:
      "The Weekly Meal Planner is a simple and functional way to plan meals for your family. It makes planning meals easy - no more scrambling to figure out what’s for dinner!",
    productInfo:
      "30 pages of high quality paper. 3.5” x 8.5” Exclusive to Lily Pad Paper & Co.",
  },
  {
    id: 4,
    title: "weekly planner",
    image: planner,
    price: 16,
    description:
      "The Weekly Meal Planner is a simple and functional way to plan meals for your family. It makes planning meals easy - no more scrambling to figure out what’s for dinner!",
    productInfo:
      "30 pages of high quality paper. 10” x 8” Exclusive to Lily Pad Paper & Co.",
  },
];

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
  [lined, meal, grocery],
  12,
  "Add a bit of luxury and simplicity to your writing with our Lily Notes Notepad. Keeping all of your thoughts, notes and reminders close by. The perfect size for writing down to do lists, goals, don’t forgets, personal reflection and much more + it makes a very thoughtful gift. ",
  "30 pages of high quality paper. 3.5” x 8.5” Exclusive to Lily Pad Paper & Co."
);

let mealPlanner = new MakeItems(
  1,
  "weekly meal planner",
  [meal],
  16,
  "The Weekly Meal Planner is a simple and functional way to plan meals for your family. It makes planning meals easy - no more scrambling to figure out what’s for dinner!",
  "30 pages of high quality paper. 5” x 7” Exclusive to Lily Pad Paper & Co."
);

let groceryList = new MakeItems(
  2,
  "grocery list",
  [grocery],
  16,
  "The Weekly Meal Planner is a simple and functional way to plan meals for your family. It makes planning meals easy - no more scrambling to figure out what’s for dinner!",
  "30 pages of high quality paper. 10” x 8” Exclusive to Lily Pad Paper & Co."
);

let weeklyPlanner = new MakeItems(
  3,
  "weekly planner",
  [planner],
  16,
  "The Weekly Meal Planner is a simple and functional way to plan meals for your family. It makes planning meals easy - no more scrambling to figure out what’s for dinner!",
  "30 pages of high quality paper. 10” x 8” Exclusive to Lily Pad Paper & Co."
);
export let itemsArray = [notepad, mealPlanner, groceryList, weeklyPlanner];

export default { Items };
