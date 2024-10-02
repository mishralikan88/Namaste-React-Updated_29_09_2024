### JSX useCases

### Variables. You can directly use variables inside JSX.

const name = "Likan";
const element = <h1>Hello, {name}!</h1>; // Outputs: Hello, Likan!


### JSX attributes are similar to HTML attributes, but with some differences:

**Naming Convention**: 

// Use camelCase for multi-word attributes to avoid conflicts with JavaScript keywords.

const element = <div 
  className="my-class" // 'className' replaces 'class' in JSX
  htmlFor="inputId" // 'htmlFor' replaces 'for' in JSX
>
  Example Text
</div>;

**Passing Values**: 

// JSX attributes can take different types of values: strings, objects, or expressions.

// Example of passing a string

const imageElement = <img 
  src="logo.png" // 'src' specifies the image source
  alt="Logo" // 'alt' provides alternative text for the image
/>;

**Example of passing an object for inline styles**

const styledDiv = <div 
  style={{ 
    color: "blue", // Sets text color to blue
    fontSize: "20px" // Additional styling can be added
  }} 
>
  Styled Text // Text styled according to the defined styles
</div>;


### Specifying Children.You can nest elements inside other elements, just like in HTML.

const element = (
  <div>
    <h1>Heading</h1>
    <p>This is a paragraph.</p>
  </div>
);


### JSX in Function Components. Function components use JSX to return UI elements.

function Greeting() {
  return <h1>Hello, world!</h1>;
}
const element = <Greeting />; // Uses the Greeting component


### Conditional Rendering. You can use JavaScript logic to conditionally display elements.

const isLoggedIn = true;
const element = isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;

You can also use && for conditional rendering:

const messages = ['message1', 'message2'];
const element = (
  <div>
    {messages.length > 0 && <h2>You have {messages.length} unread messages.</h2>}
  </div>
);


### Handling Events.You can handle events like clicks by passing event handler functions.

function handleClick() {
  alert('Button clicked!');
}
const element = <button onClick={handleClick}>Click Me</button>;


### Passing Props to Components.Props allow you to pass dynamic data into components.

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
const element = <Greeting name="Likan" />;


### Fragments.Fragments let you group multiple elements without adding extra nodes to the DOM.

const element = (
  <>
    <h1>Heading</h1>
    <p>Paragraph</p>
  </>
);


### JSX with Arrays.You can render lists by mapping over arrays and generating JSX for each item.

const items = ['Item 1', 'Item 2', 'Item 3'];
const element = (
  <ul>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);


### JSX Spread Attributes.You can use the spread operator (...) to pass all properties of an object at once.

const props = { id: 'heading', className: 'title' };
const element = <h1 {...props}>Hello!</h1>;


### Using Functions in JSX.You can embed functions in JSX to compute or manipulate data.

const user = { firstName: 'Likan', lastName: 'Doe' };

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const element = <h1>Hello, {formatName(user)}!</h1>;


### JSX Comments.You can add comments inside JSX using curly braces and /* comment */.

const element = (
  <div>
    {/* This is a comment */}
    <h1>Hello, world!</h1>
  </div>
);


### JSX inside Loops.You can loop over arrays and return JSX for each item.

const items = ['React', 'JSX', 'JavaScript'];
const element = (
  <ul>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);


### Embedding Objects in JSX.You can pass JavaScript objects as content or props.

const user = { name: "Likan", age: 28 };
const element = <div>{user.name} is {user.age} years old.</div>;

### Combining Comments with Conditional Statements.You can mix JavaScript conditionals and comments inside JSX.

const showTitle = true;
const element = (
  <div>
    {showTitle && <h1>{/* Only shows this if showTitle is true */}Conditional Heading</h1>}
  </div>
);



### Using Components Directly in JSX

You can directly use functional components as JSX elements.

const Header = () => <h1>Header Component</h1>;

const headerJSX = (
  <div>
    <Header />  {/* Using Header component directly */}
    <p>This is the main content of the app.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headerJSX);


### Directly Nesting JSX Elements

You can directly include one JSX element inside another.

const JSXElementA = <h1>Hello from Element A!</h1>;
const JSXElementB = <p>This is Element B.</p>;

const combinedJSX = (
  <div>
    {JSXElementA}  {/* Including JSXElementA */}
    {JSXElementB}  {/* Including JSXElementB */}
  </div>
);

// Render the combined JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(combinedJSX);


### Using Components to Organize JSX

You can define a functional component that returns JSX and then use it inside another JSX structure.

const WelcomeMessage = () => <h1>Welcome to My App!</h1>;
const Instructions = () => <p>Please enjoy your stay.</p>;

const mainJSX = (
  <div>
    <WelcomeMessage />  {/* Calling the WelcomeMessage component */}
    <Instructions />    {/* Calling the Instructions component */}
  </div>
);

// Render the main JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainJSX);