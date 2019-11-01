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
const imgLink = document.getElementsByTagName('a');

const searchIt = event => {
    searchOn = event.target.value.toLowerCase();
    getCaption = imgLink.getAttribute('data-title');
    

    galleryBox.forEach(galleryBox => {
        const title = galleryBox.textContent.toLowerCase();
        const caption = getCaption.toLowerCase();
        const box = galleryBox.parentElement;     
        
        if (title.indexOf(searchOn) > -1 ) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
}

search.addEventListener('keyup', searchIt);