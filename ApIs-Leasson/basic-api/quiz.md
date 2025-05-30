- What is an API

1. What does API stand for?
   Application Programming Interface

2. How would you describe an API in your own words?
   A tool that allows your code to talk with (use the goodness from)
   someone else's code. (Web APIs, 3rd-party package, etc.)

3. Can you think of an example of an API you've used?

- BoredAPI - https://www.boredapi.com/ (getting data from a server)
- Local Storage (localStorage)

* Clints & Servers

1. What are some examples of "clients" you've used today?

- Laptop
- Smart Phone
- Robot vacuum
- Smart plugs

2. How would you explain what a "server" is to a 5 year-old?
   A computer that send my own computer things when I ask it to.

3. In what way do clients and servers interact with each other?
   Client sends a request to a server, and the server sends back a response.

- Requests & Responses

1. What are 3 things your computer (client) might request from a server?

- JSON array of suggested videos
- Video stream
- HTML page

2. What is the main job of a server?
   Receive a request from a client and return a response.

3. Self study: what would the 3-digit server response code
   be if the server experiences an internal server error?
   500 Internal Server Error

- First fetch

  Challenge:

1. Google for "how to use fetch with json"
2. Should find a top result from MDN
3. MANUALLY copy over the fetch, but using the URL below 👇
   https://dog.ceo/api/breeds/image/random

fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => console.log(data))

- Asynchronous Javascript
  console.log("The first console log")

fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => console.log(data))

console.log("The second console log")

for (let i = 0; i < 100; i++) {
console.log("I'm inside the for loop")
}

- Dog API Fetch and DOM Practice
  /\*\*
  Challenge:

1. Fetch a random image from the Dog API again
   (https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
   API as an image `src` property (probably easiest if
   you create the image completely here in the JS and add
   it as the innerHTML of another element on the DOM)
   \*/

fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => {
console.log(data)
document.getElementById("image-container").innerHTML = `          <img src="${data.message}" />
     `
})

- Fetch idea from bored API

  Challenge:

1. Fetch a random activity from the Bored API
   url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser

fetch("https://apis.scrimba.com/bored/api/activity")
.then(response => response.json())
.then(data => {
console.log(data)
document.getElementById("activity-name").textContent = data.activity
})
