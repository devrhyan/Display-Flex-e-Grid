let show = true;

const menuSection = document.querySelector ( ".menuSection")
const menuToggle = document.querySelector (".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    // menuToggle.addEventListener.toggle("on", show)
    show = !show;
})