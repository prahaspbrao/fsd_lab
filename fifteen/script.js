// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define the listener function (The action to be performed)
// We store it in a variable so we can refer to it when removing it later.
const myEventHandler = () => {
    console.log('>>> Success: The event listener was triggered!');
};

console.log("--- Program 15: Event Listener Lifecycle ---\n");

// 1. ADD EVENT LISTENER
// We bind the 'greet' event to our handler function
eventEmitter.on('greet', myEventHandler);
console.log("1. Listener added.");

// 2. EMIT EVENT (Trigger the listener)
console.log("2. Emitting 'greet' event now...");
eventEmitter.emit('greet');

// 3. REMOVE EVENT LISTENER
// We unbind the handler from the 'greet' event
eventEmitter.removeListener('greet', myEventHandler);
console.log("\n3. Listener removed.");

// 4. EMIT EVENT AGAIN (Verify removal)
console.log("4. Emitting 'greet' event again...");
eventEmitter.emit('greet'); // Nothing should happen here

console.log("\n--- End of Program ---");