const images = document.querySelectorAll(".images")
const threshold = 500;

const text  = document.getElementById("catText");
const button  = document.getElementById("button");

// making them not greyscale on hover
// images.forEach(function(elem){
//   elem.addEventListener('click', function(e){
//     elem.width = (parseInt(elem.width) + 10)%threshold;
//     console.log(elem.width +10)
//   })
// })
button.addEventListener("click", async function(e){
  const result = await getCatFact();
  text.innerHTML =  result[0];
  document.body.style.color = '#' +  Math.floor(Math.random()*16777215).toString(16)
})

for (let i=0; i<images.length; i++){
  images[i].addEventListener('click', function(e){
    images[i].width = (parseInt(images[i].width) + 10)%threshold;
    console.log((parseInt(images[i].width) + 10)%threshold)
  })
}


const getCatFact = async function(){
  const response = await fetch('https://meowfacts.herokuapp.com/', {
    headers: {
      Accept:"application/json"
    }
  });
  const {data} = await response.json();
  return data;
}

// mouse


////Scrolling

function getScrollPercent()
{
  let scrollRange = document.body.offsetHeight - window.innerHeight;
  return window.scrollY / scrollRange;
}

window.addEventListener('scroll', function(e){
  //console.log(window.scrollY, getScrollPercent());
  let percent = getScrollPercent();
  document.body.style.backgroundColor = 'rgb('+ 255 * percent +', '+ 255 * (1.0 - percent) +', 150)';
});