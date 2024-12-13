// const main = document.querySelector("main")
// const carte = document.querySelectorAll(".card")
// const countsPerRow = ()=>{
//     const main  = document.querySelector("main")
//     const cards = document.querySelectorAll(".card")
//     let rows = 0;
//     let previousTop = null;
//     let countInCurrentRow = 0;
//     let counts = [];

//     cards.forEach(card =>{
//         const currentTop = card.getBoundingClientRect().top;

//         if(previousTop === null || currentTop === previousTop){
//             countInCurrentRow++;
//         }
//         else{
//             counts.push(countInCurrentRow);
//             countInCurrentRow = 1;
//             rows++
//         }
//         previousTop = currentTop;
//     })
//     if(countInCurrentRow>0){
//         counts.push(countInCurrentRow)
//     }
//     return counts[0]
// }

// const getElementInLastRow = ()=>{
//     const container = document.querySelector("main")
//     const cartes = document.querySelectorAll(".card")
//     let previousTop = null;
//     let currentRowElements = [];
//     let lastRow = [];
//     cartes.forEach(carte=>{
//         const currentTop = carte.getBoundingClientRect().top;
//         if(previousTop === null || currentTop === previousTop){
//             currentRowElements.push(carte)
//         }
//         else{
//             lastRow = currentRowElements;
//             currentRowElements = [carte]
//         }
//         previousTop = currentTop;
//     })
//     lastRow = currentRowElements;
//     let lastRowWidth = 0;
//     lastRow.forEach(card=>{
//         lastRowWidth += card.offsetWidth + parseInt(getComputedStyle(card).marginLeft)
//     })
//     const containerWidth = container.offsetWidth
//     const spaceAvalaible = containerWidth - lastRowWidth
//     lastRow.forEach((card, index)=>{
//         if(index !==0){
//             marginLeft += parseInt(getComputedStyle(lastRow[index - 1].marginLeft))
//         }
//         card.style.marginLeft = `${marginLeft}px`
//         card.style.backgroundColor
//     })
//     return lastRow
// }

// window.addEventListener("resize", ()=>{
//     getElementInLastRow()
// })
// document.addEventListener("DOMContentLoaded", getElementInLastRow)