let url = "https:google.com/ncr"
let array = ["user1", "user2", "user3"]

const sum = (a, b) => {
    return a + b
}
const suma = (a, b) => {
    return a + b
}

export {
    url,
    array,
    sum,
    suma as default
    // as default le da prioridad

}
