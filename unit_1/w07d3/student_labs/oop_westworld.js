function randomIndex(param) {
    return Math.floor(Math.random() * param.length)
}

function onetotwenty() {
    return Math.ceil(Math.random() * 20)
}

class BasicHost {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
        this.empathy = onetotwenty();
        this.loyalty = onetotwenty();
        this.aggression = onetotwenty();
        this.curosity = onetotwenty();
        this.bulk = onetotwenty();
    }
    saySpecs() {
        console.log(`my name is ${this.name}. My occupation is ${this.occupation}`)
    }
}

const names = ["Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene",
    "Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen",
    "Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"];

const occupations = ["Clerical assistant", "Leaflet distributor", "Landowner",
    "Special constable", "Anaesthetist", "Park-keeper", "Butler",
    "Choreographer", "Blacksmith", "Chef", "Legal secretary",
    "Song writer", "Librarian", "Landscape gardener"];

const hostArray = [];

for (let i = 0; i < 10; i++) {
    hostArray.push(new BasicHost(
        names[randomIndex(names)],
        occupations[randomIndex(occupations)],
    )
    )
}

const getRandomName = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

console.log(getRandomName(hostArray))