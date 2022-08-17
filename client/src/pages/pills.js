const name = document.getElementById('name')
const count = document.getElementById('count')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

// This is going to stop the page from submitting if there are any errors.

form.addEventListener('submit', (e) => {
    let message = []
    if (name.value === '' || name.value == null) {
        message.push('Name and count are required')
    }

    if (count.value.length >= 30) {
      messages.push('Check for expiration date')  
    }

    if (count.value.length >= 100) {
        messages.push('Count must be less than 100')  
      }

    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = message.join(', ')
    }
})


// This will be the counter of our pills adding or subtracting from the total.

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $counter = isset($_POST['counter']) ? $_POST['counter'] : [];
    if(isset($_POST["button"])){
        $counter--;
        pill $counter;
    }
}


//  This is also a counter could be better.

<button>Counter</button>
<p>Clicks: <span id="clicks">0</span></p>

const button = document.querySelector('button')
const span = document.querySelector('span')

let clicks = 0;

button.onclick = () => {
  clicks += 1;
  span.innerHTML = clicks;
};
const button = document.querySelector('button')
const span = document.querySelector('span')

let clicks = 0;

button.onclick = () => {
  clicks += 1;
  span.innerHTML = clicks;
};

// A third option

var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};
<button type="button" onClick="onClick()">Click me</button>
<p>Clicks: <a id="clicks">0</a></p>