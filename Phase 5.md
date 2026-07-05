📖 Phase 5 — React Rendering

# >>>


Topic 5.1 — Initial Render (Part 1)
Before Learning Initial Render

So far, you've learned:

JSX
React Elements
Components
Props
State

You can already write:

function App() {
  return <h1>Hello Likan</h1>;
}

and React displays:

Hello Likan

But...

Have you ever wondered what React actually does after you write <App />?

How does text appear on your screen?

This entire process is called Initial Render.

First Question

Suppose you write:

function App() {
  return <h1>Hello</h1>;
}

React shows:

Hello

Question:

Did React directly create the <h1> in the browser?

❌ No.

Many things happen before the browser ever sees that <h1>.

What Is Initial Render?
Definition

Initial Render is the very first time React creates your UI and displays it in the browser.

Think of it as:

Application Starts

↓

React Builds UI

↓

Browser Shows UI

It only happens once when your application loads.

Real-Life Example

Imagine you're building a new house.

Before anyone can live in it:

Blueprint

↓

Construction

↓

Finished House

↓

People Move In

React works in a similar way:

JSX

↓

React Elements

↓

Virtual DOM

↓

Real DOM

↓

Screen

The user only sees the last step.

Your First React App
function App() {
  return <h1>Hello React</h1>;
}

Then:

root.render(<App />);

This single line starts the Initial Render.

What React Sees

You write:

<App />

React transforms it into something similar to:

jsx(App, {})

Then creates a React Element:

{
  type: App,
  props: {}
}

React notices:

type = App

Since App is a component, React executes:

App();
What Does App Return?
function App() {
  return <h1>Hello React</h1>;
}

returns:

<h1>Hello React</h1>

React transforms that into another React Element:

{
  type: "h1",
  props: {
    children: "Hello React"
  }
}

Notice what happened:

Component

↓

Returns JSX

↓

JSX becomes React Element
React Is Still Not Touching The Browser

This surprises many beginners.

Even now:

❌ No HTML exists.

❌ No DOM exists.

React only has JavaScript objects.

Like:

{
  type: "h1",
  props: {
    children: "Hello React"
  }
}

The browser still knows nothing.

Complete Flow (So Far)
<App />

↓

React Element

↓

App()

↓

Returns JSX

↓

React Element

↓

(Not Yet DOM)

We'll learn in the next topic how React converts these objects into real DOM nodes.

Diagram
You Write

<App />

      │
      ▼

React Element

      │
      ▼

App()

      │
      ▼

Returns

<h1>Hello React</h1>

      │
      ▼

React Element

      │
      ▼

Waiting to Create DOM
Important Mental Model

Never think:

JSX

↓

DOM

Instead think:

JSX

↓

React Elements

↓

React Processing

↓

DOM

↓

Screen

There are several internal steps before anything appears on the page.

Senior Engineer Mental Model

A junior developer thinks:

"React shows my UI."

That's true—but incomplete.

A senior React developer thinks:

JSX

↓

React Elements

↓

Component Execution

↓

Element Tree

↓

Virtual DOM

↓

DOM

↓

Screen

Understanding these steps makes topics like Virtual DOM, Reconciliation, and Fiber much easier later.

Interview Questions
Q: What is Initial Render?

Answer:
Initial Render is the first time React renders the application by executing components, creating React Elements, and displaying the UI in the browser.

Q: Does React create the DOM immediately after reading JSX?

Answer:
No. React first creates React Elements (JavaScript objects), processes them, and only later updates the real DOM.

Q: What starts the Initial Render?

Answer:

root.render(<App />);
🧠 Revision Card
INITIAL RENDER
Application Starts

↓

root.render(<App />)

↓

React Executes Components

↓

Returns JSX

↓

Creates React Elements

↓

Builds UI

↓

Displays on Screen
Remember
JSX

↓

React Elements

↓

React Processing

↓

DOM

↓

Screen
Next Topic (5.1 – Part 2)

In the next lesson, we'll trace every single step from:

root.render(<App />)

all the way to:

Pixels appearing on your monitor.

You'll see exactly where Virtual DOM comes in and what React is doing behind the scenes.


Topic 5.1 — Initial Render (Part 2)
Before Learning This Part

In Part 1, we stopped here:

<App />

↓

React Element

↓

App()

↓

Returns JSX

↓

React Element

At this point:

❌ No HTML

❌ No DOM

❌ Nothing on the screen yet.

Now let's see how React gets from JavaScript objects to actual pixels on your monitor.

First Question

When you write:

root.render(<App />);

Does React immediately create:

<h1>Hello React</h1>

inside the browser?

❌ No.

React performs several internal steps first.

Complete Initial Render Flow

Imagine this code:

function App() {
  return <h1>Hello React</h1>;
}

root.render(<App />);

React internally follows this flow:

root.render(<App />)

↓

Create React Element

↓

Execute App()

↓

Get Returned JSX

↓

Create React Element Tree

↓

Build Virtual DOM

↓

Compare (Nothing Exists Yet)

↓

Create Real DOM

↓

Attach to Browser

↓

Screen Shows UI

This entire sequence is the Initial Render.

Step 1 — root.render()
root.render(<App />);

This tells React:

"Start rendering my application."

Think of it as pressing the Start button.

Step 2 — Create React Element

React converts:

<App />

into a React Element:

{
  type: App,
  props: {}
}

This is still just a JavaScript object.

Step 3 — Execute the Component

React sees:

type = App

So it executes:

App();
Step 4 — Component Returns JSX
function App() {
  return <h1>Hello React</h1>;
}

returns:

<h1>Hello React</h1>
Step 5 — JSX Becomes React Elements

React converts it into:

{
  type: "h1",
  props: {
    children: "Hello React"
  }
}

Now React has an entire Element Tree.

Example:

<>
  <Header />
  <Main />
  <Footer />
</>

becomes:

App
├── Header
├── Main
└── Footer

This is called the React Element Tree.

Step 6 — Build the Virtual DOM

React now creates an in-memory representation of your UI.

React Element Tree

↓

Virtual DOM

Think of the Virtual DOM as React's internal blueprint of what the screen should look like.

It exists only in memory—not in the browser.

Step 7 — Initial Comparison

Normally React compares:

Old UI

VS

New UI

But on the very first render, there is no old UI.

So React sees:

Old UI

↓

Nothing

Everything must be created.

Step 8 — Create the Real DOM

React creates actual browser nodes.

For example:

<h1>Hello React</h1>

Now the browser finally has real HTML elements.

Step 9 — Attach to the Browser

React inserts the DOM nodes into:

<div id="root"></div>

Now your browser displays:

Hello React
Complete Visual Flow
You Write

root.render(<App />)

        │
        ▼

<App />

        │
        ▼

React Element

        │
        ▼

Execute App()

        │
        ▼

Returns JSX

        │
        ▼

React Element Tree

        │
        ▼

Virtual DOM

        │
        ▼

Real DOM

        │
        ▼

Browser Screen
Real-Life Analogy

Imagine building a house:

Blueprint

↓

Architect Reviews

↓

Construction

↓

Finished House

↓

People See House

React works similarly:

JSX

↓

React Elements

↓

Virtual DOM

↓

Real DOM

↓

Visible Screen

The user only sees the last step.

Important Mental Model

A common mistake is thinking:

JSX

↓

HTML

The correct flow is:

JSX

↓

React Elements

↓

Component Execution

↓

Element Tree

↓

Virtual DOM

↓

Real DOM

↓

Screen

Every React application follows this sequence during the first render.

Senior Engineer Mental Model

A junior developer thinks:

"React renders HTML."

A senior developer thinks:

JSX

↓

React Elements

↓

Component Tree

↓

Virtual DOM

↓

DOM Operations

↓

Browser Paint

This mental model is the foundation for understanding:

Virtual DOM
Reconciliation
Render Phase
Commit Phase
Fiber Architecture
Interview Questions
Q: What happens after root.render(<App />)?

Answer:
React creates React Elements, executes components, builds the Virtual DOM, creates the Real DOM, and inserts it into the browser.

Q: Does the Virtual DOM exist before the Real DOM?

Answer:
Yes. React first builds its Virtual DOM in memory and then updates the Real DOM.

Q: During the Initial Render, what is React comparing against?

Answer:
Nothing. Since there is no previous UI, React creates all DOM nodes from scratch.

🧠 Revision Card
INITIAL RENDER (Complete Flow)
root.render(<App />)

↓

React Element

↓

Component Executes

↓

Returns JSX

↓

React Element Tree

↓

Virtual DOM

↓

Real DOM

↓

Browser Screen
Remember
First Render

=

No Previous UI

↓

Everything Is Created
📊 Diagram
                Initial Render

      root.render(<App />)
                 │
                 ▼
          React Element
                 │
                 ▼
          Execute Component
                 │
                 ▼
            Returns JSX
                 │
                 ▼
        React Element Tree
                 │
                 ▼
           Virtual DOM
                 │
                 ▼
           Create Real DOM
                 │
                 ▼
          Browser Displays UI



Your Question

After React creates the Element Tree, why does it create a Virtual DOM?

Isn't the Element Tree already enough?

The answer is:

The Element Tree and Virtual DOM are almost the same data, but they serve different purposes.

Let's go step by step.

Step 1 — JSX

You write:

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <button>Click</button>
    </div>
  );
}
Step 2 — React Element Tree

React executes App().

It creates JavaScript objects like:

App
 │
 ▼
div
 ├── h1
 │    └── "Hello"
 └── button
      └── "Click"

This is the React Element Tree.

Think of it as a blueprint.

It is not the browser DOM.

It only describes:

"This is the UI I want."

Step 3 — Virtual DOM

Now React takes this blueprint and stores it in memory.

That stored copy is called the Virtual DOM.

Think of it like this:

React Element Tree
        │
        ▼
Store in Memory
        │
        ▼
Virtual DOM

So the Virtual DOM is React's saved copy of your UI.

Why store it?

Imagine your UI looks like this:

div
 ├── h1
 └── button

React stores it.

Later you call:

setCount(1);

React creates a new Element Tree.

Now it becomes:

div
 ├── h1
 └── button

React compares:

Old Virtual DOM

VS

New Element Tree

Without storing the old tree, React would have nothing to compare against.

That's why the Virtual DOM exists.

Then Real DOM

Only after React knows what changed, it updates the browser.

JSX

↓

Element Tree

↓

Virtual DOM (stored)

↓

Compare with New Tree

↓

Real DOM Update

↓

Screen
House Analogy

Imagine you're building a house.

Blueprint
Kitchen

Bedroom

Bathroom

This is the Element Tree.

You keep a copy of that blueprint in your office.

That copy is the Virtual DOM.

The actual house built outside is the Real DOM.

Blueprint

↓

Office Copy

↓

Actual House

Later you want to add a balcony.

You don't demolish the house.

You compare:

Old Blueprint

VS

New Blueprint

Then you only build the balcony.

React works exactly the same way.

Mental Model
JSX

↓

React executes components

↓

React Element Tree
(temporary blueprint)

↓

Virtual DOM
(saved blueprint)

↓

Real DOM
(actual browser UI)
One important clarification

Many tutorials say:

"Element Tree becomes Virtual DOM."

That's a simplification.

A more accurate way to think about it is:

React Element Tree = the UI description React just created.
Virtual DOM = React's in-memory representation of that UI, used for comparison and updates.
Quick question for you:

If you click a button and setState() runs, what do you think React compares?

Old Real DOM vs New Real DOM
Old Virtual DOM vs New React Element Tree (which becomes the new Virtual DOM)



Your question is:

Why doesn't React update the Real DOM directly? Why does it need a Virtual DOM?

Let's understand it with a simple example.

Imagine a page
<div>
   <h1>Counter: 0</h1>
   <button>+</button>
   <ul>
      1000 items...
   </ul>
</div>

Now you click +.

Only this changes:

Counter: 0

↓

Counter: 1

Everything else stays the same.

Option 1 — Update the Real DOM directly

React would have to ask:

Which node changed?

Did the h1 change?

Did the button change?

Did the list change?

Did the div change?

The browser DOM is a complex object managed by the browser. Reading, traversing, and manipulating it repeatedly is relatively expensive.

Option 2 — Use the Virtual DOM

React already has the old UI in memory:

Old Virtual DOM

Counter: 0

After setState():

React creates a new UI in memory:

New Virtual DOM

Counter: 1

Comparing two JavaScript objects in memory is much faster than repeatedly inspecting and manipulating the browser's DOM.

React quickly finds:

Only the h1 changed.

So it tells the browser:

Update only this text node.

The browser updates just that one part.

Why not always use the Real DOM?

Because the Real DOM belongs to the browser.

Every DOM operation can trigger work such as:

Recalculating styles
Recalculating layout (reflow)
Repainting pixels on the screen

These operations are much more expensive than comparing JavaScript objects in memory.

Simple Analogy

Imagine a 500-page book.

You change one word on page 250.

Would you:

❌ Print the entire book again?

Or:

✅ Compare the old draft with the new draft and print only page 250?

React chooses the second approach.

Mental Model
Old Virtual DOM
        │
        ▼
New Virtual DOM
        │
        ▼
Find Differences
        │
        ▼
Update Only Those Parts
        │
        ▼
Real DOM

The Virtual DOM is not there to replace the Real DOM.

It exists to answer one important question efficiently:

"Exactly what changed?"

Once React knows the answer, it performs the minimum necessary updates on the Real DOM.

One important note

A common misconception is:

"Virtual DOM is always faster than direct DOM updates."

That's not always true.

If you already know exactly which DOM node to update, a direct DOM update can be faster because there's no comparison step.

React's advantage is that in large, component-based applications, developers usually don't know exactly what changed. The Virtual DOM lets React figure that out automatically while keeping your programming model simple. This is why React scales well as applications become more complex.




Your question is:

Why can't React compare the old Real DOM with the new Real DOM? Why create a Virtual DOM?

The short answer is:

Because the "new Real DOM" doesn't exist yet.

Let's see why.

Suppose your page is:
Real DOM

<div>
   <h1>0</h1>
   <button>+</button>
</div>

Now you do:

setCount(1)

React knows:

"The UI should now show 1."

But where is this new UI?

It hasn't been created yet.

Option 1: Compare Real DOMs

To compare two Real DOMs, React would need:

Old Real DOM

VS

New Real DOM

But the New Real DOM doesn't exist.

So React would first have to build an entire second Real DOM just for comparison.

That would mean:

Old Real DOM

↓

Create another Real DOM

↓

Compare

↓

Throw most of it away

↓

Update first Real DOM

This would waste memory and browser work.

Option 2: Compare Virtual DOMs

Instead, React does this:

Old Virtual DOM

↓

Create New Virtual DOM
(JavaScript objects)

↓

Compare them

↓

Update only the changed part
of the Real DOM

Creating and comparing JavaScript objects is much cheaper than creating a second browser DOM tree.

Why not have two Real DOMs?

Imagine your page has:

10,000 elements
Images
Inputs
Videos

Creating another full browser DOM tree just to compare it would be very expensive.

Instead, React creates lightweight JavaScript objects.

Mental Model
Browser

Real DOM
   ▲
   │
React updates only here
   │
──────────────

React Memory

Old Virtual DOM

↓

New Virtual DOM

↓

Compare

↓

Minimal DOM updates

Notice:

React never creates a second Real DOM.

It creates a second Virtual DOM, compares it with the old one, and then updates the single Real DOM.

This is the key sentence to remember for interviews:

React compares Virtual DOMs because creating and comparing lightweight JavaScript objects is much cheaper than creating a second browser DOM tree. After finding the differences, React applies only those changes to the single Real DOM.

This is one of the core ideas behind React's rendering model.

# >>>>>>>


Topic 5.2 — Re-render (Part 1)
Before Learning Re-render

We learned that Initial Render happens when the app starts.

App Starts

↓

Initial Render

↓

UI Appears

But...

Does React render only once?

No.

Every React app updates while it's running.

For example:

You click a button.
You type in an input.
Data arrives from an API.

The UI changes.

This process is called a Re-render.

First Question

Imagine this component:

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </>
  );
}

Initially, the screen shows:

0
[ + ]

You click the button.

The screen becomes:

1
[ + ]

Question:

Did React update only the <h1> directly?

❌ No.

Something much bigger happens internally.

What Is Re-render?
Definition

A Re-render is the process where React executes a component again to calculate what the UI should look like after a change.

Notice the wording:

React doesn't immediately update the DOM.

It first recalculates the UI.

Important Mental Model

Many beginners think:

State Changed

↓

DOM Updated

❌ Wrong.

The real flow is:

State Changed

↓

Component Executes Again

↓

New React Elements

↓

Compare

↓

Update DOM

The DOM update happens at the end, not first.

Example

Initial render:

count = 0

Component executes:

function Counter() {

  const [count] = useState(0);

  return <h1>0</h1>;

}

Screen:

0

Now click:

setCount(1)

React does not change the <h1> immediately.

Instead it executes:

function Counter() {

  const [count] = useState(1);

  return <h1>1</h1>;

}

Notice something important.

React ran the entire component again.

Not just the <h1>.

Visual Flow
Button Click

↓

setCount(1)

↓

Counter() executes again

↓

Returns new JSX

↓

Creates new React Element Tree

↓

Compare with old Virtual DOM

↓

Update Real DOM
Does the Entire Component Execute?

Yes.

Suppose:

function Counter() {

  console.log("Rendering...");

  return (
    <>
      <h1>{count}</h1>
      <button>+</button>
    </>
  );
}

Every time you click:

Rendering...

Rendering...

Rendering...

The entire function runs again.

This is called a Re-render.

Important Question

If the whole component executes again...

Does React destroy the whole page and rebuild it?

❌ No.

The component executes again.

But React compares the old Virtual DOM with the new Virtual DOM.

Only the changed parts are updated in the Real DOM.

This is why React is efficient.

Diagram
Initial Render

Counter()

↓

Virtual DOM

↓

Real DOM

──────────────

Click Button

↓

setCount()

↓

Counter() Again

↓

New Virtual DOM

↓

Compare

↓

Update Only Changes
Senior Engineer Mental Model

A junior developer thinks:

"setState changes the UI."

A senior developer thinks:

setState

↓

Schedule Re-render

↓

Execute Component Again

↓

Create New React Elements

↓

Compare Trees

↓

Minimal DOM Update

The key idea is:

setState() does not update the DOM directly. It schedules a re-render.

Interview Questions
Q: What is a Re-render?

Answer:
A re-render is when React executes a component again to calculate the updated UI after state, props, or context changes.

Q: Does a re-render immediately update the DOM?

Answer:
No. React first creates a new React Element Tree, compares it with the previous one, and then updates only the necessary parts of the Real DOM.

Q: During a re-render, does the component function execute again?

Answer:
Yes. Function components execute again on every re-render.

🧠 Revision Card
RE-RENDER
State Changes

↓

Component Executes Again

↓

New React Elements

↓

New Virtual DOM

↓

Compare

↓

Update Real DOM
Remember
setState()

≠

Update DOM

setState()

=

Schedule Re-render


Topic 5.2 — Re-render (Part 2)
Before Learning This Part

In Part 1, we learned:

setState()

↓

Component Executes Again

↓

New React Elements

↓

Compare

↓

Update DOM

Now comes the biggest question.

First Question

Suppose this component:

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

You click the button.

React executes the whole component again.

Question:

Does React destroy this entire DOM?

<div>
  <h1>0</h1>
  <button>+</button>
</div>

and recreate everything?

❌ No.

What Actually Happens?

Initially:

Counter()

↓

<div>
   <h1>0</h1>
   <button>+</button>
</div>

React stores this in the Virtual DOM.

Now you click:

setCount(1)

React executes:

Counter()

again.

Now it returns:

<div>
   <h1>1</h1>
   <button>+</button>
</div>

Notice something:

Only 0 → 1 changed.

Everything else is identical.

React Compares

Old Virtual DOM

div
├── h1
│     "0"
└── button
      "+"

New Virtual DOM

div
├── h1
│     "1"
└── button
      "+"

React asks:

div changed?

❌ No

button changed?

❌ No

h1 changed?

✅ Yes

Text changed?

✅ Yes
React Updates Only This

Instead of rebuilding everything:

<div>
  <h1>1</h1>
  <button>+</button>
</div>

React only changes:

"0"

↓

"1"

The button stays exactly where it is.

The <div> stays exactly where it is.

Visual Diagram
Old Virtual DOM

div
├── h1 → 0
└── button

          │
          │ Compare
          ▼

New Virtual DOM

div
├── h1 → 1
└── button

          │
          ▼

Only Update

h1 Text
Important Difference

Many beginners think:

Component Executes Again

↓

Everything Recreated

Wrong.

The correct flow is:

Component Executes Again

↓

New Virtual DOM

↓

Compare

↓

Only Changed DOM Nodes Update

Executing a function again is cheap.

Manipulating the browser DOM is expensive.

React prefers:

Execute JavaScript again ✅

Avoid unnecessary DOM updates ✅

Why Is Executing the Component Cheap?

Remember:

A component is just a function.

function Counter() {
   return <h1>Hello</h1>;
}

Calling:

Counter();

is just like:

add(5,10);

Function execution is very fast.

The expensive part is changing the browser DOM.

Real Life Analogy

Imagine a Word document with 500 pages.

You change one word.

Would Microsoft Word:

❌ Print all 500 pages again?

Or:

✅ Update only the changed word?

React chooses the second option.

Mental Model
setState()

↓

Component Runs Again

↓

Creates New UI Description

↓

Compare With Old UI

↓

Find Difference

↓

Update Only Difference
Extremely Important Interview Question
Interviewer:

"Does React re-render the whole page?"

Correct answer:

The component function executes again, but React does not rebuild the entire Real DOM. It compares the previous and new Virtual DOM and updates only the changed DOM nodes.

Senior Engineer Mental Model

A junior thinks:

setState()

↓

UI Changes

A senior thinks:

setState()

↓

Schedule Re-render

↓

Execute Component

↓

Create New Virtual DOM

↓

Diff

↓

Patch Real DOM

↓

Browser Paint

Notice:

The browser DOM is updated last.

🧠 Revision Card
RE-RENDER (Part 2)
setState()

↓

Component Executes Again

↓

New Virtual DOM

↓

Compare With Old Virtual DOM

↓

Find Changes

↓

Update Only Changed DOM Nodes
Remember
Whole Component Executes Again

✅ Yes

Whole Real DOM Recreated

❌ No

# >>>>


📖 Topic 5.3 — Update Cycle
Before Learning Update Cycle

In the previous topic, we learned:

setState()

↓

Component Executes Again

↓

New Virtual DOM

↓

Compare

↓

Update Real DOM

But this is still a simplified view.

Today we'll answer a deeper question:

What exactly happens inside React after setState() is called?

First Question

Suppose you have this component:

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
}

Initially:

0
[+]

You click:

+

The screen becomes:

1
[+]

Question:

Does React immediately change the DOM after setCount()?

❌ No.

Many steps happen first.

The Problem

If React updated the DOM immediately every time something changed:

setCount(1);

setName("Likan");

setAge(33);

React would update the browser:

DOM Update

↓

DOM Update

↓

DOM Update

Three separate browser updates.

This is slow.

React's Solution

React follows an Update Cycle.

Instead of updating immediately, React first collects the update, calculates the new UI, and then updates the browser once.

What Is Update Cycle?
Definition

The Update Cycle is the sequence of steps React follows after state or props change to update the UI efficiently.

Think of it like:

Change Requested

↓

React Thinks

↓

React Calculates

↓

React Updates Browser
Step 1 — User Action

Example:

User Clicks Button
<button
  onClick={() => setCount(count + 1)}
>
Step 2 — State Update Requested

React receives:

setCount(1);

Important:

React does not update the UI immediately.

Instead it says:

"Okay...

I received an update request."
Step 3 — Schedule Re-render

React schedules the component to render again.

Counter()

↓

Will Execute Again

Notice:

It is scheduled.

Not executed immediately.

Step 4 — Execute Component Again

React runs:

Counter();

again.

Now:

count = 1

The component returns:

<>
   <h1>1</h1>

   <button>+</button>
</>

A completely new UI description is created.

Step 5 — Create New Virtual DOM

React converts the returned JSX into a new Virtual DOM.

Old:

h1

0

New:

h1

1

Now React has:

Old Virtual DOM

VS

New Virtual DOM
Step 6 — Compare

React checks:

div changed?

❌ No

button changed?

❌ No

text changed?

✅ Yes

Only one thing changed.

Step 7 — Update Real DOM

React updates only:

0

↓

1

Nothing else changes.

Complete Update Cycle
User Click

↓

setState()

↓

React Receives Update

↓

Schedule Re-render

↓

Component Executes Again

↓

New Virtual DOM

↓

Compare

↓

Update Real DOM

↓

Browser Paint
Internal Working

Imagine:

setCount(1);

Internally React thinks:

State needs updating.

↓

Run Counter() again.

↓

Build new UI.

↓

Compare with previous UI.

↓

Only update changed DOM nodes.

↓

Finished.

Everything happens automatically.

Real-World Example

Imagine you're editing a PowerPoint presentation.

You change only the title on Slide 5.

Would you:

❌ Recreate all 100 slides?

Or:

✅ Update only Slide 5?

React chooses the second option.

Diagram
          User Click
               │
               ▼
         setState()
               │
               ▼
     React Receives Update
               │
               ▼
      Schedule Re-render
               │
               ▼
     Execute Component Again
               │
               ▼
      New Virtual DOM
               │
               ▼
 Compare with Old Virtual DOM
               │
               ▼
 Update Changed DOM Nodes
               │
               ▼
        Browser Screen
Mental Model

Think:

setState()

↓

"Something changed."

↓

"Let me calculate the new UI."

↓

"Only this text changed."

↓

"Update only that text."

React always calculates first and updates later.

Senior Engineer Mental Model

A junior developer thinks:

setState()

↓

UI Updated

A senior React developer thinks:

Event

↓

State Update

↓

Schedule Work

↓

Render

↓

Virtual DOM Diff

↓

Commit

↓

Browser Paint

Understanding this pipeline is essential for debugging rendering issues and optimizing performance.

Interview Questions
Q: What is the React Update Cycle?

Answer:

The Update Cycle is the sequence React follows after a state or props change: schedule a re-render, execute the component again, create a new Virtual DOM, compare it with the previous Virtual DOM, and update only the necessary parts of the Real DOM.

Q: Does setState() immediately update the DOM?

Answer:

No.

setState() requests an update. React schedules a re-render, calculates the new UI, compares it with the old UI, and then updates the Real DOM.

Q: Why doesn't React update the DOM immediately?

Answer:

Because multiple updates can be processed together, reducing unnecessary DOM operations and improving performance.

🧠 Revision Card
UPDATE CYCLE
User Action

↓

setState()

↓

React Receives Update

↓

Schedule Re-render

↓

Component Executes Again

↓

New Virtual DOM

↓

Compare

↓

Update Real DOM

↓

Browser Paint
Remember
setState()

≠

Immediate DOM Update

setState()

=

Start React's Update Cycle


# >>>>>>>>>>>>>>>


📖 Topic 5.4 — Render Triggers
Before Learning Render Triggers

We learned:

setState()

↓

React Starts Update Cycle

↓

Component Executes Again

↓

UI Updates

Now a very important question arises.

What exactly tells React to re-render a component?

Does every line of JavaScript cause a re-render?

No.

Only specific things trigger a re-render.

First Question

Look at this code:

function Counter() {

  const [count, setCount] = useState(0);

  console.log("Hello");

  return <h1>{count}</h1>;

}

Question:

Will this line:

console.log("Hello");

cause a re-render?

❌ No.

It only runs because a re-render already happened.

It does not trigger one.

The Problem

Imagine React re-rendered for everything.

let age = 20;

console.log(age);

const name = "Likan";

Math.random();

Every line would cause:

Re-render

↓

Re-render

↓

Re-render

Your application would become extremely slow.

React's Solution

React only re-renders when something that affects the UI changes.

What Is a Render Trigger?
Definition

A Render Trigger is an event that tells React:

"The UI might have changed. Execute the component again."

Notice the word:

"might."

React doesn't know yet.

It first executes the component and then checks if the UI actually changed.

Render Trigger 1 — State Changes ✅

Example:

setCount(1);

React thinks:

State changed.

↓

UI may change.

↓

Re-render.

This is the most common trigger.

Render Trigger 2 — Props Change ✅

Parent:

<UserCard name="Likan" />

Later:

<UserCard name="John" />

The child receives new props.

React says:

Props changed.

↓

Re-render UserCard.
Render Trigger 3 — Context Changes ✅

Suppose you use Context.

<ThemeContext.Provider value="dark">

Later:

value="light"

Every component using that context re-renders.

Why?

Because the value they depend on changed.

Render Trigger 4 — Parent Re-renders ✅

Suppose:

App

↓

Header

If App re-renders,

then by default:

Header

↓

also executes again.

Even if Header's props didn't change.

Later, we'll learn how React.memo can prevent unnecessary re-renders.

Things That Do NOT Trigger Re-render ❌
1. Normal Variables
let count = 0;

count++;

React doesn't care.

Why?

Because React only tracks state, not ordinary variables.

2. Console Statements
console.log("Hello");

No re-render.

3. Functions
function greet() {
  console.log("Hi");
}

Creating a function doesn't trigger anything.

4. Changing a Ref
ref.current = 10;

No re-render.

We'll study useRef later.

Example
function Counter() {

  let age = 20;

  const [count, setCount] = useState(0);

  age++;

}

Question:

Which causes React to re-render?

age++;

❌ No.

setCount(count + 1);

✅ Yes.

Because React tracks state, not local variables.

Complete Diagram
State Changed

        │
        ▼

Re-render


Props Changed

        │
        ▼

Re-render


Context Changed

        │
        ▼

Re-render


Parent Re-render

        │
        ▼

Child Re-render (Default)


--------------------------

Normal Variable

        │
        ▼

No Re-render


console.log()

        │
        ▼

No Re-render


ref.current

        │
        ▼

No Re-render
Internal Working

Suppose:

setCount(5);

React internally thinks:

State changed.

↓

Counter UI might change.

↓

Execute Counter() again.

↓

Create New Virtual DOM.

↓

Compare.

↓

Update DOM if needed.

Notice:

The trigger doesn't update the DOM.

It only starts the rendering process.

Mental Model

Think of React as a security guard.

Only these people are allowed to ring the bell:

✅ State

✅ Props

✅ Context

✅ Parent Render

Everyone else:

Normal Variables

Functions

console.log()

Refs

are ignored.

Senior Engineer Mental Model

A junior developer thinks:

setState()

↓

Re-render

A senior developer thinks:

Render Triggers

↓

State

Props

Context

Parent

↓

Component Executes Again

↓

Diff

↓

Commit

Understanding render triggers helps explain why components re-render unexpectedly and how to optimize them.

Interview Questions
Q: What triggers a React re-render?

Answer:

The common render triggers are:

State changes
Props changes
Context changes
Parent component re-rendering
Q: Does changing a normal variable trigger a re-render?

Answer:

No. React only tracks state, props, and context.

Q: Does console.log() trigger a re-render?

Answer:

No. It simply runs whenever the component executes.

Q: Does changing ref.current trigger a re-render?

Answer:

No. Updating a ref does not cause React to re-render.

🧠 Revision Card
RENDER TRIGGERS
Triggers

✅ State Change

✅ Props Change

✅ Context Change

✅ Parent Re-render

------------------------

Not Triggers

❌ Normal Variables

❌ console.log()

❌ Functions

❌ ref.current
Remember
React Re-renders

ONLY

When It Thinks

"The UI Might Have Changed."


# >>>>>>>>>>>



📖 Topic 5.5 — Virtual DOM
Before Learning Virtual DOM

So far we've learned:

JSX

↓

React Elements

↓

Component Executes

↓

React Element Tree

↓

Virtual DOM

↓

Real DOM

↓

Screen

Today we'll answer one of the biggest React questions:

What exactly is the Virtual DOM?

First Question

Suppose you write:

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <button>Click</button>
    </div>
  );
}

Question:

Where does React keep this UI before updating the browser?

Inside the browser DOM?

❌ No.

React keeps it inside memory.

That memory representation is called the Virtual DOM.

The Problem

Imagine React only had the Real DOM.

When state changes:

setCount(1);

React would need to inspect the browser DOM, figure out what changed, and decide what to update.

The browser DOM is large and expensive to work with.

React's Solution

React creates its own lightweight copy of the UI.

Instead of storing browser objects, it stores JavaScript objects.

This is called the Virtual DOM.

What Is Virtual DOM?
Definition

The Virtual DOM (VDOM) is an in-memory tree of JavaScript objects that represents what the UI should look like.

Notice:

It is not HTML.

It is not the browser DOM.

It is just JavaScript objects stored in memory.

Real DOM vs Virtual DOM
Real DOM

Created by:

Browser

Example:

<div>
   <h1>Hello</h1>
   <button>Click</button>
</div>

The browser uses this to display the page.

Virtual DOM

Created by:

React

Example (conceptually):

{
  type: "div",
  children: [
    {
      type: "h1",
      children: "Hello"
    },
    {
      type: "button",
      children: "Click"
    }
  ]
}

These are plain JavaScript objects.

Where Is the Virtual DOM Stored?

It lives inside your application's memory (RAM).

Computer Memory (RAM)

↓

React

↓

Virtual DOM

The browser never displays it.

Only React uses it.

How Is It Created?

You write:

<App />

React executes:

App();

The component returns JSX:

<div>

   <h1>Hello</h1>

</div>

React converts that JSX into JavaScript objects.

Those objects become the Virtual DOM.

Visual Flow
JSX

↓

Component Executes

↓

React Elements

↓

Virtual DOM

↓

Stored In Memory
Why Is It Called "Virtual"?

Because it behaves like a DOM tree,

but it isn't the real browser DOM.

Think:

Virtual

=

Fake Representation

of

Real DOM

It describes the UI without actually creating browser elements.

Real-Life Analogy

Imagine you're designing a house.

First, you draw the plan on paper.

House Plan

↓

Engineer Reviews

↓

Real House Built

React works the same way.

Virtual DOM

↓

React Reviews Changes

↓

Real DOM Updated

The Virtual DOM is the blueprint.

The Real DOM is the actual house.

Internal Working

Suppose:

function App() {
  return <h1>Hello</h1>;
}

React executes:

App();

Returns:

<h1>Hello</h1>

React creates:

{
   type: "h1",
   props: {
      children: "Hello"
   }
}

This object becomes part of the Virtual DOM.

Later, if state changes:

React creates another Virtual DOM.

Then compares:

Old Virtual DOM

VS

New Virtual DOM

Only after the comparison does React update the Real DOM.

Diagram
          JSX
           │
           ▼
   Component Executes
           │
           ▼
     React Elements
           │
           ▼
      Virtual DOM
     (Memory Only)
           │
     Compare Changes
           │
           ▼
       Real DOM
           │
           ▼
         Screen
Mental Model

Think:

Virtual DOM

=

React's Notebook

Real DOM

=

Browser's Whiteboard

React first writes everything in its notebook.

Only after checking everything does it update the whiteboard.

Senior Engineer Mental Model

A junior developer thinks:

"Virtual DOM is a copy of the Real DOM."

That's not completely accurate.

A senior developer thinks:

Component

↓

React Elements

↓

Virtual DOM
(JavaScript Objects)

↓

Diffing

↓

Minimal Real DOM Updates

The Virtual DOM is derived from your React components, not copied from the browser's DOM.

Interview Questions
Q: What is the Virtual DOM?

Answer:

The Virtual DOM is React's in-memory representation of the UI, built using lightweight JavaScript objects.

Q: Is the Virtual DOM the same as the Real DOM?

Answer:

No.

The Virtual DOM is maintained by React in memory, while the Real DOM is maintained by the browser.

Q: Where is the Virtual DOM stored?

Answer:

It is stored in the application's memory (RAM), not inside the browser's DOM.

Q: Why does React use the Virtual DOM?

Answer:

To compare the previous and current UI efficiently and update only the necessary parts of the Real DOM.

🧠 Revision Card
VIRTUAL DOM
Definition

React's In-Memory UI

(JavaScript Objects)

---------------------

Created By

React

---------------------

Stored In

Memory (RAM)

---------------------

Purpose

Compare Old UI

With

New UI

---------------------

Flow

JSX

↓

React Elements

↓

Virtual DOM

↓

Compare

↓

Real DOM

↓

Screen
⭐ One sentence to remember forever

The Virtual DOM is not the screen. It is React's in-memory blueprint of the UI, used to determine the smallest set of changes needed before updating the Real DOM.


# >>>>>>>>>>>>>

📖 Topic 5.6 — DOM Diffing
Before Learning DOM Diffing

In the previous topic, we learned:

Old Virtual DOM

↓

New Virtual DOM

↓

Compare

↓

Update Real DOM

Today we'll answer a very important question:

How does React compare the Old Virtual DOM with the New Virtual DOM?

This comparison process is called DOM Diffing.

First Question

Suppose your application initially shows:

<div>
   <h1>0</h1>
   <button>+</button>
</div>

Now you click:

setCount(1);

The new UI becomes:

<div>
   <h1>1</h1>
   <button>+</button>
</div>

Question:

How does React know that only the <h1> text changed?

Does it check every node?

Does it rebuild everything?

No.

It performs DOM Diffing.

The Problem

Imagine a large application.

App
├── Navbar
├── Sidebar
├── Dashboard
│    ├── Card1
│    ├── Card2
│    ├── Card3
│    ├── Chart
│    └── Table
└── Footer

Suppose only this changes:

Card2 Count

10

↓

11

Should React rebuild everything?

Navbar ❌

Sidebar ❌

Dashboard ❌

Footer ❌

No.

That would waste time.

React's Solution

React compares the Old Virtual DOM with the New Virtual DOM.

This comparison process is called:

DOM Diffing

After finding the differences, React updates only those parts in the Real DOM.

What Is DOM Diffing?
Definition

DOM Diffing is the process where React compares the previous Virtual DOM with the new Virtual DOM to find what has changed.

Notice:

React is not comparing Real DOMs.

It is comparing Virtual DOM trees.

Simple Example

Old Virtual DOM

div
├── h1
│     "0"
└── button
      "+"

New Virtual DOM

div
├── h1
│     "1"
└── button
      "+"

React compares:

div

Same ✅

↓

h1

Same Element ✅

↓

Text

Changed ❌

↓

button

Same ✅

React concludes:

Only

"0"

↓

"1"

changed.
What Does React Update?

Only this:

Old

<h1>0</h1>

↓

New

<h1>1</h1>

The button is untouched.

The div is untouched.

Everything else stays exactly the same.

Another Example

Old UI

div
├── h1
└── button

New UI

div
├── h1
├── button
└── p

React compares:

div

Same ✅

↓

h1

Same ✅

↓

button

Same ✅

↓

New p

Added ✅

React updates only:

<p></p>

It does not rebuild the entire page.

How Does React Compare?

React starts from the root.

App

↓

div

↓

Children

↓

Grandchildren

It checks one node at a time.

Think of it like reading two books line by line.

Visual Flow
Old Virtual DOM

        │
        ▼

Compare

        ▲
        │

New Virtual DOM

        │
        ▼

Find Differences

        │
        ▼

Update Real DOM
Internal Working

Suppose:

setCount(1);

React performs these steps:

1. Execute component again

↓

2. Create New Virtual DOM

↓

3. Compare with Old Virtual DOM

↓

4. Find changed nodes

↓

5. Update only those nodes in the Real DOM
Real-World Analogy

Imagine two documents.

Old:

Name : Likan

Age : 33

New:

Name : Likan

Age : 34

Would you rewrite the entire document?

No.

You'd change only:

33

↓

34

React works exactly the same way.

Diagram
        Old Virtual DOM
               │
               ▼
          Compare Nodes
               ▲
               │
        New Virtual DOM
               │
               ▼
      Changed Nodes Found
               │
               ▼
        Update Real DOM
               │
               ▼
         Browser Screen
Mental Model

Think:

Old UI

↓

Compare

↓

New UI

↓

What's Different?

↓

Update Only That

React's goal is not to recreate everything.

Its goal is to find the smallest possible change.

Senior Engineer Mental Model

A junior developer thinks:

React compares pages.

Not exactly.

A senior React developer thinks:

Old Virtual DOM Tree

↓

Node-by-Node Comparison

↓

Minimal DOM Updates

The comparison is structural. React walks through the tree and identifies the smallest set of changes needed.

Interview Questions
Q: What is DOM Diffing?

Answer:

DOM Diffing is React's process of comparing the previous Virtual DOM with the new Virtual DOM to determine what has changed.

Q: Does React compare the Real DOM?

Answer:

No.

React compares two Virtual DOM trees and then updates only the necessary parts of the Real DOM.

Q: Why is DOM Diffing useful?

Answer:

It avoids unnecessary DOM updates by changing only the nodes that are different, improving performance.

🧠 Revision Card
DOM DIFFING
Old Virtual DOM

↓

New Virtual DOM

↓

Compare

↓

Find Differences

↓

Update Real DOM

↓

Browser Screen
Remember
React Compares

Virtual DOM

NOT

Real DOM
Goal

Find

The Smallest Change

Possible



# >>>>>>


📖 Topic 5.7 — React Elements (Rendering Perspective)
Before Learning This Topic

We learned:

State Changes

↓

Component Executes Again

↓

New Virtual DOM

↓

Compare

↓

Update Real DOM

But a very interesting question comes up.

First Question

Look at this component.

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <h1>{count}</h1>
  );

}

Initially:

count = 0

React creates a React Element:

{
  type: "h1",
  props: {
    children: 0
  }
}

Now you click:

setCount(1);

Question:

Does React reuse the old React Element?

Or

Does it create a new React Element?

The Problem

Suppose React reused the old React Element.

Old:

{
  type: "h1",
  props: {
    children: 0
  }
}

Now count becomes:

1

Should React simply modify:

children: 0

↓

children: 1

❌ No.

React never changes existing React Elements.

React's Solution

React creates brand-new React Elements on every render.

It never modifies the old ones.

What Happens During Every Render?

Initial Render

Component executes:

Counter();

Returns:

<h1>0</h1>

React creates:

{
  type: "h1",
  props: {
    children: 0
  }
}

Click button:

setCount(1);

React executes:

Counter();

again.

Returns:

<h1>1</h1>

React creates a new object:

{
  type: "h1",
  props: {
    children: 1
  }
}

Notice:

This is not the previous object.

It is a completely new React Element.

Visual Flow
Initial Render

Counter()

↓

React Element #1

children = 0

-----------------------

Click Button

↓

Counter()

↓

React Element #2

children = 1

React Element #1 still exists.

React Element #2 is newly created.

Why Doesn't React Modify The Old Element?

Remember what we learned in Phase 1:

React Elements are immutable.

Immutable means:

Once created, they never change.

Example:

Old React Element:

{
  type: "h1",
  props: {
    children: 0
  }
}

Even after:

setCount(1);

this object remains:

{
  type: "h1",
  props: {
    children: 0
  }
}

React simply creates another object.

Why Is This Better?

Imagine changing the old object.

React would lose track of:

Old UI

VS

New UI

But because the old object never changes:

React can compare:

Old React Element

↓

New React Element

This comparison is safe and predictable.

Internal Working

Initial Render:

<h1>0</h1>

becomes:

Element A

After update:

<h1>1</h1>

becomes:

Element B

React compares:

Element A

VS

Element B

Difference:

children

0

↓

1

React updates only the text node in the Real DOM.

Real-Life Analogy

Imagine two photographs.

Photo 1:

Counter = 0

Photo 2:

Counter = 1

Would you edit Photo 1?

No.

You simply take another photo.

React works exactly the same way.

Every render is like taking a new snapshot of your UI.

Diagram
Initial Render

Counter()

      │
      ▼

React Element A

children = 0

──────────────

State Changes

      │
      ▼

Counter()

      │
      ▼

React Element B

children = 1

──────────────

Compare

A

VS

B

──────────────

Update DOM
Mental Model

Think:

React Elements

=

Snapshots

Every render creates a new snapshot.

React compares:

Old Snapshot

↓

New Snapshot

↓

Find Difference

↓

Update Screen

React never edits an old snapshot.

It always creates a new one.

Senior Engineer Mental Model

A junior developer thinks:

React updates React Elements.

❌ Incorrect.

A senior React developer thinks:

Every Render

↓

Creates New React Elements

↓

Old Elements Stay Unchanged

↓

React Compares Both

↓

Updates DOM

This immutability is one of the reasons React's rendering model is predictable and reliable.

Interview Questions
Q: Does React reuse old React Elements during a re-render?

Answer:

No.

React creates brand-new React Elements every time a component renders.

Q: Why doesn't React modify existing React Elements?

Answer:

Because React Elements are immutable. Creating new elements makes comparison simple, predictable, and reliable.

Q: If React creates new React Elements every render, why isn't the whole DOM recreated?

Answer:

Because React compares the old and new React Elements (through the Virtual DOM) and updates only the changed parts of the Real DOM.

🧠 Revision Card
REACT ELEMENTS (Rendering Perspective)
Render

↓

Create New React Elements

↓

Old Elements Stay Unchanged

↓

Compare

↓

Update Real DOM
Remember
React Elements

✓ Immutable

✓ Never Modified

✓ Recreated Every Render
React Doesn't Reuse

React Elements

It Reuses

Real DOM Nodes

Whenever Possible.




# >>>>>>


📖 Topic 5.8 — Reconciliation
Before Learning Reconciliation

So far we've learned:

State Changes

↓

Component Executes Again

↓

New React Elements

↓

New Virtual DOM

↓

DOM Diffing

↓

Update Real DOM

But there is one question left.

Who actually decides what should happen?

Who decides:

Keep this node?
Update this node?
Delete this node?
Create a new node?

That decision-making process is called Reconciliation.

First Question

Suppose your application initially renders:

<div>
   <h1>Hello</h1>
   <button>Login</button>
</div>

Later it becomes:

<div>
   <h1>Hello</h1>
   <button>Logout</button>
</div>

Question:

Should React:

❌ Delete everything and build again?

OR

✅ Keep everything and update only the button text?

Who decides this?

Reconciliation does.

The Problem

Imagine React always rebuilt everything.

Old UI

Navbar

Sidebar

Dashboard

Footer

↓

Delete Everything

↓

Create Everything Again

Even if only one word changed.

That would be very slow.

React's Solution

React uses a process called Reconciliation.

It compares the old tree with the new tree and decides the minimum work needed.

What Is Reconciliation?
Definition

Reconciliation is the process React uses to compare the old Virtual DOM with the new Virtual DOM and decide how to update the Real DOM efficiently.

Notice something important.

DOM Diffing and Reconciliation are related but not identical.

DOM Diffing = Comparing two trees.
Reconciliation = Comparing and deciding what action to take.

Think of it like this:

DOM Diffing

↓

"What changed?"

-------------------

Reconciliation

↓

"What should I do about it?"
Simple Example

Old UI

div
├── h1
└── button

New UI

div
├── h1
└── button

React compares them.

Everything is the same.

Reconciliation decides:

Keep div

Keep h1

Keep button

Update Nothing
Another Example

Old UI

button

Login

New UI

button

Logout

React compares.

Only the text changed.

Reconciliation decides:

Keep button

↓

Update Text

Notice:

The button itself is not recreated.

Only its text changes.

Another Example

Old UI

div

↓

h1

New UI

section

↓

h1

React compares.

Now the root element changed.

Reconciliation decides:

Delete div

↓

Create section

↓

Create new h1

Because the root element type changed.

Think Like React

Imagine React asking questions.

Is this node the same?

↓

Yes

↓

Reuse it

------------------

Is this node different?

↓

Yes

↓

Replace it

------------------

Was a new node added?

↓

Yes

↓

Create it

------------------

Was a node removed?

↓

Yes

↓

Delete it

That's reconciliation.

Internal Working

Suppose:

setCount(1);

React performs:

Execute Component

↓

New Virtual DOM

↓

Diff Old vs New

↓

Reconciliation Decides

Keep?

Update?

Delete?

Create?

↓

Apply Changes

↓

Real DOM Updated

Notice:

The comparison itself doesn't update anything.

Reconciliation decides what operations should happen.

Real-Life Analogy

Imagine a company.

Employees submit reports.

Someone has to decide:

Approve

Reject

Modify

Delete

The comparison tells you:

"What is different."

The manager decides:

"What action should be taken."

React works exactly like that.

DOM Diffing

↓

Difference Found

↓

Reconciliation

↓

Decision Made
Diagram
Old Virtual DOM
        │
        ▼
    DOM Diffing
        │
        ▼
Differences Found
        │
        ▼
  Reconciliation
        │
        ▼
Decide Actions
│
├── Keep
├── Update
├── Create
└── Delete
        │
        ▼
     Real DOM
Mental Model

Think:

DOM Diffing

=

Detective

↓

Finds differences

---------------------

Reconciliation

=

Judge

↓

Decides

Keep

Update

Delete

Create

The detective finds the problem.

The judge decides what to do.

Senior Engineer Mental Model

A junior developer thinks:

React compares two Virtual DOMs.

Correct, but incomplete.

A senior React developer thinks:

Render

↓

New Virtual DOM

↓

Diff

↓

Reconciliation

↓

Generate DOM Operations

↓

Commit

↓

Browser Paint

Reconciliation is the decision-making engine that determines the smallest set of DOM operations required.

Interview Questions
Q: What is Reconciliation?

Answer:

Reconciliation is React's process of comparing the previous and current Virtual DOM trees and deciding the minimum changes required for the Real DOM.

Q: Is Reconciliation the same as DOM Diffing?

Answer:

No.

DOM Diffing finds the differences.
Reconciliation uses those differences to decide whether to keep, update, create, or delete DOM nodes.
Q: Why is Reconciliation important?

Answer:

It minimizes unnecessary DOM operations, making React applications efficient.

🧠 Revision Card
RECONCILIATION
Old Virtual DOM

↓

New Virtual DOM

↓

DOM Diffing

↓

Find Differences

↓

Reconciliation

↓

Decide

✓ Keep

✓ Update

✓ Create

✓ Delete

↓

Real DOM
Remember
DOM Diffing

=

"What Changed?"

----------------------

Reconciliation

=

"What Should React Do?"
🔥 Important Note

One thing I want to improve in your roadmap:

In the syllabus, DOM Diffing comes before Reconciliation, but in reality they are two parts of the same process. Going forward, I'll keep explaining them together where appropriate so the concepts connect naturally, while still covering each syllabus topic individually.

# >>>>>>


📖 Topic 5.9 — Diffing Algorithm
Before Learning Diffing Algorithm

In the previous topic, we learned:

Old Virtual DOM

↓

New Virtual DOM

↓

DOM Diffing

↓

Reconciliation

↓

Update Real DOM

But we still don't know one thing.

How does React actually compare two trees?

Does it compare randomly?

Does it compare every node with every other node?

No.

React follows a set of rules called the Diffing Algorithm.

First Question

Suppose your UI is:

Old UI

<div>

   <h1>Hello</h1>

</div>

New UI

<div>

   <h1>Welcome</h1>

</div>

Question:

Should React create a new <div>?

Should it create a new <h1>?

Or should it only change the text?

How does React decide?

The Problem

Imagine React compared every node with every other node.

Example:

1000 Nodes

Compare with

1000 Nodes

That means:

Node 1 → Compare with 1000 Nodes

Node 2 → Compare with 1000 Nodes

Node 3 → Compare with 1000 Nodes

Very slow.

For large applications this would be a disaster.

React's Solution

React follows a few simple rules.

Instead of trying every possible comparison, it assumes:

"Most of the UI stays the same between renders."

This assumption makes React very fast.

What Is the Diffing Algorithm?
Definition

The Diffing Algorithm is the set of rules React uses to compare the old Virtual DOM and the new Virtual DOM efficiently.

Think:

Old Tree

↓

Rules

↓

New Tree

↓

Find Differences
Rule 1 — Compare the Root Element

Old UI

<div>

   Hello

</div>

New UI

<div>

   Welcome

</div>

React first asks:

Root Type

div

VS

div

Same?

✅ Yes.

React keeps the <div>.

Rule 2 — If Types Are Different

Old UI

<div>

   Hello

</div>

New UI

<section>

   Hello

</section>

React asks:

div

VS

section

Different?

✅ Yes.

React immediately decides:

Delete div

↓

Create section

React does not try to reuse the old <div>.

Rule 3 — Compare Props

Old UI

<button className="red">

Login

</button>

New UI

<button className="blue">

Login

</button>

React asks:

Element Type

button

VS

button

↓

Same

Then:

Props

className

red

↓

blue

Only the prop changed.

React updates only:

className

The button itself stays.

Rule 4 — Compare Children

Old UI

<div>

   <h1 />

   <button />

</div>

New UI

<div>

   <h1 />

   <button />

</div>

React compares children one by one.

Child 1

h1

↓

Same

-------------------

Child 2

button

↓

Same

Nothing changes.

Rule 5 — Compare Text

Old:

<h1>

0

</h1>

New:

<h1>

1

</h1>

React asks:

Text

0

↓

1

Only the text changes.

No new <h1> is created.

Complete Flow
Old Tree

↓

Compare Root

↓

Compare Props

↓

Compare Children

↓

Compare Text

↓

Find Changes

↓

Update Real DOM
Internal Working

Suppose:

Old:

<div>

   <h1>0</h1>

</div>

New:

<div>

   <h1>1</h1>

</div>

React internally does:

Compare div

↓

Same

↓

Compare h1

↓

Same

↓

Compare Text

↓

Changed

↓

Update Text Node

Nothing else changes.

Real-Life Analogy

Imagine two family photos.

Photo 1

Father

Mother

Son

Photo 2

Father

Mother

Daughter

You compare:

Father

Same

Mother

Same

Third Person

Different

You don't say:

"Everyone changed."

You update only the difference.

React works exactly like this.

Diagram
Old Virtual DOM
        │
        ▼
 Compare Root
        │
        ▼
 Compare Props
        │
        ▼
Compare Children
        │
        ▼
 Compare Text
        │
        ▼
 Differences Found
        │
        ▼
 Update Real DOM
Mental Model

Think of React like a teacher checking two answer sheets.

The teacher asks:

Question 1

Same?

↓

Yes

Next

----------------

Question 2

Same?

↓

No

Correct It

----------------

Question 3

Same?

↓

Yes

The teacher doesn't rewrite the whole paper.

Only the wrong answer.

⭐ The Three Rules Every React Developer Must Remember
1.

Different Element Type

↓

Replace Everything

--------------------

2.

Same Element Type

↓

Compare Props

--------------------

3.

Same Props

↓

Compare Children

Almost every React update follows these three rules.

Senior Engineer Mental Model

A junior developer thinks:

React compares everything.

Not exactly.

A senior developer thinks:

Root Comparison

↓

Element Type

↓

Props

↓

Children

↓

Minimal DOM Operations

React avoids unnecessary work by following predictable rules rather than exhaustive comparisons.

Interview Questions
Q: What is React's Diffing Algorithm?

Answer:

It is the set of rules React uses to efficiently compare the previous and new Virtual DOM trees to determine the minimum DOM updates.

Q: What happens if the root element type changes?

Answer:

React discards the old subtree and creates a new one because different element types are treated as different UI structures.

Q: If only a prop changes, what does React do?

Answer:

React keeps the existing DOM node and updates only the changed prop.

Q: If only text changes, what happens?

Answer:

React updates only the text node without recreating the parent element.

🧠 Revision Card
DIFFING ALGORITHM
Old Virtual DOM

↓

Compare Root

↓

Compare Element Type

↓

Compare Props

↓

Compare Children

↓

Compare Text

↓

Find Differences

↓

Update Real DOM
Remember
Different Type

↓

Replace Node

--------------------

Same Type

↓

Compare Props

↓

Compare Children

--------------------

Only Text Changed

↓

Update Text Only



What does "Root Element Changes" mean?

It means the top-most HTML element returned by a component changes its type.

Example 1:

Old:

return (
  <div>
    <h1>Hello</h1>
  </div>
);

New:

return (
  <section>
    <h1>Hello</h1>
  </section>
);

React compares:

Old Root

div

↓

New Root

section

Different types.

So React says:

❌ Reuse? No

Delete old subtree

↓

Create new subtree
Why replace everything?

Because React assumes:

Different Element Type

=

Different UI Structure

A <div> and a <section> are different kinds of DOM elements.

React doesn't try to convert one into the other.

Instead it does:

Old

div
└── h1

↓

Delete Everything

↓

Create

section
└── h1
Example 2

Old

<div>
   <button>Login</button>
</div>

New

<section>
   <button>Login</button>
</section>

React does NOT think:

Keep button

Change div to section

Instead it thinks:

Delete div

Delete button

↓

Create section

Create button

Even though the button looks the same.

Example 3

Old

<div>
   <Navbar />
   <Content />
</div>

New

<section>
   <Navbar />
   <Content />
</section>

React sees:

div

↓

section

Immediately:

Delete

div

Navbar

Content

↓

Create

section

Navbar

Content

Everything under that root is recreated.

But if the root stays the same...

Old

<div>
   <h1>Hello</h1>
</div>

New

<div>
   <h1>Welcome</h1>
</div>

React sees:

div

↓

div

Same Type ✅

Now it continues checking children.

h1

↓

h1

Same Type ✅

Then:

Hello

↓

Welcome

Different Text ✅

Result:

Only the text changes.

The div and h1 are reused.

Visual Comparison
Case 1 (Same Root)
div
└── h1

↓

div
└── h1

✅ Reuse Everything

Only Update Text
Case 2 (Different Root)
div
└── h1

↓

section
└── h1

❌ Delete Entire Tree

↓

Create New Tree
⭐ Interview Rule

React's first question is always:

Are the root element types the same?

If:

div

↓

div

➡ Continue comparing.

If:

div

↓

section

➡ Stop comparing.

➡ Delete old subtree.

➡ Create new subtree.

🧠 Easy Rule to Remember
Same Element Type

↓

Compare Further

---------------------

Different Element Type

↓

Don't Compare

↓

Replace Entire Subtree

This is one of the core optimization rules in React's reconciliation algorithm.





# >>>>>>>>

📖 Topic 5.10 — Key Matching
Before Learning Key Matching

In the previous topic, we learned that React compares:

Old Virtual DOM

↓

New Virtual DOM

↓

Compare Root

↓

Compare Children

↓

Update Real DOM

Now comes a very important question.

First Question

Suppose you have a list.

Old UI

<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

Now you add:

Orange

at the beginning.

New UI

<ul>
  <li>Orange</li>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

Question:

How does React know:

Apple is still Apple?
Banana is still Banana?
Mango is still Mango?

Without help...

React doesn't know.

The Problem

Without keys, React compares children by position.

Old

Position 1

Apple

Position 2

Banana

Position 3

Mango

New

Position 1

Orange

Position 2

Apple

Position 3

Banana

Position 4

Mango

React compares:

Apple

↓

Orange

Different

----------------

Banana

↓

Apple

Different

----------------

Mango

↓

Banana

Different

React thinks:

Everything Changed ❌

Even though only one new item was added.

React's Solution

Give every item a unique identity.

That identity is called a Key.

What Is a Key?
Definition

A Key is a unique identifier that helps React match old and new child elements during reconciliation.

Think of it like an Aadhaar number.

People may move to a different position in a queue.

But their Aadhaar number stays the same.

React uses keys the same way.

Example Without Keys
const fruits = ["Apple", "Banana", "Mango"];

return (
  <ul>
    {fruits.map(fruit => (
      <li>{fruit}</li>
    ))}
  </ul>
);

React only knows:

Child 1

Child 2

Child 3

It doesn't know which child is which.

Example With Keys
const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Mango" }
];

return (
  <ul>
    {fruits.map(fruit => (
      <li key={fruit.id}>
        {fruit.name}
      </li>
    ))}
  </ul>
);

Now React knows:

Key 1

Apple

----------------

Key 2

Banana

----------------

Key 3

Mango
What Happens After Adding Orange?

Old

Key 1

Apple

Key 2

Banana

Key 3

Mango

New

Key 4

Orange

Key 1

Apple

Key 2

Banana

Key 3

Mango

React compares keys:

Key 4

New Item

Create It

----------------

Key 1

Already Exists

Reuse It

----------------

Key 2

Already Exists

Reuse It

----------------

Key 3

Already Exists

Reuse It

Only one DOM node is created.

Everything else is reused.

Why Keys Must Be Unique

Imagine:

<li key="1">Apple</li>

<li key="1">Banana</li>

Now React sees:

Key

1

↓

Key

1

Which one is Apple?

Which one is Banana?

React cannot tell.

This leads to incorrect updates.

Why Not Use Array Index?

Many beginners write:

{items.map((item, index) => (
   <li key={index}>
      {item}
   </li>
))}

Looks fine.

But imagine:

Old

0 Apple

1 Banana

2 Mango

Insert Orange at the beginning.

New

0 Orange

1 Apple

2 Banana

3 Mango

Notice:

Apple

Old Key

0

↓

New Key

1

Every key changed.

React thinks:

Everything Changed

This causes unnecessary updates and can even make component state move to the wrong item.

When Is Index Okay?

Only when:

The list never changes.
Items are never inserted.
Items are never deleted.
Items are never reordered.

Example:

Monday

Tuesday

Wednesday

If this list is always fixed, using the index is usually acceptable.

For dynamic lists, use a stable unique ID.

Internal Working

Suppose:

Old

Key 1

Key 2

Key 3

New

Key 3

Key 1

Key 2

React does not compare positions.

It compares:

Key

↓

Key

So it knows:

Move Key 3

Reuse Key 1

Reuse Key 2
Real-Life Analogy

Imagine a classroom.

Without roll numbers:

Seat 1

Rahul

Seat 2

Amit

Tomorrow they swap seats.

Teacher thinks:

Rahul became Amit?

Amit became Rahul?

Confusing.

With roll numbers:

Roll 21

Rahul

Roll 22

Amit

Even if they change seats:

The teacher still knows exactly who is who.

Keys work exactly like roll numbers.

Diagram
Old Children

Key 1

Key 2

Key 3

        │
        ▼

React Matches

By Key

        ▲
        │

New Children

Key 3

Key 1

Key 2

        │
        ▼

Reuse Existing DOM Nodes

Move If Needed
Mental Model

Think:

Without Keys

React Says

"I know positions."

--------------------

With Keys

React Says

"I know identities."

Identity is much more important than position.

Senior Engineer Mental Model

A junior developer thinks:

Keys remove warnings.

That's true, but it's not the main purpose.

A senior React developer thinks:

Keys

↓

Stable Identity

↓

Correct Reconciliation

↓

Efficient DOM Updates

↓

Preserved Component State

Keys are not for React warnings.

They are fundamental to React's reconciliation algorithm.

Interview Questions
Q: Why does React need keys?

Answer:

Keys give each child element a stable identity so React can correctly match old and new elements during reconciliation.

Q: Why shouldn't we use the array index as a key?

Answer:

If items are inserted, removed, or reordered, indexes change. React may reuse the wrong components, causing unnecessary updates or incorrect state.

Q: What makes a good key?

Answer:

A unique, stable value such as a database ID.

🧠 Revision Card
KEY MATCHING
Old Children

↓

Match By Key

↓

New Children

↓

Reuse Correct Nodes

↓

Minimal DOM Updates
Remember
Key

=

Identity

--------------------

Not

Position
Good Key

✅ Database ID

✅ UUID

--------------------

Bad Key

❌ Array Index

(For Dynamic Lists)



Let's take a real example.

Suppose you have this list:

const users = [
  "Apple",
  "Banana",
  "Mango"
];

You render it like this:

users.map((user, index) => (
    <UserCard key={index} name={user} />
))

Initially React sees:

Key 0 → Apple

Key 1 → Banana

Key 2 → Mango

Everything is fine.

Now you insert Orange at the beginning.
const users = [
  "Orange",
  "Apple",
  "Banana",
  "Mango"
];

Now React sees:

Key 0 → Orange

Key 1 → Apple

Key 2 → Banana

Key 3 → Mango

Notice carefully:

Before

Key 0 → Apple

After

Key 0 → Orange

React thinks:

"Oh... Key 0 is the same component."

So instead of creating a new component, it reuses the old Apple component and changes its props to Orange.

Similarly,

Old

Key 1 → Banana

↓

New

Key 1 → Apple

React reuses Banana's component for Apple.

Why is this bad?

Suppose each UserCard has its own state.

function UserCard({ name }) {

   const [isEditing, setIsEditing] = useState(false);

}

Initially:

Apple   isEditing = false

Banana  isEditing = true   ← User is editing Banana

Mango   isEditing = false

Now insert Orange at the beginning.

React reuses components because the keys (indexes) shifted.

Result:

Orange  isEditing = false

Apple   isEditing = true   ❌

Banana  isEditing = false

Mango   isEditing = false
😲 What happened?

The editing state moved from Banana to Apple.

The user was editing Banana, but suddenly Apple appears in edit mode.

This is a real bug.

With proper IDs

Instead:

[
 {id:101,name:"Apple"},
 {id:102,name:"Banana"},
 {id:103,name:"Mango"}
]

React sees:

Before

Key 101 → Apple

Key 102 → Banana

Key 103 → Mango

After inserting Orange

Key 104 → Orange

Key 101 → Apple

Key 102 → Banana

Key 103 → Mango

React says:

Key 104

↓

New Component

----------------

Key 101

↓

Same Apple

Reuse

----------------

Key 102

↓

Same Banana

Reuse

----------------

Key 103

↓

Same Mango

Reuse

Now Banana keeps its own state.

Nothing gets mixed up.

The Biggest Mental Model

Keys identify the component, not the position.

With index:

Position

↓

Identity ❌

With ID:

Identity

↓

Position doesn't matter ✅
Senior React Mental Model

React doesn't think:

"This is Apple."

React thinks:

"This is Component with Key = 1."

If tomorrow Key 1 becomes Apple instead of Banana, React assumes:

"It's still the same component, just with different props."

That's why component state can get attached to the wrong item.

This is also why React's documentation strongly recommends avoiding array indexes as keys for dynamic lists (lists where items can be inserted, removed, or reordered).

Next, in Child Reconciliation, I'll show you React's internal matching algorithm step by step, so you'll see exactly how it uses keys during reconciliation. That's where this concept becomes crystal clear.


# >>>>>



📖 Topic 5.11 — Child Reconciliation
Before Learning Child Reconciliation

In the previous topic, we learned:

Old Children

↓

Match By Keys

↓

Reuse Correct Components

↓

Update Real DOM

Now let's learn how React handles an entire list of children.

This process is called Child Reconciliation.

First Question

Suppose your UI is:

<ul>
   <li>Apple</li>
   <li>Banana</li>
   <li>Mango</li>
</ul>

Later it becomes:

<ul>
   <li>Orange</li>
   <li>Apple</li>
   <li>Mango</li>
</ul>

Question:

How does React decide:

Which child to keep?
Which child to delete?
Which child to create?
Which child to move?
The Problem

A parent component can have many children.

Example:

App

├── Navbar

├── Sidebar

├── Dashboard

├── Footer

After a state update:

App

├── Navbar

├── Dashboard

├── Footer

├── Chat

Now React has to determine:

Sidebar

↓

Deleted?

Dashboard

↓

Moved?

Chat

↓

New?

How does it know?

React's Solution

React reconciles children one by one.

It tries to reuse existing children whenever possible.

What Is Child Reconciliation?
Definition

Child Reconciliation is the process React uses to compare all child elements of a parent and decide which children should be reused, created, moved, or deleted.

Think:

Parent

↓

Children

↓

Compare Every Child

↓

Reuse/Create/Delete/Move
Case 1 — Child Updated

Old

ul

├── Apple

├── Banana

└── Mango

New

ul

├── Apple

├── Banana

└── Orange

React compares:

Apple

↓

Same ✅

----------------

Banana

↓

Same ✅

----------------

Mango

↓

Orange

Different ❌

Decision:

Reuse Apple

Reuse Banana

Update Mango → Orange
Case 2 — Child Added

Old

Apple

Banana

New

Apple

Banana

Mango

React compares:

Apple

↓

Same

----------------

Banana

↓

Same

----------------

Mango

↓

New

Decision:

Create Mango

Nothing else changes.

Case 3 — Child Removed

Old

Apple

Banana

Mango

New

Apple

Mango

React compares:

Apple

↓

Same

----------------

Banana

↓

Missing

Decision:

Delete Banana
Case 4 — Child Moved (Without Keys)

Old

Apple

Banana

Mango

New

Banana

Apple

Mango

Without keys React compares by position.

Position 1

Apple

↓

Banana

Different

----------------

Position 2

Banana

↓

Apple

Different

React thinks:

Everything Changed

Unnecessary work.

Case 5 — Child Moved (With Keys)

Old

Key 1 → Apple

Key 2 → Banana

Key 3 → Mango

New

Key 2 → Banana

Key 1 → Apple

Key 3 → Mango

React compares:

Key 2

Found

Reuse

Move

----------------

Key 1

Found

Reuse

Move

----------------

Key 3

Found

Reuse

Notice:

React doesn't recreate Banana or Apple.

It simply moves the existing DOM nodes.

This is much faster.

Visual Flow
Parent

↓

Old Children

↓

New Children

↓

Match Using Keys

↓

Reuse

Move

Create

Delete

↓

Update Real DOM
Internal Working

Suppose:

Old

<ul>

<li key="1">Apple</li>

<li key="2">Banana</li>

<li key="3">Mango</li>

</ul>

New

<ul>

<li key="2">Banana</li>

<li key="1">Apple</li>

<li key="3">Mango</li>

</ul>

React internally thinks:

Key 2

Already Exists

↓

Reuse

Move

----------------

Key 1

Already Exists

↓

Reuse

Move

----------------

Key 3

Already Exists

↓

Reuse

No components are destroyed.

No state is lost.

Real-Life Analogy

Imagine a school classroom.

Old seating:

Roll 1

Rahul

Roll 2

Amit

Roll 3

Riya

Tomorrow:

Roll 2

Amit

Roll 1

Rahul

Roll 3

Riya

The teacher doesn't think:

Rahul became Amit.

The teacher thinks:

Roll Number

Didn't Change

↓

Only Seat Changed

React behaves exactly like the teacher.

Keys are like roll numbers.

Diagram
Old Children

Key1

Key2

Key3

        │
        ▼

React Matches

By Key

        │
        ▼

Key2

Key1

Key3

        │
        ▼

Reuse Existing Components

↓

Move DOM Nodes

↓

Minimal Updates
Mental Model

Think of every child as having a passport.

Child

↓

Passport (Key)

↓

Identity

React doesn't care where the child is standing.

It cares about who the child is.

Senior Engineer Mental Model

A junior developer thinks:

React compares list positions.

Not always.

A senior developer thinks:

Parent

↓

Children

↓

Stable Keys

↓

Preserve Identity

↓

Reuse Components

↓

Preserve State

↓

Minimal DOM Operations

This is why good keys are one of the foundations of React performance.

Interview Questions
Q: What is Child Reconciliation?

Answer:

Child Reconciliation is the process React uses to compare a parent's old and new child elements and determine which children should be reused, moved, created, or removed.

Q: Why are keys important during Child Reconciliation?

Answer:

Keys give children a stable identity, allowing React to correctly match children across renders, preserve component state, and minimize DOM updates.

Q: What happens if children move but have stable keys?

Answer:

React reuses the existing components and DOM nodes, moving them if necessary instead of recreating them.

🧠 Revision Card
CHILD RECONCILIATION
Parent

↓

Old Children

↓

New Children

↓

Match By Keys

↓

Reuse

Move

Create

Delete

↓

Real DOM
Remember
Without Keys

↓

Compare Position

↓

More Work

--------------------

With Keys

↓

Compare Identity

↓

Less Work

↓

State Preserved


What does "Preserve State" mean?

It means:

React keeps the component's existing state instead of creating a brand-new component.

Let's understand with an example.

Imagine this component
function UserCard({ name }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

Each UserCard has its own state:

isEditing
Initial Render
Apple
isEditing = false

Banana
isEditing = true

Mango
isEditing = false

Suppose the user is editing Banana.

Now the list changes

Instead of:

Apple

Banana

Mango

it becomes:

Orange

Apple

Banana

Mango
If React uses proper keys
Apple  (id=1)

Banana (id=2)

Mango  (id=3)

React says:

Apple

Same component ✅

Banana

Same component ✅

Mango

Same component ✅

Orange

New component ✅

Result:

Orange
isEditing = false

Apple
isEditing = false

Banana
isEditing = true ✅

Mango
isEditing = false

Notice:

Banana kept its state.

This is called preserving state.

If React uses index as key

Old

0 Apple

1 Banana

2 Mango

New

0 Orange

1 Apple

2 Banana

3 Mango

React thinks:

Key 0

Same component

↓

Apple became Orange

----------------

Key 1

Same component

↓

Banana became Apple

----------------

Key 2

Same component

↓

Mango became Banana

Now look at the state.

Before:

Apple

isEditing = false

Banana

isEditing = true

Mango

isEditing = false

After:

Orange

isEditing = false

Apple

isEditing = true ❌

Banana

isEditing = false ❌

Mango

isEditing = false

The editing state moved to the wrong person.

Why?

Because React doesn't think:

"This is Banana."

React thinks:

"This is the component with Key = 1."

If Key 1 now represents Apple, React reuses that same component—and its state.

Easy Analogy

Imagine three lockers.

Initially:

Locker 1 → Apple's bag

Locker 2 → Banana's bag

Locker 3 → Mango's bag

If you only change where people stand (using IDs):

Apple moves.

Banana moves.

They still open their own lockers.

Nothing is lost.

But if locker numbers change every day (like array indexes):

Today

Locker 1 → Apple

Tomorrow

Locker 1 → Orange

Orange opens Apple's locker.

Apple opens Banana's locker.

Everything gets mixed up.

One Sentence to Remember Forever
Preserve State

=

Keep the same component instance

↓

Keep all its useState values

↓

Keep its useRef values

↓

Keep its internal data

When React reuses a component, its state is preserved.

When React destroys and recreates a component, its state is reset.

⭐ Interview Definition

Preserving state means React reuses the existing component instance instead of creating a new one, so the component keeps its existing useState, useRef, and other internal state across renders.

This concept will become even clearer in the next topic: Mount vs Update, because that's where you'll learn exactly when React preserves state and when it throws it away.

Suppose you have:
function UserCard({ name }) {
  const [isEditing, setIsEditing] = useState(false);

  return <h2>{name}</h2>;
}

And you render:

users.map(user => (
    <UserCard
        key={user.id}
        name={user.name}
    />
))

Initially:

UserCard Instance A → Apple

UserCard Instance B → Banana

UserCard Instance C → Mango

Notice:

Each item has its own React component instance.

Each instance has its own:

useState
useRef
Effects
Internal data
Now reorder the list
Banana

Apple

Mango

React sees:

Key 2

↓

Same UserCard Instance B

-------------------

Key 1

↓

Same UserCard Instance A

-------------------

Key 3

↓

Same UserCard Instance C

React moves those component instances instead of creating new ones.

So when I said:

"Same component"

I meant:

Same UserCard component instance

Not merely the same data item.

Think of it this way

Data:

Apple

Banana

Mango

↓

Each data item creates a React component instance.

Apple
↓

UserCard Instance A

--------------------

Banana
↓

UserCard Instance B

--------------------

Mango
↓

UserCard Instance C

If the keys stay the same:

React keeps:

Instance A

Instance B

Instance C

Only their position in the UI changes.

That's why the state stays with the correct component.

If the keys change (using index)

React cannot recognize the old instances.

Instead it does something like:

Old

Instance A → Apple

↓

New

Instance A → Orange

The component instance is reused for a different item.

Now Apple's old state belongs to Orange.

This is the bug.

🧠 The Mental Model I want you to remember forever
Data Item

↓

React Component Instance

↓

Component State

Keys help React answer this question:

"Should I reuse this existing component instance, or should I create a brand-new one?"

If React reuses the same component instance, all of its state (useState, useRef, etc.) is preserved.

This question also leads perfectly into the next topic: Mount vs Update, because there you'll learn exactly when React reuses a component instance (Update) and when it destroys it and creates a brand-new one (Mount). That topic will make this concept click completely.


Excellent observation! You caught something that I simplified too much. Let's fix it.

You're asking:

"We are rendering list items (<li>), not UserCard components. How can they be React components?"

The answer is:

You're right. It depends on what you're rendering.

Case 1 — Rendering only HTML elements
const fruits = ["Apple", "Banana", "Mango"];

return (
  <ul>
    {fruits.map((fruit) => (
      <li key={fruit}>{fruit}</li>
    ))}
  </ul>
);

Here:

li

li

li

These are not your React components.

They are React elements representing HTML elements.

When keys change:

React preserves or recreates the <li> DOM nodes, not your own component.

There is no useState inside <li>, so preserving state isn't relevant here.

Case 2 — Rendering React components
function UserCard({ name }) {
  const [isEditing, setIsEditing] = useState(false);

  return <li>{name}</li>;
}

return (
  <ul>
    {users.map((user) => (
      <UserCard
        key={user.id}
        name={user.name}
      />
    ))}
  </ul>
);

Now the tree is:

App

↓

UserCard

↓

li

Each UserCard is a React component instance.

Each has:

useState
useRef
useEffect

Now preserving state matters.

Why did I use UserCard earlier?

Because it's the easiest way to demonstrate the state bug caused by incorrect keys.

If I had used only:

<li>Apple</li>

there would be no useState.

So you wouldn't see why keys are important.

The Real Rule

When React sees:

<li key={id}>Apple</li>

it preserves or recreates the DOM node (<li>).

When React sees:

<UserCard key={id} />

it preserves or recreates the React component instance, and therefore its state.

🧠 Mental Model
HTML Element

<li />

↓

Keys help React preserve

DOM node

-------------------------

React Component

<UserCard />

↓

Keys help React preserve

Component Instance

↓

useState

useRef

useEffect

So your question was absolutely correct.

For teaching keys, I switched from plain <li> elements to UserCard components because state preservation only makes sense when there's component state to preserve.

This attention to detail is exactly what helps you move from understanding React at a surface level to understanding how it really works.


Let's understand "preserve state" with the simplest possible example.

Step 1
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

Initially:

count = 0

Click button:

count = 1

Click again:

count = 2
Question

Every click causes a re-render.

So React executes:

Counter();

again.

Question:

After re-render,

should count become

0

again?

Or should it remain

2

?

The answer is:

2

Why?

Because React preserved the state.

What does preserve mean?

It simply means:

Old State

count = 2

↓

Re-render Happens

↓

Keep

count = 2

React did not throw it away.

What if React didn't preserve state?

Imagine every render did this:

Render 1

count = 0

↓

Click

↓

count = 1

↓

Render Again

↓

count = 0 ❌

Then your counter would never work.

Every render would reset it.

So preserve simply means...
Don't delete my state.

Keep it.

Use it again.

That's all.

Now where do keys come in?

Imagine you have three counters.

<Counter />
<Counter />
<Counter />

Suppose their values are:

Counter A = 5

Counter B = 10

Counter C = 3

Now you reorder them.

React has to decide:

Is this still Counter B?

OR

Is this a brand new Counter?

If it's still Counter B:

Keep state

10

If it's a brand new Counter:

Start again

0

This is exactly what preserve state means.

The easiest definition
Preserve State

=

Keep the old useState values

instead of creating new ones.
Let me ask you one question.

Suppose:

function Counter() {
  const [count, setCount] = useState(0);
}

The user clicks the button until:

count = 15

A re-render happens.

Should React keep:

count = 15

or should it start again from:

count = 0

Once you answer this, I'll connect it back to keys in a way that usually makes it click immediately.


# >>>>>>>


📖 Topic 5.12 — Mount vs Update
Before Learning Mount vs Update

So far we've learned:

State Changes

↓

Component Executes Again

↓

React Compares

↓

Update Real DOM

But React doesn't always do the same thing.

Sometimes React:

Creates a Brand-New Component

Other times React:

Reuses the Existing Component

Why?

First Question

Suppose you have:

function App() {
  return <Counter />;
}

When your application starts...

Question:

Did the Counter component exist before?

❌ No.

React has to create it.

This is called Mounting.

Now suppose you click a button.

setCount(count + 1);

Question:

Does React create another Counter component?

❌ No.

It updates the existing one.

This is called Updating.

The Problem

How does React decide:

Should I

Create

OR

Reuse?
React's Solution

React checks whether the component already exists.

If it doesn't exist:

Mount

If it already exists:

Update
What Is Mount?
Definition

Mount means React creates a component for the very first time.

Think:

Component

Doesn't Exist

↓

Create It

↓

Mount

Example:

function App() {
  return <Counter />;
}

Application starts.

React creates:

Counter

This is the first mount.

What Is Update?
Definition

Update means React reuses an existing component and renders it again because something changed.

Example:

setCount(count + 1);

React says:

Counter already exists.

↓

Reuse it.

↓

Execute it again.

↓

Update UI.

No new component is created.

Timeline

Application starts:

Counter

↓

Mount

User clicks button:

Counter

↓

Update

Clicks again:

Counter

↓

Update

Clicks again:

Counter

↓

Update

Notice:

Mount happens once.

Updates can happen many times.

Example
function Counter() {

   const [count, setCount] = useState(0);

   return (
      <button
         onClick={() => setCount(count + 1)}
      >
         {count}
      </button>
   );

}

Application starts:

Counter

Mounted

Button clicked:

Counter

Updated

Again:

Counter

Updated

Again:

Counter

Updated
When Does React Mount Again?

Suppose:

Old

<Counter />

New

<Login />

React compares:

Counter

↓

Login

Different component types.

React decides:

Unmount Counter

↓

Mount Login

It does not update Counter.

Internal Working

First Render

Component Doesn't Exist

↓

Create Component

↓

Mount

↓

Render UI

Later

State Changes

↓

Component Exists

↓

Reuse Component

↓

Update
Real-Life Analogy

Imagine moving into a new house.

First day:

House

↓

Move In

This happens once.

After that:

Paint Walls

Buy Furniture

Repair Fan

These are updates.

You didn't move into a new house.

You updated the existing one.

React works exactly the same way.

Diagram
Application Starts
        │
        ▼
 Component Exists?
        │
   ┌────┴────┐
   │         │
  No        Yes
   │         │
   ▼         ▼
 Mount    Update
   │         │
Create   Reuse
Component Component
Mental Model

Think:

Mount

=

First Time

-------------------

Update

=

Next Times
Senior Engineer Mental Model

A junior developer thinks:

Render

=

Render

A senior developer thinks:

First Render

↓

Mount

-------------------

Later Renders

↓

Update

This distinction is important because React treats mounting and updating differently, especially for hooks like useEffect.

Interview Questions
Q: What is Mounting?

Answer:

Mounting is the process of creating and rendering a component for the first time.

Q: What is Updating?

Answer:

Updating is the process of re-rendering an existing component after state, props, or context changes.

Q: Can a component mount more than once?

Answer:

Yes. If React removes the component and later creates it again (for example, switching from <Counter /> to <Login /> and back), it mounts again.

🧠 Revision Card
MOUNT vs UPDATE
Component Doesn't Exist

↓

Mount

↓

Create Component

--------------------

Component Exists

↓

Update

↓

Reuse Component
Remember
Mount

=

First Time

Only Once

--------------------

Update

=

Every Later Render
⭐ This Answers Your Previous Doubt

Earlier you asked about "preserve state."

Now you can see why:

During an Update
Same Component

↓

Reuse Component

↓

Keep useState

(Preserve State)
During a Mount
New Component

↓

New useState

↓

State Starts Again

That's exactly what "preserve state" means.


# >>>>>>>>>>



📖 Topic 5.13 — Render Phase
Before Learning Render Phase

So far we've learned:

setState()

↓

React Starts Update Cycle

↓

Component Executes Again

↓

New Virtual DOM

↓

Compare

↓

Update Real DOM

Today we'll split this process into two major phases.

The first one is called the Render Phase.

First Question

Suppose you click:

setCount(count + 1);

Question:

Does React immediately update the browser?

❌ No.

First, React enters the Render Phase.

Only after the Render Phase finishes does React move to the Commit Phase.

The Problem

Imagine React updated the browser while it was still calculating the new UI.

Example:

Calculate Header

↓

Update Browser

↓

Calculate Sidebar

↓

Update Browser

↓

Calculate Footer

↓

Update Browser

The user might briefly see an incomplete UI.

This would be inefficient and could cause flickering.

React's Solution

React divides rendering into two phases.

Render Phase

↓

Commit Phase

Today we'll learn the first one.

What Is the Render Phase?
Definition

The Render Phase is the phase where React calculates what the new UI should look like.

Notice the wording carefully.

React is only calculating.

It is not updating the browser yet.

What Happens During the Render Phase?

Suppose:

function Counter() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}

User clicks:

setCount(1);

React starts the Render Phase.

It performs:

Execute Counter()

↓

Create New React Elements

↓

Create New Virtual DOM

↓

Compare With Old Virtual DOM

↓

Find Differences

Notice something.

At this point:

❌ Browser not updated

❌ DOM not changed

Everything is happening inside React.

What Does React NOT Do?

During the Render Phase:

❌ No DOM updates

❌ No browser painting

❌ Nothing visible happens

The screen still shows:

0

Even though React has already calculated:

1
Example

Current screen:

0

User clicks:

+

React performs:

Counter()

↓

<h1>1</h1>

↓

New Virtual DOM

↓

Compare

The browser still shows:

0

The Render Phase is complete.

React now knows exactly what needs to change.

Visual Flow
User Click

↓

setState()

↓

Render Phase Starts

↓

Execute Component

↓

Create React Elements

↓

Create Virtual DOM

↓

Compare

↓

Changes Found

↓

Render Phase Ends

No browser updates yet.

Why Is This Useful?

Imagine a huge application.

Navbar

Sidebar

Dashboard

Footer

React first calculates everything.

Only when all calculations are finished does it touch the browser.

This keeps updates efficient and consistent.

Internal Working

Suppose:

setCount(5);

React thinks:

Let me calculate the new UI.

↓

Run Counter()

↓

Create new React Elements

↓

Create new Virtual DOM

↓

Compare with previous Virtual DOM

↓

Done.

I now know exactly what changed.

Still:

Browser

↓

Not Updated Yet
Real-Life Analogy

Imagine an architect.

Before building a house, the architect:

Draws Blueprint

↓

Checks Blueprint

↓

Approves Blueprint

The house is not built yet.

That's the Render Phase.

The actual construction is the Commit Phase.

Diagram
             Render Phase

        User Action
             │
             ▼
         setState()
             │
             ▼
     Execute Components
             │
             ▼
   Create React Elements
             │
             ▼
    Create Virtual DOM
             │
             ▼
 Compare Old vs New Tree
             │
             ▼
  Determine Changes
             │
             ▼
      Render Phase Ends

(No DOM Updates Yet)
Mental Model

Think:

Render Phase

=

Thinking Phase

React is asking:

"What should the UI look like now?"

It is not asking:

"Let's update the browser."
Senior Engineer Mental Model

A junior developer thinks:

setState()

↓

DOM Updates

A senior React developer thinks:

setState()

↓

Render Phase

↓

Calculate New UI

↓

Virtual DOM Diff

↓

Prepare DOM Operations

↓

Commit Phase

The Render Phase is pure computation.

No browser mutations happen here.

Interview Questions
Q: What is the Render Phase?

Answer:

The Render Phase is the phase where React executes components, creates a new Virtual DOM, compares it with the previous Virtual DOM, and determines what changes are needed. It does not update the Real DOM.

Q: Does the Render Phase update the browser?

Answer:

No.

It only calculates the changes. The browser is updated later during the Commit Phase.

Q: What are the main tasks performed during the Render Phase?

Answer:

Execute components
Create new React Elements
Build the new Virtual DOM
Compare it with the previous Virtual DOM
Determine the required DOM updates
🧠 Revision Card
RENDER PHASE
setState()

↓

Execute Components

↓

Create React Elements

↓

Create Virtual DOM

↓

Compare

↓

Determine Changes

↓

(No DOM Updates)
Remember
Render Phase

=

Thinking

Calculating

Planning

--------------------

NOT

Updating Browser

# >>>>>>


📖 Topic 5.14 — Commit Phase
Before Learning Commit Phase

In the previous topic, we learned about the Render Phase.

setState()

↓

Render Phase

↓

Execute Components

↓

Create New Virtual DOM

↓

Compare

↓

Find Changes

At this point:

❌ Browser not updated

❌ Screen still unchanged

Today we'll learn what happens next.

First Question

Suppose your counter shows:

0

You click:

+

During the Render Phase, React already knows:

New Value = 1

Question:

When does the user actually see 1?

The answer is:

During the Commit Phase.

The Problem

Imagine React updated the browser while it was still comparing the Virtual DOM.

Compare...

↓

Update Browser

↓

Compare More...

↓

Update Browser

↓

Compare Again...

↓

Update Browser

This would be slow and could show an incomplete UI.

React's Solution

React separates the work into two phases.

Render Phase

↓

Commit Phase

Render Phase:

Think

Plan

Calculate

Commit Phase:

Do It
What Is the Commit Phase?
Definition

The Commit Phase is the phase where React applies all calculated changes to the Real DOM.

This is the first time React touches the browser.

What Happens During the Commit Phase?

Suppose:

Old UI

<h1>0</h1>

Render Phase already determined:

Only Text Changed

0

↓

1

Now Commit Phase starts.

React performs:

Update Real DOM

↓

Browser Paints

↓

User Sees 1
Complete Flow
Button Click

↓

setState()

↓

Render Phase

↓

Calculate New UI

↓

Compare

↓

Changes Ready

↓

Commit Phase

↓

Update Real DOM

↓

Browser Paint

↓

Screen Updated
Example

Current screen:

0

Click:

+

Render Phase:

Counter()

↓

<h1>1</h1>

↓

Virtual DOM

↓

Diff Complete

Nothing changes yet.

Now Commit Phase:

Change

0

↓

1

Browser now displays:

1
What Does React Update?

Suppose:

Old

<div>

<h1>0</h1>

<button>+</button>

</div>

New

<div>

<h1>1</h1>

<button>+</button>

</div>

Commit Phase updates only:

Text

0

↓

1

The button is untouched.

The div is untouched.

Why Is This Efficient?

Imagine a page with:

1000 Elements

Only one changed.

Render Phase already figured that out.

Commit Phase updates:

1 Element

instead of

1000 Elements
Internal Working

Suppose:

setCount(1);

React thinks:

Render Phase

↓

I know exactly what changed.

↓

Commit Phase

↓

Apply those changes.

↓

Finished.
Real-Life Analogy

Imagine a chef.

First:

Reads Recipe

↓

Prepares Ingredients

↓

Plans Cooking

This is the Render Phase.

Then:

Starts Cooking

↓

Serves Food

This is the Commit Phase.

Planning doesn't feed anyone.

Cooking does.

Diagram
              setState()
                  │
                  ▼
           Render Phase
                  │
                  ▼
      Execute Components
                  │
                  ▼
        Build Virtual DOM
                  │
                  ▼
        Compare Trees
                  │
                  ▼
      Determine Changes
                  │
                  ▼
          Commit Phase
                  │
                  ▼
        Update Real DOM
                  │
                  ▼
         Browser Paints
                  │
                  ▼
         User Sees UI
Render Phase vs Commit Phase
Render Phase	Commit Phase
Execute components	Update Real DOM
Create React Elements	Browser paints UI
Create Virtual DOM	User sees changes
Compare trees	Apply changes
No browser updates	Browser updates happen
Mental Model

Think:

Render Phase

=

Architect

↓

Creates Blueprint

--------------------

Commit Phase

=

Builder

↓

Builds House

The architect never lays bricks.

The builder never designs the house.

Both are necessary.

Senior Engineer Mental Model

A junior developer thinks:

setState()

↓

Screen Changes

A senior React developer thinks:

setState()

↓

Render Phase

↓

Calculate New UI

↓

Diff

↓

Commit Phase

↓

Update Real DOM

↓

Browser Paint

One phase thinks.

The other phase acts.

Interview Questions
Q: What is the Commit Phase?

Answer:

The Commit Phase is the phase where React applies the changes calculated during the Render Phase to the Real DOM, allowing the browser to display the updated UI.

Q: Does the Commit Phase execute components?

Answer:

No.

Components execute during the Render Phase. The Commit Phase only applies the calculated changes to the Real DOM.

Q: What happens during the Commit Phase?

Answer:

Update the Real DOM.
Let the browser paint the updated UI.
Run commit-related effects such as useEffect after the DOM has been updated.
🧠 Revision Card
COMMIT PHASE
Render Phase Finished

↓

Commit Phase Starts

↓

Update Real DOM

↓

Browser Paint

↓

User Sees Changes
Remember
Render Phase

=

Calculate

Think

Plan

--------------------

Commit Phase

=

Update DOM

Show UI

Run Effects


Imagine there is NO Commit Phase

React does this:

setState()

↓

Execute Component

↓

Immediately Update DOM

↓

Continue Calculating

↓

Update DOM Again

↓

Continue Calculating

↓

Update DOM Again

The browser would be updated many times.

Example

Suppose your page is:

<div>
    <Header />
    <Profile />
    <Posts />
</div>

You click Refresh.

Without a Commit Phase, React might do:

Step 1

Update Header

Screen:

Header ✅

Profile ❌

Posts ❌

Then:

Step 2

Update Profile

Screen:

Header ✅

Profile ✅

Posts ❌

Then:

Step 3

Update Posts

Screen:

Header ✅

Profile ✅

Posts ✅

The user would briefly see a half-updated UI.

With the Commit Phase

React first calculates everything.

Header

↓

Profile

↓

Posts

↓

Diff Complete

Nothing changes on the screen yet.

Then Commit Phase starts:

Update Header

Update Profile

Update Posts

The browser paints one consistent UI.

The user only sees:

Header ✅

Profile ✅

Posts ✅

No half-finished screen.

Another Example

Suppose you have:

<h1>Loading...</h1>
<ul>
   1000 items
</ul>

After an API call:

<h1>Products</h1>
<ul>
   1000 new items
</ul>

Without a Commit Phase, the user might see:

Products

↓

Old List

for a brief moment.

Then:

Products

↓

Half New List

Then:

Products

↓

Full New List

This inconsistency is exactly what React avoids.

Easy Analogy

Imagine you're painting a room.

Without a Commit Phase:

Paint one wall

↓

Invite guests

↓

Paint second wall

↓

Invite guests

↓

Paint third wall

People see an unfinished room.

With a Commit Phase:

Finish painting

↓

Open the door

↓

Guests see the completed room
⭐ The Biggest Reason for the Commit Phase
Render Phase

↓

Calculate Everything

↓

Commit Phase

↓

Apply Everything Together

This gives:

✅ Consistent UI
✅ Fewer DOM updates
✅ Better performance
✅ No partially updated screen
🧠 One-line Interview Answer

Without the Commit Phase, React would update the DOM while it was still calculating the UI, leading to multiple DOM updates, inconsistent screens, and poorer performance. The Commit Phase ensures that all calculated changes are applied together after the Render Phase is complete.


The truth is:

For most React apps, you don't notice the Commit Phase. It's extremely fast.

The Commit Phase exists because React separates thinking from doing.

Let's ignore React for a minute.

Imagine you're solving a math problem.

Teacher asks:

25 + 75

What do you do?

Think

↓

Answer = 100

↓

Write 100

Notice:

You don't write:

20

↓

40

↓

60

↓

80

↓

100

You think first.

Then you write the final answer.

React works exactly the same way.

Render Phase

↓

Think

↓

Commit Phase

↓

Write to Screen
Another Example

Suppose your UI is:

Count = 0

You click:

+

React thinks:

Render Phase

↓

Count should become 1.

Has the screen changed?

No.

Then React says:

Commit Phase

↓

Okay...

Now update the browser.

Now the screen becomes:

Count = 1
Your biggest confusion

I think you're imagining that React calculates one component at a time and updates the browser after each one.

Modern React doesn't work that way.

It first finishes all its calculations (Render Phase), then performs the DOM updates (Commit Phase).

The easiest way to remember
Render Phase

=

Thinking

-------------------

Commit Phase

=

Doing

Just like you:

Think

↓

Write

React:

Think

↓

Update Browser
Why separate them?

Because React wants to answer one question first:

"Exactly what needs to change?"

Only after it has the complete answer does it touch the browser.

One question for you

Suppose the screen shows:

Count = 5

You click the button.

During the Render Phase, what should the browser still show?

A. Count = 5

or

B. Count = 6

(Answer this first. Once you answer, I'll know exactly where the confusion is.)


You're asking:

"How can the UI become partially updated?"

In React, under normal circumstances, it doesn't.

That's because React has the Commit Phase.

Let's imagine React didn't have a Commit Phase.

Example

Your page is:

<App>
   <Header />
   <Profile />
   <Posts />
</App>

Current screen:

Header : Likan

Profile : Age 33

Posts : 100 posts

Now suppose all three need to change.

Without a Commit Phase (hypothetical)

React might do this:

Update Header

↓

Screen

Header : Amarnath ✅

Profile : Age 33 ❌

Posts : 100 posts ❌

A few milliseconds later:

Update Profile

↓

Screen

Header : Amarnath ✅

Profile : Age 34 ✅

Posts : 100 posts ❌

A few milliseconds later:

Update Posts

↓

Screen

Header : Amarnath ✅

Profile : Age 34 ✅

Posts : 120 posts ✅

For a tiny moment, the user would see a mixed UI.

With the Commit Phase (what React actually does)

React first thinks:

Header should change

Profile should change

Posts should change

It doesn't touch the browser yet.

Then:

Commit Phase

↓

Update Header

Update Profile

Update Posts

The browser paints the final result:

Header : Amarnath

Profile : Age 34

Posts : 120 posts

The user never sees the half-updated version.

But here's something important

Modern browsers also help here.

Even if React updates several DOM nodes during the Commit Phase, the browser typically waits until JavaScript finishes before repainting the screen.

So in practice, users usually see one final, consistent UI, not intermediate states.

🧠 The easiest mental model

Don't think:

Render Phase

↓

Commit Phase

↓

Avoid Partial UI

Instead think:

Render Phase

↓

Figure out ALL changes

↓

Commit Phase

↓

Apply ALL changes together

The main purpose of the Commit Phase is not only to avoid partial UI.

Its primary purpose is to separate:

Thinking (Render)

from

Doing (Commit)

This separation lets React optimize rendering, pause or restart rendering work when needed, and keep DOM updates organized and predictable.

This idea becomes even more important when you learn React's concurrent rendering features later.









