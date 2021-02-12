function arrayImageList(){
    const pictureArray = [
    "images/onigiri_1.png",
    "images/onigiri_2.png",
    "images/onigiri_3.png",
    "images/onigiri_4.png",
    "images/roll_1.png",
    "images/roll_2.png",
    "images/roll_3.png",
    ];
    
    const arrayImage = document.createElement('ul');
    const target = document.querySelector('#carousel');
    target.append(arrayImage);
    
    pictureArray.forEach(element => {
    const listImage = document.createElement('li');
    listImage.innerText = element;
    arrayImage.append(listImage);
    })
    }
    
    
    window.onload = arrayImageList;