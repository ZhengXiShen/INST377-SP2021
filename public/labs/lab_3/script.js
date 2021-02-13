/* Put your javascript in here */


function arrayImageList(){
    const pictureArray = document.querySelectorAll('.mochi');
    const arrayImage = document.querySelector('ul');
    const allImages = document.querySelectorAll('li');
    let width = 130; 
    let count = 3; 
    let position = 0;
    
    carousel.querySelector('.left').onclick = function goLeft() {
                position += width * count;
          position = Math.min(position, 0)
          arrayImage.style.marginLeft = position + 'px';
        };
    
        carousel.querySelector('.right').onclick = function goRight() {
          position -= width * count;
          position = Math.max(position, -width * (allImages.length - count));
          arrayImage.style.marginLeft = position + 'px';
        };
    
    
    }
    
    
    window.onload = arrayImageList;