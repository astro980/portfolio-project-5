// -------------------------
// Lightbox jQuery
// ------------------------
lightbox.option({
    'alwaysShowNavOnTouchDevices': true
});

// -------------------------
// Type Head js
// ------------------------





function searchIt() {
    const input = document.getElementById("searchbox");    
    input.value = searchbox.value.toLowerCase();
}

document.getElementById("searchbox").addEventListener("keyup", searchIt);