function loadFancier(id, path) {
    var myImage = document.createElement("img");
    var element = document.getElementById(id);
    myImage.onload = () => {
        element.src = "url(\"" + path + "\")";
    };
    myImage.src = path;
}

(function loadFancierBG(path) {
    var myImage = document.createElement("img");
    myImage.onload = () => {
        document.body.style.backgroundImage  = "url(\"" + path + "\")";
    };
    myImage.src = path;
})("/images/Fractal/FractalThree.png");