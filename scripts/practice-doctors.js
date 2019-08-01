const createDoctors = (
name, specialty, address
) => ({
    "doctorsName": name,
    "doctorsSpecialty": specialty,
    "doctorsAddress": address
})

const doctorAndrew = createDoctors("Dr. Andrews", "Oncology", "123 Main Street")
console.log(doctorAndrew)


const createPets = (name, breed) => ({
    "petsName": name,
    "petsBreed": breed
})

const gus = createPets("Gus", "Border Collie")
const rudy = createPets("Rudy", "Mixed Breed")
const blizzard = createPets("Blizzard", "Boxer")
console.log(gus)
console.log(rudy)
console.log(blizzard)

const BowWowKennels = []

BowWowKennels.push(gus)
BowWowKennels.push(rudy)
BowWowKennels.push(blizzard)

console.log('BowWowKennels', BowWowKennels)


//

// Create an array for each of these record labels.
// JumpStop Records works with Funk and Rap artists.
let jumpStartRecords = []

// Chatten Records works with Country and Bluegrass artists.
let chattenrecords = []

// Polar Records works with Pop artists.
let polarRecords = []

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old

createBluegrassArtist = (name, genre, age) => {
    const bluegrassArtist = {
        "artistName": name,
        "musicGenre": genre,
        "artistAge": age   
    }
    return bluegrassArtist
}

createCountryArtist = (name, genre, age) => {
    const countryArtist = {
    "artistName": name,
    "musicGenre": genre,
    "artistAge": age 
    }  
    return countryArtist
}

const bruce = createCountryArtist("Bruce Atkins", "country music artist", "23 years old")
const bart = createBluegrassArtist("Bartholomew Danielson", "bluegrass music artist", "23 years old")
const avilee = createCountryArtist("Avilee Dallas", "country music artist", "19 years old")

chattenrecords.push(bruce, bart, avilee)

console.log("Chatten Records", chattenrecords)

chattenrecords.push()


createPopArtist = (name, genre, age) => {
    const popArtist = {
    "artistName": name,
    "musicGenre": genre,
    "artistAge": age   
    }
    return popArtist
}

createFunkArtist = (name, genre, age) => {
    const funkArtist = {
    "artistName": name,
    "musicGenre": genre,
    "artistAge": age   
}
    return funkArtist
}

createRapArtist = (name, genre, age) => {
    const rapArtist = {
    "artistName": name,
    "musicGenre": genre,
    "artistAge": age 
    }
    return rapArtist  
}
