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

اليوم هو نهارك وكنتمنا ليك حياة كلها سعادة.

شكراً لأنك ديماً معايا.

Happy Birthday My Princess ❤️

I Love You Forever.

`;

let current = 0;



window.addEventListener("load",()=>{

setTimeout(()=>{

loading.style.display="none";

},2500);

});



function showPage(index){

pages.forEach(page=>page.classList.remove("active"));

pages[index].classList.add("active");



if(index===1){

typeLetter();

}

}



startBtn.addEventListener("click",()=>{

current=1;

showPage(current);



music.play().catch(()=>{});

});



nextBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

current++;

if(current>=pages.length){

current=pages.length-1;

}

showPage(current);

});

});



let typed=false;

function typeLetter(){

if(typed) return;

typed=true;



let i=0;



const timer=setInterval(()=>{

typing.innerHTML+=letter.charAt(i);

i++;

if(i>=letter.length){

clearInterval(timer);

}

},40);

}
/* ==========================
   FLOATING HEARTS
========================== */

const hearts = ["🤍","💖","💕","💗","💘","🌸"];

setInterval(()=>{

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},500);


/* ==========================
   GALLERY LIGHTBOX
========================== */

const gallery=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

const lightImg=document.createElement("img");

lightbox.appendChild(lightImg);

document.body.appendChild(lightbox);

gallery.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});


/* ==========================
   NO BUTTON ESCAPE
========================== */

if(noBtn){

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*(window.innerWidth-150);

const y=Math.random()*(window.innerHeight-80);

noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

});

}


/* ==========================
   YES BUTTON
========================== */

if(yesBtn){

yesBtn.addEventListener("click",()=>{

if(typeof confetti!=="undefined"){

confetti({

particleCount:300,

spread:180,

origin:{y:.6}

});

}

current=pages.length-1;

showPage(current);

});

}
/* ==========================
   FINAL EFFECTS
========================== */

function finalCelebration(){

    if(typeof confetti === "undefined") return;

    const duration = 5000;
    const end = Date.now() + duration;

    const timer = setInterval(()=>{

        if(Date.now() > end){
            clearInterval(timer);
            return;
        }

        confetti({
            particleCount:6,
            angle:60,
            spread:60,
            origin:{x:0}
        });

        confetti({
            particleCount:6,
            angle:120,
            spread:60,
            origin:{x:1}
        });

    },200);

}


/* ==========================
   EXTRA CONFETTI
========================== */

if(yesBtn){

    yesBtn.addEventListener("click",()=>{

        finalCelebration();

        setTimeout(()=>{

            confetti({

                particleCount:500,

                spread:360,

                startVelocity:55,

                ticks:350,

                origin:{y:.55}

            });

        },800);

    });

}


/* ==========================
   PAGE TRANSITIONS
========================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        if(current<pages.length-1){

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


/* ==========================
   SMALL CLICK EFFECT
========================== */

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.animate([

            {transform:"scale(1)"},

            {transform:"scale(.9)"},

            {transform:"scale(1.08)"},

            {transform:"scale(1)"}

        ],{

            duration:300

        });

    });

});


/* ==========================
   END
========================== */

console.log("❤️ Happy Birthday Ferdaws ❤️");
