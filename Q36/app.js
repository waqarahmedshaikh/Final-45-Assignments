"use strict";
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default
with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.* */
function makeshirt(size = 'large', text = 'i love typescript') {
    console.log(`you have order a ${size}, shirt that says ${text}`);
}
// makeshirt();
// makeshirt('medium');
// different message
makeshirt('small', 'ineed a big shirt to were');
