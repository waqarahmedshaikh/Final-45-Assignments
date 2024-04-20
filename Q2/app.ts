/*Name Cases: Store a person’s name in a variable, and then print that person’s 
name in lowercase, uppercase, and titlecase.* */


let personName:string = "sir zia";

// Lower Case
console.log(personName.toLowerCase());

// Upper Case

console.log(personName.toUpperCase());

// Title Case

let word:string[] = personName.split(" ");
let titlecaseName:string = ""
for (let i = 0; i < word.length; i++) {
    titlecaseName += word[i].charAt(0).toUpperCase()+word[i].slice(1).toLowerCase() + " "
    
}

console.log(titlecaseName);
