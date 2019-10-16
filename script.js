window.addEventListener("load", sidenVises);


const values = [76, 10, 97, 50];




function sidenVises() {
    console.log("sidenVises");

    //    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    document.querySelector(".menuknap").addEventListener("click", menuFunction);
    document.querySelector("#loopButton").addEventListener("click", pauseLoop);
    VisDiagram();

}

function VisDiagram() {
    document.querySelectorAll("#bars line").forEach((bar, i) => {
        console.log(bar, i);
        bar.setAttribute("y2", 100 - values[i])
        bar.addEventListener("mouseover", e => {
            console.log(values[i])
            bar.setAttribute("data-value", values[i])
            document.querySelector("#disp").textContent = values[i];
            console.log(bar.dataset.value)
        })
    })
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
