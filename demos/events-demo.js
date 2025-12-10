const EventEmitter = require("events");
const event = new EventEmitter();

event.on("welcome", () => {
    console.log("Welcome Event Triggered!");
});

event.emit("welcome");
