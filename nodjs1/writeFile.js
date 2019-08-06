const fs = require("fs");
const { EventEmitter } = require("events");

const emitter = new EventEmitter();
emitter
.on("phase", () => console.log("Poll phase"))
.emit("phase");

fs.readFile(__filename, ()=> {
  setTimeout(() => console.log("Timers phase"));
  setImmediate(()=> console.log("Check phase"));
});