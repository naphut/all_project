let words = document.querySelectorAll(".word"); // Select all elements with the class 'word'

words.forEach((word) => {
    let letters = word.textContent.split(""); // Split word text into individual letters
    word.textContent = ""; // Clear the word content

    letters.forEach((letter) => {
        let span = document.createElement("span"); // Create a span for each letter
        span.textContent = letter; // Set the letter text inside the span
        span.className = "letter"; // Add class 'letter' to each span
        word.appendChild(span); // Append the span to the word
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex
        ? words[0]
        : words[currentWordIndex + 1];

    // Animate the current word out
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";

    // Animate the next word in
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, i * 80); // Add delay for the "in" animation
    });

    setTimeout(() => {
        currentWord.style.opacity = "0";
    }, currentWord.children.length * 80);

    currentWordIndex = currentWordIndex === maxWordIndex
        ? 0
        : currentWordIndex + 1;
};

setInterval(changeText, 2000); // Adjusted interval to 2000ms for smooth animation
