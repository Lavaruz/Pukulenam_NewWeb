const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
    console.log('button was clicked');

  fetch('/clicked', {method: 'POST'})
});