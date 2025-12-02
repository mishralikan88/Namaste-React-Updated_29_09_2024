**Default props**

Default props allow you to set default values for props when no value is passed by the parent component.

Example with Function Component -

```js

function Button({ label, color }) {
  return <button style={{ background: color }}>{label}</button>;
}

Button.defaultProps = {
  label: "Click Me",
  color: "blue",
};

export default Button;

```
If the parent does:

```js

<Button />

```

Output button will have:

label = "Click Me"

color = "blue"

🟦 Same Example Using Default Value in Parameter (Modern Way)

This is now the preferred syntax:

function Button({ label = "Click Me", color = "blue" }) {
  return <button style={{ background: color }}>{label}</button>;
}

export default Button;

👇 Example when parent passes props
<Button label="Submit" />


Default props provide fallback values for props in a React component when the parent does not pass them.

=================================================================================================================================

**Passing functions as props**

Passing functions as props allows a parent component to communicate with and control a child componen

This is often used for-

Updating parent state from a child
Handling events (click, change)
Sending data from child → parent

✅ Basic Example
Parent Component
function Parent() {
  function handleMessage() {
    alert("Message from parent!");
  }

  return <Child onClick={handleMessage} />;
}

Child Component
function Child({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}


👉 When the button is clicked, it calls the function defined in the parent.

🎯 Passing Data from Child → Parent
Parent
function Parent() {
  const handleData = (value) => {
    console.log("Received from child:", value);
  };

  return <Child sendData={handleData} />;
}

Child
function Child({ sendData }) {
  return (
    <button onClick={() => sendData("Hello Parent!")}>
      Send Data
    </button>
  );
}


➡ Output in console: Received from child: Hello Parent!

💡 Using with useState
Parent
function Parent() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return <Counter handleIncrement={increment} count={count} />;
}

Child
function Counter({ handleIncrement, count }) {
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
    </>
  );
}

🧩 Arrow Functions Inline
<Child onClick={() => console.log("Inline function")} />


✔ Works fine
❌ But avoid overusing inline functions when heavy re-rendering happens (performance concern).

🔁 Two-Way Communication Summary
Direction	How it works
Parent ➝ Child	Props value (name, color, isOpen, etc.)
Child ➝ Parent	Passing function props and invoking them
🧪 Interview One-Liner

In React, functions can be passed as props so that a child component can communicate or trigger actions in the parent component, especially useful for event handling and updating parent state.



=======================================================================================================================

Note -
A setter function can take a value or a function — React supports both forms.


❌ Snippet 1: Using setCount(count + 1) (WRONG for multiple updates)
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);   // ❌ still uses the old value
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

👉 Output after clicking once:

Count becomes: 1
(Not 2, because both updates used the old value: 0)

✅ Snippet 2: Using setCount(prev => prev + 1) (CORRECT)
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);   // ✅ uses updated value each time
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

👉 Output after clicking once:

Count becomes: 2
(0 → 1 → 2 correctly)

⭐ One-line difference

count + 1 → uses OLD value → updates only once

prev + 1 → uses LATEST value → updates correctly twice




✅ Both versions behave EXACTLY the same
Version 1
function handleChange(e) {
  setValue(val);
}

Version 2
function handleChange(e) {
  return setValue(val);
}

⭐ Why both are same?

setValue() returns undefined


So returning or not returning makes no difference


===================================================================================================================

🧠 Simple Definition

Passing components as props means sending a JSX element or another component to a child component, and letting that child decide where and how to render it.

✅ Example 1 — Passing JSX as a Prop
Parent
function Parent() {
  return <Card content={<h2>Hello World</h2>} />;
}

Child
function Card({ content }) {
  return <div className="card">{content}</div>;
}


👉 Result: <h2>Hello World</h2> will appear inside the card.

🧩 Example 2 — Passing a Component (Not JSX)
Parent
function Parent() {
  return <Card Component={Header} />;
}

function Header() {
  return <h1>I am a Header</h1>;
}

Child
function Card({ Component }) {
  return (
    <div className="card">
      <Component />
    </div>
  );
}


🟢 Useful when the component needs props later.

🎯 Example 3 — Passing Component With Props

Parent:

function Parent() {
  return <Card Component={Message} message="Hello React!" />;
}

function Message({ message }) {
  return <p>{message}</p>;
}


Child:

function Card({ Component, message }) {
  return (
    <div className="card">
      <Component message={message} />
    </div>
  );
}

⭐ Best & Most Common Pattern: children

React already has a built-in elegant way:

Parent
<Card>
  <h2>Hello from children</h2>
  <button>Click</button>
</Card>

Child
function Card({ children }) {
  return <div className="card">{children}</div>;
}


🎉 This is how most UI libraries (Material UI, ShadCN, Chakra) work.

🔥 Real-World Use Case: Modal Layout
function Modal({ title, actions, children }) {
  return (
    <div className="modal">
      <h2>{title}</h2>
      <div>{children}</div>
      <div className="actions">{actions}</div>
    </div>
  );
}


Parent:

<Modal
  title="Delete Item"
  actions={<button>Confirm Delete</button>}
>
  <p>Are you sure you want to delete this?</p>
</Modal>

🧪 When Should You Use This?
Use Case	Best Method
Passing text, UI content	children
Passing a specific component to render	Component prop (Component={Header})
Rendering dynamic replacements like icons/buttons/layouts	JSX prop (icon={<Star />})
Reusable higher-order layouts like forms, cards, modals	Component or children
🧩 Interview One-Liner

Passing components as props allows a parent to decide what UI a child should render, increasing flexibility and reuse. It’s commonly done using JSX props or React’s children prop.


==========================================================================================================

🚀 Lazy Loading Images in React

Lazy loading means:
👉 The image loads only when it comes into view, not before.
This makes your app faster.

✅ Easiest Method: Use loading="lazy"

Just add one attribute to your <img /> tag.

<img
  src="https://example.com/big-image.jpg"
  alt="Profile"
  loading="lazy"
/>


That’s it.
No library, no extra code.

====================================================
Here are the different ways to import and use images in a React application, explained short and easy 👇

🔹 1. Import image in a component (most common way)

File structure:

src/
  images/
    hero.png
  App.jsx


Use like this:

import hero from "./images/hero.png";

function App() {
  return <img src={hero} alt="Hero" />;
}

export default App;


📌 React converts the image into an optimized file during build.

🔹 2. Use image from the public folder

File structure:

public/
  logo.png
src/
  App.jsx


Use like this:

function App() {
  return <img src="/logo.png" alt="Logo" />;
}


📌 No import needed — browser loads directly.

🔹 3. Use a URL image (CDN / external)
function App() {
  return (
    <img
      src="https://example.com/image.jpg"
      alt="External Image"
    />
  );
}


📌 Useful for APIs or remote images.

🔹 4. Images from JSON/API
const data = {
  img: "/car.png" // in public folder
};

function App() {
  return <img src={data.img} alt="Car" />;
}

=========================================================================================
👇 How to use onClick in React

React uses functions as event handlers.
So when you attach onClick, you give React a function reference — not a function call.

✅ 1. Pass the function reference
<button onClick={handleClick}>Click</button>


React will execute handleClick only when the button is clicked.

❌ 2. Don’t call the function directly
<button onClick={handleClick()}>Click</button>


This runs the function immediately during rendering — not on click.
So avoid this unless intentional.

🏹 3. Use an arrow function (when passing arguments)
<button onClick={() => handleClick("Likan")}>Click</button>


Arrow functions are used when you need:

parameters

custom logic before calling the handler

🧠 Event Object

React automatically passes a Synthetic Event:

function handleClick(e) {
  console.log(e);
}


No need to manually send the event object.


**synthetic event**

A Synthetic Event in React is React’s wrapper around the browser event that makes event handling consistent across all browsers.

Example:

<button onClick={(e) => console.log(e)}>Click</button>


Here e is a SyntheticEvent, not the raw browser event.

Browser events behave differently in Chrome, Firefox or Safari, but React uses Synthetic Events, so the same event works consistently across all browsers.

===================================================================================================================

🎯 Conditional Rendering in React

Sometimes you want to show different UI based on a condition.
There are multiple ways to do it.

✅ 1. if / else
if (role === "admin") {
  return <AdminPanel />;
} else {
  return <UserPanel />;
}


✔ Best when logic is longer.

✅ 2. Ternary Operator (? :)
return role === "admin" ? <AdminPanel /> : <UserPanel />;


✔ Good for simple one-line conditions.

✅ 3. && Operator
return loggedIn && <Dashboard />;


✔ Used when you want to show something only if condition is true.

✅ 4. switch Case (when many options)
switch (role) {
  case "admin":
    return <AdminPanel />;
  case "user":
    return <UserPanel />;
  case "guest":
    return <GuestPage />;
  default:
    return <NotFound />;
}


One-Line Summary

👉 Use ternary for simple checks, switch for multiple conditions, and && when showing something only if true.



✔ Best when there are multiple conditions.

🧠 Rule of Thumb
Use Type	Best When
if/else	Heavy logic
? : ternary	Simple condition
&&	Show only if true
switch	Many cases

=====================================================================

Yes — you can pass keys inside React fragments, but only when using the long syntax, not the short one.

❌ Short Fragment Syntax — Keys NOT allowed
<>
  <li>Item 1</li>
  <li>Item 2</li>
</>


You cannot write:

< key={id} ></>   // ❌ invalid


Because the short fragment (<>...</>) does not support props.

✅ Long Fragment Syntax — Keys allowed
<React.Fragment key={id}>
  <li>{item}</li>
</React.Fragment>


This works because the long syntax accepts props, including key.

📌 Why would you add a key to a Fragment?

Mainly when rendering a list and you don’t want an extra DOM element like a <div>.

Example:

const items = ["A", "B", "C"];

return items.map((item, index) => (
  <React.Fragment key={index}>
    <p>{item}</p>
    <hr />
  </React.Fragment>
));


No extra wrapper shows up in the DOM — cleaner markup.

🔥 Easy One-Line Interview Answer

Yes, you can add keys to React Fragments, but only using <React.Fragment> syntax. The short <> fragment cannot accept keys.


============================================================================================================

1. What is useRef in React?

Simple definition:

useRef lets you store a value that:

survives re-renders ✅

does NOT cause re-renders when it changes ❌

can also point to a DOM element (like <input>, <div>, etc.) ✅


2. Basic Syntax & Return Shape
const ref = useRef(initialValue);


What you get back:

// ref is an object
{
  current: initialValue
}


You always read/update via: ref.current


3. useRef vs useState vs Normal Variable

🔹 Normal variable (inside component)

function App() {
  let x = 0;
  x++;
  console.log(x);
  return <div>{x}</div>;
}

x is reset on every render.

Does not persist.

🔹 useState
const [count, setCount] = useState(0);

Persists across renders ✅
Updating it causes re-render ✅

🔹 useRef
const countRef = useRef(0);
countRef.current++;

Persists across renders ✅
Updating does NOT cause re-render ❌


4. Main Use Cases of useRef
4.1 Access DOM Elements (Most Common)

import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  function handleFocus() {
    // inputRef.current is the actual DOM element
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}


ref={inputRef} tells React: "when you render this <input>, store its DOM node in inputRef.current".
You can then call DOM methods like .focus(), .scrollIntoView(), .play(), etc.

4.2 Store Mutable Values Without Re-rendering

import { useRef } from "react";

function Counter() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
    console.log("Current value:", countRef.current);
  };

  return <button onClick={handleClick}>Increase (check console)</button>;
}
🧠 Important:

The button text will never change because we are not using useState.

Only the console log changes.

Good for internal logic, not for UI display.



4.3 Persist Values Between Renders (Render Count Example)

import { useRef } from "react";

function RenderTracker({ value }) {
  const renderCount = useRef(0);

  // This runs every time the component renders.
  // We update the count, but this does NOT trigger a re-render because it's a ref.
  renderCount.current++;

  return (
    <p>Rendered: {renderCount.current} times — Current value: {value}</p>
  );
}
🧠 Easy explanation:
useRef(0) starts with 0.

Every time the component renders, we do renderCount.current++.

The number keeps increasing because useRef remembers the value.

But changing it does NOT re-render the component.

💡 One-line Summary:
useRef stores a value across renders without causing re-renders.


4.4 Store Previous State/Prop (Prev Value Pattern)

🧠 Component Code (with mental notes)
import { useEffect, useRef, useState } from "react";

function InputWithPrevValue() {

  // Step 1: Create a state value that triggers re-renders when updated
  const [value, setValue] = useState("");

  // Step 2: Create a ref to store the previous value (ref persists across renders)
  const prevValueRef = useRef("");

  // Step 3: useEffect runs AFTER each render, when `value` changes
  useEffect(() => {
    // update ref AFTER UI updates
    prevValueRef.current = value;
  }, [value]);

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)} // Updating state triggers re-render
        placeholder="Type something"
      />
      <p>Current: {value}</p>
      <p>Previous: {prevValueRef.current}</p>
    </>
  );
}

🔁 Render Flow Explained
🟦 Initial Render (Nothing typed yet)
Variable	Value
value	"" (from useState(""))
prevValueRef.current	"" (from useRef(""))

UI shows:
Current: ""
Previous: ""

After UI paint → useEffect runs
→ prevValueRef.current = value → still ""

🟦 User types: "H"
1️⃣ User types → onChange fires → setValue("H")

👉 Calling setValue triggers a re-render.

2️⃣ During re-render:
Variable	Value
value	"H"
prevValueRef.current	still " " (OLD value, unchanged yet)

💡 Because .current only updates after render inside useEffect.

UI now shows:
Current: "H"
Previous: ""

3️⃣ After UI paint → useEffect runs:
prevValueRef.current = "H"


Now ref stores "H".

🟦 User types again: "He"
1️⃣ setValue("He") triggers re-render
Variable	Value
value	"He"
prevValueRef.current	"H" (previous stored value)

UI shows:
Current: "He"
Previous: "H"

2️⃣ useEffect runs → update ref
prevValueRef.current = "He"

🟦 Continue typing:
Input Action	Current State (value)	Stored Previous (ref.current)
Type H	"H"	""
Type e	"He"	"H"
Type l	"Hel"	"He"
Type l	"Hell"	"Hel"
Type o	"Hello"	"Hell"
🚀 Why do we need useRef here?

Because:

If we stored the previous value using useState, updating it would cause another re-render → not needed.

useRef allows us to store the value without triggering re-renders.



4.5 Store Timer IDs (setTimeout / setInterval)

import { useRef } from "react";

function Timer() {

  // useRef stores the timer ID created by setInterval.
  // We set initial value as null because there is no timer running initially.
  // This value will persist across re-renders (does not reset).
  const timerIdRef = useRef(null);

  const startTimer = () => {

    // If timerIdRef already has a value, it means a timer is already running.
    // We return early to avoid starting duplicate intervals.
    if (timerIdRef.current !== null) return;

    // setInterval returns a unique ID for the timer.
    // We store that ID inside .current.
    timerIdRef.current = setInterval(() => {
      console.log("Tick...");
    }, 1000);
  };

  const stopTimer = () => {
    // clearInterval needs the timer ID to stop the running interval.
    // We pass the stored interval ID from the ref.
    clearInterval(timerIdRef.current);

    // After stopping, reset the ref value back to null.
    // This allows startTimer to run again.
    timerIdRef.current = null;
  };

  return (
    <>
      {/* Clicking "Start" sets a timer only once */}
      <button onClick={startTimer}>Start</button>

      {/* Clicking "Stop" clears the running timer */}
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}

export default Timer;
🔁 Full Flow (Step-by-Step)
🔹 Initial State (Before Clicking Anything)
Value	Meaning
timerIdRef.current → null	No timer running yet

🎯 When user clicks Start
startTimer() is called.

Condition check:

js
Copy code
if (timerIdRef.current !== null) return;
👉 Since .current is null, code continues.

A new interval starts:

js
Copy code
timerIdRef.current = setInterval(...);
Value	Meaning
timerIdRef.current = 4 (example ID)	Timer is now running

💡 Now "Tick..." prints every 1 second.

⚠️ User clicks Start again
Condition detects timer already running:

js
Copy code
if (timerIdRef.current !== null) return;
So nothing happens → avoids duplicate intervals.

🛑 User clicks Stop
clearInterval(timerIdRef.current) stops the running timer.

Reset the ref:

js
Copy code
timerIdRef.current = null;
Value	Meaning
timerIdRef.current = null	Timer stopped, can start again

======================================================================================================================================

What is "Lifting the State Up"?

When two (or more) child components need the SAME data,
👉 you move that data (state) UP to their common parent
👉 and pass it down using props.

⚡ Lifting the state up means keeping shared state in the nearest common parent so multiple child components can access and update it through props.

🎨 VISUAL Explanation (Very Simple)

❌ Wrong way – state in each component

Parent
 ├── Child A → has its own count
 └── Child B → has its own count

Child components maintain separate state.
State is not shared.
So values become inconsistent.


✔ Right way – state lifted to the parent

Parent → stores count
 ├── Child A → reads count from parent
 └── Child B → reads count from parent

Both see the same value.

Why Do We Need to Lift State Up?

Both components need the same data.
They should always show the same updated value.
Don't keep the same state in two places.
Put the logic in one place so everything stays in sync.


🧩 Scenario 1: 🧩 Scenario 1: One Input + One Display Need the Same Value

❌ Without lifting

Child A has its own value.
Child B has its own value.
→ They never sync.

✔ With lifting

Parent holds the input value.
Both children get it through props.

Code:

```js

function Parent() {
  const [text, setText] = useState("");

  return (
    <>
      <ChildA value={text} onChange={setText} />
      <ChildB value={text} onChange={setText} />
    </>
  );
}

function ChildA({ value, onChange }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function ChildB({ value, onChange }) {
  return <h3>You typed: {value}</h3>;
}

```

✔ Input in ChildA updates output in ChildB
✔ They share the same state (in parent)


# Rending Process - 

🟡 Phase 1: Initial Render (when component appears first time)

1️⃣ React calls Parent()

useState("") runs
text is initialized as ""
setText function is created

2️⃣ Parent returns JSX

React sees:

<ChildA value={text} onChange={setText} />
<ChildB value={text} onChange={setText} />


Right now: value={text} → value=""

So React schedules:

Render ChildA with props { value: "", onChange: setText }
Render ChildB with props { value: "", onChange: setText }

3️⃣ React renders ChildA

React calls: ChildA({ value: "", onChange: setText });
ChildA returns: <input value="" onChange={(e) => onChange(e.target.value)} />
React creates an <input> element in the DOM with: value="" (empty)
onChange handler attached

4️⃣ React renders ChildB

React calls: ChildB({ value: "", onChange: setText });
ChildB returns: <h3>You typed: </h3>
React creates an <h3> in the DOM with that text.

✅ Now the screen shows:

An empty input box
A text: You typed:

🟡 Phase 2: User types in ChildA (e.g., types "H")

Now you click in the input and type H.

5️⃣ Browser fires input / change event

React's synthetic event system catches it and calls: (e) => onChange(e.target.value)

Here: e.target.value is "H"

onChange is actually setText (passed from Parent)

So it calls: setText("H");

🟡 Phase 3: State update → Re-render

6️⃣ setText("H") schedules a re-render of Parent

React marks Parent as "needs to render again".

7️⃣ React calls Parent() again

Now, inside Parent: const [text, setText] = useState("");

Because of React’s state system, text is no longer "".

Now text = "H" (the updated value).

8️⃣ Parent returns JSX again (with new value)

Now React sees:

<ChildA value="H" onChange={setText} />
<ChildB value="H" onChange={setText} />


So it re-renders both children with new props.

🟡 Phase 4: Children re-render with updated props

9️⃣ React re-renders ChildA

React calls: ChildA({ value: "H", onChange: setText });

ChildA returns: <input value="H" onChange={(e) => onChange(e.target.value)} />

React updates the existing <input> DOM node.

Its value becomes "H".

(React does NOT create a new input, it updates the old one.)

🔟 React re-renders ChildB

React calls: ChildB({ value: "H", onChange: setText });

ChildB returns:  <h3>You typed: H</h3>

React updates the existing <h3> DOM node.

Text now becomes: You typed: H

🔁 Phase 5: More typing (each character = repeat same steps)

If you now type "He":

Event fires in <input>

setText("He") is called

Parent re-renders with text = "He"

ChildA gets value="He" → input updates

ChildB gets value="He" → text updates

…and so on for every character.

🧠 What renders when?

Initial mount:

Parent renders → returns ChildA + ChildB

ChildA renders → input created
ChildB renders → heading created

On every input change:

ChildA's onChange runs → calls setText(newValue)
Parent re-renders with updated text
ChildA re-renders with new value
ChildB re-renders with new value
So the order is always:
Parent re-renders → then children re-render with new props.

⚛️ Render Phase vs Commit Phase (Short + Easy)

🟡 Render Phase (Thinking Phase)

React is ONLY calculating what the UI should look like.
What happens in this example:
React calls Parent()
React calls ChildA()
React calls ChildB()
React builds a new virtual DOM for:

<input value="..." />
<h3>You typed: ...</h3>

❗ No DOM updates
❗ Nothing appears on the screen yet
❗ Only function calls + virtual DOM building

🟢 Commit Phase (Doing Phase)

React now applies the changes from the virtual DOM to the real DOM.
What happens in this example:
React updates the actual <input> box in the browser
React updates the <h3> text in the browser
Browser paints the new UI once

🔁 On every input change:

Render Phase:

Parent() runs again
ChildA() runs
ChildB() runs
New virtual DOM is prepared
(input → "H", "He", "Hel", etc.)

Commit Phase:

React updates the real input value
React updates the real <h3> text
Browser shows the new UI

Super Short Version -

Render Phase: React calls your components and creates virtual DOM.
(But does NOT update the UI.)

Commit Phase: React updates the real DOM and browser paints the screen.
(UI actually changes here.)


**Which phase is triggered when ?**

🟩 1. Initial Mount (FIRST TIME COMPONENT SHOWS ON SCREEN)
A. React calls Parent → Render Phase

Triggered when:

Component is first loaded.

What happens:

Parent() runs

ChildA() runs

ChildB() runs
👉 Render Phase

Nothing appears on screen yet.

B. React updates DOM → Commit Phase

Triggered immediately after the render phase.

What happens:

<input> is created in DOM

<h3> is created in DOM

Browser paints UI
👉 Commit Phase

🟦 2. User types in ChildA input

This starts a new cycle.

A. onChange fires → setText("H") is called

This DOES NOT cause render/commit directly.

It only requests a new render.

B. React re-renders Parent → Render Phase

Triggered because state changed.

What happens:

React calls Parent() again

Then ChildA() runs

Then ChildB() runs
👉 Render Phase

React prepares the new virtual DOM:

<input value="H" … />

<h3>You typed: H</h3>

Still no UI change yet.

C. React updates the real DOM → Commit Phase

Triggered after render finishes.

What happens:

Input value updated from "" → "H"

<h3> text updated to "You typed: H"

Browser paints

👉 Commit Phase

🔁 3. Every keystroke repeats the same:
When you type 'e' → 'He'
Render Phase is triggered when:

setText("He") is called

React calls:

Parent()
ChildA()
ChildB()
Commit Phase is triggered when:
React applies DOM changes:
input value becomes "He"
heading becomes "You typed: He"

Final Clear Answer -

Render Phase is triggered:

When the component mounts initially
Every time setText() is called

React re-runs:

Parent()
ChildA()
ChildB()

Commit Phase is triggered:

Right after the render phase finishes
When React updates the real DOM:
updates input value
updates heading
And the browser paints the UI

Note - Reconciliation happens ONLY in the Render Phase, never in the Commit Phase.


🧩 Scenario 2: Sibling Components Need Shared Data - Another use case of lifting the state up.

Example:

Child A updates a number

Child B displays it

You CANNOT keep the number inside Child A
Because Child B won’t get the latest value.

Solution → Move the state to parent.

Example 2 - 

Problem Story

ChildA → chooses a color

ChildB → shows a preview box with that color

If you keep the color inside ChildA, then:

ChildB has no idea what color was selected

👉 So we move the state to Parent . Parent becomes the single source of truth.

With Lifting the state up - 

```js
import { useState } from "react";

function Parent() {
  const [color, setColor] = useState("lightblue"); // shared state

  return (
    <>
      <ChildA selectedColor={color} onChangeColor={setColor} />
      <ChildB selectedColor={color} />
    </>
  );
}

// ChildA: chooses/updates the color
function ChildA({ selectedColor, onChangeColor }) {
  const handleColorChange = (newColor) => {
    onChangeColor(newColor); // update parent's state
  };

  return (
    <div>
      <h3>Pick a color:</h3>
      <button onClick={() => handleColorChange("lightblue")}>
        Light Blue
      </button>
      <button onClick={() => handleColorChange("lightgreen")}>
        Light Green
      </button>
      <button onClick={() => handleColorChange("salmon")}>Salmon</button>

      <p>Current selected color: {selectedColor}</p>
    </div>
  );
}

// ChildB: only displays the selected color
function ChildB({ selectedColor }) {
  return (
    <div>
      <h3>Preview:</h3>
      <div
        style={{
          width: "150px",
          height: "80px",
          border: "1px solid black",
          backgroundColor: selectedColor,
        }}
      />
      <p>Box color: {selectedColor}</p>
    </div>
  );
}


```

🔄 How data flows here (easy)

Parent holds: color + setColor

ChildA gets:

selectedColor (to display current)
onChangeColor (to update)

ChildB gets:

selectedColor (to show preview)
Whenever ChildA clicks a button:
onChangeColor("salmon") → actually setColor("salmon")
Parent’s state updates
Parent re-renders

Both:

ChildA shows updated text
ChildB shows updated preview box

👉 Both siblings stay in sync because they share the same parent state.


🧩 Scenario 3: Filtering a List (Lifting State Up)

Parent holds the full product list
Child A = Search box
Child B = Filtered list display

If the search text is stored inside Child A, then:

❌ Child B won’t know the search text
❌ You can't filter the list in sync
❌ You duplicate logic or pass data in a messy way

👉 Correct solution: Move search state to Parent.

✔ Correct Example — Lifting State Up for Filtering
import { useState } from "react";

```js

function Parent() {
  const products = ["Apple", "Banana", "Mango", "Orange", "Pineapple"]; // static list
  const [search, setSearch] = useState(""); // shared state

  // Filter logic stays in Parent 👇
  const filtered = products.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ChildA search={search} onSearchChange={setSearch} />
      <ChildB items={filtered} />
    </>
  );
}

// ChildA = Search Box
function ChildA({ search, onSearchChange }) {
  return (
    <input
      type="text"
      value={search}
      placeholder="Search product..."
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

// ChildB = Filtered item list
function ChildB({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

```

🔄 How it works (Easy)
1. User types in ChildA
→ ChildA calls onSearchChange
→ Which is setSearch

2. Parent state updates
→ search becomes "ap"

3. Parent filters the product list
→ Only items containing "ap" remain

4. ChildB receives the filtered list
→ Displays only matching items

# Why Lift State Up Here?

Both components depend on the same value (search text).
Filtering logic belongs to the Parent.
UI is in sync.
This avoids duplicated states.
Child components stay clean and reusable.



Lifting State Up in Modals: Basic Parent-Controlled Example - 


❌ Wrong-ish way (state inside Modal – hard to control from outside)

```js

function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <div className="backdrop">
          <div className="modal">
            <p>Hi, I'm a modal</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

```

Problem:

Only the modal component itself can open/close it.
Other components (like a navbar button, list item, etc.) cannot control it.


✅ Correct (lifting state up to parent) -

```js

import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* These 3 components can all open the SAME modal */}
      <Navbar onOpen={openModal} />
      <ProductList onOpen={openModal} />
      <Footer onOpen={openModal} />

      {/* One shared modal */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Shared Modal</h2>
        <p>This modal can be opened from Navbar, ProductList, or Footer.</p>
      </Modal>
    </>
  );
}

/* ---- Child Components ---- */

function Navbar({ onOpen }) {
  return (
    <nav>
      <button onClick={onOpen}>Open Modal from Navbar</button>
    </nav>
  );
}

function ProductList({ onOpen }) {
  return (
    <section>
      <h3>Product List</h3>
      <button onClick={onOpen}>Open Modal from Product List</button>
    </section>
  );
}

function Footer({ onOpen }) {
  return (
    <footer>
      <button onClick={onOpen}>Open Modal from Footer</button>
    </footer>
  );
}

/* ---- Modal Component ---- */

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Don't render if closed

  return (
    <div className="backdrop">
      <div className="modal">
        {children}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default App;

```


🧠 What’s Happening Here?

App owns: const [isOpen, setIsOpen] = useState(false);

openModal and closeModal are created in App.

Navbar, ProductList, and Footer all receive onOpen as a prop.

When any of them call onOpen() → isOpen becomes true → <Modal /> shows.

Modal gets: <Modal isOpen={isOpen} onClose={closeModal} />

so it knows when to show and how to close.



✅ Benefits of Lifting State Up

Keeps shared data in one place, avoiding mismatched or duplicate state.
Allows multiple components to access or update the same state easily.
Makes child components simpler and cleaner by removing local state.
Improves data flow control since the parent decides how UI behaves.
Makes components reusable, because they don't manage their own state.
Enforces predictable one-way data flow (React's core principle).



MOST IMPORTANT: When NOT to Lift State Up

❌ Don't lift if only one component uses that state.
❌ Don't lift 'just because' — avoid unnecessary complexity.
❌ If the state is global (needed everywhere), use Context instead.

=========================================================================================================================


Error Boundaries -

Error Boundaries are React components that catch errors in the UI, so the entire app does not crash.

They catch errors in rendering, lifecycle, and React tree.

Rendering phase - 

Error Boundaries ONLY catch errors When React is trying to calculate what to show on the screen.

Lifecycle methods - 

If an error happens in any of the life cycle methods like componentDidMount,componentDidUpdate and componentWillUnmount, the Error Boundary catches it.

Inside the React component tree - 

Any error thrown by a child component during render, the boundary above it catches.


👉 Error Boundaries act like a safety net around the UI.


❌ "They cannot catch errors in event handlers or async code." — Meaning

There are some places Error Boundaries do not work:

❌ Event Handlers -

Example:

<button onClick={() => { throw new Error("Clicked error"); }}>
  Click
</button>


This does NOT go through React's render pipeline.
It happens after rendering → so Error Boundary cannot catch it.
Even if the button is wrapped inside an ErrorBoundary, it will NOT catch errors thrown inside onClick.

➡ You must use try/catch manually:

```js

<button
  onClick={() => {
    try {
      throw new Error("Clicked error");
    } catch (e) {
      console.error(e);
    }
  }}
>
  Click
</button>

```
❌ Async Code

Examples that Error Boundaries CANNOT catch:

❌ Promises
useEffect(() => {
  fetch("/api").then(() => {
    throw new Error("Async error");
  });
}, []);

❌ setTimeout
setTimeout(() => {
  throw new Error("Async error");
}, 1000);

❌ async/await
async function load() {
  throw new Error("Async crash");
}


➡ These happen outside React’s render flow.
React never sees the error → Error Boundary can’t catch it.

You again need try/catch.



✅ 1. Try/Catch for Event Handlers (Button Clicks, Inputs)

❌ Error Boundaries CANNOT catch this:

<button onClick={() => { throw new Error("Crash"); }}>
  Click
</button>

✔ Correct try/catch version:

```js

<button
  onClick={() => {
    try {
      riskyAction(); // function that may throw error
    } catch (err) {
      console.error("Event Handler Error:", err);
      alert("Something went wrong!");
    }
  }}
>
  Click
</button>

```


✅ 2. Try/Catch for Async + Await Functions

❌ Error Boundaries cannot catch async errors:

```js

async function loadData() {
  const res = await fetch("/api");
  throw new Error("Async failed");
}

// ✔ Correct try/catch version:

async function loadData() {
  try {
    const res = await fetch("/api");
    if (!res.ok) throw new Error("API Error");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Async Error:", err);
    alert("Something went wrong!");
  }
}

```

🔥 Interview Tip:

"Async errors happen outside render → Error Boundaries can’t see them → use try/catch."

✅ 3. Try/Catch for fetch() + Promises

Fetch with explicit try/catch:

```js

const handleFetch = async () => {
  try {
    const resp = await fetch("/api/users");
    if (!resp.ok) throw new Error("Server Error");
    const data = await resp.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
};

Promise .catch() version:

fetch("/api")
  .then(res => res.json())
  .catch(err => {
    console.error("Promise Error:", err);
  });

  ```

✅ 4. Try/Catch for setTimeout / setInterval.

❌ Error inside timer is invisible to React.

✔ Solution:

```js

setTimeout(() => {
  try {
    riskyFunction();
  } catch (err) {
    console.error("Timer Error:", err);
  }
}, 1000);

```

✅ 5. Try/Catch inside useEffect -

✔ Best practice:

```js

useEffect(() => {
  const run = async () => {
    try {
      const data = await loadData();
    } catch (err) {
      console.error("useEffect async error:", err);
    }
  };

  run();
}, []);

```

✅ 6. Global Catch Handler (Last resort)

If ALL else fails, capture uncaught async errors in global level.

You should place below code once, at the top level of your application, NOT inside components.

```js

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled Promise Error:", event.reason);
});

```


✔ Best place:
src/index.js (or main.jsx in Vite)


✅ Correct placement example (React + CRA)

📁 src/index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ⭐ Global async error handler
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled Promise Error:", event.reason);
  // Optional: send to logging service
  // sendToServer(event.reason);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

✅ Correct placement example (Vite + main.jsx)

📁 src/main.jsx

```js

// ⭐ Global unhandled promise rejection handler
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled Promise Error:", event.reason);
});

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```


# Why Do We Need Error Boundaries?

Prevent entire app from breaking ❌
Show user-friendly fallback UI instead of white screen ❌

Capture error logs (Sentry / Firebase / Datadog) ✔


# Where Error Boundaries Work

They catch errors from:

Rendering phase
Child components
Lifecycle methods
Hooks during render
Lazy-loaded components
Suspense boundaries
Anything inside the render tree


# Where They Do NOT Work

❌ Event handlers
❌ setTimeout, Promise.then, await
❌ Errors thrown inside the error boundary itself


✅ Where Error Boundaries Work

1️⃣ Rendering Phase Errors
Use Case: A component crashes while rendering UI.

Example: accessing undefined data during render.

function User({ profile }) {
  return <h1>{profile.name}</h1>; // ❌ profile is undefined → crash
}


✔ Wrapped:

<ErrorBoundary>
  <User profile={undefined} />
</ErrorBoundary>


2️⃣ Errors in Child Components - 
If Level1 renders Level2, and Level2 renders Level3, then Level2 and Level3 are considered inside Level1.

Use Case: Nested components fail deep inside the tree.
function Level3() {
  throw new Error("Level 3 crashed!");
}


✔ Wrap parent:

<ErrorBoundary>
  <Level1 />   // protects Level2 → Level3
</ErrorBoundary>


3️⃣ Errors in Lifecycle Methods (Class Components)
Use Case: Crash in componentDidMount, componentDidUpdate, etc.
class Profile extends React.Component {
  componentDidMount() {
    throw new Error("API parse failed!");
  }
}


✔ Wrap:

<ErrorBoundary>
  <Profile />
</ErrorBoundary>


4️⃣ Errors in custome hooks - 

✅ Case 1: Errors in custom hooks during render (Error Boundary CAN catch)

If the hook throws synchronously while rendering → Error Boundary can catch it.

// 🔹 Custom hook
function useBadJson() {
  // runs during render
  return JSON.parse("{bad json}"); // ❌ error here
}

// 🔹 Component
function Product() {
  const data = useBadJson();       // ❌ this line throws during render
  return <p>{data.name}</p>;
}

// 🔹 Wrapped with Error Boundary
<ErrorBoundary FallbackComponent={Fallback}>
  <Product />
</ErrorBoundary>;


Reason: Hook runs during render phase → same as error in component body → Error Boundary sees it.

❌ Case 2: Errors in custom hooks in async/effects (Error Boundary CANNOT catch)

If the hook does async work (fetch, setTimeout, etc.) inside useEffect,
errors happen after render, so Error Boundaries won’t catch them.

function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/user");
        if (!res.ok) throw new Error("API failed");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Error in custom hook:", err); // ✅ handle here
      }
    }

    load();
  }, []);

  return user;
}


👉 Here, any error is handled with try/catch inside the hook,not by Error Boundary.


5️⃣ Errors in Lazy-Loaded Components (React.lazy)
Use Case: Dynamic import fails (network error).
const Settings = React.lazy(() => import("./Settings"));


✔ Wrap with Error Boundary + Suspense:

<ErrorBoundary fallback={<p>Failed to load Settings.</p>}>
  <Suspense fallback={<p>Loading…</p>}>
    <Settings />
  </Suspense>
</ErrorBoundary>

fallback -> jsx or component.

6️⃣ Errors in Suspense Boundaries
Use Case: Suspense throws due to rejected promise (data fetching).
function User() {
  throw new Promise((_, reject) => reject("Data failed")); // ❌
}


✔ Wrap:

<ErrorBoundary fallback={<p>User failed.</p>}>
  <Suspense fallback={<p>Loading…</p>}>
    <User />
  </Suspense>
</ErrorBoundary>


7️⃣ Anything Inside the Render Tree
Use Case: Any component under the boundary throws → caught.
<ErrorBoundary>
  <Dashboard>
    <Sidebar />
    <Feed />      // ❌ Feed throws
    <Footer />
  </Dashboard>
</ErrorBoundary>


✔ Only Feed fails → rest stays intact.
Only the failing component’s UI (and its subtree) gets replaced by the fallback.
Everything else inside the ErrorBoundary still works normally.




8️⃣ Multiple Error Boundaries for Specific Components (Component-Scoped Boundaries)
Use Case: Wrap different components with different boundaries so each section fails independently.

This is how real enterprise apps work.

Example layout:

function Dashboard() {
  return (
    <>
      <ErrorBoundary fallback={<p>Chart failed.</p>}>
        <StatsChart />      {/* risky component */}
      </ErrorBoundary>

      <ErrorBoundary fallback={<p>Feed failed.</p>}>
        <NewsFeed />        {/* another risky component */}
      </ErrorBoundary>

      <ErrorBoundary fallback={<p>Map failed.</p>}>
        <GoogleMap />       {/* third-party map widget */}
      </ErrorBoundary>

      <Notifications />     {/* no boundary needed */}
    </>
  );
}

⭐ Benefits:

Chart can crash → Feed + Map still work

Feed can crash → Chart still works

Map can crash → rest of UI works

No full-page white screen ever

Each part has its own fallback UI


Error Boundary Code implementation - 

```js

import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error);
    console.error("Component stack:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, background: "#fee", color: "#900" }}>
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

```


Code Explanation -


1. class ErrorBoundary extends React.Component - This creates a class component

React requires boundaries to be class-based not functional based.Because only class components have the error-handling lifecycle methods (componentDidCatch, getDerivedStateFromError) needed to catch render and lifecycle errors. 

2. constructor(props)

When React sees <ErrorBoundary /> for the first time / when the <ErrorBoundary /> mounts:
→ React creates an instance of ErrorBoundary.
→ calls constructor().
→ sets up state.


```js

constructor(props) {
  super(props);
  this.state = { hasError: false, error: null };
}

```

✔ 1. constructor(props)

Runs once when the ErrorBoundary component is created/mounted.

✔ 2. super(props) 

super(props) calls the parent React.Component constructor so we can use this.props, this.state, and this.setState inside the ErrorBoundary component.

Before calling super(props), this does NOT exist in the constructor.
So if we don't call super(props), we cannot access: this.state, this.props, this.setState or any this.something in ErrorBoundary component.Because JavaScript requires calling the parent class constructor before using this in a subclass.



3. this.state = { hasError: false, error: null };

This line creates the initial state for the ErrorBoundary.
It contains two fields.

🔹 3.1. hasError: false

Meaning: No error has happened yet.
Purpose: Decides whether to show normal children or the fallback UI.
Later becomes true when an error is caught.

🔹 3.2. error: null

Meaning: There is no error object stored yet.
Purpose: Stores the actual error when something crashes
(useful for logging, debugging, showing error message if needed).

const [hasError] = useState(false) is the same as this.state = { hasError: false } in a class component.
const [error] = useState(null) is the same as this.state = { error: null } in a class component.


4. getDerivedStateFromError -  

```js

static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

```

✔ What is it ?

getDerivedStateFromError is the core method that makes Error Boundaries work.

✔ When does it run ?

React automatically calls getDerivedStateFromError method whenever any component inside the <ErrorBoundary> wrapper throws an error during rendering.

✔ What it does ?

It returns new state: { hasError: true, error }

This tells the Error Boundary: "An error occurred - stop rendering children and show the fallback UI."

✔ Why it's static

React calls it without an instance.

one liner - getDerivedStateFromError is called when any child inside the ErrorBoundary throws, and it updates state so the fallback UI can display.

5.  componentDidCatch

```js

componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error);
    console.error("Component stack:", info.componentStack);
  }

```

This runs after React catches the error.

You can:

console.log it.
send to a server (Sentry, LogRocket).
store it somewhere.

This does NOT affect UI.

6. render() method - 

```js

 render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, background: "#fee", color: "#900" }}>
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }


```

render() checks whether an error has happened (using the state set by getDerivedStateFromError).

If hasError is true → show fallback UI

If hasError is false → show normal children

This is the method that actually controls the UI.


```js

<ErrorBoundary fallback={<p>Failed to load Settings.</p>}>
  <Suspense fallback={<p>Loading…</p>}>
    <Settings />
  </Suspense>
</ErrorBoundary>

```


✔ If fallback is passed → shows the custom fallback. (jsx /component)
✔ If fallback is not passed → shows the default fallback in render().

========================================================================================================================

🎯 1. What is a Controlled Component?

A Controlled Component is an input whose value is fully controlled by React state.
The UI input does NOT store its own value — React stores it.

👉 Meaning:

Whatever you type → React state updates.

React state → controls what the input displays.

Single source of truth = React state.

```js

function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

```
📌 How it works:

React stores name.

When user types → React updates name.

Input value = UI always stays in sync with React.


🎯 2. What is an Uncontrolled Component?

An uncontrolled input stores its own value inside the DOM,
NOT in React state.

👉 React does NOT track what user types.
If you want the value → you read it using useRef.

✅ Example: Uncontrolled Input

```js

function UncontrolledInput() {
  const nameRef = useRef();

  return (
    <>
      <input ref={nameRef} />
      <button onClick={() => console.log(nameRef.current.value)}>
        Show Value
      </button>
    </>
  );
}

```
📌 How it works:

User types → DOM stores value.

React does not know what the value is unless accessed through the ref.


========================================================================================================================

Pure Component -
A Pure Component is a React component that re-renders only when its props or state change.
If the data is the same, it skips re-rendering to improve performance.

🔥 Normal Component vs Pure Component — Easiest Example
👨‍👩‍👧 Parent Component
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <NormalChild label="Hi" />
      <PureChild label="Hi" />
    </>
  );
}

🔵 Normal Child (Always re-renders)
🔵 Normal Component

Re-renders every time parent re-renders

Even if props are the same

No optimizations

function NormalChild({ label }) {
  console.log("Normal Child Rendered");
  return <p>Normal: {label}</p>;
}

🟢 Pure Child (Re-renders ONLY if props change)

Re-renders only when props change

Skips re-renders for same props

Improves performance


const PureChild = React.memo(function PureChild({ label }) {
  console.log("Pure Child Rendered");
  return <p>Pure: {label}</p>;
});
============================================================================================

🔵 Container Component vs Presentation Component (Super Easy Notes)
✅ 1. Presentation/dumb Component

What it is:
A component that ONLY displays UI.

✔ Characteristics:

Shows data

No business logic

No API calls

No state (mostly)

Uses props to render UI

Pure UI component

⭐ Example (Presentation)
function UserCard({ name, age }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}


👉 Only shows UI.
👉 No logic inside.

✅ 2. Container/smart Component

What it is:
A component that handles logic, state, API calls, and passes data to Presentation components.

✔ Characteristics:

Fetches data

Manages state

Handles events

Contains business logic

Passes data via props

⭐ Example (Container)
function UserContainer() {
  const [user, setUser] = useState({ name: "Likan", age: 30 });

  return <UserCard name={user.name} age={user.age} />;
}


👉 It has state
👉 It controls logic
👉 It passes data to presentation (UserCard)

🎯 Why This Pattern?

✔ Clean separation of logic and UI
✔ Easier to test
✔ Easier to reuse UI components
✔ Reduces complexity

⭐ One-Line Interview Definition

👉 Container components manage logic; Presentation components manage UI.

===============================================================================================================================

What is forwardRef in React?

forwardRef is a React helper that lets a parent component pass a ref to a child component  "even if the child is a custom component."



Normally, refs only work on DOM elements, not on custom components. 'forwardRef' solves this limitation.

✅ CASE 1: Ref WORKS on DOM elements

Because React knows the actual DOM node (<input>, <button>, <div>)

✔️ Example — ref works on <input>

```js

import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();   // ✔️ works
  };

  return (
    <>
      <input ref={inputRef} placeholder="DOM input" />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

```

🧠 What happens?

👉 <input> is a real DOM element.
👉 React attaches the actual DOM node to inputRef.current.
👉 So: inputRef.current → HTMLInputElement
👉 This is why .focus() works ✔️


✅ CASE 2: Ref DOES NOT WORK on custom components

Because React does not know which inner DOM element to attach to.

✔️ Example — ref FAILS on 'custom component' / 'normal function component'

```js

function MyInput() {
  return <input />;
}

export default function App() {
  const ref = useRef(null);

  return (
    <>
      <MyInput ref={ref} />   {/* ❌ Does NOT work */}
      <button onClick={() => console.log(ref.current)}>
        Check Ref
      </button>
    </>
  );
}

```
🧠 What happens?

👉 MyInput is a JavaScript function.
👉 React will NOT attach the ref to the <input> inside.
👉 Instead, React ignores it.
👉 So: ref.current → null ❌

You cannot do .focus() here.


✅ CASE 3 – Trying to receive ref as prop in function component.

```js

function MyInput({ ref }) {     // ❌ ref is undefined
  return <input ref={ref} />;
}

function App() {
  const someRef = useRef(null);
  return <MyInput ref={someRef} />;
}

```

Why this fails ?

👉 ref is a special prop.
👉 React intercepts it.React treats ref differently from normal props.React catches / intercepts the ref before sending props to your component.
👉 Even if you write <MyInput ref={someRef}>, React will NOT pass ref as a normal prop — it removes it and never sends it to your function component.
👉 Even if you try to receive ref inside a function component, React removes it from the props object — so ref will always be undefined.
👉 So props.ref is undefined.
👉 It means the ref never reaches the <input>, so React cannot connect your ref to any DOM element — the ref stays null and does absolutely nothing.



✅ CASE 4  – forwardRef on function component.

```js

const MyInput = React.forwardRef(function MyInput(props, ref) {
  return <input ref={ref} />;
});

function App() {
  const ref = useRef(null);

  return (
    <>
      <MyInput ref={ref} />  {/* ✅ works */}
      <button onClick={() => ref.current.focus()}>
        Focus
      </button>
    </>
  );
}

```

Function components cannot receive ref.forwardRef creates a wrapper component around your function so React can pass the ref to it.


🧩 What forwardRef actually does

1️⃣ when React sees <MyInput ref={ref}> , React ignores the ref


2️⃣ But when you wrap the componnet/function within forwardRef like "const MyInput = forwardRef( <component or function>)"

forwardRef tells React: "Hey React, this component is allowed to receive a ref."



3️⃣ "React does: 'MyInput supports ref now, pass it through!'"

Internally React flags this component as 'ref-forwarding capable'.


4️⃣ "So React calls your component like: MyInput(props, ref)".This is exactly what React does under the hood.

Real internal call: MyInput(props, ref);

First arg → props

Second arg → ref

This is why the function receives two arguments.

This is the core rule of forwardRef.




🧩 Meaning of each argument -

1️⃣ 1st argument → props

All normal props like:

<MyInput type="text" placeholder="Hello" />

→ These go to props.

2️⃣ 2nd argument → ref

This is the special ref React delivers:

<MyInput ref={someRef} />


→ This goes to the second argument of your function.

This is the ONLY place where you get the real ref.


3️⃣ Why the second argument?

Because React's internal rule is -

"When using forwardRef, the component function always receives:
(props, ref) — in this exact order."

Ref is NEVER inside props.


So now your MyInput component has access to the real DOM ref:

```js

function MyInput(props, ref) {
  return <input ref={ref} />;  // attaching DOM ref
}

```

Now React knows:

Parent passed ref into MyInput

MyInput passed that ref to the <input>

So ref.current now points to the <input>


👉 forwardRef allows a function component to receive a ref.

👉 The function receives (props, ref).

👉 You attach the ref to a DOM element inside.

👉 Then ref.current points to that DOM input.


⚡forwardRef  tell React: "If someone gives me a ref, I will pass it to my child DOM element."

⚡forwardRef is a React feature that lets a parent pass a ref to a child function component.

⚡forwardRef allows a function component to receive a ref and give it to a DOM element inside.


✅ CASE 5 – Passing ref as a normal prop (inputRef).

```js

function MyInput({ inputRef }) {
  return <input ref={inputRef} />;
}

function App() {
  const ref = useRef(null);

  return (
    <>
      <MyInput inputRef={ref} />   {/* ✅ Works */}
      <button onClick={() => console.log(ref.current)}>
        Check Ref
      </button>
    </>
  );
}

```

Why this works:

👉 'inputRef' is not the special 'ref' prop.

👉 React doesn't intercept it.

👉 It passes props like: MyInput({ inputRef: ref }).

👉 Inside child <MyInput>, inputRef is a valid ref object.

👉 <input ref={inputRef} /> → React attaches DOM node. ref.current → <input>



===============================================================================================================================


🚀 FULL EXAMPLE — Route-Based Code Splitting + Lazy Loading
📁 Folder Structure
src/
 ├── pages/
 │     ├── Home.jsx
 │     ├── Dashboard.jsx
 │     └── Settings.jsx
 ├── App.jsx
 └── index.js


📄 pages/Home.jsx

```js

export default function Home() {
  return <h1>Home Page</h1>;
}

```


📄 pages/Dashboard.jsx

```js

export default function Dashboard() {
  return <h1>Dashboard Page (Heavy Component)</h1>;
}

```



📄 pages/Settings.jsx

```js

export default function Settings() {
  return <h1>Settings Page</h1>;
}

```

📄 App.jsx — (Full Route-Based + Lazy Loading)

```js

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// 🔥 Lazy loaded route components:

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));

export default function App() {
  return (
    <BrowserRouter>

      {/* Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/settings">Settings</Link>
      </nav>

      {/* 🔥 Suspense handles loading state */}
      <Suspense fallback={<h2>Loading Page...</h2>}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

      </Suspense>
    </BrowserRouter>
  );
}


// What each part means:
// | → just a visual separator (text)
// {" "} → a manual space so the links don't stick///

```


📄 index.js

```js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

```

💥 How this works ?

1️⃣ Bundler splits these routes into 3 separate chunks: Home.chunk.js, Dashboard.chunk.js, Settings.chunk.js.


2️⃣ When the app loads, only the main bundle is downloaded — the Home, Dashboard, and Settings chunks are not downloaded yet.

3️⃣ When the user clicks the Dashboard link, React tries to render <Dashboard />, sees it’s a lazy component, and the browser downloads Dashboard.chunk.js.

4️⃣ While downloading <Suspense fallback="Loading Page..." /> kicks in.User sees the loader instead of a blank screen.

5️⃣ AWhen the Dashboard chunk finishes downloading, React replaces the fallback and renders <Dashboard />.


=====================================================================================================================

Immutability - React

🧩 Concept in 1 line (for your notes)

In React, never change the old object/array directly.
Always create a new one and pass it to setState.
This gives a new reference, and React can detect the change.

1️⃣ How MUTATION breaks React (object example)
❌ Wrong way – mutating the same object
import { useState } from "react";

function UserProfileBad() {
  // ✅ State is an object
  const [user, setUser] = useState({
    name: "Likan",
    age: 29,
  });

  const incrementAge = () => {
    // ❌ 1. We are directly changing the existing object
    user.age = user.age + 1;

    // ❌ 2. We pass the SAME object to setUser
    // React compares oldState === newState (same reference)
    // → It thinks: "No change" → MAY SKIP re-render
    setUser(user);
  };

  console.log("UserProfileBad render:", user);

  return (
    <div>
      <h2>Bad Profile (Mutation)</h2>
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
      <button onClick={incrementAge}>Increase Age</button>
    </div>
  );
}

export default UserProfileBad;

🧠 What’s wrong here?

user points to some memory → say #101

We change user.age inside the same object

We call setUser(user) but user is still pointing to #101

React checks:

oldUser === newUser // true → same reference


So React can decide:

“State didn’t change. I don’t need to re-render.”

👉 Result: You click the button, but UI may not update (or behaves weirdly with StrictMode / batching).

✅ Correct way – IMMUTABLE update (object)
import { useState } from "react";

function UserProfileGood() {
  const [user, setUser] = useState({
    name: "Likan",
    age: 29,
  });

  const incrementAge = () => {
    // ✅ We create a NEW object using spread
    // { ...user } → copies all old fields into a new object in heap
    // age: user.age + 1 → override age in the NEW object
    const updatedUser = {
      ...user,         // copy old fields (name, age)
      age: user.age + 1,
    };

    // ✅ Now React sees a NEW object (new reference)
    // oldUser === updatedUser → false
    setUser(updatedUser);
  };

  console.log("UserProfileGood render:", user);

  return (
    <div>
      <h2>Good Profile (Immutable)</h2>
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
      <button onClick={incrementAge}>Increase Age</button>
    </div>
  );
}

export default UserProfileGood;

✅ What happens here?

user initially → memory #101

{ ...user, age: user.age + 1 } creates a new object → memory #202

setUser(updatedUser) passes reference #202

React compares:

oldUser === newUser // false → different reference


So React says:

“State changed. I will re-render the component.”

🔁 UI updates properly.

2️⃣ Array example – mutation vs immutability
❌ WRONG: Mutating array with push
import { useState } from "react";

function TodoListBad() {
  const [todos, setTodos] = useState(["Learn React", "Learn Immutability"]);

  const addTodo = () => {
    // ❌ Directly modifying the existing array
    todos.push("New Todo"); // changes the same array in memory

    // ❌ React receives the same array reference
    setTodos(todos); // oldTodos === newTodos → true
  };

  console.log("TodoListBad render:", todos);

  return (
    <div>
      <h2>Bad Todo List (Mutation)</h2>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li> // (ignore index key issue for now)
        ))}
      </ul>
    </div>
  );
}

✅ CORRECT: New array with spread
import { useState } from "react";

function TodoListGood() {
  const [todos, setTodos] = useState(["Learn React", "Learn Immutability"]);

  const addTodo = () => {
    // ✅ Create a NEW array using spread
    // [...todos] → copy old items
    // "New Todo" → append new item
    const updatedTodos = [...todos, "New Todo"];

    // ✅ React now receives a NEW reference
    // oldTodos === updatedTodos → false
    setTodos(updatedTodos);
  };

  console.log("TodoListGood render:", todos);

  return (
    <div>
      <h2>Good Todo List (Immutable)</h2>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

3️⃣ Preventing unnecessary renders (React.memo + immutability)

Here we'll see how immutability helps React skip re-renders when nothing changed.

🧩 Child component - 

```js

import React from "react";

function ItemsList({ items }) {
  console.log("ItemsList render");  // Logs whenever this component re-renders

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default React.memo(ItemsList);


```
If we wrap a component (<ItemsList>) in React.memo, React.memo does shallow prop comparison:

👉 It remembers the previous props.
👉 On next render, it compares new props vs old props by reference.
👉 If all props are "the same reference", it skips re-render.

👉 For arrays/objects:
oldItems === newItems → React thinks: "Same array, no changes → SKIP rerender"
oldItems !== newItems → React thinks: “New array → RERENDER”

👉 So immutability is how you make that reference change when something changes.


❌ BAD parent – mutation breaks everything -

```js

import { useState } from "react";
import ItemsList from "./ItemsList";

function ParentBad() {
  const [items, setItems] = useState(["A", "B"]);
  const [count, setCount] = useState(0);

  const addItem = () => {

    items.push("C"); // Mutating the existing array in place.

    setItems(items); // Passing the same reference back to React.

  };

  const increment = () => {
    setCount((c) => c + 1); // ✅ count changes → parent will re-render
  };

  return (
    <div>
      <h2>ParentBad</h2>

      <button onClick={addItem}>Add Item</button>
      <button onClick={increment}>Increment: {count}</button>
      <ItemsList items={items} />  {/* ItemsList is wrapped in React.memo */}
    </div>
  );
}

export default ParentBad;

```

Step by Step Explanation -

**1. Initial render** 

items = ["A", "B"]
count = 0
<ParentBad /> renders
<ItemsList items={["A", "B"]} /> renders
Console: ItemsList render (once)


**2. Click Add Item**

👉 items.push("C")
You changed the same array in memory. (❌ mutation)
Now the array becomes ["A", "B", "C"] but the reference is still the same.

👉 setItems(items)
oldState → same array reference
newState → same array reference

👉 React compares: oldState === newState → true
 React skips re-render completely for this state update

Result:
<ParentBad> does not re-render.
<ItemsList> does not re-render.

DOM still shows only ["A", "B"] in list Becasue React doesn't magically know the array content changed in memory.

👉 Bug: State changed in memory, UI didn't update. And your console.log("ItemsList render") will NOT run again.

**3. Click Increment**

👉 Click Increment

setCount((c) => c + 1) runs → count becomes 0 → 1
React re-renders <ParentBad />
Parent again passes the SAME items reference to <ItemsList />

👉 What does React.memo see?

Previous items prop → reference to ["A", "B", "C"] (mutated array)
New items prop → same reference ["A", "B", "C"]
So: oldItems === newItems → true
React.memo says: “Same props → skip render”

👉 Result in UI

count on screen: 0 → 1 ✅
<ItemsList /> does NOT re-render ❌
List still shows: ["A", "B"] ❌
console.log("ItemsList render") doesn’t run again.

🔥 Because you mutated the array, React.memo + React's equality check both get fooled → stale UI & useless memo.





✅ Good parent – immutability + React.memo working together

Now let’s write the correct parent using immutability:

```js

import { useState } from "react";
import ItemsList from "./ItemsList";

function ParentGood() {
  const [items, setItems] = useState(["A", "B"]);
  const [count, setCount] = useState(0);

  const addItem = () => {
    // ✅ Do NOT mutate 'items'. Create a New array (with old elements + "C") with new reference 
    setItems((prevItems) => [...prevItems, "C"]);
    //         ^ previous array       ^ new array created in heap
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <h2>ParentGood</h2>

      <button onClick={addItem}>Add Item</button>
      <button onClick={increment}>Increment: {count}</button>
      <ItemsList items={items} />  {/* React.memo(ItemsList) now works correctly */}
    </div>
  );
}

export default ParentGood;
```

Step by Step Explanation -

1️⃣ Initial Render (Nothing special here)

items = ["A", "B"]

count = 0

👉 <ParentGood /> renders
👉 It passes ["A", "B"] to <ItemsList />
👉 Since it's the first time, React.memo cannot skip → <ItemsList /> renders normally

Console shows:

ItemsList render


✔ UI shows list: A, B

2️⃣ User Clicks “Add Item”

This is the important part.

❌ What BAD version did:

items.push("C") → mutated
same reference → React fooled.

✅ What GOOD version does:
setItems((prev) => [...prev, "C"]);

Let’s break this line down super simply:

prev = the old array → ["A", "B"]

[...prev, "C"] = creates a NEW array → ["A", "B", "C"]

NEW array = NEW memory location

NEW memory = NEW reference

👉 So oldItems !== newItems → React clearly sees change happened.

What React does now?

React re-renders <ParentGood />

It sends the new array reference to <ItemsList />

React.memo compares references:

["A", "B"] !== ["A", "B", "C"]  


👉 FALSE (references differ)
👉 Means props changed
👉 React.memo re-renders <ItemsList /> correctly.

✔ UI becomes:

A, B, C

Console:
ItemsList render


runs again.

📌 Perfect behavior. No bugs. No stale UI.

3️⃣ User Clicks “Increment”
setCount(c => c + 1);


count becomes 0 → 1

Parent re-renders (ONLY parent)

But IMPORTANT:

👉 items did NOT change
👉 No mutation
👉 No new array created on increment
👉 SAME reference is passed to <ItemsList />

React.memo compares again:

oldItems === newItems


👉 TRUE (same reference)
👉 Means items didn't change
👉 React.memo SKIPS rendering ItemsList (GOOD!!)

✔ UI:

Items: still A, B, C

Count: updated to 1

Console:

ItemsList render DOES NOT show
(because memo skipped it)

📌 This is EXACT behavior we want.

✅ 1. What is immutability in React?

Immutability = never change state directly; always create a new object/array so React gets a new reference.

✅ 2. Why is immutability important for React.memo?

React.memo only checks prop references, so immutability ensures changed data produces a new reference → correct re-render.

✅ 3. How does React decide to re-render a memoized child with array props?

If the array reference changed (old !== new), React.memo re-renders; if it’s the same reference, it skips.

✅ 4. What goes wrong if I do items.push() on state?

items.push() mutates the same array reference, so React skips updates and memoized children don’t re-render → stale UI.

✅ 5. Correct pattern to update array state?

Always return a new array: setItems(prev => [...prev, newItem]) (immutable update).


==================================================================================


🏷️ How to Update an Object in React (Immutably)

👉 When you update an object in React state, never mutate the original object.Always create a new object using the spread operator.

✅ Correct Way (Create New Object) - Example: Update age inside a user object

```js

setUser((prevUser) => ({
  ...prevUser,    // copy old object
  age: 30         // update only this field
}));

```

Why this works?

...prevUser → copies old properties
A new object is created in memory
React sees new reference → re-renders correctly

🧩 Changing Nested Object Fields -
Example: update city inside user.address.city

```js

setUser((prev) => ({
  ...prev,
  address: {
    ...prev.address,  // copy old nested object
    city: "Delhi"     // update nested field
  }
}));

```

Why this is important?

You created a brand new 'address' object
And a brand new 'user' object
No mutation anywhere

=====================================================================================================================


**Event Bubbling**

What is bubbling?
When you click a child element, the event first fires on the child, then bubbles up to its parents (child → parent → document).
React's onClick, onChange, etc. work on the bubbling phase by default.

🔹 Example

```js

function BubblingExample() {
  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = () => {
    console.log("Child clicked");
  };

  return (
    <div
      onClick={handleParentClick} // 👈 will run after child handler
      style={{ padding: 20, border: "1px solid black" }}
    >
      Parent
      <button onClick={handleChildClick} style={{ marginLeft: 10 }}>
        Child Button
      </button>
    </div>
  );
}

```

🧠 Click order when you click the button:

handleChildClick → "Child clicked"
handleParentClick → "Parent clicked"
Because the event bubbled from child → parent.

**Event Capturing**

What is capturing?
Capturing is the opposite direction: event is caught while going top → down (document → parent → child) before bubbling.
In React, capturing handlers use the onSomethingCapture form.

🔹 Example with capturing

```js

function CaptureExample() {
  const handleParentCapture = () => {
    console.log("Parent CAPTURE");
  };

  const handleParentBubble = () => {
    console.log("Parent BUBBLE");
  };

  const handleChildClick = () => {
    console.log("Child CLICK");
  };

  return (
    <div
      onClickCapture={handleParentCapture} // 🔼 capture phase
      onClick={handleParentBubble}         // 🔽 bubble phase
      style={{ padding: 20, border: "1px solid blue" }}
    >
      Parent
      <button onClick={handleChildClick} style={{ marginLeft: 10 }}>
        Child Button
      </button>
    </div>
  );
}

```

🧠 Click order when you click the button:

Parent CAPTURE (capturing, top → down)
Child CLICK (target)
Parent BUBBLE (bubbling, bottom → up)

📝 Interview one-liner:

"React events are attached in the bubbling phase by default, but you can use onClickCapture to handle events in the capturing phase."

**Event Delegation**

💡 What is event delegation?

Instead of attaching handlers to every child element, you attach one handler to the parent and use bubbling to catch events.
React internally uses a form of event delegation (attaching listeners high up, like on the root).You can also use this pattern yourself.

Put ONE event handler on the parent instead of adding handlers to every child.
Let the event bubble up from child → parent, and catch it at the parent.

Without event delegation:

❌ Every button gets its own onClick
❌ If 100 items → 100 handlers
❌ Waste of performance
❌ More memory used
❌ Hard to maintain

With event delegation:

✔️ Only ONE onClick on the parent
✔️ All children clicks come to the same handler
✔️ Fast
✔️ Clean
✔️ Works even if new items appear later



🔹 Example: Delegating clicks for a list

```js

const items = [
  { id: 1, label: "Apple" },
  { id: 2, label: "Banana" },
  { id: 3, label: "Cherry" },
];

function DelegationExample() {
  
  const handleClick = (event) => {
    /**
     * event.target  = the exact element you clicked
     * event.currentTarget = the element WHERE the handler is attached (the <ul>)
     */

    // We check: did you click a button?
    const itemId = event.target.getAttribute("data-id");

    // If user clicked empty space or <ul>, ignore
    if (!itemId) return;

    console.log("Clicked item id:", itemId);
  };

  return (
    // 🔥 ONE SINGLE HANDLER for whole <ul>
    <ul onClick={handleClick}>
      
      {/* We loop children, but do NOT attach any events here */}
      {items.map((item) => (
        <li key={item.id}>
          
          {/* Child just stores data — NO onClick */}
          <button data-id={item.id}>
            {item.label}
          </button>

        </li>
      ))}
    </ul>
  );
}


```
✨ WHAT IS ACTUALLY HAPPENING?
Step-by-step:

1️⃣ User clicks the Banana button
2️⃣ Browser triggers click on the button
3️⃣ Event travels up → li → ul (bubbling)
4️⃣ handleClick on <ul> runs
5️⃣ Inside handler → we check event.target
6️⃣ event.target gives us:

<button data-id="2">Banana</button>


7️⃣ We read data-id="2"
8️⃣ We know the user clicked item ID 2

🔥 VISUAL DIAGRAM (TEXT VERSION)

When clicking "Banana":

<button data-id="2">Banana</button>
   ↑ bubble
<li>
   ↑ bubble
<ul onClick={handleClick}>   ← handler runs HERE


✔️ Because bubbling → event goes from child → parent
✔️ So parent receives all clicks


Event Delegation means putting a single event handler on a parent element and using bubbling to detect which child was clicked.
It reduces the number of listeners, improves performance, and works for dynamically added elements.


✅ Do YOU need to implement event delegation?
👉 NO — React already does event delegation internally.

React attaches one event listener at the root:

<div id="root">  ← React listens here
   your entire app...
</div>


All events bubble up to this root, and React handles them.


**HOW REACT EVENT DELEGATION WORKS INTERNALLY?**

(Real mechanism inside React)

React does NOT attach event listeners to every element.

Instead, React uses something called the Event Plugin System + Synthetic Event System.

Let’s see how it works internally 👇

1️⃣ React attaches ONE event listener at the ROOT

When your app loads, React automatically does something like:

document.getElementById("root").addEventListener("click", listener);
document.getElementById("root").addEventListener("change", listener);
document.getElementById("root").addEventListener("input", listener);
// ...for many other events


So only ONE listener per event type is added.

🔹 NOT on your button
🔹 NOT on your input
🔹 NOT on your div

Only on the ROOT.

This is called top-level event delegation.

2️⃣ When you click a button, the event bubbles UP to root

Browser flow:

button → div → parent → root


When event reaches the root, React catches it.

========================================================================================================

🔥 THE BEST EXAMPLE TO UNDERSTAND CONTEXT RENDERING

We will create:

A Provider with global state: count

3 components:

A: uses useContext → should re-render

B: uses useContext → should re-render

C: does NOT use context → should NOT re-render

Then you will SEE what re-renders in console.

🧩 1. Create Context + Provider
// CounterContext.js
import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  console.log("Provider Rendered"); // 👈 watch this

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

🧩 2. Component A – uses useContext → SHOULD re-render
// A.jsx
import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function A() {
  const { count } = useContext(CounterContext);

  console.log("A Rendered"); // 👈 see re-render

  return <h3>A Component Count: {count}</h3>;
}

🧩 3. Component B – uses useContext → SHOULD re-render
// B.jsx
import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function B() {
  const { count } = useContext(CounterContext);

  console.log("B Rendered"); // 👈 see re-render

  return <h3>B Component Count: {count}</h3>;
}

🧩 4. Component C – does NOT use useContext → DOES NOT re-render
// C.jsx
export default function C() {
  console.log("C Rendered"); // 👈 should NOT re-render after count change

  return <h3>C Component (No Context)</h3>;
}

🧩 5. App.jsx – use all 3
// App.jsx
import A from "./A";
import B from "./B";
import C from "./C";
import { CounterProvider, CounterContext } from "./CounterContext";
import { useContext } from "react";

function IncreaseButton() {
  const { setCount } = useContext(CounterContext);

  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Increase Count
    </button>
  );
}

export default function App() {
  return (
    <CounterProvider>
      <A />
      <B />
      <C />
      <IncreaseButton />
    </CounterProvider>
  );
}

💥 NOW THE MAGIC — Click the button and watch logs
Initial render logs:
Provider Rendered
A Rendered
B Rendered
C Rendered

After clicking “Increase Count”:
Provider Rendered         ✔️ Provider updated
A Rendered                ✔️ uses useContext → re-renders
B Rendered                ✔️ uses useContext → re-renders
C Rendered                ❌ DOES NOT appear → NO re-render

🎯 FINAL UNDERSTANDING FROM THIS EXAMPLE
❗ A and B re-render because:

They use:

useContext(CounterContext)


They depend on the global state → so they re-render.

❗ C does NOT re-render because:

It does NOT use context.

React skips it completely.

❗ Provider ALWAYS re-renders when state changes:

Because:

setCount


is inside the Provider.

🧠 ONE-LINE RULE:

Only components that call useContext(Context) re-render when the Provider’s value changes.

=====================================================================================================

✅ What is Virtual DOM?

Virtual DOM is a "lightweight JavaScript object version of the UI" that React keeps in memory.
React uses it to figure out what changed before touching the real DOM.

Real DOM → slow to update
Virtual DOM (JS objects) → fast to calculate and compare.

This is why React is fast.


🧩 How Virtual DOM Works

1️⃣ Your component returns JSX

return <h1>Hello</h1>;

This describes what the UI should look like.

2️⃣ React converts JSX into react element which is a JavaScript object.
This object describes the UI structure.

Example:

```js

{
  type: "h1",
  props: { children: "Hello" }
}

```

This object is the building block of the Virtual DOM.

3️⃣ React builds a Virtual DOM tree (inside memory)

React arranges those JS objects into a tree that represents the UI.

👉 This is the Virtual DOM tree.

4️⃣ When state changes → React creates a NEW Virtual DOM tree

Example: setCount(count + 1); changes the count state

React re-runs your component and produces another fresh JS object tree.

5️⃣ React compares OLD vs NEW Virtual DOM

This comparison is called diffing.

React checks:

👉 What changed?

👉 Which part is new?

👉 Which part stayed the same?

All of this happens inside JavaScript, not the real DOM.

6️⃣ React updates ONLY the changed parts in the real DOM

React does surgical updates, not full redraws.

✔️ Changes only the required DOM nodes
❌ Does NOT rebuild the entire UI

This is where performance comes from.

This is the reason React is super fast. React uses virtual DOM under te hood.

=====================================================================================================================

Diffing - 

Comparing old Virtual DOM tree with new Virtual DOM tree to find what changed.

DIffing Rules -

1️⃣ If the element type is same → update in-place

<div> → <div>    ✔ same type
<button> → <button> ✔ same type

 SAME TYPE → React reuses the DOM node


✅ Example 

Before:

<div className="red">Hello</div>

After:

<div className="blue">Hello World</div>

What React does: React Keeps the same <div>

React Only updates: 
className: red → blu
text: Hello → Hello World

DOM node is NOT recreated.


2️⃣ If type is different → delete old + mount new

<div> → <span>   ❌ new type → recreate

DIFFERENT TYPE → React removes old & creates new

❌ Example:

Before:

<div>Hello</div>

After:

<span>Hello</span>

What React does: React Removes <div> entirely

Creates a new <span>
Inserts <span> into DOM

React cannot convert one tag into another.


=====================================================================================================================

⭐ How React Compares Children (Index vs Keys)
✔ 1. Easy Case (React can handle this)

Before:
[ A , B , C ]

After update:
[ A , X , C ]


Only the middle item changed.

How React compares:

Position 0: A → A (same)

Position 1: B → X (changed)

Position 2: C → C (same)

👉 React only updates position 1.
✔ No confusion
✔ Correct behavior

❌ 2. Hard Case (Items Move — React gets confused)
Before:
[ A , B , C ]

After:
[ B , C , A ]


Items moved, but React does not know this.

React compares by position, not by item.

Position	Old	  New	  React Thinks
0        	A	    B	    B is updated A" ❌
1	        B	    C	    "C is updated B" ❌
2	        C	    A	    "A is updated C" ❌

This is WRONG because:

➡ A didn’t become B
➡ B didn’t become C
➡ C didn’t become A

They simply changed places, but React can’t detect movement.React rerenders the entire list items once again.

💡 3. Why does this happen?

React assumes:

👉 "Index = identity"

Meaning:

index 0 = same item always

index 1 = same item always

index 2 = same item always

But when items move, this logic completely breaks.


🔑 4. How to fix it? — Use keys (real identity)

Give each item a unique key, like giving each person a name.

key="A"
key="B"
key="C"


Then React sees:

A moved to index 2

C moved to index 1

B moved to index 0

👉 React now matches items by identity, not position.

✔ Correct updates
✔ No broken UI
✔ No wrong re-renders
✔ Smooth item movement

===========================================================================================================================

Reconciliation is React’s process of comparing the old Virtual DOM with the new Virtual DOM and updating only the parts of the real DOM that actually changed.

Key must be stable + unique + tied to the data, not the position.

Good keys:
✔ id
✔ uuid
✔ database id
✔ unique names
✔ timestamp

Bad keys:
❌ index
❌ array position

================================================================================================================================

Avoid unnecessary re-renders in React -

Why do we need to avoid unnecessary re-renders in React? (One-liner)

✔ Unnecessary renders waste CPU, so avoiding them keeps the UI fast.
✔ Fewer renders → fewer Virtual DOM diffs → better performance.
✔ Avoiding re-renders prevents lag and useless DOM updates.
✔ React should re-render only when data actually changes.
✔ Less rendering = smoother UI + fewer bugs.

Below are the techniques to Avoid Unnecessary Re-renders in React. 

1️⃣ React.memo

2️⃣ useCallback

3️⃣ useMemo

4️⃣ Lift State Up (Correctly)

5️⃣ Avoid Inline Functions in JSX

6️⃣ Correct Dependency Arrays

7️⃣ Split Components (Component Decomposition)

8️⃣ Proper Keys in Lists



===================================================================================================

1️⃣ React.memo - 

🟥 Version 1 – Without React.memo (Child re-renders every time)

```js

import React, { useState } from "react";

function Child({ name }) {
  console.log("Child Render"); // 👈 Track how many times Child renders
  return <h2>{name}</h2>;
}

function Parent() {
  const [count, setCount] = useState(0);

  console.log("Parent Render"); // 👈 Track Parent renders

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Count: {count}</p>
      <Child name="Imran" /> {/* name is ALWAYS the same */}
    </>
  );
}

export default Parent;

```
What happens here?

Initial load:
Parent Render
Child Render
Every time you click +:
setCount → Parent re-renders
JSX runs again → <Child name="Imran" /> is called again
Child also re-renders, even though name didn’t change

👉 Problem: Child is re-rendering just because the parent re-rendered, not because its props changed.

🟩 Version 2 – With React.memo (Child stops re-rendering)

React.memo prevents a component from re-rendering if its props did NOT change.

```js

import React, { useState } from "react";

const Child = React.memo(function Child({ name }) {
  console.log("Child Render"); // 👈 Track Child renders
  return <h2>{name}</h2>;
});

function Parent() {
  const [count, setCount] = useState(0);

  console.log("Parent Render"); // 👈 Track Parent renders

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Count: {count}</p>
      <Child name="Imran" /> {/* name is STILL the same */}
    </>
  );
}

export default Parent;

```

What changes with React.memo?

Initial load:
Parent Render
Child Render
Every time you click +:
Parent Render (because count changes)
Child Render ❌ does NOT run again

Because:
React.memo does a shallow comparison of props
Old props: { name: "Imran" }
New props: { name: "Imran" }
oldProps.name === newProps.name → true

✅ React: “Props are same → skip Child render”


⚡ Without React.memo, child re-renders whenever parent re-renders; with React.memo, child only re-renders when its props actually change.

==========================================================================================================================



2️⃣ usecallback -

useCallback returns the SAME function reference across renders


🟥 CASE 1 — No useCallback, No React.memo

Parent passes inline function → 'Child re-renders every time Parent re-renders.'(React's Default behavior)

```js

import { useState } from "react";

function Child({ addItem }) {
  return (
    <div>
      <p>Child Component</p>
      <button onClick={() => addItem("Item " + Date.now())}>
        Add Dynamic Item
      </button>
    </div>
  );
}

function Parent() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Parent Count: {count}</p>
      <p>Total Items: {items.length}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Parent
      </button>

      {/* ❌ Inline function → new function every render */}
      <Child addItem={(value) => setItems([...items, value])} />
    </div>
  );
}

export default Parent;

```

What happens step by step?

🔹 First render
Parent renders with: items = [], count = 0
Child is rendered with: addItem = (value) => setItems([...items, value])
addItem is a new 'function object' created during this render.

🔹 Click: Increase Parent
setCount updates count
Parent re-renders
During this new render: <Child addItem={(value) => setItems([...items, value])} /> creates a brand new function again.
React sees:
old addItem (function A)
new addItem (function B)
They are different references, so React considers props "changed".
Result: Child re-renders every time Parent re-renders, even though: Child's JSX didn't change
A child component naturally re-renders when its own state changes, because components must update to reflect their internal state

🔹 Click: Add Dynamic Item
Child calls addItem("Item 170...")
Parent updates items
Parent re-renders
Inline function is recreated (function C)
Child re-renders again, because new function reference.

📌 Key problem in Case 1: Every parent render → new function → props changed → child re-renders.

🟨 CASE 2 — With useCallback, but NO React.memo

Function reference is stable, but React still re-renders the Child.

```js

import { useState, useCallback } from "react";

function Child({ addItem }) {
  return (
    <div>
      <p>Child Component</p>
      <button onClick={() => addItem("Item " + Date.now())}>
        Add Dynamic Item
      </button>
    </div>
  );
}

function Parent() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  // ✅ useCallback: keeps same function reference across renders
  const addItem = useCallback((value) => {
    setItems((prev) => [...prev, value]);
  }, []);

  return (
    <div>
      <p>Parent Count: {count}</p>
      <p>Total Items: {items.length}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Parent
      </button>

      <Child addItem={addItem} />
    </div>
  );
}

export default Parent;

```

What happens step by step?

🔹 First render
Parent renders
useCallback runs, creates function reference F1 for addItem = (value) => { setItems(prev => [...prev, value]); }
Child renders with addItem = F1.

🔹 Click: Increase Parent
setCount updates count
Parent re-renders
useCallback runs again, but because dependancies = [], it returns the same function reference F1. (useEffect Dependancy - TBD)
So props passed to Child are the same function reference.

BUT: React’s default behavior:'Parent rendered → also render the child.
There is no React.memo, so React does NOT compare old props vs new props.
It always re-renders Child.

Result:
addItem reference is stable ✅
But Child still re-renders ❌, because React doesn’t know it’s 'safe to skip'.

📌 Conclusion for Case 2:
useCallback fixes the function identity problem.
But by itself it does NOT prevent re-renders.
We only prepared the ground for React.memo to work.

🟩 CASE 3 — useCallback + React.memo (Full optimization)

Function reference is stable & React.memo can now safely skip re-renders.

```js

import { useState, useCallback } from "react";

const Child = React.memo(function Child({ addItem }) {
  return (
    <div>
      <p>Child Component</p>
      <button onClick={() => addItem("Item " + Date.now())}>
        Add Dynamic Item
      </button>
    </div>
  );
});

function Parent() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const addItem = useCallback((value) => {
    setItems((prev) => [...prev, value]);
  }, []);

  return (
    <div>
      <p>Parent Count: {count}</p>
      <p>Total Items: {items.length}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Parent
      </button>

      <Child addItem={addItem} />
    </div>
  );
}

export default Parent;

```

What happens now?

🔹 First render

Parent renders
addItem (F1) created by useCallback
Child renders with addItem = F1
React.memo stores: previousProps = { addItem: F1 }

🔹 Click: Increase Parent

setCount updates count
Parent re-renders
useCallback returns same function F1
Now React reaches Child (wrapped in React.memo):
React.memo logic:"Compare old props vs new props"
oldProps.addItem === newProps.addItem → F1 === F1 → true
React.memo decides: ✅ "Props are same → SKIP Child re-render."
Child does NOT re-render.
Only Parent's count updates.

🔹 Click: Add Dynamic Item

Button in Child runs: addItem("Item " + Date.now());
Parent's items state updates → Parent re-renders
addItem is still F1
React.memo compares props again: still same (F1 === F1)
Child doesn’t re-render unless its own props change, or we add its own local state changes.

📌 Conclusion for Case 3:

useCallback → makes function prop stable
React.memo → uses that stability to SKIP re-renders
Together → Child is protected from unnecessary re-renders.


🟦 CASE 4 — Passing a FUNCTION REFERENCE 

```js

function Parent() {
  function addItem(value) {
    setItems(prev => [...prev, value]);
  }

  return <Child addItem={addItem} />;
}

```

❗ Does this re-render the child when Parent re-renders?
✔ YES — it still re-renders

Because React default behavior: "Parent rendered → child also renders."
React does not care whether your function is inline or referenced from outside.

==================================================================================


⚡ useCallback — Developer Notes (Easy + Complete)

⭐ What useCallback does

useCallback memoizes a function and returns the same function reference unless dependencies change.
Prevents the function from being recreated on every render.
Helps React.memo skip unnecessary re-renders.
Used mainly when passing functions to child components.

⭐ Why useCallback exists

React re-creates functions on every render.
So this: <Child onClick={() => doSomething()} /> creates a new function every time → props change → child re-renders.

useCallback fixes this:
const handleClick = useCallback(() => doSomething(), []);
Now the function reference stays the same.

🔥 useCallback Syntax -

```js
const fn = useCallback(() => {
  // logic
}, [dependencies]);

```

⭐ Dependency Array Explained

✔ Dependency array tells React:

"Rebuild this function ONLY if these values change."

Examples:

Dependency [] means	Never recreate the function/component on every render. Keep same reference forever.
Dependency [count] means recreate the function/component only when count changes.
Dependency [items, user] recreate the function/component only when items OR user changes.


🟩 When to use empty dependency array []

Use [] when your function does NOT use any state or props.

Example:

const saveData = useCallback(() => {
  console.log("Saving...");
}, []); // perfect

🟦 When to include dependencies ? 

Include a dependency if the function uses it.

Bad:

useCallback(() => {
  console.log(count);
}, []); // ❌ incorrect


Correct:

useCallback(() => {
  console.log(count);
}, [count]);  // ✔ correct



⭐ Relationship between useCallback and React.memo -

🔹 useCallback
Keeps the function reference stable.

🔹 React.memo
Uses that stable reference to skip re-render.
✔ Together → best optimization:

```js

const Child = React.memo(function Child({ addItem }) {
  return <button onClick={addItem}>Add</button>;
});

const addItem = useCallback(() => {
  setItems(prev => [...prev, "A"]);
}, []);

```

Child will NOT re-render unless props actually change.


🟦 Full Example: Parent + Child + useCallback with [count]

✅ Code
import { useState, useCallback } from "react";

const Child = React.memo(function Child({ logCount }) {
  console.log("Child Rendered");
  return (
    <div>
      <button onClick={logCount}>Log Count</button>
    </div>
  );
});

export default function Parent() {
  const [count, setCount] = useState(0);

  // useCallback depends on "count"
  const logCount = useCallback(() => {
    console.log("Current count:", count);
  }, [count]);

  return (
    <div>
      <h2>Parent Count: {count}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increase Parent Count
      </button>

      <Child logCount={logCount} />
    </div>
  );
}

🧠 STEP-BY-STEP EXPLANATION
⭐ 1. First Render

count = 0

useCallback creates a function: logCount = F1

Parent renders

Child receives prop: logCount = F1

React.memo sees first render → Child renders

Inside child:

<button onClick={logCount}>


→ event handler = F1

So clicking the button prints:

Current count: 0

⭐ 2. User clicks “Increase Parent Count”

setCount(c => c + 1) makes:

count becomes 1

Parent re-renders

Now useCallback runs again:

logCount = useCallback(() => {
  console.log("Current count:", count);
}, [count]);


Since count changed (0 → 1)
→ dependency changed
→ React creates a NEW function F2

So now:

old function = F1

new function = F2

logCount prop to Child CHANGED

⭐ 3. React.memo compares old/new props

React.memo checks:

old logCount === new logCount ?
F1 === F2 ?  → ❌ No


Because:

old reference = F1

new reference = F2

references are different

So:

✔ React.memo decides → Re-render Child
⭐ 4. Now Child re-renders with new logCount (F2)

And now clicking the child button prints:

Current count: 1


This is correct because the callback was rebuilt with the latest count.

⭐ 5. If you increase count again…

count becomes 2

dependency count changes

useCallback rebuilds function → new reference F3

React.memo sees prop changed → Child re-renders again

logCount prints:

Current count: 2


Example 2 -

```js

import { useState, useCallback } from "react";

const Child = React.memo(function Child({ logCount }) {
  console.log("Child Rendered");

  return (
    <div>
      <h3>Child Component</h3>

      {/* Clicking this shows the current count in UI instead of console */}
      <button onClick={logCount}>Show Count</button>
    </div>
  );
});

export default function Parent() {
  const [count, setCount] = useState(0);
  const [childMessage, setChildMessage] = useState("");

  // useCallback depends on "count"
  const logCount = useCallback(() => {
    setChildMessage("Current count (from Child): " + count);
  }, [count]);

  return (
    <div>
      <h2>Parent Count: {count}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increase Parent Count
      </button>

      <Child logCount={logCount} />

      {/* Show child's message here */}
      <p>{childMessage}</p>
    </div>
  );
}

```

Code Explanation -

🟦 First render (Initial phase)

count = 0

childMessage = ""

useCallback runs:

const logCount = useCallback(() => {
  setChildMessage("Current count (from Child): " + count);
}, [count]);


This is the first render → React creates function F1

So logCount = F1

Child render:

Child gets logCount = F1

React.memo has no previous props → Child renders

🧊 UI after first render shows:

Parent Count: 0

Button: Increase Parent Count

In Child: button Show Count From Child

Message (from parent): (nothing yet, empty)

🟨 Click “Show Count From Child”

You click the button in Child:

logCount(); // F1


F1 runs:

setChildMessage("Current count (from Child): " + count);
// count is still 0


So:

childMessage = "Current count (from Child): 0"

✅ Parent state changed → Parent re-renders

During this re-render:

count = 0

childMessage = "Current count (from Child): 0"

useCallback runs again, checks [count]:

Old count = 0, new count = 0 → deps unchanged

So React reuses F1

Child gets:

old logCount = F1

new logCount = F1

React.memo:

Props are the same → Child does NOT re-render

🧊 UI now shows:

Parent Count: 0

Button: Increase Parent Count

Child button: Show Count From Child

Message:
Current count (from Child): 0

Only the message changed; Child itself did not re-render.

🟦 Click “Increase Parent Count”

You click the Parent button:

setCount(c => c + 1);


Now:

count = 1

childMessage still = "Current count (from Child): 0"

Parent re-renders.

useCallback runs again:

const logCount = useCallback(() => {
  setChildMessage("Current count (from Child): " + count);
}, [count]);


Old count = 0

New count = 1

Dependency [count] changed → React creates new function F2

Child gets:

old logCount = F1

new logCount = F2

React.memo compares:

F1 !== F2 → props changed → Child re-renders

🧊 UI after this:

Parent Count: 1

Buttons still:

Increase Parent Count

Show Count From Child

Message is still:
Current count (from Child): 0
(we haven’t clicked the child button again yet)

🟨 Click “Show Count From Child” again

Now child’s button uses logCount = F2.

When you click:

logCount(); // F2


F2 runs:

setChildMessage("Current count (from Child): " + count);
// now count = 1


So:

childMessage = "Current count (from Child): 1"

Parent re-renders.

During this re-render:

count = 1

childMessage = "Current count (from Child): 1"

useCallback runs again:

Old count = 1

New count = 1

Deps same → React reuses F2

Child gets:

old logCount = F2

new logCount = F2 → same

React.memo:

props unchanged → Child does NOT re-render

🧊 UI now shows:

Parent Count: 1

Buttons unchanged

Message:
Current count (from Child): 1

🟦 Increase again

Click Increase Parent Count again:

setCount(c => c + 1);


Now:

count = 2

childMessage still = "Current count (from Child): 1"

Parent re-renders.

useCallback runs:

Old count = 1

New count = 2

Deps changed → React creates F3

Child gets:

old logCount = F2

new logCount = F3

React.memo:

F2 !== F3 → props changed → Child re-renders

If you now press Show Count From Child:

F3 runs

childMessage = "Current count (from Child): 2"

Parent re-renders, deps unchanged → F3 reused, Child skipped.

🧊 UI after that:

Parent Count: 2

Message:
Current count (from Child): 2

✅ What this shows you

Initial phase: Both buttons visible from the start (Parent + Child).

Show Count From Child:

Updates only Parent’s message

Parent re-renders, Child is skipped (same function F1/F2/F3).

Increase Parent Count:

Updates count

useCallback dependency [count] changes

New function (F1 → F2 → F3)

React.memo sees new prop → Child re-renders.


⭐ Rules - 


✔ Rule 1:

If function does NOT use state/props → useCallback(..., []).

✔ Rule 2:

If function uses X → include X in deps.

✔ Rule 3:

useCallback ALONE does NOT prevent re-renders. React.memo is needed.

✔ Rule 4:

useCallback prevents new function creation. React.memo prevents re-render.

✔ Rule 5:

Dependencies ensure your function has the latest values and avoids stale state.

Need usecallback example with dependancies ....

⭐ Can we use useCallback without React.memo?
✔ YES — it compiles, works, no error
❌ BUT it does NOT stop the child from re-rendering

Because:

useCallback only stabilizes the function reference

React.memo is the thing that actually blocks re-rendering

Without React.memo, React always re-renders children when the parent re-renders — even if the function reference does not change.


==========================================================================================================================

useMemo -

What useMemo does ?

👉 useMemo remembers a value so React doesn’t recalculate it on every render.
👉 It memoizes any value → number, string, object, array, JSX.
👉 Only recalculates when dependencies change.

syntax -

const value = useMemo(() => heavyWork(), [deps]);

Why do we use useMemo ?

👉 Avoid expensive calculations like filter, sort, loops, big lists
👉 Keep object/array reference stable So a memoized child (React.memo) does NOT re-render unnecessarily.

What React.memo does

👉 React.memo skips re-render if the props reference is the same.
const Child = React.memo(function Child(props) { ... });
If props are unchanged → child does NOT re-render.

Relationship Between useMemo and React.memo

useMemo → memoizes VALUES
Remembers a value until dependencies change
Example: arrays, objects, filters, configs, expensive calculations

React.memo → memoizes COMPONENTS
Skips re-rendering a child component if its props (by reference) didn’t change

🟥 CASE 1 — ❌ No useMemo, ❌ No React.memo

"Normal React behavior. Every parent re-render → child re-render."


```js

function Parent() {
  const [count, setCount] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  const filters = { minPrice }; // new object every render

  return (
    <>
      <p>Parent Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase Parent Count</button>
      <button onClick={() => setMinPrice(p => p + 10)}>Increase Min Price</button>

      <Child filters={filters} /> {/* NOT memoized */}
    </>
  );
}

function Child({ filters }) {
  console.log("Child render");
  return <p>Min price: {filters.minPrice}</p>;
}


```
🟦 First render (Initial phase)

count = 0
minPrice = 0
filters = { minPrice: 0 } → object O1 created

React:
Calls Parent() → returns JSX + <Child filters={filters} />
Calls Child({ filters: O1 })
Child componnet logs: Child renders and returns <p>Min price: 0</p>

UI after first render:
Parent Count: 0
Button: Increase Parent Count
Button: Increase Min Price
Min price: 0

🟨 Click "Increase Parent Count"

You click Increase Parent Count:
setCount(c => c + 1) is invoked.
Now: count = 1 , minPrice = 0
Parent re-renders:
filters = { minPrice: 0 } → new object O2 (different from O1)

React:
Calls Parent() again → gets new JSX
Calls Child({ filters: O2 }) (because Child is not memoized)
logs Child render again
Child componnet logs: Child renders and returns <p>Min price: 0</p>

UI now:
Parent Count: 1 ✅ updated
Buttons same
Min price: 0 (same text, but Child re-rendered)

🟦 Click "Increase Min Price"

You click Increase Min Price:
setMinPrice(p => p + 10);
Now:
count = 1
minPrice = 10

Parent re-renders:
filters = { minPrice: 10 } → new object O3

React:
Calls Parent() → JSX with updated Min price: 10
Calls Child({ filters: O3 })
logs Child render again
Child componnet logs: Child renders and returns <p>Min price: 10</p>

🧊 UI:
Parent Count: 1
Min price: 10

✅ Conclusion Case 1:

Every time any state changes in Parent:
Parent re-renders
Child re-renders
No optimization, normal React.

🟦 CASE 2 — React.memo ONLY, ❌ NO useMemo

Child is memoized, but Parent still sends a NEW object every render → React.memo FAILS.

```js

  const Child = React.memo(function Child({ filters }) {
  console.log("Child render");
  return <p>Min price: {filters.minPrice}</p>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  const filters = { minPrice }; // 👈 new object every render

  return (
    <>
      <p>Parent Count: {count}</p>

      <button onClick={() => setCount(c => c + 1)}>Increase Parent Count</button>
      <button onClick={() => setMinPrice(p => p + 10)}>Increase Min Price</button>

      <Child filters={filters} />
    </>
  );
}

```
🟦 First render (Initial phase)

count = 0
minPrice = 0
filters = { minPrice: 0 } → object O1 created

React:

Calls Parent() → returns JSX + <Child filters={filters} />

Child is wrapped in React.memo, but this is first render:

No previous props to compare

So React must render Child

Calls Child({ filters: O1 })
Child component logs: Child render and returns <p>Min price: 0</p>

UI after first render:

Parent Count: 0

Button: Increase Parent Count

Button: Increase Min Price

Min price: 0

🟨 Click "Increase Parent Count"

You click Increase Parent Count:

setCount(c => c + 1);


Now:
count = 1
minPrice = 0

Parent re-renders:

filters = { minPrice: 0 } → new object O2 (different from O1)

React:

Calls Parent() again → gets new JSX

React.memo checks props:

old filters = O1

new filters = O2

O1 === O2 → false (different object reference)

Because props changed → Child re-renders

Calls Child({ filters: O2 })
Child component logs: Child render and returns <p>Min price: 0</p>

UI now:

Parent Count: 1 ✅ updated

Buttons same

Min price: 0 (same text, but Child re-rendered again)

🟦 Click "Increase Min Price"

You click Increase Min Price:

setMinPrice(p => p + 10);


Now:
count = 1
minPrice = 10

Parent re-renders:

filters = { minPrice: 10 } → new object O3

React:

Calls Parent() → JSX with Min price: 10

React.memo compares props:

old filters = O2

new filters = O3

O2 === O3 → false

Props changed → Child re-renders again

Calls Child({ filters: O3 })
Child component logs: Child render and returns <p>Min price: 10</p>

🧊 UI:

Parent Count: 1

Min price: 10

✅ Conclusion Case 2:

React.memo tries to optimize, but:

filters = { minPrice } creates a new object on every render

So props are always different by reference

Every time Parent state changes:

Parent re-renders

Child also re-renders

React.memo is useless if you pass fresh inline objects/arrays.


🟩 CASE 3 — React.memo ✅ + useMemo ✅
(Best performance optimization — stable reference + memoized child)

```js

const Child = React.memo(function Child({ filters }) {
  console.log("Child render");
  return <p>Min price: {filters.minPrice}</p>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  const filters = useMemo(() => {
    return { minPrice };    // value depends on minPrice
  }, [minPrice]);           // only re-create when minPrice changes

  return (
    <>
      <p>Parent Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase Parent Count</button>
      <button onClick={() => setMinPrice(p => p + 10)}>Increase Min Price</button>
      <Child filters={filters} />
    </>
  );
}


```


🟦 First render (Initial phase)

count = 0
minPrice = 0

useMemo runs:
filters = { minPrice: 0 } → object O1 created and cached

React:
Calls Parent() → returns JSX + <Child filters={filters} />
Child is wrapped in React.memo, but this is first render:
No previous props to compare
So React must render Child
Calls Child({ filters: O1 })
Child component logs: Child render and returns <p>Min price: 0</p>

UI after first render:
Parent Count: 0
Button: Increase Parent Count
Button: Increase Min Price
Min price: 0

🟨 Click "Increase Parent Count"

You click Increase Parent Count:
setCount(c => c + 1);
Now:
count = 1
minPrice = 0

Parent re-renders:
useMemo checks [minPrice]:
old minPrice = 0
new minPrice = 0
deps unchanged → reuse cached object O1
So:
filters = O1 (SAME object, same reference)

React:
Calls Parent() again → gets new JSX (with updated count)

React.memo checks props:
old filters = O1
new filters = O1
O1 === O1 → true (same object reference)
Because props are the same → Child does NOT re-render
(Child render log does NOT appear)

UI now:

Parent Count: 1 ✅ updated
Buttons same
Min price: 0
(Child was NOT re-rendered)


🟦 Click "Increase Min Price"

You click Increase Min Price:
setMinPrice(p => p + 10);
Now:
count = 1
minPrice = 10

Parent re-renders:
useMemo:
old minPrice = 0
new minPrice = 10
dependency changed
So it creates a new object:
filters = { minPrice: 10 } → object O2 created

React:
Calls Parent() → JSX updated (Min price: 10)
React.memo compares props:
old filters = O1
new filters = O2
O1 === O2 → false
Props changed → Child re-renders
Calls:
Child({ filters: O2 })
Child component logs: Child render and returns <p>Min price: 10</p>

UI:

Parent Count: 1
Min price: 10


Conclusion Case 3:

When Parent count changes:
useMemo returns SAME object (O1 or O2)
React.memo sees same reference → Child does NOT re-render

When minPrice changes:
useMemo creates a NEW object (O1 → O2 → O3)
React.memo detects new reference → Child re-renders

✔ This is the correct, optimized behavior:

useMemo → prevents creating a new object every render
React.memo → skips Child render when props are unchanged
Together: Child only re-renders when it actually needs to.


🟨 CASE 4 — useMemo ✅ but ❌ NO React.memo

Child is not memoized → it will always re-render when Parent re-renders, even though useMemo stabilizes filters reference.

```js

function Parent() {
  const [count, setCount] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  const filters = useMemo(() => {
    return { minPrice };
  }, [minPrice]); // memoize object based on minPrice

  return (
    <>
      <p>Parent Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase Parent Count</button>
      <button onClick={() => setMinPrice(p => p + 10)}>Increase Min Price</button>
      <Child filters={filters} /> {/* ❌ NOT wrapped in React.memo */}
    </>
  );
}

function Child({ filters }) {
  console.log("Child render");
  return <p>Min price: {filters.minPrice}</p>;
}


```

🟦 First render (Initial phase)

count = 0
minPrice = 0
useMemo runs: filters = { minPrice: 0 } → object O1 created and cached

React:
Calls Parent() → returns JSX + <Child filters={filters} />
Child is a normal component (not wrapped in React.memo):
No memo check

React simply renders Child
Calls Child({ filters: O1 })
Child component logs: Child render and returns <p>Min price: 0</p>

UI after first render:
Parent Count: 0
Button: Increase Parent Count
Button: Increase Min Price
Min price: 0

🟨 Click "Increase Parent Count"

You click Increase Parent Count:
setCount(c => c + 1);
Now:
count = 1
minPrice = 0

Parent re-renders:
useMemo checks dependency [minPrice]:
old minPrice = 0
new minPrice = 0
deps unchanged → reuse cached object O1
So:filters = O1   // same object as before
when parent rerenders , React:
Calls Parent() again → gets new JSX (with updated Parent Count)
Child is not memoized:
React does NOT compare old vs new props.
It always calls Child on Parent re-render.
Calls Child({ filters: O1 }) again
Child component logs: Child render and returns <p>Min price: 0</p>

UI now:
Parent Count: 1 ✅ updated
Buttons same
Min price: 0 (same text, but Child re-rendered again)

🟦 Click "Increase Min Price"

You click Increase Min Price:
setMinPrice(p => p + 10);
Now:
count = 1
minPrice = 10

Parent re-renders:
useMemo runs:
old minPrice = 0
new minPrice = 10
deps changed → callback inside usememo hook runs again:
filters = { minPrice: 10 } → new object O2 created and cached
When parent rerenders React:
Calls Parent() → JSX with Min price: 10
Child is not memoized:
React calls Child every time Parent renders
Calls Child({ filters: O2 })
Child component logs: Child render and returns <p>Min price: 10</p>

UI:

Parent Count: 1
Min price: 10

Conclusion Case 4:

useMemo correctly memoizes the filters object:
Same minPrice → same object (O1 reused)
Changed minPrice → new object (O2, O3, …)
BUT Child is not wrapped in React.memo, so:
Child re-renders on every Parent re-render, no matter if filters ref is same or not.

So in Case 4:
useMemo → saves recomputation / object creation

❌ It does NOT stop Child from re-rendering

For render-skipping, you still need: React.memo(Child)

======================================
 usememo taking dependancies -


```js
 import { useState, useMemo } from "react";

function App() {
  const [minPrice, setMinPrice] = useState(0);
  const [search, setSearch] = useState("");

  const products = [
    { name: "Phone", price: 500 },
    { name: "Laptop", price: 1200 },
    { name: "Watch", price: 200 },
    { name: "Headphones", price: 150 }
  ];

  // ⭐ useMemo using two state values: minPrice AND search
  const filteredProducts = useMemo(() => {
    console.log("Filtering...");
    return products.filter(
      item =>
        item.price >= minPrice &&
        item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [minPrice, search]); // 👈 depends on TWO states

  return (
    <>
      <h3>Product Filter</h3>

      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        placeholder="Min Price"
      />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search product"
      />

      <p><strong>Filtered Results:</strong></p>
      <ul>
        {filteredProducts.map((p) => (
          <li key={p.name}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

```
useMemo ensures the filtering runs only when minPrice or search changes.

Filtering a list can be expensive.useMemo prevents unnecessary filtering and speeds up the UI.

If you pass filteredProducts to a memoized child component in the future:
<Child products={filteredProducts} /> useMemo gives a stable reference, helping React.memo skip re-renders.

🟦 useMemo with ZERO dependencies ([])

```js

const config = useMemo(() => {
  console.log("Computed once");
  return {
    currency: "USD",
    theme: "dark",
  };
}, []);  // 👈 no dependencies

```

What it means 

✔ Runs ONLY on the first render -
React runs the callback once → caches the value forever.

✔ Never recomputes again
Even if the component re-renders 1000 times, the memoized value stays the same.

✔ Good for static values
Useful when you want to create an object/array only once and reuse it.

✔ Helps keep stable references - 
If you pass this config to React.memo children, they won't re-render unnecessarily.

Real time example -

```js

function App() {
  const config = useMemo(() => {
    console.log("Created once");
    return { url: "/api/v1", retries: 3 };
  }, []);  // 👈 runs only once

  const [count, setCount] = useState(0);

  return (
    <>
      <p>{config.url}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </>
  );
}

```

✔ "Created once" logs only the first time.
✔ Clicking button re-renders App, but useMemo does NOT rerun.
✔ config object stays the same forever.

useMemo(fn, []) = run once, cache forever.

Q: Can useMemo return JSX in React?
A: Yes — useMemo can return JSX, and React will only reconstruct that JSX when its dependency array changes.

Q: Is React.memo only used on child components?
A: Yes — in real-world React, React.memo is mainly used on child components to prevent them from re-rendering when parent re-renders unnecessarily.


✅ 1) useMemo for Heavy Calculation (CPU-intensive work)

Use case: avoid repeating expensive math on every re-render.

🧪 Example: Heavy loop calculation

```js

import { useState, useMemo } from "react";

function HeavyCalcDemo() {
  const [count, setCount] = useState(0);

  const heavyResult = useMemo(() => {
    console.log("Running HEAVY calculation...");
    let total = 0;
    for (let i = 0; i < 10_00_000; i++) {
      total += i;
    }
    return total;
  }, []); // 👈 runs only ONCE

  return (
    <>
      <h2>1️⃣ Heavy Calculation Demo</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Re-render Parent (count: {count})
      </button>

      <p>Heavy Result: {heavyResult}</p>
    </>
  );
}

export default HeavyCalcDemo;

```

🟦 What this shows

Heavy loop runs only on first render

Clicking the button re-renders parent, but heavy work does NOT run again

Massive performance win


✅ 2) useMemo for Filtering (dependent on user input)

Use case: avoid filtering again when irrelevant state changes.

🧪 Example: Filtering based on min price

```js

import { useState, useMemo } from "react";

function FilterDemo() {
  const [minPrice, setMinPrice] = useState(0);
  const [count, setCount] = useState(0);

  const products = [
    { name: "Phone", price: 500 },
    { name: "Laptop", price: 1200 },
    { name: "Watch", price: 200 },
    { name: "Camera", price: 900 }
  ];

  const filtered = useMemo(() => {
    console.log("Filtering products...");
    return products.filter(p => p.price >= minPrice);
  }, [minPrice]); // 👈 runs only when minPrice changes

  return (
    <>
      <h2>2️⃣ Filtering Demo</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Re-render Parent (count: {count})
      </button>

      <br />

      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        placeholder="Min Price"
      />

      <h4>Filtered Products:</h4>
      <ul>
        {filtered.map((p) => (
          <li key={p.name}>{p.name} — ₹{p.price}</li>
        ))}
      </ul>
    </>
  );
}

export default FilterDemo;

```

🟦 What this shows

filteredProducts recalculates only when minPrice changes

Re-rendering the parent via count DOES NOT trigger filter again

This is the ideal use case for useMemo
 

Q: Is type="number" mandatory?

A: No — but converting the input to a number is mandatory for numeric comparisons.

Q: Why do we convert e.target.value to Number?

A: Because all input values come as strings, and filtering needs a number.

Q: What happens if I don't convert?

A: Filtering breaks because "500" is a string, not a number.

✅ 3) useMemo for Sorting (dependent on sorting order)

Use case: avoid sorting again unless the sort order changes.

🧪 Example: Sorting products by price

```js

import { useState, useMemo } from "react";

function SortDemo() {
  const [order, setOrder] = useState("asc");
  const [count, setCount] = useState(0);

  const products = [
    { name: "Phone", price: 500 },
    { name: "Laptop", price: 1200 },
    { name: "Watch", price: 200 },
    { name: "Camera", price: 900 }
  ];

  const sorted = useMemo(() => {
    console.log("Sorting products...");
    const copy = [...products];
    copy.sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    return copy;
  }, [order]); // 👈 runs only when order changes

  return (
    <>
      <h2>3️⃣ Sorting Demo</h2>
      <button onClick={() => setCount(c => c + 1)}>
        Re-render Parent (count: {count})
      </button>
      <br />

      <select value={order} onChange={(e) => setOrder(e.target.value)}>     //select - ov  (onchange , dynamic value)
        <option value="asc">Low → High</option> // option - v (static value 'asc' -> e.target.value) 
        <option value="desc">High → Low</option> // option - v (static value 'desc' -> e.target.value) 
      </select>

      <h4>Sorted Products:</h4>
      <ul>
        {sorted.map((p) => (
          <li key={p.name}>{p.name} — ₹{p.price}</li>
        ))}
      </ul>
    </>
  );
}

export default SortDemo;

```
🟦 What this shows

Sorting runs only when sort order changes
Changing other state (count) DOES NOT re-run sorting


Note - We never sort the original array because sort() mutates it — even if items stay same, order changes, which breaks React’s immutability rules and memoization.


Q: Why don’t we use a state variable for products?
A: Because we are not changing products inside this component — state is only for values that update.



Q: Does a heavy calculation inside useMemo block the first UI render?

A: Yes.
useMemo still runs its callback during the first render, so any heavy calculation inside it will block React from showing the JSX until that work is finished.

Q: Do filtering and sorting inside useMemo also run on the first render?

A: Yes.
Just like heavy calculations, filtering and sorting inside useMemo also run during the first render, because React must run the callback once to create the initial memoized value.

Q: Do heavy calculation, filtering, and sorting inside useMemo run sequentially?

A: Yes.
During the first render, React executes all your useMemo callbacks one by one, synchronously, on the main thread.

================================================================================================


1️⃣ Splitting Components – Real-Time Example

🧩 Scenario: Dashboard with a counter + heavy product list

You have a dashboard that shows:
A simple counter (how many times user clicked)
A big product list (heavy component, lots of JSX)

❌ Version 1 – Everything in ONE component

```js

function Dashboard() {
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Phone" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Watch" },
    // imagine 100+ products…
  ];

  console.log("Dashboard render");

  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={() => setCount(c => c + 1)}>
        Clicks: {count}
      </button>

      <h3>Products</h3>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}

```
What happens?

When you click Clicks: X button:
setCount updates state
Dashboard re-renders
Product list also re-renders every time (even though products never change)
For a big list, this is wasted work.

✅ Version 2 – Split the product list into a child


```js

function Dashboard() {
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Phone" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Watch" },
  ];

  console.log("Dashboard render");

  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={() => setCount(c => c + 1)}>
        Clicks: {count}
      </button>

      <h3>Products</h3>
      <ProductList products={products} />
    </>
  );
}

const ProductList = React.memo(function ProductList({ products }) {
  console.log("ProductList render");
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
});
```

🔁 Real-time behavior:

First render:
Dashboard render
ProductList render
UI shows: counter + list
Click button “Clicks: X”:
Dashboard re-renders (count changed)
products array is the same on every render
React.memo(ProductList) sees same props → skips ProductList render
Console:
Dashboard render
(no new ProductList render log)

🎯 What did splitting achieve?

Only the small part (counter) re-renders
The big list stays untouched
This is the real use case of "Splitting components to avoid unnecessary re-renders".

One-liner: Split heavy UI into separate memoized child components so they don’t re-render when only parent state changes.


===============================================================================================================================


2️⃣ Key Usage Patterns – Real-Time Example


🔴 Index as key (BAD)
A: Index keys confuse React when list order changes → UI breaks

🟢 Unique key (GOOD)
A: Unique keys let React track each item correctly → only real changes re-render.


===============================================================================================================================

forwardRef - 

forwardRef allows the parent to pass a ref into a child and get access to the child’s DOM node.

🟦 CASE 1: Only forwardRef → Parent gets direct DOM node

Child Component (forwards the ref to an <input> DOM element)

```js

// Child.js

import { forwardRef } from "react";

const SimpleInput = forwardRef((props, ref) => {
  return <input ref={ref} placeholder="Type something..." />;
});

export default SimpleInput;

```

Parent Component (uses DOM methods like .focus())

```js

// Parent.js

import { useRef } from "react";
import SimpleInput from "./Child";

function Parent() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();   // direct DOM access
  };

  return (
    <>
      <h2>forwardRef Example</h2>
      <button onClick={handleFocus}>Focus Input</button>
      <SimpleInput ref={inputRef} />
    </>
  );
}

export default Parent;

```

🧊 Explanation (Case 1)

Parent creates inputRef
Parent passes it to child via <SimpleInput ref={inputRef} />
forwardRef forwards that ref to the actual <input>
Parent gets raw DOM node → ref.current = <input>

So parent can call DOM APIs:
inputRef.current.focus();
inputRef.current.value = "";
inputRef.current.style.border = "2px solid red";

➡ No custom methods
➡ Only DOM access

==================================================================================================================================


useImperativeHandle - 

useImperativeHandle allows the parent to access child-exposed custom methods instead of giving the parent direct access to the child’s DOM node.

useImperativeHandle lets the child expose custom methods to the parent, instead of exposing the raw DOM node.

forwardRef is mandatory when using useImperativeHandle.Because useImperativeHandle works only when the child receives a ref from the parent.

Without forwardRef, the parent’s ref will never reach the child →
useImperativeHandle has nothing to customize → it won't work.



Child Component: Exposing custom methods

```js

// Child.js

import { forwardRef, useRef, useImperativeHandle } from "react";

const SmartInput = forwardRef((props, ref) => {

  const inputRef = useRef(null);

  // expose custom methods to parent

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
    },
    clearInput() {
      inputRef.current.value = "";
    }
  }));

  return <input ref={inputRef} placeholder="Smart Input..." />;
});

export default SmartInput;

```


Here, the parent does NOT access the DOM directly.
The child exposes clean custom methods like:
focusInput()
clearInput()
Parent Component: Calls custom methods

Q: why 2 refs ?

1️⃣ inputRef — for the DOM element

This ref points to the actual <input> DOM node so that the child component can run DOM operations like:

.focus()
.value = ""
.scrollIntoView()

This ref is internal to the child.


2️⃣ ref (from parent) — for exposing an API

The parent passes a ref into the child.Inside the child, we use this ref with useImperativeHandle to expose custom methods (API) to the parent.

Example exposed API:
focusInput()
clearInput()

When the parent calls ref.current.focusInput(), The function internally uses inputRef to operate on the DOM.So the parent never touches the DOM directly.


Note- We use two refs because inputRef controls the DOM, while the parent’s ref exposes custom methods. useImperativeHandle connects them by letting parent APIs indirectly call DOM actions.

```js

// Parent.js
import { useRef } from "react";
import SmartInput from "./Child";

function Parent() {
  const smartRef = useRef(null);

  return (
    <>
      <h2>useImperativeHandle Example</h2>

      <button onClick={() => smartRef.current.focusInput()}>
        Focus Input
      </button>

      <button onClick={() => smartRef.current.clearInput()}>
        Clear Input
      </button>

      <SmartInput ref={smartRef} />
    </>
  );
}

export default Parent;


```

Q: Why can’t the parent call ref.current.focus() in a forwardRef + useImperativeHandle setup?

✅ A: No. You cannot call ref.current.focus() because ref.current is no longer the DOM node.

useImperativeHandle replaces ref.current with your custom object:

ref.current = {
  focusInput: () => {},
  clearInput: () => {}
};

So the DOM node is not available at ref.current.

To focus the input, you must use the custom method you exposed:

ref.current.focusInput();  // ✅ correct


Note - React does not track refs for rendering.


# useImperativeHandle Hook -

It takes the parent's ref, a function that returns custom methods, & an optional dependency array.

syntax - 

```js

useImperativeHandle(
  ref,                    // 1️⃣ parent ref you are customizing
  () => ({                // 2️⃣ object you want parent to access
    method1() {},
    method2() {}
  }),
  [deps]                  // 3️⃣ optional: recreate when deps change
);

```


🟦 Case: NO dependency array
useImperativeHandle(ref, () => (c));
The object { ... } is recreated on every render of the CHILD component.
If the parent re-renders, the child also re-renders → object recreated again.
If child state changes → child re-renders → object recreated again.
No [] → object recreated on EVERY child render.



🟩 Case: With empty dependency array []. This gives performace because the object is created only once.
useImperativeHandle(ref, () => ({ ... }), []);
The object is created only once (on the first render).
After that, no matter how many times parent or child re-renders, the object is NOT recreated.
Parent re-renders → child re-renders → object stays the same.
[] → create object once, reuse forever.


🟩 Case: With Dependency Array [deps]
Example: useImperativeHandle(ref, () => ({ ... }), [count]);
The object is created on first render.
After that, the object is recreated ONLY when one of the dependencies changes.
If the dependency does not change → React reuses the previous object.
Parent re-render alone does not recreate the object unless the dependency changed.
[deps] → recreate object only when those dependencies change.



✅ 🟦 Child: exposes a method that depends on state

Child has a message that changes.
Parent wants to read the latest message by calling a method or API exposed from the child.

🔹 Child.js

```js

import { forwardRef, useState, useImperativeHandle } from "react";

const MessageBox = forwardRef((props, ref) => {
  const [msg, setMsg] = useState("Hello");

  // Expose method that depends on msg
  useImperativeHandle(ref, () => ({
    getMessage() {
      return msg;   // 👈 depends on state
    }
  }), [msg]);        // 👈 update API when msg changes

  return (
    <>
      <h3>Child Message: {msg}</h3>
      <button onClick={() => setMsg("Updated!")}>Change Message</button>
    </>
  );
});

export default MessageBox;

```

🟩 Parent.js — calls method from the child

```js

import { useRef } from "react";
import MessageBox from "./Child";

function Parent() {
  const childRef = useRef();

  const showMessage = () => {
    alert(childRef.current.getMessage());
  };

  return (
    <>
      <button onClick={showMessage}>Show Child Message</button>
      <MessageBox ref={childRef} />
    </>
  );
}

export default Parent;

```


✔ When msg changes in child:
Child re-renders
[msg] makes useImperativeHandle recreate the API
Parent gets the new message when calling getMessage()
❌ Without [msg]:
Parent would always receive old message = "Hello"


==================================================================================================================

✅ What does "Scrolling" mean in React (with refs)?

It means: Using a ref to access a DOM element and call browser scrolling functions like .scrollIntoView() or .scrollTop.

React can't scroll elements by itself — but refs let you manipulate DOM nodes directly.

🌟 Example  — Scroll to a section when button is clicked


```js

function App() {
  const sectionRef = useRef();

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <button onClick={scrollToSection}>Scroll to Section</button>

      <div style={{ height: "1000px" }} />

      <h2 ref={sectionRef}>Target Section</h2>
    </>
  );
}

```
✔ When button clicked

→ page automatically scrolls to <h2>
→ because sectionRef.current.scrollIntoView() runs.