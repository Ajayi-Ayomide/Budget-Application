function automate() {
    let sub = document.getElementById('bug').value;
    if (bug.value === "") { 
        alert('Please enter your budget before continuing to use this feature')
    }
     else {
      document.getElementById('reveal').style.display= "block"
      document.getElementById('auto').style.display= "block"
      document.getElementById('itsef').style.display= "none"
      let userBudget = document.getElementById('bug').value;
      document.getElementById('fest').innerHTML= `Congratulations! You've successfully set your budget at ₦${userBudget} With this amount allocated, you're taking a proactive step towards financial responsibility. Remember to track your expenses diligently and adjust your spending habits accordingly to stay within your budget.`
        console.log(userBudget)

        // let budget = document.getElementById ('bug').value
        // console.log("budget.value")
     }
}



// let colorCh = document.getElementById("btn");
// let imageArray = [
//   'BG.JPG', 'BG1.JPG', 'BG2.JPG','BG4.JPG', 'BG5.JPG', 'BG6.JPG',  
// ]
// colorCh.addEventListener("click", () => {
//   let index = 0;
//   index = Math.floor(Math.random() * imageArray.length)
//   document.body.style.background = `url(image/${imageArray[index]})`;
//   document.body.style.backgroundSize = `cover`
// });



// document.body.style.backgroundColor = `rgb(${Math.round(
  //   Math.random() * 255
  // )},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
  // for (let index = 0; index < imageArray.length; index++) {
  //    image = imageArray[index];
  // }


// colorCh.addEventListener("click", () => {
//   document.body.style.backgroundColor = `rgb(${Math.round(
//     let index = 0;
//      index = Math.floor(Math.random() * imageArray.length)
//     Math.random() * 255
//   )},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
//   for (let index = 0; index < imageArray.length; index++) {
//      image = imageArray[index];
//   }

//   document.body.style.background = `url(image/${imageArray[index]})`;
//   document.body.style.backgroundSize = `cover`
// });