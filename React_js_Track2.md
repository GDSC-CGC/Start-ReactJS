# ReactJs Track 2

### The Goal of this track is to learn how to develop a ReactJs application and at the end you'll have knowledge of ReactJs and you can move to intermediate react!

## Pre-requisites :

- Basic Knowledge of HTML, CSS and JS (if you have no knowledge, you can do JavaScript path and then come back here!).
- Having your own GitHub account.
- React Js track 1

# Step 0

Go to your file explorer and open the folder containing your previous react application.  

![Untitled](ReactJs%20Track%202%2081a6045dcdf74fa78009dc27855805f0/Untitled.png)

Open the folder in terminal and run command

```jsx
npx create-react-app random-ecard-generator
```

## Running React App

- Now without any further open this folder in VScode or any IDE / code editor  you like.
- Open the integrated terminal by pressing ctrl + shift + ~ , and run command

```jsx
npm start
```

**By default, the application runs in localhost port 3000 with the address [http://localhost:3000](http://localhost:3000/)**

- **Your default browser should launch automatically. Open the browser console immediately. Also open a text editor so that you can view the code as well as the web-page at the same time on the screen:**
- The code of the application resides in the src folder. Let's simplify the default code such that the contents of the file *index.js* look like:

```jsx
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

- File *App.js* looks like this:

```jsx
import React from 'react'
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)

export default App
```

- The files App.css, App.test.js, logo.svg, setupTests.js and reportWebVitals.js may be deleted as they are not needed in our application right now.

# Step 1

Communicating with server and apis in react js!

We will be using `axios` npm package to interact with API's.

We used the command npm install twice, but with slight differences:

```jsx
npm install axios
```

The below are the concepts of react js. **Do not perform all these in your random-ecard-generator folder!**

Sample code to use [axios](https://www.npmjs.com/package/axios) in getting response

```jsx
import axios from 'axios';
axios
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })
```

Response:

So in response we get json which can be accessed same as a JavaScript Object!

```jsx
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}
```

## API calls in react js!

Calling an API in react is different (not syntax wise).

In react we have to use `useEffect` hook/function to call API.

You can see the whole reason behind this [here](https://reactjs.org/docs/hooks-effect.html)!

Syntax:

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Here's a sample component which calls API and uses its data!

```jsx
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/10")
      .then((response) => {
        setTitle(response.data);
      });
  });
  return (
    <div>
      <h1>{details.title}</h1>
    </div>
  );
}

export default Test;
```

# Task 1!

Now you have to create a user E Card using the [random user generator api](https://randomuser.me/api/).

Display these things on the webpage in your desired order!

- Full Name
- Contact details(emails, phone number)
- Picture of them
- Country, state, city

> **After completing this task Push the random-ecard-generator folder under your name folder in above repo!**
> 

```jsx
// Structure should look like this

// The repo should be looking like this:
-FirstName LastName (Folder)
    - random-restaurant-generator(folder)
        - (your react code)
		- random-ecard-generator
				-(your react code)
```

# Task 2!

Style the ecard using CSS and show your creativity!

> **Push the CSS file. Your PR should contain a  `style.css` file!**
> 

# Task 3!

This step is the final step!

The create react app tool created the [Readme.md](http://Readme.md) file in your folder. Now you have to write about your project in that Readme.md file. So delete all the content in readme and write your own!

Want to know more about readme? Go [here!](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

> After updating Readme.md send PR to above repo. Your PR should contain `Readme.md` file!
>