/* Damit Navigationsleitse oben den Seiteninhalt nicht verdeckt */
window.onloadstart = () => {
    const navigationsleiste = document.getElementById("hauptnavigation");
    const unteresEnde = navigationsleiste.offsetTop + navigationsleiste.offsetHeight;
    document.getElementById("hauptbehaelter").style.marginTop = unteresEnde + "px";
}

/** Für kleinere Größen: Das Bars-Icon soll sich "öffnen" mit einer Leiste */
function navigationUmschalten() {
    const navigationsleiste = document.getElementById("hauptnavigation");
    navigationsleiste.classList.toggle("navigation-geoeffnet");
}

