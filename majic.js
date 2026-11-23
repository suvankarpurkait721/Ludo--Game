document.body.innerHTML = `
<style>

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #ff758c, #ff7eb3);
    color: white;
    text-align: center;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    padding: 25px;
    width: 90%;
}

h1 {
    font-size: 28px;
}

.dice {
    font-size: 110px;
    margin: 35px;
    cursor: pointer;
    display: inline-block;
}

button {
    padding: 16px 35px;
    border: none;
    border-radius: 30px;
    background: white;
    color: #ff4081;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}

#result {
    font-size: 27px;
    margin-top: 30px;
}

</style>

<div class="box">

    <h1>❤️ Specially made for Indu Ghosh ❤️</h1>

    <p>Roll The Dice & Get Your Surprise!</p>

    <div class="dice" id="dice">🎲</div>

    <br>

    <button id="roll">TAP TO ROLL ❤️</button>

    <h2 id="result">Your Surprise Awaits! 😍</h2>

    <p>Specially made for Indu Ghosh❤️</p>

</div>
`;

const compliments = {
    1: "Sabdhan! Tomar hasite manush crush khete pare! 😂❤️",
    2: "Chal chand ko uski okat dikhata hu, usko bta du ki asli chand to yeha Facebook main hain !😜💘",
    3: "Tumi ki WiFi? Tomar proti kemon jeno taan onuvob korchi! 📶😂",
    4: "Tomar hasir jonno alada kore tax bosano uchit! 🤣",
    5: "Eto sundar howar permission ke diyeche tomake? Police dakbo naki? 😜❤️",
    6: "বুঝতে পারছি না আপনাকে দেখলে আমার হার্ট auto connect হয় কেনো।। আপনার wifi কি সবসময় on থাকে।।🫣😘!"
};

const dice = document.getElementById("dice");
const result = document.getElementById("result");
const button = document.getElementById("roll");

if (!dice || !result || !button) {
    throw new Error("Special Dice: required page elements were not found.");
}

button.addEventListener("click", function () {

    button.disabled = true;

    dice.style.transition = "transform 1s ease";
    dice.style.transform = "rotate(720deg) scale(1.1)";

    result.textContent = "Rolling... ❤️";

    setTimeout(function () {

        const number = Math.floor(Math.random() * 6) + 1;

        dice.style.transform = "rotate(0deg)";

        dice.textContent = String(number);

        result.textContent = compliments[number];

        button.disabled = false;

    }, 1000);

});

dice.addEventListener("click", function () {
    button.click();
});