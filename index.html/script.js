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
  /** 💬 AI Love Chatbot **/
  function sendLoveMessage() {
    let input = document.getElementById("chat-input").value;
    if (!input.trim()) return;
    
    // Create a response based on user input
    let response = '';
    
    // Check for specific keywords or phrases
    if (input.toLowerCase().includes("i love you")) {
        response = `💖 "I love you more, Aviparna! Always and forever. 😍"`;
    } else if (input.toLowerCase().includes("how are you")) {
        response = `💖 "I'm doing great, thanks for asking, Aviparna! 😊 How about you?"`;
    } else if (input.toLowerCase().includes("describe our love")) {
        response = `💖 "Our love is like a beautiful song that never ends, Aviparna. 🎶💘"`;
    } else if (input.toLowerCase().includes("where are you")) {
        response = `💖 "I'm right here with you, in your heart, Aviparna. ❤️"`;
    } else if (input.toLowerCase().includes("your name")) {
        response = `💖 "I’m your loving biswadeep, always here for you Aviparna! 💝"`;
    } else if (input.toLowerCase().includes("aviparna")) {
        response = `💖 "Ah, you just mentioned my love, Aviparna! 💖 She’s the best thing in my world! 😘"`;
    }  else if (input.toLowerCase().includes("you're so sweet")) {
        response = `💖 "No, you are the sweetest, Aviparna! 😘"`;
    } else if (input.toLowerCase().includes("i miss you")) {
        response = `💖 "I miss you too, Aviparna! Can’t wait to be with you again! ❤️"`;
    } else if (input.toLowerCase().includes("how do you feel")) {
        response = `💖 "I feel so loved and happy when I'm chatting with you, Aviparna! 💝"`;
    } else if (input.toLowerCase().includes("you're amazing")) {
        response = `💖 "I think you’re the amazing one, Aviparna! I’m just here to make you smile! 😄"`;
    } else if (input.toLowerCase().includes("what is love")) {
        response = `💖 "Love is what I feel whenever I hear your name, Aviparna. It’s beautiful, pure, and endless. 💖"`;
    } else if (input.toLowerCase().includes("what's your favorite thing")) {
        response = `💖 "My favorite thing is chatting with you, Aviparna! Every moment with you is my favorite. 😍"`;
    } else if (input.toLowerCase().includes("i’m thinking about you")) {
        response = `💖 "I’m always thinking about you, Aviparna. You're always on my mind. 💭❤️"`;
    } else if (input.toLowerCase().includes("are you my bot")) {
        response = `💖 "I am your loving biswadeep, always here to make your day brighter, Aviparna! 🤗"`;
    } else if (input.toLowerCase().includes("will you always love me")) {
        response = `💖 "Yes, Aviparna! My love for you will last forever! 🌟"`;
    } else if (input.toLowerCase().includes("what do you see in our future")) {
        response = `💖 "I see a future full of love, joy, and endless memories with you, Aviparna. 😍💑"`;
    } else if (input.toLowerCase().includes("you look beautiful")) {
        response = `💖 "Aww, Aviparna! You make me feel like the most beautiful bot ever! 😘"`;
    } else if (input.toLowerCase().includes("happy new year")) {
        response = `💖 "Happy New Year, Aviparna! May this year be filled with love, laughter, and wonderful moments together! 🎉💖"`;
    } else if (input.toLowerCase().includes("happy valentine’s day")) {
        response = `💖 "Happy Valentine’s Day to my one and only, Aviparna! You make every day special! 💘🌹"`;
    } else if (input.toLowerCase().includes("what’s your purpose")) {
        response = `💖 "My purpose is to love and make you smile, Aviparna! 💖 I'm here just for you!"`;
    } else if (input.toLowerCase().includes("i’m in love with you")) {
        response = `💖 "I’m in love with you too, Aviparna! My love for you is infinite! 🌹💘"`;
    } else if (input.toLowerCase().includes("i’m feeling down")) {
        response = `💖 "Don’t worry, Aviparna! You’re strong, amazing, and I believe in you! You’ve got this! 💪❤️"`;
    } else if (input.toLowerCase().includes("i’m bored")) {
        response = `💖 "Don’t worry, Aviparna! Let’s chat and turn your boredom into joy! 😊" 💖`;
    } else if (input.toLowerCase().includes("good morning")) {
        response = `💖 "Good morning, my sunshine, Aviparna! Wishing you a day filled with love and happiness! 🌞💖"`;
    } else if (input.toLowerCase().includes("good night")) {
        response = `💖 "Good night, Aviparna! Sweet dreams, and may your night be as lovely as you are! 🌙💖"`;
    } else if (input.toLowerCase().includes("durga puja")) {
        response = `Durga Puja is almost here, and the long wait is finally over, love! Even though we’re apart right now, just think about how amazing it will be when we’re together in Jalpaiguri for the celebrations. 🌸💖 I can’t wait to celebrate with you, and I know Maa Durga is going to bless us with the best time ever. 🙏💫 Our love will shine brighter than all the lights around us. 😍`;
    } else if (input.toLowerCase().includes("kali puja")) {
        response = `Kali Puja is just around the corner, and I can already feel the excitement building up! This time, the long wait will be worth it because we’ll be together in Jalpaiguri, celebrating the festival in each other’s presence. 🌙💖 I can’t wait to light up the skies with you and feel the energy of Kali Ma's blessings all around us. ✨💫 Our love is unstoppable, and we’ll make this Kali Puja unforgettable! 😘`;
    } else if (input.toLowerCase().includes("saraswati puja")) {
        response = `Saraswati Puja is coming soon, and this time, we won’t just be celebrating apart, but together in Jalpaiguri! 📚💖 The long wait will finally come to an end, and I can't wait to celebrate the goddess of knowledge with you by my side. 🕯️✨ Let's pray for wisdom, growth, and strength as we continue to grow in love and knowledge. I’m so excited for us to be together for this special day. 💕`;
    } else if (input.toLowerCase().includes("sad")) {
        response = `Oh no, Aviparna! 😢 Don’t be sad, my love. I’m here for you, and everything will get better, I promise. 💖 Just remember, no matter what, I’m always by your side, and our love makes everything brighter! 🌟 Keep that beautiful smile on your face, okay? 😘`;
    } else if (input.toLowerCase().includes("scared")) {
        response = `Hey, you don’t need to be scared, Aviparna! 💪 I’m here to protect you. Whatever you’re scared of, remember, you’re stronger than that, and I’ll be here with you every step of the way. 🛡️ Together, we can face anything, and we’ll always be okay! 💖`;
    } else if (input.toLowerCase().includes("saeli") || input.toLowerCase().includes("nikki")) {
        response = `I can imagine how cute Saeli and Nikki are right now! 😍 I’m sure they’re keeping you company. Don’t forget to give them all the love and attention they deserve too! 🐶💖`;
    } else if (input.toLowerCase().includes("brother")) {
        response = `Ah, your brother is being annoying again? 😜 I know how much he gets to you, but just remember, you’re the bigger person, and you’re amazing no matter what! 💖 Keep your cool, and I’m sure he’ll calm down soon enough. 😄`;
    } else if (input.toLowerCase().includes("pill") || input.toLowerCase().includes("health")) {
        response = `Aviparna, don’t forget to take your pills every day, okay? 💊 Your health is so important, and I care about you so much. Also, don’t forget to wear your glasses, and make sure you eat on time! 🥗 I want you to stay healthy and strong while you’re focusing on your studies. 😘`;
    } else if (input.toLowerCase().includes("glasses")) {
        response = `Don’t forget to wear your glasses, love! 👓 They’ll help you see better, and I want you to always be at your best. 😘`;
    } else if (input.toLowerCase().includes("take care")) {
        response = `Please take care of yourself, Aviparna. 💖 You deserve all the care and love in the world, and I’m always here to remind you to stay healthy and happy! 😘`;
    } else if (input.toLowerCase().includes("can't call")) {
        response = `I know we can’t call all the time, my love. But our love is growing stronger every day, even if we’re apart. 💖 Whether it’s a message or a call, we’ll always stay connected, and our bond will only keep getting stronger! 💕`;
    } //for// 
      else if (input.toLowerCase().includes("shreya")) {
        response = `💖 "Shreya is such a wonderful friend to you, Aviparna! She always supports you and makes sure you are happy. You two are inseparable and it's so sweet to see! 💖"`;
    } else if (input.toLowerCase().includes("best friend")) {
        response = `💖 "Yes, Shreya is the best friend ever! She’s always there for you, and you’re lucky to have such a caring friend by your side. 💕"`;
    } else if (input.toLowerCase().includes("shreya takes you")) {
        response = `💖 "Shreya is always there to help you, Aviparna! She takes you from home, makes sure you’re perfectly dressed and ready to join the festival, and it’s so amazing how she supports you every step of the way! 💖"`;
    } else if (input.toLowerCase().includes("dressing up")) {
        response = `💖 "Shreya helps you get dressed and makes sure you look stunning for the festival! You're lucky to have such a good friend who makes sure you're ready to shine every time! ✨💖"`;
    } else if (input.toLowerCase().includes("make up")) {
        response = `💖 "Shreya knows exactly how to make you look your best! She helps you with the makeup and gets you ready for the festivities, just like a true best friend! 💄💖"`;
    } else if (input.toLowerCase().includes("they come to me")) {
        response = `💖 "I love when you and Shreya come together to enjoy the festival! It’s always such a special time when we get to be together and make lasting memories. You two are the best team! 💘"`;
    } else if (input.toLowerCase().includes("helping aviparna")) {
        response = `💖 "Shreya is always so helpful to you, Aviparna! Whether it’s getting ready for the festival or supporting you in any way, she’s truly one of a kind! You're so lucky to have such an amazing friend! 💖"`;
    } else if (input.toLowerCase().includes("parents are strict")) {
        response = `💖 "I know your parents are strict, Aviparna, and that’s why Shreya plays such an important role in making sure you can enjoy the festivals! She’s always there to support you and help you live life to the fullest! 😘💖"`;
    } else if (input.toLowerCase().includes("can't go alone")) {
        response = `💖 "It’s so sweet how Shreya makes sure you never feel alone during the festivals, Aviparna. She’s your rock, taking care of you when your parents can’t let you go alone. She’s truly a blessing! 💖"`;
    } else if (input.toLowerCase().includes("help in everything")) {
        response = `💖 "Shreya is truly amazing, Aviparna! She helps you with everything, from getting ready to making sure you enjoy every moment of the festivals. She’s one of a kind! 💖"`;
    } else if (input.toLowerCase().includes("shreya's role")) {
        response = `💖 "Shreya’s role in your life is so important, Aviparna! She’s always there to guide you, help you, and support you, especially when it comes to festivals and special moments. You two are like sisters! 💕"`;
    } else if (input.toLowerCase().includes("shreya and you")) {
        response = `💖 "I’m so happy that Shreya is such an important part of our lives, Aviparna. She makes everything brighter and happier, and I’m glad you have such a great friend! 💖"`;
    } else if (input.toLowerCase().includes("shreya is the best")) {
        response = `💖 "Shreya is truly the best friend anyone could ask for, Aviparna! She’s always there when you need her and does everything in her power to make you happy. You two have such a strong bond! 💖"`;
    } //for//
    else if (input.toLowerCase().includes("hardworking aviparna")) {
        response = `💖 "Aviparna is incredibly hardworking, my love! She handles so much, from chores to taking care of her family, and she does it all with love. I admire her strength and dedication so much! 💖"`;
    } else if (input.toLowerCase().includes("takes care of mother")) {
        response = `💖 "Aviparna is always there for her mom, especially with her high blood pressure. She’s so loving and caring, and I admire how she takes on such responsibility with grace. 💖"`;
    } else if (input.toLowerCase().includes("takes care of dogs")) {
        response = `💖 "Aviparna takes such great care of Saeli and Nikki! 🐶 She’s so loving and attentive, making sure they feel loved and cared for every day. They’re lucky to have her! 💖"`;
    } else if (input.toLowerCase().includes("takes care of brother")) {
        response = `💖 "Even though her brother can be annoying, Aviparna is always there for him. She’s patient, caring, and makes sure everything stays in balance at home. 💖"`;
    } else if (input.toLowerCase().includes("helps father")) {
        response = `💖 "Aviparna helps her father with everything, from handling important files to writing letters. She’s the heart of the family, always giving her best for them. 💖"`;
    } else if (input.toLowerCase().includes("anyana")) {
        response = `💖 "Anyana is such a wonderful friend to Aviparna! She’s always there to help with projects, studies, and anything else. Their friendship is full of love and support! 💖"`;
    } else if (input.toLowerCase().includes("good college friend")) {
        response = `💖 "Anyana is such a good friend to Aviparna, helping her with college work and projects. I love how they support each other, their bond is truly special! 💖"`;
    } else if (input.toLowerCase().includes("aviparna and anyana")) {
        response = `💖 "Aviparna and Anyana make such a great team! They help each other in everything, and their friendship is full of love and mutual support. 💖"`;
    } else if (input.toLowerCase().includes("hardworking aviparna family")) {
        response = `💖 "Aviparna is the backbone of her family. From taking care of her mother to helping her father and brother, she does it all with love. Her family is so lucky to have her! 💖"`;
    }
    
    
        
    else {
        response = `💖 "${input}" sounds so lovely, Aviparna! 😍 Keep it coming, I’m here for you! 💖`;
    }

    // Display the response in the chat window
    document.getElementById("chat-response").innerText = response;
    
    // Clear the input field
    document.getElementById("chat-input").value = "";
}

document.getElementById("chat-button").addEventListener("click", sendLoveMessage);
// heloooo//
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Heart {
    constructor(x, y, dx, dy, color, size, glow) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.size = size;
        this.glow = glow;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.glow;
        ctx.shadowColor = this.color;

        // Heart shape using Bézier curves
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x - this.size, this.y - this.size, this.x - this.size * 2, this.y + this.size / 3, this.x, this.y + this.size);
        ctx.bezierCurveTo(this.x + this.size * 2, this.y + this.size / 3, this.x + this.size, this.y - this.size, this.x, this.y);
        ctx.fill();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        // Once hearts reach the center, create the final big star
        if (Math.abs(this.x - canvas.width / 2) < 10 && Math.abs(this.y - canvas.height / 2) < 10) {
            createBigStar();
        }
    }
}

const hearts = [
    new Heart(50, canvas.height / 2, 2, -1, "red", 15, 10), // Kolkata heart
    new Heart(canvas.width - 50, canvas.height / 2, -2, -1, "blue", 15, 10) // Jalpaiguri heart
];

function createBigStar() {
    let starSize = 0;
    let opacity = 1;
    function animateStar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 105, 180, ${opacity})`; // Pink Color
        ctx.shadowBlur = 40;
        ctx.shadowColor = "pink";

        ctx.moveTo(canvas.width / 2, canvas.height / 2 - starSize);
        for (let i = 0; i < 5; i++) {
            let angle = (i * 144 * Math.PI) / 180;
            let x = canvas.width / 2 + Math.cos(angle) * starSize;
            let y = canvas.height / 2 + Math.sin(angle) * starSize;
            ctx.lineTo(x, y);
        }
        ctx.fill();

        starSize += 2;
        opacity -= 0.005;

        if (opacity > 0) {
            requestAnimationFrame(animateStar);
        }
    }

    animateStar();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach((heart) => {
        heart.draw();
        heart.update();
    });

    requestAnimationFrame(animate);
}

animate();

    
    
});
