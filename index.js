//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here

const x = 'X';
const o = 'O';
a1Sauce = document.getElementById('a-1');
var button = document.createElement('button');
button.innerText = 'Click Me';
a1Sauce.appendChild(button);
button.className += 'square';
button.addEventListener('click',xoXO);

function xoXO() {
   if (button.innerText == x){
       button.innerText = o; 
    } else {
    button.innerText = x;
   }
}


//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'

    var pullDiv = document.getElementById('a-2'); 
    const colors = ['Red' , 'White', 'Black', 'green', 'Orange']; 
    var colorList = document.createElement('select');
    
    pullDiv.appendChild(colorList);
    for (var i = 0; i < colors.length; i++) { 
        var optn = colors[i]; 
        var el = document.createElement("option"); 
        el.textContent = optn; 
        el.value = optn; 
        colorList.appendChild(el); 
    };
    
    var buttonC = document.createElement('button');
    buttonC.innerHTML = 'Delete Button';
      pullDiv.appendChild(buttonC);
      buttonC.addEventListener('click', function() {
      colorList.remove(colorList.selectedIndex);
});


    

    

//resolve // QUESTION 2 here






//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = (event) => { 
    event.preventDefault()
    var radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    var volume;
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById("volume").value = volume;
    var area;
    area = 4 * Math.PI * Math.pow(radius, 2);
    area = area.toFixed(4);
    document.getElementById("area").value = area;
    return false;
 }
const myForm = document.getElementById('MyForm');
myForm.addEventListener('submit', calculate_sphere);
//calculate_sphere.getElementById(value);
//window.onload = document.getElementById(submit).onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here 
questionA = document.getElementById('a-1');
buttonA = document.getElementById("a-4");            
buttonOne = document.createElement("BUTTON");
buttonOne.innerText = 'Hide or Show Answer for Number One';
buttonA.appendChild(buttonOne);
buttonOne.addEventListener('click', myFunctionA);
function myFunctionA() {
     if (questionA.style.display == "none") {
       questionA.style.display = "block";
     } else {
       questionA.style.display = "none";
     }}
  
     questionB = document.getElementById('a-2');
     buttonB = document.getElementById("a-4");            
     buttonTwo = document.createElement("BUTTON");
     buttonTwo.innerText = 'Hide or Show Answer for Number Two';
     buttonB.appendChild(buttonTwo);
     buttonTwo.addEventListener('click', myFunctionB);
     function myFunctionB() {
          if (questionB.style.display == "none") {
            questionB.style.display = "block";
          } else {
            questionB.style.display = "none";
          }}
         
          questionD = document.getElementById('a-3');
          buttonD = document.getElementById("a-4");            
          buttonThree = document.createElement("BUTTON");
          buttonThree.innerText = 'Hide or Show Answer for Number Three';
          buttonD.appendChild(buttonThree);
          buttonThree.addEventListener('click', myFunctionC);
          function myFunctionC() {
               if (questionD.style.display == "none") {
                 questionD.style.display = "block";
               } else {
                 questionD.style.display = "none";
               }}
               console.log(questionA)
          

