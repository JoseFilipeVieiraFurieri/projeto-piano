const pianoKeys = document.querySelectorAll(".piano-keys .key");
let volumeControl = document.querySelector(".volume-control")
console.log(volumeControl);


let mapedkeys = []



const playTune = (key) => {
    const audio = new Audio(`src/tunes/${key}.mp3`);
    audio.volume = volumeControl.value / 100;
    console.log(audio.volume);
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
      clickedKey.classList.remove("active")
    }, 150)
};

// quando a keytune e acionada atraves do keydown ele adiciona a classe active que adiciona o mesmo efeito de sombreamento dando para o clique( porque agora é uma classe e não um prop)
// com o settimeout ele remove a classe para evitar que o efeito de sombreamento fique por muito tempo


pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener('click', () => playTune(key.dataset.key))
    mapedkeys.push(key.dataset.key)
});


document.addEventListener("keydown", (e) => {
    if (mapedkeys.includes(e.key)) {
        playTune(e.key)
        
    } 

    // so permite que as teclas mapeadas sejam apertadas
})


