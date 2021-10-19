const sounds = ['prank', 'gun', 'headshot', 'surprise', 'sad', 'mine'];

sounds.forEach((currentValue) => {

    let btn = document.createElement('button');
    btn.classList.add("btn");
    btn.innerText = currentValue;
    document.getElementById("root").appendChild(btn);

    btn.addEventListener("click", () => {

        stopAudio();  // to stop previous audio


        document.getElementById(currentValue).play()
        console.log(document.getElementById(currentValue));


    })

})

function stopAudio() {

    sounds.forEach((currentValue) => {

        const audios = document.getElementById(currentValue)
        audios.pause()
        audios.currentTime = 0  // its resetting the audio
        console.log(document.getElementById(currentValue));
    })

}