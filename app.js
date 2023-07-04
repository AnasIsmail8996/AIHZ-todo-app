
function addTodo(){

var todo =document.getElementById('todo')
var list =document.getElementById('list')
var date= new Date();

list.innerHTML =`<li>

<input  class='todo-input' type='text' value='${todo.value}'  >
${date.toLocaleString()}
 <button onclick='delTodo()'>Delete </button> 
 <button onclick='addMoreText(this)'> Edit</button> 
 </li>`

// console.log(todo.value)

// var li= document.createElement('li')
// //li.innerHTML =' ';
// var text= document.createTextNode(todo.value);

// li.appendChild(text);

// var delBtn=document.createElement('button' ) 
//  var delText= document.createTextNode('Delete') 
//  delBtn.appendChild(delText)

//  delBtn.setAttribute('onclick', 'delTodo()')
// var editBtn=document.createElement('button')
//  var editText= document.createTextNode('Edit')

// editBtn.appendChild(editText)
// //editBtn.setAttribute('onclick', 'addTodo()')
// editBtn.setAttribute('onclick', 'addMoreText()');

// li.appendChild(delBtn)
// li.appendChild(editBtn)
// list.after(li)
// console.log(li);
  todo.value ='';

}

function delTodo(){
    event.target.parentNode.remove()
}

var edit =false;
function addMoreText(event){
if(edit){
  event.parentNode.childNodes[1].disabled = true; 
  event.parentNode.childNodes[1].blur();
  event.parentNode.childNodes[5].innerHTML ='Edit'
edit= false;
}else{
    event.parentNode.childNodes[1].disabled = false; 
    event.parentNode.childNodes[1].focus();
    event.parentNode.childNodes[5].innerHTML ='Update'
    edit= true;
console.log(event.parentNode.childNodes[5])
//    var oldValue= event.target.parentNode.firstChild.nodeValue;
//    var editValue = prompt('Enter new Text', oldValue );
//    event.target.parentNode.firstChild.nodeValue = editValue;
}
}

    
      function deleteAll(){
        var list = document.getElementById('list');
        // console.log(list)
        list.innerHTML=" ";
      }

// function addMoreText(){
//     var newText = prompt('Enter Your New Text')
//     if(newText !==null && newText.trim() !==null){
//         var li= event.target.parentNode;
//         var textNode= li.firstChild;
//         textNode.nodeValue = newText + ' ' + textNode.nodeValue;
//     }
// }























// yaha se wherther app shuru hain

// const fetchButton = document.getElementById('fetchButton');
// const weatherDataElement = document.getElementById('weatherData');

// fetchButton.addEventListener('click', fetchWeather);

// function fetchWeather() {
//   const apiKey = 'YOUR_API_KEY'; // Replace with your own API key
//   const apiUrl = `https://api.example.com/weather?apiKey=${apiKey}`; // Replace with the actual API endpoint

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       // Process the weather data and update the UI
//       const temperature = data.temperature;
//       const description = data.description;

//       weatherDataElement.innerHTML = `Temperature: ${temperature}&deg;C<br>Description: ${description}`;
//     })
//     .catch(error => {
//       console.log('Error fetching weather data:', error);
//     });
// }
