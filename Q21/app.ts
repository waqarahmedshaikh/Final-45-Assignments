// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let objetContainingItems: {[key: string]:any} = {


    "laptops": {
        name: "laptop",
        price: "8000",
        descripation: "high performance laptop with fast processor"
    },

    "Mouse": {
        
        name: "mouse",
        price: "1000",
        descripation: "high performance mouse with good grip"
    },

    "keyboard":{
        name: "keyboard",
        price: "2000",
        descripation: "high performance keyboard with backlight display"
    },
}
console.log(objetContainingItems);
