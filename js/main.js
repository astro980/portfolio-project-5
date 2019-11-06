// -------------------------
// Lightbox jQuery
// ------------------------
lightbox.option({
    'alwaysShowNavOnTouchDevices': true
});

// -------------------------
// Type Head js
// ------------------------

const search = document.querySelector('#searchbox');
const galleryBox = document.querySelectorAll('.col h2');

const searchIt = event => {
    const searchOn = event.target.value.toLowerCase();    

     galleryBox.forEach(galleryBox => {
        const titleSearch = galleryBox.textContent.toLowerCase();
        const boxMatch = galleryBox.parentElement;

        if (titleSearch.indexOf(searchOn) > -1) {
            boxMatch.style.display = "block";
        } else {
            boxMatch.style.display = "none";
        }    

    });         
}
console.log(searchIt);
search.addEventListener('keyup', searchIt);
