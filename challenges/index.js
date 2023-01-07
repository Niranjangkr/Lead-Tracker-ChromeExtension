// https://www.linkedin.com/in/per-harald-borgen/

//JSON : to turn our array into JSON array and also other way around 

const imgs = [
    "per1.jpeg",
    "per2.jpeg",
    "per3.jpeg",
]

const imageContainer = document.querySelector(".container")
let imgRender = ""
renderImages()

function renderImages (){
    for (let i = 0; i < imgs.length; i++){
        imgRender += `
        <img src="${imgs[i]}" class="team-img">
        `
    }
    imageContainer.innerHTML = imgRender
}

/*
generateSentence("largest countries", ["China", "India", "USA"])

function generateSentence(desc, arr){
    len = arr.length
    let SenFrame = "";  
    for (let i = 0; i < arr.length - 1; i++){
        SenFrame += arr[i] + ", " 
    }
    console.log(`
        The ${arr.length} ${desc} are ${SenFrame}${arr[arr.length -1]} 
    `)
}*/

/*
let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

const btn = document.getElementById("jane")
btn.addEventListener("click", function () {
    console.log(`Jane's Score is ${data[0].score}`)
}) */

/*let arr = [12, 3, 4, 5, "Niranjan"]
// console.log(arr)
// localStorage.setItem("myArr", JSON.stringify(arr))
itemsInLocalStorage = JSON.parse(localStorage.getItem("myArr"))
console.log(typeof(itemsInLocalStorage)) */

/*let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to clean code"]

item(myCourses)

function item (arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    console.log(arr)
}*/

/*// SETTING THE STAGE
const player = "Niraj"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true 

// ANNOUNCING THE WINNER
if (hasWon){
    console.log(`${player} got ${points} points and won the ${game} game`)
}else { 
    console.log(`The winner is ${opponent} ! ${player} lost the game`)
} */

/*function getFirst(arr){
    return arr[0]
}

let array = [8, 2, 4, 6, 7, 2]
console.log(getFirst(array))
console.log(getFirst([4, 5, 7, 3]))*/

/*
what are greeting and parameter // parameter
what are "howdy" and "james" // arguments
what are num1 and num2 //parameters
wht are 3 and 4 // arguments
*/

/*
//Arguments
console.log(add(3, 4))
console.log(add(9, 102))

//parameters
function add (num1, num2){
    return num1 + num2
}*/

/*greeting("Welcome Back", "Niranjan")    
function greeting(phrase, name){
    console.log(`${phrase} ${name}, How was your holiday`)
}*/ 


/*greeting("Welcome Back", "Niranjan")    
function greeting(phrase, name){
    console.log(phrase+ " " + name + ", How was your holiday ")
} */


/*console.log( Boolean('') ) //false
console.log( Boolean('0') ) //true
console.log( Boolean(100) ) //true
console.log( Boolean(null) ) //false
console.log( Boolean([0]) ) //true
console.log( Boolean(-0) ) //false*/

/*myLeads = `["www.google.com"]`
console.log(typeof(myLeads))
myLeads = JSON.parse(myLeads) 
console.log(typeof(myLeads))
myLeads.push("www.everythingTwist.com")
myLeads = JSON.stringify(myLeads)
console.log(myLeads)
console.log(typeof(myLeads))*/

/*// console.log(localStorage.getItem("name"))
localStorage.setItem("Anime","One-piece")
console.log(localStorage.getItem("Anime"))
localStorage.clear()
console.log(localStorage.getItem("Anime"))*/

/*// template string or literal

// listItem += "<li  style = 'list-style: number'><a href = '" +myLeads[i]+ "' target = '_blank'>" + myLeads[i] + "</a></li>"

const recipient = "James"
const sender = "Niranjan"

const email = `Hey ${recipient}!
How is it going?
Cheers ${sender}
`
console.log(email)*/

/*  //ulEl.innerHTML += "<li style = 'list-style: number'>" + myLeads[i] + "</li>"
   // create Element
   // set Text Content
   // append to ul
   const li = document.createElement("li")
   li.textContent = myLeads[i]
   ulEl.append(li) */

/*let boxEl = document.getElementById("box")
boxEl.innerHTML = "<button onclick = 'buy()'>BUY NOW</button> "

function buy(){
    boxEl.innerHTML += "<p>Thank You for Buying </p>"
}*/

/*const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

shippingCost = 15 
shippingTime = "7-14 days"

const fullPrice = basePrice - discount + shippingCost

console.log("Total Cost: "+ fullPrice + ". It will arive in " + shippingTime)*/
 
/*let boxx = document.getElementById("box")

boxx.addEventListener("click", function (){
    console.log("Box opened")
})*/