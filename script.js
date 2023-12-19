function adjustRatio(){
    var slider = document.getElementById('slider');
    var imgs = slider.getElementsByTagName('img');

    if(imgs.length > 0){
        var aspectRatio = imgs[0].naturalWidth/imgs[0].naturalHeight;
        slider.style.aspectRatio;
    }
}