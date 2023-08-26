// ES6 Modules in Javascript

// Note, run this code in a browser console at example.com
// http://example.com/
let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    let h1ByUser = document.createElement('h1')
    let h1ExampleDomain = document.querySelector('h1');
    h1ExampleDomain.appendChild(h1ByUser)
    h1ByUser.innerText = answer;
}

// The second example below handles the input using a <input> HTML object,
// which is preferred over using the prompt() in JavaScript.
// Note, run this code in a browser console at example.com
// http://example.com/
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    console.log(input.value)
    h1.innerText = input.value;
})


