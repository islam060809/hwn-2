const btn = document.getElementsByTagName("button")
const h3 = document.querySelectorAll("h3")
const words = ["aplle", "phone", "book", "food", "pen", "cap", "bag", "lemon"]

btn[0].onclick = () => {
var random = words[Math.floor(Math.random() * words.length)]
    h3[0].innerText = random
    console.log(random)
}
