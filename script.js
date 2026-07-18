const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".next");
const startBtn = document.getElementById("startBtn");

const loading = document.getElementById("loading");
const music = document.getElementById("music");
const typing = document.getElementById("typing");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const letter = `

بنتي الحبيبة 🤍

Happy Birthday My Princess ❤️

كنتمنا ليك الصحة والسعادة وتحقيق جميع أحلامك.

شكراً لأنك ديماً معايا.

I Love You Forever ❤️

`;

let current = 0;
let typed = false;

/* Loading */
window.addEventListener("load", () => {
    setTimeout(() => {
        loading.style.display = "none";
    }, 2000);
});

/* Show Pages */
function showPage(index) {

    pages.forEach(page => page.classList.remove("active"));

    pages[index].classList.add("active");

    if (index === 1) {
        typeLetter();
    }
}

/* Start */

startBtn.addEventListener("click", () => {

    current = 1;

    showPage(current);

    music.volume = 0.5;

    music.play().catch(() => {});

});

/* Next */

nextBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        if (current < pages.length - 2) {

            current++;

            showPage(current);

        }

    });

});

/* Typing */

function typeLetter() {

    if (typed) return;

    typed = true;

    let i = 0;

    const timer = setInterval(() => {

        typing.innerHTML += letter.charAt(i);

        i++;

        if (i >= letter.length) {

            clearInterval(timer);

        }

    }, 40);

}

/* Hearts */

const hearts = ["🤍","❤️","💕","💖","🌸"];

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (20+Math.random()*20)+"px";

    heart.style.animationDuration = (5+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),8000);

},500);

/* Lightbox */

const imgs = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

const big = document.createElement("img");

lightbox.appendChild(big);

document.body.appendChild(lightbox);

imgs.forEach(img=>{

    img.onclick=()=>{

        big.src=img.src;

        lightbox.style.display="flex";

    }

});

lightbox.onclick=()=>{

    lightbox.style.display="none";

}

/* NO Button */

noBtn.addEventListener("mouseover",()=>{

    const x=Math.random()*(window.innerWidth-150);

    const y=Math.random()*(window.innerHeight-80);

    noBtn.style.position="fixed";

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

});

/* YES Button */

yesBtn.addEventListener("click",()=>{

    confetti({

        particleCount:400,

        spread:180,

        origin:{y:.6}

    });

    current=5;

    showPage(current);

});

/* Keyboard */

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        if(current<pages.length-2){

            current++;

            showPage(current);

        }

    }

    if(e.key==="ArrowLeft"){

        if(current>0){

            current--;

            showPage(current);

        }

    }

});

console.log("Happy Birthday ❤️");
