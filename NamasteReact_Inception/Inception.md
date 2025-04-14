# What is React?

React is a JavaScript library used to build user interfaces, especially for single-page web applications.
It helps you create reusable components and makes your app faster by updating only the parts of the page that change — instead of reloading the whole page.

# Why is React called 'React'?

It's called React because it reacts quickly to data changes.
Whenever something changes in the app (like user input or API data), React updates the UI efficiently without a full page refresh.



# What is a Library?

-> A library is a collection of prewritten code that helps you perform specific tasks easily.

-> In JavaScript, you can use a library by integrating it into your code, which speeds up development and reduces errors.

-> Popular JavaScript libraries include React, jQuery, and Underscore.


**React (Library) Example:**

You are in control. You decide what happens and when.

```js

import React from 'react';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

```

-> React just gives you tools (like useState, onClick, JSX, etc.)

-> You manage the structure, routing, state management, etc.

-> You are in charge — React helps, but doesn't force rules.



# What is a Framework?

-> A framework provides a structured foundation and set of rules for building web applications.

-> It controls the overall flow of the app and decides how your code should fit in.

-> Unlike libraries, where you call the code, in a framework the framework calls your code.

-> Example: Angular is a popular JavaScript framework.


**Angular (Framework) Example:**

```js

// app.component.ts

import { Component } from '@angular/core';

// @Component is Angular’s decorator. It tells Angular: "Hey, this is a component, and here's where to find its HTML"

@Component({
  selector: 'app-root',                                                 // This is used like <app-root></app-root> in HTML
  template: `<button (click)="handleClick()">Click Me</button>`         // This is the HTML Angular will show
})
export class AppComponent {
  // 👇 Your logic goes here
  handleClick() {
    alert('Button clicked!');
  }
}

```

-> Angular gives you the structure. You must create components, use decorators, etc.

-> You don’t decide how to start — Angular does.

-> Your code fits into Angular’s system. You just "fill in the blanks" with your logic.

-> It has built-in features like routing, services, dependency injection, etc.


# Similarities between Library and Framework

-> Both are created to speed up development by providing pre-written, reusable code.

-> Both help in solving common problems developers face during application development.

-> Both can be used to optimize performance by offering tested and efficient solutions.

-> Both are used to avoid writing everything from scratch and improve productivity.

-> Both can be added to a project to extend its functionality.


# Differences between Library and Framework

Control:

    -> In a library, you control when and how to call the code.

    -> In a framework, the framework is in control — it calls your code at the right time.

Flexibility:

    -> Libraries are more flexible — you can use parts of them as needed.

    -> Frameworks are less flexible — you follow their rules and structure.

Usage:

    -> A library is a collection of specific functions to help with tasks.

    -> A framework is a complete structure for building entire applications.

Inversion of Control:

    -> Libraries: No inversion — you’re the boss.

    -> Frameworks: Inversion of control — framework is the boss.

With a library, you call the code; with a framework, the code calls you.


![Library VS Framework](./assets/LibraryVsFramework.jpg "Library VS Framework")


# What is Emmet?

Emmet is a plugin/tool used in many popular text editors and IDEs (like VS Code, Sublime Text, Atom, etc.) that helps you write HTML, CSS, and JSX faster using abbreviations or shortcuts.

**How does it work?**

You write a short expression, and Emmet auto-expands it into full code.


**Basic HTML Boilerplate**

Shortcut: !

Structure:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>


✅ Basic Tag

Shortcut: div

Structure:

<div></div>

✅ ID Shortcut

Shortcut: div#header

Structure:

<div id="header"></div>

✅ Class Shortcut

Shortcut: div.container

Structure:

<div class="container"></div>


✅ Nested Elements

Shortcut: div>ul>li

Structure:

<div>
  <ul>
    <li></li>
  </ul>
</div>


✅ Sibling Elements

Shortcut: div+p+bq

Structure:

<div></div>
<p></p>
<blockquote></blockquote>



✅ Multiplication

Shortcut: ul>li*3

Structure:

<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>


✅ Numbered Items

Shortcut: h$[title=item$]{Header $}*3

Structure:

<h1 title="item1">Header 1</h1>
<h2 title="item2">Header 2</h2>
<h3 title="item3">Header 3</h3>


✅ Grouping

Shortcut: (header>ul>li*2)+footer>p

Structure:

<header>
  <ul>
    <li></li>
    <li></li>
  </ul>
</header>
<footer>
  <p></p>
</footer>

✅ Text Content

Shortcut: p{Hello World}

Structure:

<p>Hello World</p>


✅ Attributes

Shortcut: a[href="https://example.com"]

Structure:

<a href="https://example.com"></a>


✅ Implicit Tag from Class

Shortcut: .box

Structure:

<div class="box"></div>


✅ Climb-up Operator

Shortcut: div>ul>li^^section

Structure:

<div>
  <ul>
    <li></li>
  </ul>
</div>
<section></section>

✅ Lorem Ipsum Generator

Shortcut: p>lorem5

Structure:

<p>Lorem ipsum dolor sit amet consectetur.</p>


✅ Reverse Numbering

Shortcut: ul>li.item$@-*3

Structure:

<ul>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>


✅ Self-closing Tag

Shortcut: input/

Structure:

<input />


# Before learning React, let’s start by creating a basic 'Hello World' program using HTML.

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>

<body>
    <div id="root"> <!-- Container for static content -->
        <h1>Hello World</h1> <!-- Static heading content -->
    </div>
</body>

</html>


![renderUsingHtml](./assets/renderUsingHtml.jpg "renderUsingHtml")


# Now let’s create a basic hello world program using JavaScript.

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>

<body>
    <div id="root"></div> <!-- Empty container for dynamic content -->
    <script>
        const heading = document.createElement("h1");        // Creates a new h1 element.
        heading.innerHTML = "Hello world from JavaScript!";  // Sets inner HTML of the h1.
        const root = document.getElementById("root");        // Gets the root div by its ID.
        root.appendChild(heading);                           // Appends the new h1 to the root div.                        
    </script>

</body>

</html>



# Now let’s create a basic Hello World program using React.

Our browser doesn’t know what React is by default, so we need to add it to our project to start using its features.

There are two main ways to add React to a project:

    -> Using a CDN (Content Delivery Network)

    -> Installing React using NPM (Node Package Manager) and then importing it into your project

In this chapter, we will discuss adding React to a project using a CDN.


# What is a CDN? Why do we use it?  

-> CDN stands for Content Delivery Network.

-> It is a group of distributed servers located in different geographic locations. These servers work together to deliver web content (like HTML files, JavaScript libraries, images, etc.) quickly and efficiently.

Why we use a CDN:

✅ Faster loading times – Content is served from a server closest to the user

✅ High availability and uptime – CDNs are built to be reliable and aim for 100% uptime

✅ Scalability – Can handle large amounts of traffic without performance issues

✅ Reduced server load – Offloads the burden from your main server


Now, let’s import the React CDN into our project to make React available for use.



![renderUsingReact](./assets/renderUsingReact.jpg "renderUsingReact")

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
    <link rel="stylesheet" href="./index.css" />
</head>

<body>

    <div id="root">Not Rendered</div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="./app.js"></script>

</body>

</html>


By including these two CDN links, we've made React available in the browser. This is the simplest React setup. Why? Because if we check in the browser's console, we can see that React and ReactDOM are now available as global objects.

![reactAndReactDom](./assets/reactAndReactDom.jpg "reactAndReactDom")

These objects come from the CDNs we just added.

-> The first CDN link, https://unpkg.com/react@18/umd/react.development.js, is the main React library.

-> The second CDN link, https://unpkg.com/react-dom@18/umd/react-dom.development.js, is needed to work with the DOM using React.



# What is the difference between react and react-dom/client packages?

react:

This package provides core React functionalities like:

    React.createElement()

    React.Component

    React.Children

-> These are used to create and manage React elements and components.


react-dom/client:

This package provides methods to interact with the DOM, mainly:

    ReactDOM.createRoot() (for React 18+)

    ReactDOM.render() (for older versions)

-> It is responsible for rendering your React elements into the actual DOM node.


# What is CORS?

CORS stands for Cross-Origin Resource Sharing. It's a browser security feature that controls whether a web page can make requests to a different domain.

**Understanding CORS with a Playground Analogy:**

🏡 Your Playground = Your Web Page

🏞️ Neighbour’s Playground = External Server

Step 1: Asking to Play
You ask your neighbour if you can use their swings.
→ This is like your website making a cross-origin request to an external server.

Step 2: Neighbour’s Rules (CORS)
Your neighbour has rules about who can play.
→ This represents CORS policies on the server deciding who can access its resources.

Step 3: Getting Permission
If your neighbour says yes, you can play.
If not, you're denied access.
→ The server either allows or blocks the request based on CORS.

**Key Points**

-> Cross-Origin Request: Trying to fetch data from another domain (asking to use neighbour’s swings).

-> CORS: Server-defined rules (neighbour’s rules) that decide whether to allow that access.

**Definitions:**

-> Cross-Origin Request: A request made by one origin (website) to another (API/server) that has a different domain, protocol, or port.

-> CORS (Cross-Origin Resource Sharing): A security mechanism that tells the browser whether it's safe to allow the request or not.


# What is crossorigin in script tag?

![CrossOrigin](./assets/CrossOrigin.jpg "CrossOrigin")


-> In these <script> tags, the crossorigin attribute indicates that the JavaScript files (React and ReactDOM) are being loaded from an external CDN — unpkg.com, which is a different domain from your website. This makes it a cross-origin request.

-> The crossorigin attribute helps the browser handle this request securely. It allows the browser to verify whether the CDN permits such access based on CORS (Cross-Origin Resource Sharing) rules.

-> If you navigate to these CDN links in your browser, you'll see the source code of React, which is written in JavaScript by Facebook developers. So, at the end of the day, React is just JavaScript.

Now let’s continue by writing a Hello World program using React.


```js

// app.js

// Create an <h1> React element with some attributes and text content

const heading = React.createElement(
    "h1",
    {
        id: "heading",
        xyz: "abc" // Custom attribute 
    },
    "Hello world from React"
);


const root = ReactDOM.createRoot(document.getElementById("root")); // Create a React root where our app will be rendered

root.render(heading); // Render the heading element into the root

console.log(heading); // Log the React element object to the console (it returns a plain JS object)

```

We can see that these attributes have been added to the <h1> element in the DOM.

![DOM](./assets/DOM.jpg "DOM")


In the JavaScript code snippet above, heading is a plain JavaScript object that represents a React element

![reactElement](./assets/reactElement.jpg "reactElement")


# What is React.createElement ?

React.createElement is a core function in React that is used to manually create a React element. 

Syntax: React.createElement(type, props, children)

✅ Parameters:

type – The tag name of the HTML element (e.g., 'div', 'h1') or a React component.

props – An object containing attributes/props you want to assign to the element (like id, className, onClick, etc.). If no props are needed, you can pass null.

children – The content inside the element. This can be a string, number, a single React element, or an array of elements.

✅ Example:

```js

const element = React.createElement(
  'h1',
  { className: 'heading', id: 'main-heading' },
  'Hello, React!'
);

```

React.createElement returns a React element, which is a plain JavaScript object that describes what should appear in the UI.

Now, let’s create a React element using React.createElement.

```js

// creating h1 react element

const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello world from React")

const root = ReactDOM.createRoot(document.getElementById('root'))   // creating a root

root.render(heading)   // appending the h1 react element inside the root using render()

console.log(heading)   // heading is a react element

```

In the JavaScript code snippet above, heading is a plain JavaScript object that represents a React element.

![createElementObject](./assets/createElementObject.jpg "createElementObject")

We can see that these attributes are applied to the <h1> element in the DOM.

![createElementDOM](./assets/createElementDOM.jpg "createElementDOM")



# What is ReactDOM.createRoot ?

createRoot is a method from the ReactDOM API that initializes a root container where the React application will be rendered.

It returns a root object with two main methods: .render() and .unmount().

Syntax: const root = ReactDOM.createRoot(document.getElementById("<rootID>"));


# Explain render() 

The .render() method takes a React element or JSX and mounts it into the root DOM container.

This method returns undefined.

Syntax: root.render(<ReactElementOrJSX />);

# .unmount() in React

The .unmount() method removes the React component tree from the root DOM node.

It helps clean up a React app by unmounting it from the DOM, freeing up memory and stopping re-renders.

It returns true if a component was unmounted, otherwise false.

Syntax: root.unmount();

```js

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// Later in your code

root.unmount();  // Removes <App /> from the DOM

```


# How do you represent two levels of nested elements in HTML?


<div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
    </div>
</div>


# How do you represent two levels of nested elements using React?

```js

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h1", {}, "I am an h1 tag")
      ]
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

```


-> Creates a <div> with id="parent" as the outermost element.

-> Inside it, creates a nested <div> with id="child".

-> Inside the child, creates an <h1> element with the text "I am an h1 tag".

-> Stores the entire structure in the parent variable.

-> Initializes a React root using the DOM element with id "root".

-> Renders the parent element into the root DOM node.


# How to Represent Sibling Elements in HTML ? 

<div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div>


-> The outer <div id="parent"> wraps everything.

-> Inside it, <div id="child"> acts as the immediate container.

-> <h1> and <h2> are sibling elements inside the same parent (<div id="child">).

-> Elements are considered siblings when they share the same parent element.


# How to Represent Sibling Elements in React ?

```js

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag")
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


```

-> The outer div acts as the parent container.

-> h1 and h2 are React elements passed as an array (i.e., siblings).

-> React uses an array to group multiple children under one parent.

-> React requires a single parent element to wrap sibling elements.


# How to Represent Nested Sibling Elements in HTML ?

<div id="parent">
    <div id="child1">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div>


-> The outer <div id="parent"> is the main container.

-> <div id="child1"> and <div id="child2"> are sibling elements under #parent.

-> Each child div has its own nested <h1> and <h2> tags.

-> The <h1> and <h2> tags inside each child are sibling elements to each other.

# How to Represent Nested Sibling Elements in React

```js

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child1" },
      [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
      ]
    ),
    React.createElement(
      "div",
      { id: "child2" },
      [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
      ]
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

```
-> The top-level div with id="parent" is the root container.

-> child1 and child2 are created as sibling <div> elements, both inside the parent.

-> Each child div contains sibling <h1> and <h2> elements.

-> Children of the same parent are passed as arrays to React.createElement.

-> Nested structure is created by nesting React.createElement calls inside arrays.


The code works fine, but when multiple children are introduced, React shows a warning in the console.This warning appears because we haven’t provided a key for each child element.React uses these keys to efficiently track and manage individual elements.

We will discuss keys in more detail in later chapters.

![KeysError](./assets/KeysError.jpg "KeysError")


When working with deeply nested elements, writing code in this way can become hard to read, maintain, and test.

To solve this problem, JSX was introduced as a more readable and intuitive alternative.
We’ll explore JSX in more detail in the upcoming chapters.


# Important Observations

1. The order of the <script> tags matters.

If we move our custom script above the React CDN scripts, the browser tries to run our code before React is loaded, resulting in an error like React is not defined.
This happens because we're referencing the React object before the browser has had a chance to fetch and load it from the CDN.

```js

    <script src="./app.js"></script>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

```
![OrderRenderingIssue](./assets/OrderRenderingIssue.jpg "OrderRenderingIssue")



2. When rendering a React element into the DOM, React overwrites any existing child elements inside the root element. This means any HTML content already present inside the root container will be replaced by the React-rendered content.

![reactcomponentOverriding](./assets/reactcomponentOverriding.jpg "reactcomponentOverriding")

The text 'Not rendered' will be replaced by the React element that is rendered into the root.
As a result, when the page initially loads, 'Not rendered' may briefly appear on the screen — this happens before the React source code is fully fetched from the CDNs and made available to the browser.
Once React is loaded, it replaces that initial content with the React element, which consists of two child <div> elements nested inside a parent <div>.



3. We can use React in specific parts of our application.
For example, we might use React only for the main content area, while keeping the header and footer as plain HTML.
This is one of the reasons React is considered a library (not a full framework) — it gives developers the flexibility to integrate it gradually, without needing to rewrite the whole app.
You can introduce React step by step into your app, without the need to rebuild everything from scratch.

<!DOCTYPE html>
<html>
  <head>
    <title>Partial React Usage</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <!-- Non-React Header -->
    <header>
      <h1>This is the header (HTML)</h1>
    </header>
    <!-- React Root -->
    <div id="root"></div>
    <!-- Non-React Footer -->
    <footer>
      <p>This is the footer (HTML)</p>
    </footer>
    <script type="text/babel">
      const App = () => {
        return (
          <div>
            <h2>This part is rendered using React</h2>
            <p>React is controlling only this section.</p>
          </div>
        );
      };
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);
    </script>
  </body>
</html>


# What is the difference between the Development and Production stages of an application?

🔧 Development Stage:

-> The application is not yet public and is mainly used for internal development and testing.

-> Frequent code changes are made to enable fast iteration and experimentation.

-> The development build includes debugging tools and detailed error messages, which can make it slower than a production build.

🚀 Production Stage:

-> This is the public-facing version of the application, intended for end users.

-> The code is optimized for performance and security.

-> The production build is faster and more efficient, as it excludes debugging tools and non-essential features.It is typically minified and bundled to reduce file size, decrease load times, and enhance the overall user experience.