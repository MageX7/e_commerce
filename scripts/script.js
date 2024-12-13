const body = document.querySelector("body")
const image1 = document.querySelector(".im1")
const image2 = document.querySelector(".im3")
const liens = document.querySelectorAll("nav ul li a")
const sections = document.querySelectorAll("main section")
const nav = document.querySelector("nav")
const nav_ul = document.querySelector("nav ul")

const mon_panier = JSON.parse(localStorage.getItem("mon_panier"))

if(sessionStorage.getItem("link")){
    sessionStorage.setItem("link", false)
    localStorage.clear()
}
const lien = document.querySelector("#aller_au_shop")
lien.addEventListener("click",()=>{
    localStorage.clear()
    sessionStorage.setItem("link", true)
    localStorage.setItem("mon_panier",JSON.stringify(mon_panier))
})
const MajLienCourant =()=>{
    const scrollPos = window.scrollY

    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollPos >= sectionTop - (sectionHeight-150)/2 && scrollPos < sectionTop + sectionHeight + sectionHeight/4){
            liens.forEach(lien=>{
                lien.classList.remove("active");
                if(lien.getAttribute("href") === `#${section.id}`){
                    lien.classList.add("active")
                }
            })
        }
    })
}
MajLienCourant()

const form_contact = document.querySelector("#form_contact")
form_contact.addEventListener("submit",()=>{
    window.location.hash = "accueil"
    window.location.reload()
})
window.addEventListener("scroll",MajLienCourant)
