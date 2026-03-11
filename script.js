const heart = document.getElementById("heart")
const envelope = document.getElementById("envelope")
const flap = document.getElementById("flap")
const card = document.getElementById("card")
const cardCover = document.getElementById("cardCover")
const cardInside = document.getElementById("cardInside")

heart.onclick = function(){

flap.classList.add("open")

setTimeout(()=>{

card.classList.add("show")

},600)

setTimeout(()=>{

envelope.style.opacity="0"

},2000)

setTimeout(()=>{

openCard()

},5000)

}

function openCard(){

cardCover.style.display="none"

cardInside.style.display="flex"

card.style.width="700px"

confetti()

}

function confetti(){

const container=document.getElementById("confetti")

for(let i=0;i<50;i++){

let piece=document.createElement("div")

piece.className="confetti"

piece.style.left=Math.random()*700+"px"

piece.style.backgroundColor=["red","blue","yellow","pink","purple","orange"][Math.floor(Math.random()*6)]

container.appendChild(piece)

}

}
