var searchButton = document.getElementById('searchButton')
var inputText = document.getElementById('inputText')
var output = document.getElementById('output')

function addText(){
    let text = inputText.value
    console.log(text)
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-primary')
    newButton.classList.add('m-2')
    newButton.setAttribute('type','button')
    newButton.innerText = text
    output.appendChild(newButton)
}

var span=0;

searchButton.addEventListener('click',addText)
searchButton.addEventListener('click',function(e){
    span++;
    document.getElementById('span').innerHTML=`${span}`
})

inputText.addEventListener('blur',addText)