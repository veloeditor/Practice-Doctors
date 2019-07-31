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