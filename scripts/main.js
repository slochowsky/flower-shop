const protea = {
    type: "Pansy",
    color: "blue",
    stemLength: 12,
    price: 2
}
const sunflower = {
    type: "Sunny",
    color: "yellow",
    stemLength: 4,
    price: 4
}
const rose = {
    type: "Rose",
    color: "red",
    stemLength: 9,
    price: 10
}
const tulip = {
    type: "Tulipy",
    color: "orange",
    stemLength: 15,
    price: 5
}
const hydranga = {
    type: "Hydra",
    color: "pink",
    stemLength: 4,
    price: 8
}

const flowerCollection = []

flowerCollection.push(protea)
flowerCollection.push(sunflower)
flowerCollection.push(rose)
flowerCollection.push(tulip)
flowerCollection.push(hydranga)

const flowerShop = {
    name: "Nashville Software School",
    mothersDay: [],
    vDay: []
}

for (const singleFlowerObj of flowerCollection) {

    if (singleFlowerObj.price < 9) {

    if (singleFlowerObj.color === "yellow" && singleFlowerObj.stemLength < 6) {
        console.log(singleFlowerObj)
        flowerShop.mothersDay.push(singleFlowerObj)
    }

    else if ((singleFlowerObj.color === "red" || singleFlowerObj.color === "pink") && 
    singleFlowerObj.stemLength > 8) {
        console.log(singleFlowerObj)
        flowerShop.vDay.push(singleFlowerObj)
    }
}
}
