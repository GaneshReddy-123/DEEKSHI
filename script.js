
function openGift() {

    const message = document.getElementById("surpriseText");
    const gift = document.querySelector(".gift");

    if (message && gift) {

        gift.innerHTML = "🎉🎊🎉";

        message.innerHTML = `
            <h2>Surprise BUNNU! 🥳</h2>
            You are an amazing best friend! ❤️
            <br><br>
            Your friendship is a beautiful part
            of my life.
            <br><br>
            Keep smiling and enjoy your birthday!
            🎂🎈
        `;

        gift.style.animation = "none";
    }
}
