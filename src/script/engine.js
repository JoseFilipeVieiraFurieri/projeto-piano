const pianoKeys = document.querySelectorAll(".piano-keys .key");



const playTune = (key) => {
    const audio = new Audio(`src/tunes/${key}.mp3`);
    audio.volume = 0.8;
    audio.play();
};


pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener('click', () => playTune(key.dataset.key))
});


document.addEventListener("keydown", (e) => {
    console.log(e.key);
    const audio = new Audio(`src/tunes/${e.key}.mp3`);
    audio.play();
})


