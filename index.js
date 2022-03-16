// Code your solutions in this file
// const names = ["Guadalupe", "Ollie", "Aki"]
const messages = []

const writeCards = (array) => {
    for (let i = 0; i < array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return messages;
}
// writeCards(names);

const countDown = (number) => {
    while (number >= 0) {
        console.log(number--)
    }
}

countDown(10)