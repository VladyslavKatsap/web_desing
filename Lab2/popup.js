let clickCount = 0;

document.getElementById('myButton').addEventListener('click', function() {
  clickCount++;
  updateCounter();
});

function updateCounter() {
  document.getElementById('counter').innerText = `Clicked: ${clickCount} times`;
}
