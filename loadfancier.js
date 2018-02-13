(function loadFancier(id, path) {
    var myImage = document.createElement("img");
    myImage.onload = () => {
        var element = document.getElementById(id);
        element.style = "background-image: url(\"" + path + "\")";
    };
    myImage.src = path;
})("MY_BG_HAX", "/images/Fractal/FractalThree.png");