var myImage = document.createElement("img");

myImage.onload = () => {
    document.body.style.backgroundImage = "url(\"../images/Fractal/RedFrame.png\")";
};

myImage.src = "../images/Fractal/RedFrame.png";
