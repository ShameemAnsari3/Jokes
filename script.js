// 1. Grab the HTML elements by their IDs
const jokeEl = document.getElementById('joke');     // <p id="joke">...</p>
const jokeBtn = document.getElementById('jokeBtn'); // <button id="jokeBtn">...</button>

// 2. When button is clicked, run generateJoke()
jokeBtn.addEventListener('click', generateJoke);

// 3. Run generateJoke() once when page loads
generateJoke()

// 4. Define the function (async = can use await inside it)
async function generateJoke() {
    // Tell the API we want JSON data back
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    // Fetch a random joke from API
    const res = await fetch('https://icanhazdadjoke.com', config)

    // Convert response into JS object
    const data = await res.json();

    // Insert the joke text inside the <p id="joke"> element
    jokeEl.innerHTML = data.joke
}


// =--=-=-=-------------

 // USING .THEN() .CATCH()
        // function generateJoke() {

        //     const config = {
        //         headers : {
        //             'Accept' : 'application/json'
        //         }
        //     }

        //     fetch ('https://icanhazdadjoke.com', config)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data)
        //         jokeEl.innerHTML = data.joke
        //     })
        // }

