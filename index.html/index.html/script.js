document.addEventListener("DOMContentLoaded", function () {
    /** 🌟 Twinkling Stars **/
    const starContainer = document.createElement("div");
    starContainer.id = "star-container";
    document.body.appendChild(starContainer);

    for (let i = 0; i < 150; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        let sizeClass = Math.random() > 0.6 ? "large" : (Math.random() > 0.3 ? "medium" : "small");
        star.classList.add(sizeClass);

        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        starContainer.appendChild(star);
    }

    /** ✨ Special Stars from Kolkata & Jalpaiguri **/
    let kolkataStar = document.createElement("div");
    let jalpaiguriStar = document.createElement("div");

    kolkataStar.classList.add("special-star");
    jalpaiguriStar.classList.add("special-star");

    kolkataStar.style.left = "80vw"; // Kolkata position
    kolkataStar.style.top = "70vh";

    jalpaiguriStar.style.left = "10vw"; // Jalpaiguri position
    jalpaiguriStar.style.top = "30vh";

    document.body.appendChild(kolkataStar);
    document.body.appendChild(jalpaiguriStar);

    setTimeout(() => {
        kolkataStar.style.transform = "translate(-35vw, -20vh)";
        jalpaiguriStar.style.transform = "translate(35vw, 20vh)";
    }, 2000);

    setTimeout(() => {
        kolkataStar.remove();
        jalpaiguriStar.remove();
        let loveHeart = document.createElement("div");
        loveHeart.className = "love-heart";
        loveHeart.innerHTML = "❤";
        loveHeart.style.left = "50vw";
        loveHeart.style.top = "50vh";
        document.body.appendChild(loveHeart);
    }, 4000);

    /** 🎆 Fireworks Effect **/
    function createFirework() {
        let firework = document.createElement("div");
        firework.className = "firework";
        document.body.appendChild(firework);
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 50 + 25}%`;

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }
    setInterval(createFirework, 3000);

    /** 💕 Floating Hearts **/
    setInterval(() => {
        let heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.innerHTML = "💖";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animation = "floatHeart 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 1200);

    /** 💫 Meteor Shower Effect **/
    const meteorContainer = document.createElement("div");
    meteorContainer.id = "meteor-container";
    document.body.appendChild(meteorContainer);

    function createMeteor() {
        let meteor = document.createElement("div");
        meteor.className = "meteor";
        meteor.style.left = `${Math.random() * 100}vw`;
        meteor.style.top = `${Math.random() * 30}vh`;
        meteorContainer.appendChild(meteor);

        setTimeout(() => {
            meteor.remove();
        }, 3000);
    }
    setInterval(createMeteor, 2500);

    /** ⏳ Anniversary Countdown **/
    function updateCountdown() {
        const anniversary = new Date("April 1, 2025").getTime();
        const now = new Date().getTime();
        const difference = anniversary - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerText = `💘 ${days} Days Until Our Anniversary 💘`;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    /** 💌 Love Letter Typing Animation **/
    const letterText = "From the first moment I met you, I knew you were special. Every moment with you is magical. I love you forever. 💖";
    let i = 0;
    function typeLoveLetter() {
        if (i < letterText.length) {
            document.getElementById("love-letter").innerHTML += letterText[i];
            i++;
            setTimeout(typeLoveLetter, 100);
        }
    }
    setTimeout(() => {
        document.getElementById("love-letter").innerHTML = ""; // Reset before typing
        i = 0;
        typeLoveLetter();
    }, 2000);

    /** 📍 Custom Love Map (Your Cities) **/
    document.getElementById("love-map").innerHTML = `
        💞 Gathering Starlight from <span class="city">Kolkata</span> & <span class="city">Jalpaiguri</span> to Create Our Universe of Love 💞
    `;

    /** 💬 AI Love Chatbot **/
    function sendLoveMessage() {
        let input = document.getElementById("chat-input").value;
        if (!input.trim()) return;
        let response = `💖 "${input}" sounds so lovely!`;
        document.getElementById("chat-response").innerText = response;
    }
    document.getElementById("chat-button").addEventListener("click", sendLoveMessage);

    /** 🎶 Play Love Song After User Interaction **/
    let song = new Audio("songs/love-song.mp3");

    function playLoveSong() {
        if (song.paused) {
            song.loop = true;
            song.play();
        }
    }

    document.addEventListener("click", playLoveSong, { once: true });
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = `${Math.random() * window.innerWidth}px`;
        document.body.appendChild(petal);
    
        setTimeout(() => {
            petal.remove();
        }, 5000);
    }
    
    setInterval(createPetal, 300);
    document.addEventListener("scroll", function() {
        let loveLetter = document.getElementById("love-letter-box");
        let position = loveLetter.getBoundingClientRect();
    
        // If it's visible in viewport, show it
        if (position.top < window.innerHeight - 100 && position.bottom > 100) {
            loveLetter.style.opacity = "1";
            loveLetter.style.transform = "translateY(0)";
        } else {
            loveLetter.style.opacity = "0";
            loveLetter.style.transform = "translateY(20px)";
        }
    });
    
    
    
});
