window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("sidenVises");

    //    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    document.querySelector(".menuknap").addEventListener("click", menuFunction);
    document.querySelector("#loopButton").addEventListener("click", pauseLoop);

}

function menuFunction() {
    /* Ved klik tilføjes eller fjernes "responsive" class på topnav */
    console.log("menuFunction");
    let x = document.querySelector("#myTopnav");

    x.classList.toggle("change");
}


function pauseLoop() {
    console.log("pauseLoop");
    const video = document.querySelector("#videoBG");
    const btn = document.querySelector("#loopButton");

    if (video.paused) {
        video.play();
        btn.textContent = "Sæt på pause";
    } else {
        video.pause();
        btn.textContent = "Afspil";
    }
}
