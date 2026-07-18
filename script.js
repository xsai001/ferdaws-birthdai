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
كنتمنا من الله يحفظك، ويرزقك الصحة والسعادة، ويحقق ليك كل أمنية كتخبيها فقلبك.

بغيتك تعرفي بلي وجودك فحياتي هو أحسن حاجة وقعات ليا.
من نهار عرفتك، حياتي تبدلات، وكل نهار كنلقى سبب جديد باش نبتسم.

Thank you for every smile you gave me.
Thank you for every moment we shared.
Thank you for being part of my life.

كنبغيك بزاف، أكثر مما تقدر الكلمات توصف.
وكل نهار كنكتاشف بلي حبي ليك كيكبر أكثر وأكثر.

You're not only my girlfriend...
You're my best friend,
my happiness,
my peace,
my safe place,
and the most beautiful chapter of my life. ❤️

I promise I'll always stand by your side,
support you,
protect your smile,
and love you with all my heart.

مهما وقع...
غادي نبقى ديماً معاك،
فالفرح قبل الحزن،
وفكل خطوة غادي نكون حداك.

Happy Birthday My Princess 👑🎂❤️

May Allah bless you,
protect you,
and make all your dreams come true.

Never forget...

You are Beautiful. 🌹
You are Amazing. ✨
You are Strong. 💖
And you will always be My Princess. 👑

I Love You Today.
I Love You Tomorrow.
I Love You Forever & Always. 🤍❤️

Forever Yours,
❤️ Tamal ❤️

`;
`;

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
