# JSX useCases

# 1.Variables in JSX

```js
const name = "Likan";
const element = <h1>Hello, {name}!</h1>; // Outputs: Hello, Likan!
```

# 2.JSX Attributes vs HTML Attributes

**Naming Convention**: 

```js
const element = <div 
  className="my-class" // In JSX, 'class' is replaced with 'className' to avoid conflict with the 'class' keyword in JavaScript
  htmlFor="inputId" // In JSX, 'for' is replaced with 'htmlFor' to avoid conflict with the 'for' attribute in JavaScript
>
  Example Text
</div>;

```

**Passing Values**: 

```js

// JSX attributes can take different types of values: strings, objects, or expressions.

const imageElement = <img 
  src="logo.png" // 'src' specifies the image source (string value)
  alt="Logo" // 'alt' provides alternative text for the image (string value)
 />;

```

# 3.Specifying Children.You can nest elements within other elements, just like in HTML.

```js

const element = (
  <div>
    <h1>Heading</h1>  
    <p>This is a paragraph.</p> 
  </div>
);

```


# 4.Conditional Rendering: You can use JavaScript logic to conditionally display elements.

```js

// Conditional rendering using ternary operator
const isLoggedIn = true;  // Boolean variable to track login status
const element = isLoggedIn 
  ? <h1>Welcome back!</h1>  // Displays this if isLoggedIn is true
  : <h1>Please sign in.</h1>;  // Displays this if isLoggedIn is false

// Conditional rendering using && (AND) operator
const messages = ['message1', 'message2'];  // Array of messages
const element = (
  <div>
    {messages.length > 0 && <h2>You have {messages.length} unread messages.</h2>} 
    {/* Only renders the <h2> element if messages.length is greater than 0 */}
  </div>
);

```

# 5.Handling Events: You can manage events, like clicks, by passing event handler functions.

```js
// Handling events in JSX
function handleClick() {
  alert('Button clicked!');  // This function is triggered when the button is clicked
}

const element = (
  <button onClick={handleClick}>Click Me</button> 
  // onClick is an event handler. It calls the handleClick function when the button is clicked
);


```


# 6.Passing Props to Components: Props allow you to pass dynamic data into components.

```js

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;  // 'props.name' accesses the 'name' prop passed to the component
}

const element = <Greeting name="Likan" />;  // Passing the 'name' prop with value 'Likan' to the Greeting component

```


# 7.Fragments: Fragments let you group multiple elements without adding extra nodes to the DOM.

```js

// Fragments. Fragments let you group multiple elements without adding extra nodes to the DOM.

const element = (
  <>  // This is a Fragment that groups the elements without adding a parent DOM node
    <h1>Heading</h1>  // First element in the Fragment
    <p>Paragraph</p>  // Second element in the Fragment
  </>  // Closing Fragment tag
);

```


# 8.JSX with Arrays: You can render lists by mapping over arrays and generating JSX for each item.

```js

const items = ['Item 1', 'Item 2', 'Item 3'];  // Array of items

const element = (
  <ul>  
    {items.map((item, index) => 
      <li key={index}>{item}</li>  // For each item, create an <li> element with a unique key
    )}
  </ul>
);


```


# 9.JSX Spread Attributes: You can use the spread operator (...) to pass all properties of an object at once.

```js

const props = { id: 'heading', className: 'title' };  // Object containing the properties to be passed

const element = <h1 {...props}>Hello!</h1>;  // Spread operator copies all properties from 'props' into the <h1> element.Internally JSX looks like <h1 id="heading" className="title">Hello!</h1>


```


# 10.Using Functions in JSX: You can embed functions in JSX to compute or manipulate data.

```js

// Define a user object with first and last name
const user = { firstName: 'Likan', lastName: 'Mishra' };

// Function that formats the name of the user
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

// JSX element that uses the function to display the formatted name
const element = <h1>Hello, {formatName(user)}!</h1>;  // Function 'formatName' is called inside JSX to dynamically display the user's full name

```


# 11.JSX Comments: You can add comments inside JSX using curly braces and the /* comment */ syntax.

```js

// JSX element containing a comment inside it
const element = (
  <div>
    {/* This is a comment */}  // This is a comment inside JSX, it won't be rendered in the UI
    <h1>Hello, world!</h1>    // This JSX will render the <h1> element with the text "Hello, world!" in the UI
  </div>
);

```


# 12.JSX in Loops: You can loop over arrays and return JSX for each item.

```js

// Array of items to be displayed in a list
const items = ['React', 'JSX', 'JavaScript'];

// JSX element that maps over the items array to create a list
const element = (
  <ul>  // The unordered list element
    {items.map((item, index) => 
      <li key={index}>{item}</li>  // Each item in the array is rendered as a list item (<li>)
    )}
  </ul>
);

```


# 13.Embedding Objects in JSX: You can pass JavaScript objects as content or props.

```js

// JavaScript object with user details
const user = { name: "Likan", age: 28 };

// JSX element that embeds the properties of the 'user' object
const element = <div>{user.name} is {user.age} years old.</div>;  // Embeds 'name' and 'age' values inside JSX

```

# 14.Combining Comments with Conditional Statements: You can mix JavaScript conditionals and comments inside JSX.

```js
// Boolean flag to control the rendering of the title
const showTitle = true;

// JSX element that conditionally renders the <h1> element
const element = (
  <div>
    {showTitle && <h1>{/* Only shows this if showTitle is true */}Conditional Heading</h1>}
  </div>
);

```

# 15.Using Functional Components directly in JSX" or "Directly Using Components in JSX

You can use functional components directly as JSX elements.

```js

// Functional component that returns JSX
const Header = () => <h1>Header Component</h1>;

// JSX element using the Header component directly inside a <div>
const headerJSX = (
  <div>
    <Header />  {/* Using Header component directly as JSX */}
    <p>This is the main content of the app.</p>
  </div>
);

// Creating a React root and rendering the JSX into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headerJSX);  // Rendering the headerJSX which includes the Header component

```

# 16.Directly Nesting JSX Elements Within Each Other.

You can directly nest one JSX element inside another.

```js

// JSX elements that will be included in the combined JSX
const JSXElementA = <h1>Hello from Element A!</h1>;
const JSXElementB = <p>This is Element B.</p>;

// Combining JSXElementA and JSXElementB inside a <div>
const combinedJSX = (
  <div>
    {JSXElementA}  {/* Including JSXElementA inside the <div> */}
    {JSXElementB}  {/* Including JSXElementB inside the <div> */}
  </div>
);

// Creating a React root and rendering the combined JSX into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(combinedJSX);  // Rendering the combinedJSX, which includes both elements A and B

```


# 17.Organizing JSX by Using Components

You can define a functional component that returns JSX and use it inside another JSX structure.

```js

// Define a functional component that returns a JSX element (WelcomeMessage)
const WelcomeMessage = () => <h1>Welcome to My App!</h1>;

// Define another functional component (Instructions)
const Instructions = () => <p>Please enjoy your stay.</p>;

// Combining the components inside the main JSX structure
const mainJSX = (
  <div>
    <WelcomeMessage />  {/* Calling the WelcomeMessage component, which renders the <h1> element */}
    <Instructions />    {/* Calling the Instructions component, which renders the <p> element */}
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainJSX);  

```