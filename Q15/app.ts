// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//  Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.

// Add one new guest to the beginning of your array.

// Add one new guest to the middle of your array. 
//  Use append() to add one new guest to the end of your list. 
//  Print a new set of invitation messages, one for each person in your list.

let guestarray:string[] = ["Zuraiz","Ahad","Badar"];

console.log("Great news we found a biger table");

guestarray.unshift("hamza");


guestarray.splice(Math.floor(guestarray.length/2),0, "nomuan");

guestarray.push("zia")

guestarray.forEach(guest => {
   console.log(`Dear ${guest}, Your all are cordially invited to dinner.`);
    
});

