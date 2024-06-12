document.addEventListener('DOMContentLoaded', () => {
    const centralImage = document.getElementById('img-center');
    const leftImage = document.getElementById('img-left');
    const rightImage = document.getElementById('img-right');
    const totalImages = 5;

    function updateImages() {
        let currentIndex = parseInt(centralImage.getAttribute('tr'));
        let nextIndex = currentIndex === totalImages ? 1 : currentIndex + 1;
        let prevIndex = currentIndex + 1 === 1 ? totalImages : currentIndex;
        let nextNextIndex = nextIndex === totalImages ? 1 : nextIndex + 1;

        // Update attributes for the images
        centralImage.setAttribute('tr', nextIndex);
        centralImage.setAttribute('src', `images/parr${nextIndex}.jpg`);
        leftImage.setAttribute('tr', prevIndex);
        leftImage.setAttribute('src', `images/parr${prevIndex}.jpg`);
        rightImage.setAttribute('tr', nextNextIndex);
        rightImage.setAttribute('src', `images/parr${nextNextIndex}.jpg`);
    }

    centralImage.addEventListener('click', updateImages);

    centralImage.addEventListener('mouseover', () => {
        centralImage.style.height = '290px';
    });

    centralImage.addEventListener('mouseout', () => {
        centralImage.style.height = '270px';
    });
});