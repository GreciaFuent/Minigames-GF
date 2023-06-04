const li_ppt = document.querySelector(".ppt")
const li_buscaminas = document.querySelector(".buscaminas")
const li_totito = document.querySelector(".totito")
const li_chistes = document.querySelector(".chistes")
const svg_btn = document.querySelector(".svg_btn")
const svg_btn1 = document.querySelector(".svg_btn1")
const svg_btn2 = document.querySelector(".svg_btn2")
const svg_btn3 = document.querySelector(".svg_btn3")

li_ppt.addEventListener("click",()=> {
    const modal = document.querySelector(".modal")
    
    modal.style.display = "block"
})


svg_btn.addEventListener("click", ()=> {
    const modal = document.querySelector(".modal")
    
    modal.style.display = "none"
})

li_buscaminas.addEventListener("click",()=> {
    const modal = document.querySelector(".modal_buscaminas")
    
    modal.style.display = "block"
})

li_totito.addEventListener("click",()=> {
    const modal = document.querySelector(".modal_totito")
    
    modal.style.display = "block"
})

li_chistes.addEventListener("click",()=> {
    const modal = document.querySelector(".modal_chistes")
    
    modal.style.display = "block"
})



svg_btn1.addEventListener("click", ()=> {
    const modal = document.querySelector(".modal_buscaminas")
    
    modal.style.display = "none"
})

svg_btn2.addEventListener("click", ()=> {
    const modal = document.querySelector(".modal_totito")
    
    modal.style.display = "none"
})

svg_btn3.addEventListener("click", ()=> {
    const modal = document.querySelector(".modal_chistes")
    
    modal.style.display = "none"
})