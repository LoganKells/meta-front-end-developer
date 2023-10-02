// https://developer.mozilla.org/en-US/docs/Web/API/fetch
console.log('starting...')
fetch('https://randomuser.me/api?results=1')
    .then((response) => response.json())
    .then((data) => console.log(data))
console.log('end')
