const advice = document.getElementById('advice');
const button = document.getElementById('btn');
const joke = document.getElementById('joke');
const userFirst = document.getElementById('userFirst');
const userLast = document.getElementById('userLast');
const userEmail = document.getElementById('userEmail');

// getAdvice

async function getAdvice() {
    advice.textContent = 'Loading...'
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        console.log(data)
        advice.textContent = data.slip.advice
        
    }catch (error) {
        console.log('something went wrong', error)
        advice.textContent = 'Failed to fetch advice'
    }
}

//getJoke

async function getJoke () {
    joke.textContent = 'Loading...'
   try {
    const response = await fetch ('https://official-joke-api.appspot.com/random_joke')
    const data = await response.json()
    console.log(data) 
    joke.textContent = `${data.setup} - ${data.punchline}`
   }catch (error) {
    console.log('something went wrong', error)
    joke.textContent = 'failed to fetch joke'
} 
}

// getUser

async function getUser () {
    userFirst.textContent = 'Loading...'
    userLast.textContent = 'Loading...'
    userEmail.textContent = 'Loading...'
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data)
        userFirst.textContent = `First name: ${data.results[0].name.first}`
        userLast.textContent = `Last name: ${data.results[0].name.last}`
        userEmail.textContent = `Email: ${data.results[0].email}`
    } catch (error) {
        console.log('something went wrong', error)
        userFirst.textContent = 'Failed to fetch User data'
        userLast.textContent = 'Failed to fetch User data'
        userEmail.textContent = 'Failed to fetch User data'
    }
}

//callAll API's

button.addEventListener('click', () => {
    getAdvice();
    getJoke();
    getUser();
})


// ===== Dark Mode Toggle =====
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;


// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️ Light Mode";
}


// Toggle theme 
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙 Dark Mode";
  }
});














