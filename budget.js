function automate() {
    let sub = document.getElementById('bug').value;
    if (bug.value === "") { 
        alert('Please enter your budget before continuing to use this feature')
    }
     else {
        let budget = document.getElementById ('bug').value
        console.log("budget.value")
     }
}







let colorCh = document.getElementById("btn");
let imageArray = [
  'bug.png','icon2.png','1.jpg' 
]
colorCh.addEventListener("click", () => {
  let index = 0;
   index = Math.floor(Math.random() * imageArray.length)
  document.body.style.background = `url(image/${imageArray[index]})`;
  document.body.style.backgroundSize = `cover`
});

// colorCh.addEventListener("click", () => {
//   document.body.style.backgroundColor = `rgb(${Math.round(
//     Math.random() * 255
//   )},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
//   for (let index = 0; index < imageArray.length; index++) {
//      image = imageArray[index];
//   }
// });