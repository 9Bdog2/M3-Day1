let hello = "Hello World" 

if (hello) {
    console.log(hello)
}

// let myArr = [1, "2", {id: 2}, [4,5]]
const x = "surname"

const tutor = {
    name: "Stefano",
    [x]: "Miceli",
    skills123123: ["JS", "HTML", "CSS", "UX"],
    area: {
        location: "FVG",
        country: "Italy",
        street: "Something"
    }
}

const objectKeys = Object.keys(tutor)
// console.log(objectKeys)
// console.log(tutor[objectKeys[2]])


// console.log(tutor[objectKeys[3]])

// console.log(Object.values(tutor))
// console.log(Object.entries(tutor))


const car = {
    brand: "Ford",
    color: "silver",
    licencePlate: "FHG123X",
    year: 2015
}

// const car2 = car // DON'T DO THIS!!! 
const car2 = Object.assign({origin: "USA"}, car);
car2.color = "red"

// const tutor2 = Object.assign({}, tutor) // SHALLOW COPY
const tutor2 = JSON.parse(JSON.stringify(tutor)) // DEEP CLONE


tutor2.area.location = "Venice"
console.log(tutor)

delete car2.year

console.log(car)
console.log(car2)


console.log("Teacher's name is " + tutor.name)

console.log(`Teacher's name is: ${tutor.name}
    he lives in: ${tutor.area.location}
`)

let arrOfNumAsStrings = ["1", "2", "3"]

console.log(typeof arrOfNumAsStrings[0])
console.log(typeof parseInt(arrOfNumAsStrings[0]))
console.log(typeof NaN)
console.log(isNaN(parseInt("arrOf")))

console.log(typeof arrOfNumAsStrings)

console.log(Array.isArray(arrOfNumAsStrings))

console.log(parseInt(arrOfNumAsStrings[0]) + parseInt(arrOfNumAsStrings[1]) + parseInt(arrOfNumAsStrings[2]))


arrOfNumAsStrings.push("5")
arrOfNumAsStrings.push("6")

// const removedFirstElem = arrOfNumAsStrings.shift()
// console.log(removedFirstElem)

// const removedLastElem = arrOfNumAsStrings.pop()
// console.log(removedLastElem)
// console.log(arrOfNumAsStrings)

// const newArr = arrOfNumAsStrings.slice(1, 4) //DOES NOT MUTATE THE ORIGINAL ARRAY, RETURNS A NEW ARRAY WITH THE SELECTED ELEMENTS
// const newArr = arrOfNumAsStrings.splice(1, 2) // MUTATES THE ORIGINAL ARRAY, RETURNS THE REMOVED ELEMENTS

// console.log(newArr)
// console.log(arrOfNumAsStrings)

// const fruit = 'Orange';

// switch (fruit) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes': console.log("this is the mangoes")
//     break;
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${fruit}.`);
// }


// if (fruit === "Oranges") {
//     console.log('Oranges are $0.59 a pound.');
// } else if (fruit === 'Mangoes') {

// } else if (fruit === 'Papayas') {
//     console.log('Mangoes and papayas are $2.79 a pound.');

// } else {
//     console.log(`Sorry, we are out of ${expr}.`);
// }


const genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

for (let i = 0; i < genres.length; i++ ) {
  const elem = genres[i]

//   console.log("Genre is: " + elem)
//   console.log(array[i])
}


const movies = [
    {
      Name: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Category: "movie",
      Picture:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Name: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Category: "movie",
      Picture:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Name: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Category: "movie",
      Picture:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Name: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Category: "movie",
      Picture:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Name: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Category: "movie",
      Picture:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Name: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Category: "movie",
      Picture:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Name: "Lord of the Flies",
      Year: "1977",
      imdbID: "tt0100054",
      Category: "movie",
      Picture:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Name: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Category: "movie",
      Picture:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Name: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Category: "movie",
      Picture:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Name: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Category: "movie",
      Picture:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
  ];

  
const viableProperties = Object.keys(movies[0])

console.log(viableProperties)

const simplifiedMovies = [];
  
  for (let i = 0; i < movies.length; i++ ) {
    // const outerObj = movies[i]
    // const simplifiedObj = {
    //     Title: outerObj.Title,
    //     Year: outerObj.Year
    // }
    // simplifiedMovies.push(simplifiedObj)
    // simplifiedMovies.push({
    //     Title:  movies[i].Title,
    //     Poster:  movies[i].Poster
    // })

    simplifiedMovies.push({
        [viableProperties[0]]:  movies[i][viableProperties[0]],
        [viableProperties[3]]:  movies[i][viableProperties[3]]
    })
}

console.log("___________________________________________________")

// function callMovies() { 
//     console.log("HERE", simplifiedMovies) 
// }


function bark(str) {
    console.log(str)
}

// bark("WOOOF")
// bark("WOF")
// bark("WOOOOOOOOOF")
// bark("WOOOOF")
// bark("WOOOF")


function sum(n1, n2) {
    let result = n1 + n2

    return result
}

console.log(sum(2, 3))
console.log(sum(5, 6))
console.log(sum(7, 8))

function greet(name, age, surname, callback) {
    
    console.log("Hello " + name + " " + surname +" you are " + age + " years old")
    
    callback() //undefined()
}



function finalMessage() {
    return "I'm done with everything" 
    
    console.log("HEY")
}

// greet("Emilian", 32, "Kasemi", finalMessage)
// greet("Zee", 23 )
// greet("Gulliermo" , 18)



// console.log(finalMessage())

const outerArr = []

function cycleMe(array) {
    for (let i = 0; i < array.length; i++){
       outerArr.push(array[i])
    }
}

if(Array.isArray(genres)) {
    cycleMe(genres)
}

console.log(outerArr)