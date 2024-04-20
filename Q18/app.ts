// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


let guestarray:string[] = ["Zuraiz","Ahad","Badar"];

console.log("unfortunately! the new dinner table wont so we can invite only two guest");


guestarray.unshift("bilal" , "nabeel");


console.log("updated list of guest",guestarray);

while (guestarray. length > 2) {
    let removeGuest:string | undefined = guestarray.pop();
    if (removeGuest !== undefined) {
        console.log(`sorry ${removeGuest},we cant invite you`);

    }
        
    guestarray.forEach(guest => {
    console.log(`Dear ${guest},you both are invited for the dinner`);
            
    });
}
guestarray.splice(0,guestarray.length)

console.log("updated list of guest:, guestarry");
