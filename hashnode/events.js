const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("emit-event", (first, last) =>
  console.log(`Event is emitted ${first} & ${last}`)
);

emitter.on("emit-event", (first) => console.log(`Event is emitted ${first}`));

emitter.emit("emit-event", "data1", 123);

emitter.emit("emit-event", "data1");
