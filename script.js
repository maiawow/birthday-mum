const heart = document.getElementById("heart")
const envelope = document.getElementById("envelope")
const flap = document.getElementById("flap")
const card = document.getElementById("card")
const cardCover = document.getElementById("cardCover")
const cardInside = document.getElementById("cardInside")

heart.onclick = function(){

// open flap
flap.classList.add("open")

// card rises
setTimeout(()=>{
card.classList.add("show")
},600)

// envelope fades
setTimeout(()=>{
envelope.style.opacity="0"
},2000)

// open card
setTimeout(()=>{
openCard()
},5000)

}

function openCard(){

cardCover.style.display="none"

cardInside.style.display="flex"

card.style.width="700px"

// REAL confetti using canvas-confetti

confetti({
particleCount: 100,
spread: 70,
origin: { y: 0.6 }
})

}
