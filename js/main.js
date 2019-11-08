// -------------------------
// Lightbox jQuery
// ------------------------
lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'maxHeight': 1000,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'fitImagesInViewport': true
    
});

// -------------------------
// Type Head js
// ------------------------

const search = document.querySelector('#searchbox');
const galleryBox = document.querySelectorAll('a[data-title]');

const searchIt = event => {
    const searchOn = event.target.value.toLowerCase();    

     galleryBox.forEach(galleryBox => {
        const getTitle = galleryBox.getAttribute('data-title');
        const titleSearch = getTitle.toLowerCase();
        const boxMatch = galleryBox.parentElement;

        if (titleSearch.indexOf(searchOn) > -1) {
            boxMatch.style.display = "block";
        } else {
            boxMatch.style.display = "none";
        }    

    });         
}
search.addEventListener('keyup', searchIt);
