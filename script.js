let game = document.getElementsByClassName("game")[0];
let polisorb = document.getElementsByClassName("polisorb")[0]
let rybashka = "galaktika-fonari.jpg"
let sila = "i (2).webp"
let zagolovok = document.getElementsByClassName("zagolovok")[0]
let counter = 0
let steps = 0
let images = []
let winsCounter = 0
let openedimages = []
for (let i = 0; i < 12; i = i + 1) {
    images.push("i (" + i + ").webp")
    images.push("i (" + i + ").webp")
}
for (let i = images.length - 1; i > 0; i = i - 1) {
    let random = Math.floor(Math.random() * (i + 1))
    let vremenna9 = images[i]
    images[i] = images[random]
    images[random] = vremenna9
}
console.log(images);
for (let i = 0; i < 24; i = i + 1) {
    // console.log(i);
    let img = document.createElement("img")
    img.src = rybashka
    game.appendChild(img)
    img.onclick = function (event) {
        // console.log(img.src);

        if (img.src.includes(rybashka)) {
            openedimages.push(img)
            img.style.pointerEvents = "none"
            counter = counter + 1
            flipImage(event.target, images[i])
            // console.log(openedimages);
            if (counter == 2) {
                counter = 0
                steps = steps + 1
                console.log(openedimages[0].src)
                
                if (openedimages[0].src == openedimages[1].src) {
                    // console.log("картинки совпали"
                    
                    winsCounter = winsCounter + 1
                    if(openedimages[0].src.includes("11") && openedimages[1].src.includes("11") && winsCounter==1){
                        zagolovok.innerHTML = "Кони в сборе"
                    }
                    openedimages = []
                    if (winsCounter == 12) {
                        zagolovok.innerHTML = "Победа"
                        polisorb.innerHTML = "Попытки" + steps
                    }
                }
                else {
                    // console.log("картинки не совпали");
                    let cards = document.getElementsByTagName("img")
                    for (let i = 0; i < 24; i = i + 1) {
                        cards[i].style.pointerEvents = "none"
                    }
                    setTimeout(function () {
                        openedimages[0].src = rybashka
                        openedimages[1].src = rybashka
                        openedimages = []
                        for (let i = 0; i < 24; i = i + 1) {
                            if (cards[i].src.includes(rybashka)) {

                                cards[i].style.pointerEvents = "auto"
                            }
                        }
                    }, 1000)

                }
            }
        }
    }
}

function flipImage(img, src) {
    img.src = src
}
zagolovok.onclick = function (event) {
    for (let i = 0; i < 24; i = i + 1) {
        let img = document.getElementsByTagName("img")[i]
        if (!img.src.includes(rybashka)) {
            console.log(1, img.src, rybashka);
            img.src = sila
        }
    }
}
console.log(rybashka[7]);
console.log(images[23]);
if(images[23] === "i (7).webp"){
    zagolovok.innerHTML = "Анонимус"
}