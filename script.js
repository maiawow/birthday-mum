const heart = document.getElementById("heart")
const envelope = document.getElementById("envelope")
const flap = document.getElementById("flap")
const card = document.getElementById("card")
const cardCover = document.getElementById("cardCover")
const cardInside = document.getElementById("cardInside")

heart.onclick = function(){

flap.classList.add("open")

setTimeout(function(){
card.classList.add("show")
},600)

setTimeout(function(){
envelope.style.opacity="0"
},2000)

setTimeout(function(){
openCard()
},5000)

}

function openCard(){

cardCover.style.display="none"

cardInside.style.display="flex"

card.style.width="700px"

confetti({
particleCount:100,
spread:70,
origin:{y:0.6}
})

}
