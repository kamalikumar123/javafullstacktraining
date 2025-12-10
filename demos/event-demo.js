// event-demo.js (CommonJS)
const EventEmitter = require('events');  // use require instead of import

const emitter = new EventEmitter();

emitter.on('greet', msg => console.log(msg));

emitter.emit('greet', 'Hello from EventEmitter!');
