const blobEl = document.querySelector(".blobWrapper")
const openBtn = document.querySelector(".openBtn")
const closeBtn = document.querySelector(".closeBtn")

let blob2 = `M29.0001 254C-38.1999 174 45.0001 32 97.0001 20C217 -34 256.881 44 341 44C437 44 463 -42 591 44C719 130 547 298 591 408C629.625 504.562 455 438 387 438C300.467 438 237 562 157 542C77.0001 522 24.2525 484.474 4.99993 428C-25 340 113 354 29.0001 254Z`
let blob3 = `M1.99989 275C17.9999 191 -56.0001 65 136 17C282 -19.5001 282 71 356 31C430 -9 488 -21 616 65C744 151 689.539 359.461 616 433C524 525 502 417 426 433C341.323 450.827 282 603 202 583C122 563 151.501 516.412 146 457C136 349 -14.3165 360.661 1.99989 275Z`
let blob0 = `M20 278C-47.2 198 73 136 125 156C275 184 236 52 310 12C384 -28 490 38 618 124C746 210 578 250 618 346C658 442 548 480 500 552C452 624 228 586 148 566C68 546 86 466 132 428C178 390 104 378 20 278Z`

gsap.set(".blob0", {transformOrigin: "50% 50%"})

const tl = gsap.timeline({
        paused:true
})


tl.to(".blob0", {attr: {d: blob2}, duration: 1}, "<10%")
    .to(".blob0", {attr: {d: blob3}, duration: 1, scale:1.5, rotate:25}, "<10%")
    .to(".blob0", {attr: {d: blob0}, duration: 1, scale:3, x:-20, rotate:25})

openBtn.addEventListener("click", ()=>{
    tl.play()
    openBtn.classList.add("hide")
    closeBtn.classList.remove("hide")
})
closeBtn.addEventListener("click", ()=>{
    tl.reverse()
    openBtn.classList.remove("hide")
    closeBtn.classList.add("hide")
})