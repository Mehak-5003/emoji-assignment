const emojis = [
    "&#x1F400;", "&#x1F401;", "&#x1F407;", "&#x1F603;",
    "&#x1F929;", "&#x1F605;", "&#x1F606;", "&#x1F609;",
    "&#x1F60A;", "&#x1F63B;", "&#x1F971;", "&#x1F970;"
];

const emojiGallery = document.getElementById("emoji-gallery");

emojis.forEach(emoji => {
    const emojiItem = document.createElement("div");
    emojiItem.classList.add("emoji-item");

    const emojiSpan = document.createElement("span");
    emojiSpan.innerHTML = emoji;

    const emojiCode = document.createElement("code");
    emojiCode.textContent = emoji.codePointAt(0).toString(16).toUpperCase();

    emojiItem.appendChild(emojiSpan);
    emojiItem.appendChild(emojiCode);
    
    emojiGallery.appendChild(emojiItem);
});
