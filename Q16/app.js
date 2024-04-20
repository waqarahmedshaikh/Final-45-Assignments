// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//  Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//  Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//  Print a message to each of the two people still on your list, letting them know they’re still invited.
//  Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestarray = ["Zuraiz", "Ahad", "Badar"];
console.log("unfortunately! the new dinner table wont so we can invite only two guest");
guestarray.unshift("bilal", "nabeel");
console.log("updated list of guest", guestarray);
while (guestarray.length > 2) {
    var removeGuest = guestarray.pop();
    if (removeGuest !== undefined) {
        console.log("sorry ".concat(removeGuest, ",we cant invite you"));
    }
    guestarray.forEach(function (guest) {
        console.log("Dear ".concat(guest, ",you both are invited for the dinner"));
    });
}
guestarray.splice(0, guestarray.length);
console.log("updated list of guest:, guestarry");
