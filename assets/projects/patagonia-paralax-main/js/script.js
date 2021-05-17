const rellax = new Rellax(".rellax") 

//-------------------------------------------//

const img = document.querySelectorAll(".card")
const fechar = document.querySelector("close")
const modal = document.querySelector(".modal")
const imgModal = document.querySelector(".img-modal")
let srcValor = ""

for(let i =0; i < img.length;i++){
    img[i].addEventListener("click",()=>{
        modal.style.display="block"
    })
}


const target = document.querySelectorAll('[data-anime]')
const animeteClass = "animate"

function animeteScroll() {
    const windowTop = pageYOffset + ((window.innerHeight*3)/4);
    target.forEach((e) => {
        
        if(windowTop > e.offsetTop){
            e.classList.add(animeteClass)
        }
    })
}

window.addEventListener("scroll",() => {
    animeteScroll();
})

 

