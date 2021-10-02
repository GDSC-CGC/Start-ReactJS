# ReactJS Track 1

### The Goal of this track is to learn how to develop a ReactJs application and at the end you'll have knowledge of ReactJs and can move to next ReactJS Track

## Pre-requisites :

- Basic Knowledge of HTML, CSS and JS (if you have no knowledge, you can do JavaScript path and then come back here!).
- Having your own GitHub account.

# Step 0

## Organizing Code

You have already been told about initializing Git and making Pull requests. So send a PR containing these folders and they must look like these:

```jsx
// Your folder in above Github repo should look like this:
FirstName LastName (Folder)
```

# Step 1

## Lets go React Js!

So before installing React Js we need to install Node Js in our systems!

- NodeJs Installation
  - Go [here](https://nodejs.org/en/download/) and install the NodeJs for your system.
  - Run the file you have downloaded.
  ```jsx
  //Confirm Node js installation by running command
  node - v;
  //Confirm npm installation by running command
  npm - v;
  ```
  - Still confused? Watch [this](https://www.youtube.com/watch?v=JINE4D0Syqw) video.

## Creating our first React App

- Now that you have Node js installed its time to make our first react js application. Go inside the folder FirstName LastName in your file explorer and open the terminal by doing Shift+Right click on the window and enter this command and hit enter.

```jsx
npx create-react-app random-restaurant-generator
```

- After few seconds you will se the folder named random-restaurant-generator inside your name folder and this will now look like this:

```jsx
// Your folder structure in file explorer should look like this:
-FirstName LastName (Folder)
	-random-restaurant-generator (Folder)
		-(some more random folders made by create react app)
```

- What is create react app?
  - Create react app is a tool which initialize your react app with folders and files to make your development fast!

## Running React App

- Now without any further open this folder in VScode or any IDE / code editor you like.
- Open the integrated terminal by pressing ctrl + shift + ~ , and run command

```jsx
npm start
```

**By default, the application runs in localhost port 3000 with the address [http://localhost:3000](http://localhost:3000/)**

- **Your default browser should launch automatically. Open the browser console immediately. Also open a text editor so that you can view the code as well as the web-page at the same time on the screen:**

![Untitled](ReactJS%20Track%201%208da69c3665de45fca1254a31ed109530/Untitled.png)

- The code of the application resides in the src folder. Let's simplify the default code such that the contents of the file _index.js_ look like:

```jsx
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

- File _App.js_ looks like this:

```jsx
import React from "react";
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
);

export default App;
```

- The files App.css, App.test.js, logo.svg, setupTests.js and reportWebVitals.js may be deleted as they are not needed in our application right now.

Some concepts of React Js in brief.

### Components:

The file _App.js_ now defines a [React component](https://reactjs.org/docs/components-and-props.html) with the name App. The command on the final line of file _index.js_

```jsx
ReactDOM.render(<App />, document.getElementById("root"));
```

renders its contents into the _div_-element, defined in the file _public/index.html_, having the id value 'root'.

By default, the file public/index.html doesn't contain any HTML markup that is visible to us in the browser. You can try adding some HTML into the file. However, when using React, all content that needs to be rendered is usually defined as React components.

### JSX:

It seems like React components are returning HTML markup. However, this is not the case. The layout of React components is mostly written using JSX. Although JSX looks like HTML, we are actually dealing with a way to write JavaScript. Under the hood, JSX returned by React components is compiled into JavaScript. Read more [here](https://reactjs.org/docs/introducing-jsx.html).

### States!

The Data to be displayed in the Frontend is always stored as a state in react. We cannot store data in different variables in react as they are loaded each time the application renders. So we use states to store the data.

React give us **_`useState`_** hook to use the state features in our function components.

`useState` return a reference variable and function so that we can display and change the data using variable and function respectively.

To read more about `useState` go [here](https://reactjs.org/docs/hooks-reference.html#usestate).

# Step 2

## Using States to display data!

Below is the example of using the **_`useState`_** hook. **Do not practice this in random-restaurant-generator folder as this is not the part of your task!**

```jsx
import { useState } from "react"; // imports useState
function App() {
  const [count, setCount] = useState(0); // initial count 0 is passed in useState function
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
}

export default App;
```

![Untitled](ReactJS%20Track%201%208da69c3665de45fca1254a31ed109530/Untitled%201.png)

On clicking button the state is changes by using **_`setCount`_** and passing new count **_as count +1_** as value.

Pass anything in the _`useState`_ function and that will be the initial value of the count. So as shown above it is passed 0. When the page is reloaded it goes back to 0.

Similarly you can pass anything in _`useState`_ function (`array, object, boolean, int, string` etc.).

- Important Point!
  - Using arrow function syntax in `onClick` event handler is must!
  ```jsx
  //Sample code for onClick
  onClick={() => {
            //write code herfe
          }}
  ```

**So now you know the basics of states and here is your task!**

## Task!

Create a random restaurant generator using **_`useState`_** and same logic used in above given example.

That should look like this:

![Untitled](ReactJS%20Track%201%208da69c3665de45fca1254a31ed109530/Untitled%202.png)

![Untitled](ReactJS%20Track%201%208da69c3665de45fca1254a31ed109530/Untitled%203.png)

Hint: Use `array[]` to store all the restaurant names.

> After making this generator, make a PR to above repository. Push the folder random-restaurant-generator under your name folder.

```jsx
// The repo should be looking like this:
-FirstName LastName (Folder)
    - random-restaurant-generator(folder)
        - (your react code)
```

# Step 3

## Style it Up!

This step is simple and requires your creativity.

- Linking Style sheet in React component!
  - Create a file named _style.css_ **in** _src_ folder.
  - Now to link the style sheet with App component we need to `import style.css`
  ```jsx
  import "./style.css";
  ```
  - `./` represent path of the _`style.css` ._

## Task!

Now show your designing creativity and style the react app!

> After styling send PR to above repo. Your PR should contain `style.css` file!

# Step 4

This step is the final step!

## Task!

The create react app tool created the [Readme.md](http://Readme.md) file in your folder. Now you have to write about your project in that Readme.md file. So delete all the content in readme and write your own!

Want to know more about readme? Go [here!](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

> After updating Readme.md send PR to above repo. Your PR should contain `Readme.md` file!
