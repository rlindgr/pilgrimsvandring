console.log("hej")

const forwardButton = document.getElementById("forward-button")
const backButton = document.getElementById("back-button")
const cardWidth = 1000
const itemList = document.getElementById("flex-container-stages")

forwardButton.addEventListener("click", () => {
    itemList.scrollLeft += cardWidth
backButton.style.display="block"
})

backButton.addEventListener("click", () => {
    itemList.scrollLeft -= cardWidth
})