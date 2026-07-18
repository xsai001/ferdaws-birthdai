const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".next");
const startBtn = document.getElementById("startBtn");

const loading = document.getElementById("loading");
const music = document.getElementById("music");
const typing = document.getElementById("typing");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const letter = `

💖 To My Princess 💖

🤍 To My Beautiful Ferdaws 🤍

Happy Birthday, My Love. 🎂❤️

Today is not just your birthday...
Today is the day that the most beautiful girl in the world came into this life, and I'm so grateful that one day our paths crossed.

كل عام وأنتِ بخير يا روحي. 🤍

كنتمنا من الله يحفظك، ويطول فعمرك، ويرزقك الصحة والسعادة، ويحقق ليك جميع أحلامك، وما تشوفي غير الخير.

بغيتك تعرفي بلي وجودك فحياتي هو أجمل حاجة وقعات ليا.

من نهار عرفتك، حياتي تبدلات، وكل نهار كنلقى سبب جديد باش نبتسم.

شكراً لأنك ديماً معايا، وكتخليني نكون أحسن نسخة من راسي.

You are not only my girlfriend...
You are my best friend.
You are my happiness.
You are my peace.
You are my safe place.
And you are the most beautiful part of my life. ❤️

I promise to always stand by your side,
to support you,
to protect your smile,
and to love you with all my heart.

مهما وقع...
غادي نبقى ديماً معاك،
فالفرح قبل الحزن،
وفكل خطوة غادي نكون حداك.

Happy Birthday My Princess 👑🎂❤️

May Allah bless you,
protect you,
and make all your dreams come true.

Always remember...

You are Beautiful. 🌹
You are Amazing. ✨
You are Strong. 💖
You are My Princess. 👑

I Love You Today.
I Love You Tomorrow.
I Love You Forever & Always. 🤍❤️

Forever Yours,

❤️ Tamal ❤️

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

    if (music) {
        music.volume = 0.5;
        music.play().catch(() => {});
    }
});

/* Next */
nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (current < pages.length - 1) {
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
    }, 35);
}
/* ==========================
   FLOATING HEARTS
========================== */

const hearts = ["🤍","❤️","💕","💖","💘","🌸"];

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    heart.style.animationDuration = (5 + Math.random()*3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },8000);

},500);


/* ==========================
   GALLERY LIGHTBOX
========================== */

const gallery = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

const lightImg = document.createElement("img");

lightbox.appendChild(lightImg);

document.body.appendChild(lightbox);

gallery.forEach(img=>{

    img.addEventListener("click",()=>{

        lightImg.src = img.src;

        lightbox.style.display = "flex";

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.style.display = "none";

});


/* ==========================
   NO BUTTON
========================== */

if(noBtn){

    noBtn.addEventListener("mouseover",()=>{

        const x = Math.random()*(window.innerWidth-150);

        const y = Math.random()*(window.innerHeight-80);

        noBtn.style.position="fixed";

        noBtn.style.left=x+"px";

        noBtn.style.top=y+"px";

    });

}


/* ==========================
   YES BUTTON
========================== */

/* ==========================
   YES BUTTON
========================== */

if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        current = pages.length - 1;

        showPage(current);

        finalCelebration();

        if (typeof confetti !== "undefined") {

            confetti({

                particleCount: 500,

                spread: 360,

                startVelocity: 55,

                ticks: 350,

                origin: { y: 0.55 }

            });

        }

    });

}


/* ==========================
   KEYBOARD
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
   BUTTON EFFECT
========================== */

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.animate([

            {transform:"scale(1)"},

            {transform:"scale(.92)"},

            {transform:"scale(1.08)"},

            {transform:"scale(1)"}

        ],{

            duration:300

        });

    });

});


console.log("❤️ Happy Birthday Ferdaws ❤️");
/* ==========================
   FINAL CELEBRATION
========================== */

function finalCelebration() {

    if (typeof confetti === "undefined") return;

    const end = Date.now() + 5000;

    const timer = setInterval(() => {

        if (Date.now() > end) {
            clearInterval(timer);
            return;
        }

        confetti({
            particleCount: 8,
            angle: 60,
            spread: 60,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 8,
            angle: 120,
            spread: 60,
            origin: { x: 1 }
        });

    }, 200);

}
/* ==========================
   EXTRA CONFETTI
========================== */

if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        finalCelebration();

        setTimeout(() => {

            if (typeof confetti !== "undefined") {

                confetti({

                    particleCount: 500,

                    spread: 360,

                    startVelocity: 55,

                    ticks: 350,

                    origin: { y: 0.55 }

                });

            }

        }, 800);

    });

}

/* ==========================
   REPLAY BUTTON
========================== */

const lastPage = pages[pages.length - 1];

if (lastPage) {

    const replay = document.createElement("button");

    replay.innerHTML = "🔄 Replay";

    replay.style.marginTop = "30px";

    replay.onclick = () => {

        current = 0;

        typed = false;

        typing.innerHTML = "";

        showPage(0);

    };

    lastPage.appendChild(replay);

}

/* ==========================
   PAGE ANIMATION
========================== */

pages.forEach(page => {

    page.style.transition = "all .6s ease";

});

/* ==========================
   FINISH
========================== */

console.log("🎉 Premium Version Loaded ❤️");
