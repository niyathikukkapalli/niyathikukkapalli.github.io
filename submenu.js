function openArtSubmenu() {
    const artSubmenu = document.getElementById('art-submenu');
    artSubmenu.style.display = 'block';

    const submenuAnchor = document.getElementById('submenu-anchor');
    const left = submenuAnchor.clientLeft;
    const top = submenuAnchor.clientTop;
    
    artSubmenu.style.left = left;
    artSubmenu.style.top = top;
}
