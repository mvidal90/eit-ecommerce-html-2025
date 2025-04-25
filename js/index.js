
let showMenu = false;

const handleMenu = () => {
    const menu = document.getElementById("mobile_menu")
    if (showMenu) {
        menu.className = menu.className.replace("-visible", "")
    } else {
        menu.className = menu.className.concat("-visible")
    }
    showMenu = !showMenu
}