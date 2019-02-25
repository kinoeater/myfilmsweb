
var pic = [
    "imgs/marrigevslove.jpg",
    "imgs/endofworld.jpg",
     "imgs/lost.jpg",
    "imgs/papatya.jpg",
    "imgs/badbag.jpg",
    "imgs/village.jpg",
    "imgs/yarim.jpg"
];

var links = [
    "https://vimeo.com/168307926",
    "https://vimeo.com/121759325",
    "https://vimeo.com/86875340",
    "https://vimeo.com/125458647",
    "https://vimeo.com/138859904",
    "https://vimeo.com/105785391",
    "https://vimeo.com/145035774"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var link = document.querySelector("a");
var counter = 1;
btn.addEventListener("click",function(){
    if(counter === 7) {
        counter = 0;
    }
    img.src=pic[counter];
    link.href=links[counter]; 
    counter=counter+1;
    console.log(counter);
    
});





