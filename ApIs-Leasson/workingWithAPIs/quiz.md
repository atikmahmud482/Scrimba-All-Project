1. What does HTTP stand for?
   Hypertext Transfer Protocol

2. How would you describe what a protocol is to a complete newbie?
   An agreed-upon, standard way of doing something

3. Which part of this URL describes the protocol?:
   https://apis.scrimba.com/jsonplaceholder/posts

4. If you had to guess, which request method (GET, POST, PUT, DELETE) would you
   think we made in the previous challenge when we asked for data from the
   JSON Placeholder API?

- Requests-URLs and Endpoints

1. What's the difference between a Base URL and an Endpoint?
   - Base URL is the part of the URL that won't change, no matter
     which resource we want to get from the API
   - Endpoint specifies exactly which resource we want to get
     from the API

Given the following URLs from an example API:

- https://blahblahblah.com/api/v2/users
- https://blahblahblah.com/api/v2/products
- https://blahblahblah.com/api/v2/products/123

2. Which part is the Base URL?
   https://blahblahblah.com/api/v2

3. What are the available endpoints?
   /users, /products, /products/<some id of a product-here>

<!-- Rest api design -->

1. What does it mean for the server to be "Stateless"?
   It forgets the interaction after the response is sent.

- In the Mike's Bikes example, what URL endpoint (and request method)
  would you expect to use in order to accomplish the following:

  2. Retrieve a list of all the bikes that are sold?
     GET /bikes

  3. Retrieve detailed information about the bike with an ID of 42?
     GET /bikes/42

  4. Update the price of the bike with an ID of 21?
     PUT /bikes/21

  5. Add a new bike to the list of bikes being sold?
     POST /bikes

  6. Remove the bike with an ID of 56 from the list of bikes?
     DELETE /bikes/56

<!-- Nested Resources -->

1. How is a nested resource URL like /bikes/123/reviews
   different from an endpoint like /reviews?
   /bikes/123/reviews - return an array of reviews about that specific bike
   /reviews - return an array of all reviews on the site

2. What URL might you use to GET the review with an ID of 5 on the bike
   with the ID of 123?
   /bikes/123/reviews/5

3. Describe a "URL Parameter" in your own words:
   Variable inside the URL that acts as a placeholder for the real value
   (Oftentimes they replace the ID of the resource)

<!-- URL Parameters - JSON Placeholder API -->

/\*\*

- Challenge: GET all the comments from the blog post with ID of 2 and log to the console
-
- BaseURL: https://apis.scrimba.com/jsonplaceholder/
- Endpoint: ??? (Check JSON Placeholder docs: https://jsonplaceholder.typicode.com/guide/ and look for the "Listing nested resources" section)
  \*/

fetch("https://apis.scrimba.com/jsonplaceholder/posts/2/comments")
.then(res => res.json())
.then(data => console.log(data))

<!-- Query Strings -->

At Mike's Bikes, they also sell bike racks (endpoint is /bikeracks).

What would you expect the endpoints to be for the following tasks:

1. Get a list of all bike racks sold on the site?
   /bikeracks

2. Get a list of all bike racks available in the physical store right now?
   (Assume a query called "available" that is a boolean true/false)
   /bikeracks?available=true ==> {available: "true"} (Will be parsed as a string)

3. Get a list of all "Thule"-brand bike racks that can hold 4 bikes?
   (Assume there are "brand" and "numBikes" queries)
   /bikeracks?brand=thule&numBikes=4

<!-- Query String Practice-OpenWeatherMapAPI -->

/\*\*

- Challenge part 1: GET the current weather for your city with
- the Open Weather API and log it to the console.
-
- BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/
- Endpoint: /weather
- Query: ??? (https://openweathermap.org/current)
  - NOTE: It says you need to include `appid` in your query, but you can skip that this time

Challenge part 2: change the units into something that makes more sense to you
than Kelvin 😂
\*/

fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=salt lake city&units=imperial")
.then(res => res.json())
.then(data => console.log(data))

/\*\*

{
coord: {
lon: -111.8911,
lat: 40.7608
},
weather: [{
id: 803,
main: "Clouds",
description: "broken clouds",
icon: "04d"
}],
base: "stations",
main: {
temp: 299.87,
feels_like: 299.22,
temp_min: 295.22,
temp_max: 303,
pressure: 1005,
humidity: 25
},
visibility: 10000,
wind: {
speed: 2.24,
deg: 299,
gust: 4.92
},
clouds: {
all: 75
},
dt: 1621458383,
sys: {
type: 2,
id: 2032870,
country: "US",
sunrise: 1621425998,
sunset: 1621478505
},
timezone: -21600,
id: 5780993,
name: "Salt Lake City",
cod: 200
}

\*/

<!-- Separate event listener callback -->

/\*\*

- Challenge: Define our anonymous callback function as a separate function, then
- pass it as the 2nd parameter to our `addEventListener`
  \*/

function handleClick() {
fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
.then(res => res.json())
.then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)
