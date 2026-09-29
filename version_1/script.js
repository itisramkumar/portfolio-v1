const tracks=document.querySelectorAll(".marquee-track")
tracks.forEach(track=>{
    track.innerHTML +=track.innerHTML;
})

const timeline = document.querySelector(".timeline");
const items = document.querySelectorAll(".timeline-item");

function updateTimeline() {

    if (!timeline) return;

    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Progress starts when timeline enters viewport
    const start = windowHeight * 0.4;

    // Progress ends when timeline leaves viewport
    const end = rect.height + windowHeight * 0.2;

    let progress = (start - rect.top) / end;

    progress = Math.max(0, Math.min(progress, 1));

    // Update blue line
    timeline.style.setProperty("--progress", `${progress * 100}%`);

    // Height of blue line in pixels
    const progressHeight = progress * timeline.offsetHeight;

    // Timeline top in document
    const timelineTop =
        timeline.getBoundingClientRect().top + window.scrollY;

    items.forEach(item => {

        const dot = item.querySelector(".timeline-dot");

        if (!dot) return;

        // Dot position relative to timeline
        const dotPosition =
            dot.getBoundingClientRect().top +
            window.scrollY -
            timelineTop;

        // Small offset so activation happens
        // exactly after touching the dot
        const offset = 4;

        if (progressHeight >= dotPosition + offset) {

            item.classList.add("active");

        } else {

            item.classList.remove("active");

        }

    });

}

window.addEventListener("scroll", updateTimeline);
window.addEventListener("resize", updateTimeline);
window.addEventListener("load", updateTimeline);

// media query for menu-toggle
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if(nav.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    }else{

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});