var quote = document.getElementById('quoteOfTheDay');
var slideShow = document.getElementById('slideShow');
var image = [
  "images/slideShowPhoto1.JPG",
  "images/slideShowPhoto2.JPG",
  "images/slideShowPhoto3.JPG",
  "images/slideShowPhoto4.JPG",
  "images/slideShowPhoto5.JPG",
  "images/slideShowPhoto6.JPG",
  "images/slideShowPhoto7.JPG",
  "images/slideShowPhoto8.JPG",
  "images/slideShowPhoto9.JPG",
  "images/slideShowPhoto10.JPG",
  "images/slideShowPhoto11.JPG",
  "images/slideShowPhoto12.JPG",
  "images/slideShowPhoto13.JPG",
];

var request = fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
.then(respond => {
    respond.json().then(data => {
        console.log(data)
        document.getElementById('quoteOfTheDay').textContent = data[0];
   })
})

   var slideShowCounter = 0;
  setInterval(() =>{
    slideShow.src = image[slideShowCounter];
    slideShowCounter++;
    if (slideShowCounter >= image.length){
      slideShowCounter = 0;
    }
  }
  ,3000)
