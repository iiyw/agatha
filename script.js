function abrirCarta(){

document.getElementById("wrapper").classList.add("open")

for(let i=0;i<30;i++){

criarCoracao()

}

}

function criarCoracao(){

const heart=document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

heart.style.animationDuration=(3+Math.random()*3)+"s"

heart.style.fontSize=(16+Math.random()*20)+"px"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},6000)

}

setInterval(criarCoracao,400)
