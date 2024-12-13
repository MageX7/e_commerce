const main = document.querySelector("main")

const formateNumber = (number)=>{
    let numberStr = number.toString();
    let parts = numberStr.split('.');
    let integerPart = parts[0];
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return formattedIntegerPart
}

sessionStorage.setItem("bonjour", "bonjour")
const AjoutAuPanier = (mon_panier, carte, bouton, div)=>{
    
    bouton.addEventListener("click",()=>{
        let non_present = mon_panier.some(ma_carte=>{
            if(ma_carte.produit.id === carte.id){
                return true
            }
            else{
                return false
            }
        })
        if(!non_present){
            const div_panier = document.createElement("div")
            div_panier.classList.add("au-panier")
            div_panier.innerHTML = `<i class="fas fa-shopping-cart" id="panier"></i>`
            const notif_rouge = document.createElement("div")
            notif_rouge.classList.add("notif_rouge")
            notif_rouge.innerText = `${carte.nombre}`
            div_panier.appendChild(notif_rouge)
            div.appendChild(div_panier)
            mon_panier.push({produit: carte, div: div})
        }
        else if(carte.nombre < carte.stock){
            const notif_rouge = div.children[3].children[1]
            carte.nombre += 1
            notif_rouge.innerText = `${carte.nombre}`
        }
        if(carte.nombre === carte.stock){
            div.children[2].innerHTML =`
                <div>
                    <p id="stock"><i class="fas fa-box"></i><span>${carte.stock}</span></p>
                    <p id="prix"></i><span>${formateNumber(carte.prix)}</span>Ar</p>
                </div>
                <button class="disabled">Limite atteinte</button></div>
            `
        }
        
    })       
}

const render = (liste, mon_panier)=>{
    main.innerHTML = ""
    liste.forEach(carte=>{
        const div = document.createElement("div")
        div.classList.add("card")
        div.id = `card${carte.id}`
        div.innerHTML = ''
        if(carte){
            const infos = document.createElement("div")
            infos.classList.add("infos")
            infos.innerHTML = `
                    <div>
                        <p id="stock"><i class="fas fa-box"></i><span>${carte.stock}</span></p>
                        <p id="prix"></i><span>${formateNumber(carte.prix)}</span>Ar</p>
                    </div>
                `
            const bouton = document.createElement("button")
            bouton.innerText = "Ajouter au panier"
            infos.appendChild(bouton)

            div.innerHTML = `
                <div class="titre">
                    <h2>${carte.marque.toUpperCase()}</h2>
                    <p>${carte.version}</p>
                </div>
                <div class="image">
                    <img src="./Instruments/${carte.image}" alt="clavier">
                </div>
            `
            div.appendChild(infos)
            main.appendChild(div)
            
            let present = mon_panier.some(ma_carte=>{
                if(ma_carte.produit.id === carte.id){
                    return true
                }
                else{
                    return false
                }
            })
            if(present && mon_panier.length !==0){
                const div_panier = document.createElement("div")
                div_panier.classList.add("au-panier")
                div_panier.innerHTML = `<i class="fas fa-shopping-cart" id="panier"></i>`
                const notif_rouge = document.createElement("div")
                notif_rouge.classList.add("notif_rouge")
                notif_rouge.innerText = `${carte.nombre}`
                div_panier.appendChild(notif_rouge)
                div.appendChild(div_panier)
            }
            
            if(carte.nombre === carte.stock && present){
                div.children[2].innerHTML =`
                <div>
                    <p id="stock"><i class="fas fa-box"></i><span>${carte.stock}</span></p>
                    <p id="prix"></i><span>${formateNumber(carte.prix)}</span>Ar</p>
                </div>
                    <button class="disabled">Limite atteinte</button></div>
                `
            }
            AjoutAuPanier(mon_panier, carte, bouton, div)
        }
    })
}


// fetch("http://localhost:8080/produits", {
//     method: "GET"
// })
// .then(async res=>{
// if(res.ok){
// reponses = await res.json()
// let data = reponses.data
// --------------------------------------------------------------------------------
// data.forEach(produit=>{
//     const carte = {
//         id: produit.id,
//         marque: produit.marque,
//         version: produit.version,
//         prix: parseInt(produit.prix),
//         categorie: produit.categorie,
//         image: ``
//     }
// })
const liste = [
    {id:1,marque:"yamaha", version:"CK61", prix:1500000 , categorie: "Synthétiseur", image:"clavier1.webp", nombre:1, stock:1},
    {id:2,marque:"rolland", version:"Fantom Ex", prix:1500000 , categorie: "Synthétiseur", image :"clavier2.webp", nombre:1, stock:10},
    {id:3,marque:"M-audio", version:"Mk2-HD", prix:1500000 , categorie: "Carte son",image:"carte2.png", nombre:1, stock:9},
    {id:4,marque:"rolland", version:"GO Keys", prix:500000, categorie: "Synthétiseur",image:"clavier3.webp", nombre:1, stock:1},
    {id:5,marque:"Yamaha", version:"MG06", prix:2000000 , categorie: "table",image:"table.png", nombre:1, stock:5},
    {id:6,marque:"Gibson", version:"", prix:1500000 , categorie: "Guitare",image:"guitare1.webp", nombre:1, stock:3},
    {id:7,marque:"yamaha", version:"DTX Drums", prix:1500000 , categorie: "Batterie",image:"batterie3.webp", nombre:1, stock:7},
    {id:8,marque:"yamaha", version:"DTX Drums", prix:1500000 , categorie: "Batterie",image:"batterie3.webp", nombre:1, stock:7},
    {id:9,marque:"yamaha", version:"DTX Drums", prix:1500000 , categorie: "Batterie",image:"batterie3.webp", nombre:1, stock:7},
    {id:10,marque:"Tama", version:"", prix:1500000 , categorie: "Batterie",image:"batterie1.webp", nombre:1, stock:8},
    {id:11,marque:"Marshall", version:"DSL 5", prix:1500000 , categorie: "Amplificateur",image:"ampli1.webp", nombre:1, stock:3},
    {id:12,marque:"Marshall", version:"DSL 5", prix:1500000 , categorie: "Amplificateur",image:"ampli1.webp", nombre:1, stock:3},
    {id:13,marque:"Marshall", version:"DSL 5", prix:1500000 , categorie: "Amplificateur",image:"ampli1.webp", nombre:1, stock:3},
    {id:14,marque:"Marshall", version:"DSL 5", prix:1500000   , categorie: "Amplificateur",image:"ampli1.webp", nombre:1, stock:3},
]


let mon_panier = JSON.parse(localStorage.getItem("mon_panier"))
if(mon_panier === null){
    mon_panier = []
}
liste.forEach(prod=>{
    mon_panier.forEach(prod_pan=>{
        if(prod_pan.produit.id === prod.id){
            prod.nombre = prod_pan.produit.nombre
        }
    })
})
render(liste, mon_panier)


const search = document.querySelector(".search")

const search_input = search.children[0].children[1].children[1]
const search_reset = search.children[0].children[1].children[2]

search_input.addEventListener("input", e=>{
    if(e.target.value !== ""){
        search_reset.id = "visible"
    }
    else{
        search_reset.id = "reset"
    }
})
search_reset.addEventListener("click", e=>{
    e.preventDefault()
    search_input.value = ""
    search_reset.id = "reset"
})

search.children[0].addEventListener("submit", e=>{
    e.preventDefault()
    if(e.target[2].value !== ""){
        const liste_search = []
        liste.forEach(carte=>{
            if(carte[e.target[0].value].toString().toUpperCase() === e.target[2].value.toUpperCase()){
                liste_search.push(carte)
            }
        })
        if(liste_search.length !==0){
            render(liste_search, mon_panier)
        }
        else{
            const div_not_found = document.createElement("div")
            div_not_found.classList.add("not-found")
            div_not_found.innerHTML = `
                <p>Aucun produit correspondant n'a été trouvé !!</p>
                <button>Ok</button>
            `
            const ok_not_found = (modal)=>{
                div_not_found.children[1].addEventListener("click",()=>{
                    const body = document.querySelector("body")
                    body.removeChild(modal)
                })
            }
            addModalContent(div_not_found, ok_not_found)
            div_not_found.children[1].focus()
        }
    }
    else{
        render(liste, mon_panier)
    }
})


const panier = document.getElementById("panier")
 
panier.addEventListener("click",()=>{
    const div = document.createElement("div")
    div.classList.add("panier")
    div.innerHTML = `
        <h1>Mon Panier</h1>
        <div class="table-panier">
        <table>
            <thead>
                <tr>                    
                    <th>Produit</th>
                    <th>Prix et Quantité</th>
                    <th class="suppr_produit_panier">Suppression</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        </div>
    `
    const liste_produit = document.createElement("div")
    liste_produit.classList.add("liste_produit")
    if(mon_panier.length !==0){
        let prix_total = 0
        mon_panier.forEach(produit=>{
            const bouton_suppr = document.createElement("i")
            bouton_suppr.classList.add("fa")
            bouton_suppr.classList.add("fa-times")
            const ligne = document.createElement("tr")
            ligne.innerHTML += `
                <td>
                    <div class="produit_panier">
                        <div>
                            <img src="./Instruments/${produit.produit.image}">
                        </div>
                        <div>
                            <h3>${produit.produit.marque}</h3>
                            <p>${produit.produit.version}</p>
                        </div>
                    </div>
                </td>
                <td class="quantite-prix" id="col${produit.produit.id}">
                    <div id="quantite">
                        <button id="moins${produit.produit.id}">-</button>
                        <span>${produit.produit.nombre}</span>
                        <button id="plus${produit.produit.id}">+</button>
                    </div>
                    <span>${formateNumber(produit.produit.nombre*produit.produit.prix)}Ar</span>
                </td>
                <td class="suppr_produit_panier"></td>
            `
            ligne.children[2].appendChild(bouton_suppr)
            div.children[1].children[0].children[1].appendChild(ligne)
            prix_total += produit.produit.nombre*produit.produit.prix
            
            const td_quantite = ligne.children[1].children[0]
            if(produit.produit.nombre === 1){
                td_quantite.children[0].classList.add("disabled")
            }
            if(produit.produit.nombre === produit.produit.stock){
                td_quantite.children[2].classList.add("disabled")
            }
            
            td_quantite.children[0].addEventListener("click",()=>{
                const moins = document.getElementById(`moins${produit.produit.id}`)
                const plus = document.getElementById(`plus${produit.produit.id}`)
                const div_carte = document.getElementById(`card${produit.produit.id}`)
                if(produit.produit.nombre >2){
                    plus.classList.remove("disabled")
                    moins.classList.remove("disabled")
                    produit.produit.nombre -= 1
                    ligne.children[1].children[1].innerText = `${formateNumber(produit.produit.nombre*produit.produit.prix)}Ar`
                    td_quantite.children[1].innerText = `${produit.produit.nombre}`
                    try{
                        const bout_carte = div_carte.children[2].children[1]
                        bout_carte.classList.remove("disabled")
                        bout_carte.innerText = "Ajouter au panier"
                    }
                    catch{}
                }
                else if(produit.produit.nombre > 1){
                    produit.produit.nombre -= 1
                    ligne.children[1].children[1].innerText = `${formateNumber(produit.produit.nombre*produit.produit.prix)}Ar`
                    td_quantite.children[1].innerText = `${produit.produit.nombre}`
                    moins.classList.add("disabled")
                }
                try{
                    const aupanier = div_carte.children[3].children[1]
                    aupanier.innerText = `${produit.produit.nombre}`
                }
                catch{}
                
            })
            td_quantite.children[2].addEventListener("click",()=>{
                const moins = document.getElementById(`moins${produit.produit.id}`)
                const plus = document.getElementById(`plus${produit.produit.id}`)
                const div_carte = document.getElementById(`card${produit.produit.id}`)
                if(produit.produit.nombre < produit.produit.stock-1){
                    moins.classList.remove("disabled")
                    plus.classList.remove("disabled")
                    produit.produit.nombre += 1
                    ligne.children[1].children[1].innerText = `${formateNumber(produit.produit.nombre*produit.produit.prix)}Ar`
                    td_quantite.children[1].innerText = `${produit.produit.nombre}`
                }
                else if(produit.produit.nombre < produit.produit.stock){
                    produit.produit.nombre += 1
                    ligne.children[1].children[1].innerText = `${formateNumber(produit.produit.nombre*produit.produit.prix)}Ar`
                    td_quantite.children[1].innerText = `${produit.produit.nombre}`
                    plus.classList.add("disabled")
                    try{
                        const bout_carte = div_carte.children[2].children[1]
                        bout_carte.classList.add("disabled")
                        bout_carte.innerText="Limite atteinte"
                    }
                    catch{}
                }              
                try{
                    const aupanier = div_carte.children[3].children[1]
                    aupanier.innerText = `${produit.produit.nombre}`
                }
                catch{}
            })


            bouton_suppr.addEventListener("click", ()=>{
                const div_confirm = document.createElement("div")
                div_confirm.classList.add("confirm-suppr")
                div_confirm.innerHTML = `
                    <p>Voulez vous vraiment retirer ce produit du panier ? <p>
                    <div id="confirmation">
                        <button id="oui">Oui</button>
                        <button id="non">Non</button>
                    </div>
                `
                const confirmation = (modal_confirm)=>{
                    div_confirm.children[2].children[1].addEventListener("click", ()=>{
                        body.removeChild(modal_confirm)
                    })
                    div_confirm.children[2].children[0].addEventListener("click", ()=>{
                        let index = mon_panier.findIndex(mon_produit=>{
                            return mon_produit.produit.id  === produit.produit.id 
                        })
                        if(index !== -1){
                            
                            mon_panier.splice(index, 1);
                        }
                        const div_notif = document.createElement("div")
                        div_notif.classList.add("notif")
                        div_notif.innerHTML = "<p>Produit retiré</p><button>OK</button>"
                        const ok = (mon_modal)=>{
                            div_notif.children[1].addEventListener("click",()=>{
                                const modals = document.querySelectorAll(".modal")
                                try{
                                    produit.div.removeChild(produit.div.children[3])
                                }
                                catch{}
                                produit.produit.nombre = 1
                                const my_div = document.querySelector(`#card${produit.produit.id}`)
                                const my_div_panier = document.querySelector(`#card${produit.produit.id} .au-panier`)
                                try{
                                    my_div.removeChild(my_div_panier)
                                }
                                catch{}
                                const carte = produit.produit
                                my_div.children[2].innerHTML =`
                                    <div>
                                        <p id="stock"><i class="fas fa-box"></i><span>${carte.stock}</span></p>
                                        <p id="prix"></i><span>${formateNumber(carte.prix)}</span>Ar</p>
                                    </div>
                                    <button>Ajouter au panier</button></div>
                                `
                                const button = my_div.children[2].children[1]
                                AjoutAuPanier(mon_panier, carte, button, my_div)
                                modals.forEach(modal=>{
                                    body.removeChild(modal)
                                })
                            })
                        }
                        addModalContent(div_notif, ok)
                    })
                }
                addModalContent(div_confirm, confirmation)   
            })
        })
        const div_prix_total = document.createElement("div")
        div_prix_total.classList.add("prix-total")
        div_prix_total.innerHTML = `<span>Prix Total : ${formateNumber(prix_total)}Ar</span>  <button>Valider l'achat</button>`
        div_prix_total.children[1].addEventListener("click",()=>{
            const div_ok = document.createElement("div")
            div_ok.classList.add("achat-valide")
            div_ok.innerHTML = `
                <p>Vos achats ont été validé</p>
                <button>Ok</button>
            `
            div_ok.children[1].addEventListener("click",()=>{
                localStorage.clear()
                window.location.reload()
            })
            addModalContent(div_ok)
        })
        div.appendChild(div_prix_total)
    }
    else{
        div.removeChild(div.children[1])
        const vide = document.createElement("div")
        vide.classList.add("vide")
        vide.innerHTML = "<p>Vide pour le moment</p>"
        div.appendChild(vide)
    }
    addModalContent(div)
})



if(sessionStorage.getItem("link")){
    sessionStorage.setItem("link", false)
    localStorage.clear()
}
const mon_lien = document.querySelector("#aller_vers_accueil")
mon_lien.addEventListener("click", e=>{
    mon_panier.forEach(prod_pan=>{
        liste.forEach(prod=>{
            if(prod_pan.produit.id === prod.id){
                prod_pan.produit.nombre = prod.nombre
            }
        })
    })
    localStorage.clear()
    localStorage.setItem("mon_panier", JSON.stringify(mon_panier))
    sessionStorage.setItem("link", true)
})
// --------------------------------------------------------------------
// }
// else{
// }
// })
// .catch(erreur=>{
// })
