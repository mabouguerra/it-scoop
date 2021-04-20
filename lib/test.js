fs = require("fs");
path = require("path");
gm = require("gray-matter");

let dir = process.cwd();
let post = fs.readFileSync(
  "/home/mabouguerra/Downloads/it-scoop-master/content/test/content/2019/01/refactoring-ui-book-review/index.md",
  "utf8"
);

let { data, content } = gm(post);
let str = "![name](url)";
let image = content.match(/\]\([^\s]+\)/)[0];

console.log(image.slice(2, -1));
