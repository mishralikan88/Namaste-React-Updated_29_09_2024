📖 Phase 4 — State Management Fundamentals

# >>


📖 Topic 4.1 — useState

Before learning useState, remember:

So far we've learned:

function UserCard() {
  return <h1>Hello</h1>;
}

React renders this UI.

Everything looks good.

But there is one big problem.

First Question

Suppose we build a Counter.

Initially:

Count = 0

When the user clicks:

Increment

we want:

Count = 1

Then:

Count = 2

Count = 3

Count = 4

Question:

How do we change the UI after a button click?

First Attempt

Most beginners try this:

function Counter() {

  let count = 0;

  function increment() {
    count++;
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={increment}>
        Increment
      </button>
    </>
  );
}

Looks correct.

Question:

What happens after clicking?

Most people expect:

0

↓

1

↓

2

↓

3

But React shows:

0

Forever.

Why Didn't It Update?

Because changing a normal JavaScript variable does not tell React to render again.

Only the variable changed.

The UI didn't.

count++

↓

Variable Changed

↓

React Doesn't Know

↓

No Re-render
The Problem

React renders the component once.

Counter()

↓

count = 0

↓

Render UI

After clicking:

count++

↓

Variable Updated

↓

React Not Notified

↓

Screen Doesn't Change
React's Solution

React introduced State.

State is special data that React watches.

When State changes:

React automatically renders the component again.

To create State, React provides:

useState()
What Is State?
Definition

State is data managed by React that can change over time and automatically trigger UI updates.

Think:

State

↓

Data

↓

Changes

↓

React Re-renders

↓

UI Updates
What Is useState?
Definition

useState is a React Hook that creates a state variable and a function to update it.

It gives React a way to remember data between renders.

First Example
import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}

Output initially:

0

Click:

Increment

Output:

1

↓

2

↓

3

↓

4

React updates automatically.

Breaking It Down

This line:

const [count, setCount] = useState(0);

contains three important parts.

Part 1
useState(0)

means:

Create a State variable.

Initial value = 0
Part 2
count

Current state value.

Initially:

count = 0

Later:

count = 1

count = 2

count = 3
Part 3
setCount

This is not the value.

It is a function.

Its job is:

Update State

↓

Tell React

↓

Re-render Component
Visual Flow
useState(0)

↓

count = 0

↓

User Clicks

↓

setCount(1)

↓

React Updates State

↓

Component Re-renders

↓

count = 1
Why Two Variables?
const [count, setCount] = useState(0);

Think of it like this:

count

↓

Current Value

----------------

setCount

↓

Update Function

Example:

count

↓

Read

setCount()

↓

Write
Why Can't We Do This?
count = count + 1;

React doesn't track direct assignments.

Correct:

setCount(count + 1);

Because:

setCount()

↓

React Knows

↓

Re-render
What Does useState Return?

Many beginners think:

useState(0)

returns:

0

Wrong.

It returns an array.

Like this:

[
  currentValue,
  updateFunction
]

Example:

[
  0,
  setCount
]

We use array destructuring:

const [count, setCount] = useState(0);

Which means:

count

↓

0

setCount

↓

Update Function
Variable vs State
Normal Variable
let count = 0;

count++;

Result:

Variable Changed

×

UI Doesn't Update
React State
const [count, setCount] = useState(0);

setCount(count + 1);

Result:

State Changed

↓

React Re-renders

↓

UI Updates
Why Does React Re-render?

React watches every state variable.

When:

setCount(...)

runs,

React knows:

Something Changed

↓

Call Counter() Again

↓

Create New UI

↓

Update DOM
Internal Working (Simplified)

You write:

const [count, setCount] = useState(0);

React internally stores something like:

State Storage

Index 0

↓

0

When:

setCount(1)

runs,

React changes it to:

State Storage

Index 0

↓

1

Then React executes:

Counter()

↓

New JSX

↓

Compare

↓

Update DOM

(We'll study the actual Fiber implementation in Phase 20.)

Complete Flow
Component Starts

↓

useState(0)

↓

count = 0

↓

User Clicks Button

↓

setCount(1)

↓

React Updates State

↓

Counter() Runs Again

↓

New JSX Created

↓

DOM Updated

↓

Screen Shows 1
Real World Example

Instagram Like Button

Initially:

❤️ 150

Click:

❤️ 151

Internally:

setLikes(likes + 1);

Shopping Cart

Initially:

Items = 2

Add Product:

setItems(items + 1);

Output:

Items = 3

Dark Mode

Initially:

Light Theme

Click Toggle:

setDarkMode(true);

React immediately updates the UI.

Common Beginner Mistakes

❌ Updating a normal variable:

count++;

Correct:

setCount(count + 1);

❌ Forgetting to import the Hook:

import { useState } from "react";

❌ Thinking setCount changes the UI directly.

Actually:

setCount()

↓

Updates State

↓

React Re-renders

↓

UI Changes
Mental Model

Think:

State

↓

React's Memory

↓

Stores Current Data

↓

Changes Over Time

↓

Updates UI

Or:

State

=

Memory

setState

=

Memory Updater
Senior Engineer Mental Model

Junior Developers Think:

useState

=

Store a value

Correct.

Senior Developers Think:

State

↓

Source of Truth

↓

UI = f(State)

↓

Change State

↓

React Computes New UI

The UI is always a reflection of the current state.

Interview Questions
Q: What is useState?

Answer:

useState is a React Hook that creates a state variable and an updater function for managing data that changes over time.

Q: Why can't we use normal variables instead of state?

Answer:

Normal variables don't notify React when they change. State updates trigger a re-render, allowing the UI to stay in sync.

Q: What does useState() return?

Answer:

An array containing:

The current state value.
A function to update that state.
Q: Why do we use setCount() instead of count = ...?

Answer:

Because setCount() tells React that the state changed and a re-render is needed.

🧠 Revision Card
useState
Purpose

Store Changing Data

↓

Automatically Update UI
Syntax
const [count, setCount] = useState(0);
useState Returns
[
  Current State,
  Update Function
]
Flow
useState()

↓

State Created

↓

User Action

↓

setState()

↓

React Re-renders

↓

UI Updates
Variable vs State
Variable

↓

Changes

×

No UI Update

------------------

State

↓

setState()

↓

React Re-renders

↓

UI Updates
Remember
State

=

React's Memory

setState

=

Tell React

"Update the UI"


React does NOT store state by your variable name (count). It stores it by position (index).

For example:

function Counter() {
  const [count, setCount] = useState(0);
  return <h1>{count}</h1>;
}

You call:

useState(0);

React internally keeps something conceptually like this:

Counter Component

Hooks Storage

Index 0
↓
0

After:

setCount(1);

it becomes:

Counter Component

Hooks Storage

Index 0
↓
1

Notice there is no count key.

Why?

Because count is your JavaScript variable, not React's.

When React executes your component again:

const [count, setCount] = useState(0);

React thinks:

First useState() call?

↓

Take value from Hook Index 0

↓

Return 1

So now:

count = 1;

The variable count is created again on every render and receives the value stored in Hook Index 0.

Why doesn't React store "count"?

Because you could write:

const [x, setX] = useState(0);

or

const [myCounter, updateCounter] = useState(0);

or

const [banana, setBanana] = useState(0);

All of these work exactly the same.

React never sees the variable names (count, x, banana). During execution, those names disappear—they're just local JavaScript variables.

React only knows:

1st useState() call
2nd useState() call
3rd useState() call

That's why it stores state by hook order (index).

For example:

function App() {
  const [count, setCount] = useState(0);      // Hook 0
  const [name, setName] = useState("Likan");  // Hook 1
  const [dark, setDark] = useState(false);    // Hook 2
}

React internally thinks:

Hook Storage

Index 0 → 0
Index 1 → "Likan"
Index 2 → false

This is also why Hooks must always be called in the same order. If the order changes, React would read the wrong index and your state would get mixed up.


Consider this component:

function App() {
  const [count, setCount] = useState(0);      // 1st useState
  const [name, setName] = useState("Likan");  // 2nd useState
}
First Render

React executes:

useState(0)

This is the 1st call, so React creates:

Hook 0 → 0

Then React reaches:

useState("Likan")

This is the 2nd call, so React creates:

Hook 1 → "Likan"

React's storage looks like:

Hook 0 → 0
Hook 1 → "Likan"
Second Render

Suppose you call:

setCount(1);

React executes the component from the top again.

First line:

const [count, setCount] = useState(0);

React thinks:

"This is the 1st useState call, so I'll return the value from Hook 0."

So it returns:

count = 1

Then it reaches:

const [name, setName] = useState("Likan");

React thinks:

"This is the 2nd useState call, so I'll return the value from Hook 1."

So it returns:

name = "Likan"
Mental Model

React is not searching by variable name.

It simply counts:

1st useState() call
↓
Hook 0

2nd useState() call
↓
Hook 1

3rd useState() call
↓
Hook 2

So yes, your understanding is correct:

The second useState() call always gets the value stored in the second hook (Hook 1), the third call gets Hook 2, and so on.


This is also the reason for one of React's most important rules:

Never call Hooks inside if, for, or while blocks.

If the order changes, the "2nd useState() call" might accidentally become the "1st useState() call," and React would read the wrong hook, causing your state to become mismatched.

# >>>>


📖 Topic 4.2 — State Queue

Before learning State Queue, remember:

We learned:

const [count, setCount] = useState(0);

Updating state:

setCount(count + 1);

changes the UI.

Everything looks simple.

But there is a hidden mechanism inside React.

That mechanism is called the State Update Queue.

First Question

Suppose we write:

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={handleClick}>
        Increment
      </button>
    </>
  );
}

Question:

After one click...

What should the output be?

Most beginners say:

0

↓

1

↓

2

↓

3

or simply:

3

But React actually shows:

1

Why?

The Problem

All three lines execute almost instantly.

setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

At that moment:

count = 0

for all three calls.

So React receives:

setCount(1);
setCount(1);
setCount(1);

NOT

setCount(1);
setCount(2);
setCount(3);
React's Solution

React doesn't update state immediately.

Instead, it places every update into a State Queue.

Think:

setCount()

↓

Queue

↓

React Processes Queue

↓

One Re-render
What Is State Queue?
Definition

A State Queue is an internal list where React stores pending state updates before processing them.

Think of it as a waiting line.

Real Life Example

Imagine a bank.

Customers don't enter the manager's room immediately.

Instead:

Customer

↓

Queue

↓

Manager

↓

Processed

React works the same way.

Visual Flow

Click Button

setCount()

↓

Queue

↓

React Reads Queue

↓

Calculates Final State

↓

Re-render
Internal Working

Suppose:

setCount(1);
setCount(1);
setCount(1);

React internally creates something like:

Update Queue

↓

1

↓

1

↓

1

After the event finishes:

React processes the queue.

Final value:

1

Then:

Counter()

↓

New JSX

↓

DOM Updated
Why Doesn't React Update Immediately?

Imagine:

setCount(1);
setName("Likan");
setDark(true);

If React rendered after every update:

Render #1

↓

Render #2

↓

Render #3

Very slow.

Instead React does:

Collect Updates

↓

Queue

↓

One Render

Much faster.

Another Example

Current state:

count = 5

You call:

setCount(6);

React does NOT immediately change:

count = 6

Instead:

Current State

↓

5

Update Queue

↓

6

After React processes the queue:

Current State

↓

6

Then React renders again.

What Does React Store?

Conceptually:

Hook 0

Current State

↓

5

Update Queue

↓

6

↓

7

↓

8

After processing:

Hook 0

Current State

↓

8

Queue Empty
Why Is This Important?

Because the queue allows React to:

Batch updates
Avoid unnecessary renders
Improve performance
Support Concurrent React (later phases)
Visual Timeline
User Clicks

↓

setCount()

↓

Queue

↓

Event Finishes

↓

React Processes Queue

↓

Updates State

↓

Re-render

↓

UI Updated
Relationship Between State and Queue

Think:

State

↓

Current Value

Queue

↓

Future Updates

Example:

Current State

↓

10

Queue

↓

11

↓

12

↓

13

React Processes

↓

Current State = 13
Internal Working (Simplified)

React keeps something conceptually like:

Hook 0

Current State → 0

Pending Updates

↓

Update 1

↓

Update 2

↓

Update 3

After processing:

Hook 0

Current State → Final Value

Pending Updates → Empty

In React's actual source code (which we'll study in Phase 20), each Hook has an update queue attached to it. Every setState() creates an Update object and links it into that queue. React later walks through the queue to calculate the next state.

Mental Model

Think:

setState()

↓

Submit Request

↓

Queue

↓

React Approves

↓

State Changes

↓

UI Updates
Senior Engineer Mental Model

Junior Developers Think:

setState()

↓

Changes State

Partially correct.

Senior Developers Think:

setState()

↓

Creates Update Object

↓

Adds To Queue

↓

Scheduler Decides

↓

React Processes Queue

↓

New State

↓

Re-render

This understanding becomes very important when learning Concurrent React.

Interview Questions
Q: What is the State Queue?

Answer:

The State Queue is an internal queue where React stores pending state updates before calculating the next state and re-rendering the component.

Q: Does setState() update state immediately?

Answer:

No. It schedules an update by placing it into React's update queue.

Q: Why does React use a queue?

Answer:

To batch multiple updates together, reduce unnecessary renders, and improve performance.

Q: What happens after React processes the queue?

Answer:

React calculates the final state, updates the hook's stored value, clears the queue, and re-renders the component.

🧠 Revision Card
STATE QUEUE
setState()

↓

Update Queue

↓

React Processes Queue

↓

New State

↓

Re-render
Purpose
Store Pending Updates
Benefits
✓ Better Performance
✓ Fewer Re-renders
✓ Supports Batching
✓ Foundation for Concurrent React
Mental Model
Current State

↓

Update Queue

↓

React Computes

↓

Final State

↓

UI Updates
Remember
setState()

≠

Immediate State Change

setState()

=

Queue an Update


Consider this code:

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}

Assume before clicking:

count = 0
Step 1: First setCount

React evaluates:

setCount(count + 1);

At this moment:

count = 0

So React sees:

setCount(1);

Queue:

[1]
Step 2: Second setCount

Has React re-rendered yet?

No.

So count is still 0.

Again React evaluates:

setCount(count + 1);

which becomes:

setCount(1);

Queue:

[1, 1]
Step 3: Third setCount

Still no re-render.

count is still 0.

Again:

setCount(count + 1);

becomes:

setCount(1);

Queue:

[1, 1, 1]
Step 4: React processes the queue

The queue contains:

1
1
1

React processes them one by one:

Current State = 0

↓

Set to 1

↓

Set to 1

↓

Set to 1

Final state:

1

So the screen shows:

1
Why not 3?

Because count never became 1 or 2 while handleClick() was running.

During the entire function:

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}

the value of count remains:

0

React waits until the function finishes before processing the queued updates.

This is exactly why React provides Functional Updates:

setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);

Here React doesn't queue values like [1, 1, 1].

Instead, it queues functions:

prev => prev + 1
prev => prev + 1
prev => prev + 1

When React processes them:

Current State = 0

↓

prev = 0 → 1

↓

prev = 1 → 2

↓

prev = 2 → 3

Final state:

3

This is the exact reason Functional Updates exist, and that's what we'll cover in the next topic. It's one of the most important concepts in React state management.

So only one time component is rendered right ?

Yes, exactly. In this case, the component is re-rendered only once.

Example:

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}

Assume:

count = 0
What happens?
Click Button

↓

setCount(1) → Queue

↓

setCount(1) → Queue

↓

setCount(1) → Queue

↓

handleClick() finishes

↓

React processes the queue

↓

Final State = 1

↓

Counter() runs ONE time

↓

UI shows 1

Notice:

❌ React does not render after the first setCount().
❌ React does not render after the second setCount().
❌ React does not render after the third setCount().

Instead:

3 setState() calls

↓

1 Queue

↓

1 Re-render

This optimization is called batching (which we'll study in Topic 4.4).

So you can think of it like this:

3 Updates

↓

1 Queue

↓

1 Final State

↓

1 Re-render

This is why React is fast—it avoids unnecessary renders.

# >>>

📖 Topic 4.3 — Functional Updates

Before learning Functional Updates, remember:

We learned about the State Queue.

Example:

setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

Output:

1

Not:

3

Question:

How do we make it print 3?

First Question

Current state:

count = 0

We want:

setCount(...);
setCount(...);
setCount(...);

Output:

3

How?

The Problem

Consider this code:

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}

Current value:

count = 0

React evaluates all three calls immediately.

So React actually receives:

setCount(1);
setCount(1);
setCount(1);

Queue:

1
1
1

React processes them:

Current State = 0

↓

Set to 1

↓

Set to 1

↓

Set to 1

↓

Final State = 1
React's Solution

Instead of passing the next value,

pass a function.

This is called a Functional Update.

What Is A Functional Update?
Definition

A Functional Update is a function passed to setState that receives the latest state and returns the next state.

Syntax:

setCount(previousState => previousState + 1);
First Example
function handleClick() {

  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);

}

Output:

3
What Is prev?

Many beginners think:

prev = count

Not exactly.

prev means:

The latest state available while React is processing the queue.

Internal Working

Current state:

count = 0

Queue contains:

prev => prev + 1

prev => prev + 1

prev => prev + 1

React processes the queue.

First Update

Current state:

0

React calls:

prev => prev + 1

Here:

prev = 0

Returns:

1

Current state becomes:

1
Second Update

React now calls the next function.

Now:

prev = 1

Returns:

2

Current state becomes:

2
Third Update

React calls:

prev => prev + 1

Now:

prev = 2

Returns:

3

Final state:

3

Component re-renders once.

Screen shows:

3
Visual Flow
Current State

0

↓

Queue

prev => prev + 1

↓

1

↓

Queue

prev => prev + 1

↓

2

↓

Queue

prev => prev + 1

↓

3

↓

One Re-render

↓

UI = 3
Why Does This Work?

Because React doesn't store:

1
1
1

Instead it stores:

Function

↓

Function

↓

Function

Each function receives the updated value from the previous function.

Normal Update vs Functional Update
Normal Update
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

Queue:

1

1

1

Output:

1
Functional Update
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);

Queue:

Function

↓

Function

↓

Function

Output:

3
Another Example

Current state:

count = 5
setCount(prev => prev + 10);

setCount(prev => prev * 2);

React processes:

5

↓

+10

↓

15

↓

×2

↓

30

Final output:

30

Notice:

Each function receives the latest value.

When Should We Use Functional Updates?

Use them whenever the next state depends on the previous state.

Examples:

setCount(prev => prev + 1);

setLikes(prev => prev + 1);

setScore(prev => prev + 100);
When Is Normal Update Fine?

If the new value doesn't depend on the old one.

Example:

setDarkMode(true);

setName("Likan");

setLoading(false);

No need for functional updates.

Internal React Storage

Current Hook:

Hook 0

Current State

↓

0

Queue:

Update Function 1

↓

Update Function 2

↓

Update Function 3

React processes:

0

↓

1

↓

2

↓

3

Stores:

Hook 0

Current State

↓

3

Then:

Counter()

↓

New JSX

↓

DOM Updated
Mental Model

Think:

Normal update:

"Set value to 1."

Functional update:

"Take whatever the current value is...

...then add 1."

That's why it always works correctly.

Senior Engineer Mental Model

Junior Developers Think:

prev

=

Previous Value

Correct.

Senior Developers Think:

Update Queue

↓

Each Update

Receives Latest Computed State

↓

Produces Next State

This makes updates predictable, even with batching and concurrent rendering.

Interview Questions
Q: What is a Functional Update?

Answer:

A Functional Update passes a function to setState. React calls that function with the latest state and uses its return value as the next state.

Q: Why use Functional Updates?

Answer:

Because they guarantee that each update uses the latest available state, especially when multiple updates are queued.

Q: Which is better?
setCount(count + 1);

or

setCount(prev => prev + 1);

Answer:

If the next state depends on the previous state, always use:

setCount(prev => prev + 1);
🧠 Revision Card
FUNCTIONAL UPDATES
Purpose

Use Latest State

↓

Avoid Stale Values
Syntax
setCount(prev => prev + 1);
Normal Update
setCount(count + 1);

Queue:

1

1

1

Output:

1
Functional Update
setCount(prev => prev + 1);

Queue:

Function

↓

Function

↓

Function

Output:

3
Remember
Normal Update

↓

Uses Current Variable

Functional Update

↓

Uses Latest State

Processed By React

why the hook state was zero ? 


Excellent catch. This is one of the most confusing parts of React.

The answer is:

The hook state wasn't staying 0. It was 0 only before React started processing the queue.

Let's go step by step.

Initial render:

const [count, setCount] = useState(0);

React stores:

Hook 0

Current State = 0
Queue = Empty

Now you click the button:

setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);

At this moment, React has not processed the queue yet, so the hook still looks like:

Hook 0

Current State = 0

Queue

Function 1
Function 2
Function 3

Now React starts processing the queue.

First function

Current state:

0

React calls:

prev => prev + 1

So:

prev = 0

returns 1

Now React updates its working value:

Current State = 1
Second function

React does not go back to 0.

It uses the latest computed value:

prev = 1

returns 2

Working value becomes:

Current State = 2
Third function

React calls:

prev = 2

returns 3

Working value becomes:

Current State = 3

Finally React stores:

Hook 0

Current State = 3

Queue = Empty

Then the component re-renders.

The important point

When I wrote:

Hook 0

Current State = 0

that was describing the hook before React processed the queue.

During queue processing, the state changes like this:

0
↓

1
↓

2
↓

3

It does not stay at 0.

This is why prev works—it always receives the latest computed state, not the original one.

This distinction is subtle but very important. It shows you're thinking about React's internals rather than just memorizing the API.



In the previous chapter (State Queue), I simplified it and wrote:

Hook 0

Current State = 0

Queue

1
1
1

That was a conceptual explanation to show that React first queues the updates and doesn't immediately change the current state while handleClick() is still running.

After React starts processing the queue, it becomes:

Current State = 0

↓

Apply first update

↓

Current State = 1

↓

Apply second update

↓

Current State = 1

↓

Apply third update

↓

Current State = 1

Since all queued values were 1, the final state remains 1.

In the Functional Updates chapter, the queue contains functions, not values:

Hook 0

Current State = 0

Queue

prev => prev + 1
prev => prev + 1
prev => prev + 1

When React processes the queue:

Current State = 0

↓

Function 1

↓

Current State = 1

↓

Function 2

↓

Current State = 2

↓

Function 3

↓

Current State = 3
The key difference is:

Normal Updates

Queue stores values:

1
1
1

Functional Updates

Queue stores functions:

prev => prev + 1
prev => prev + 1
prev => prev + 1

So there is no contradiction. In the previous chapter, the hook stayed at 0 until React began processing the queue. Once processing starts, the state changes. I simplified that explanation to focus on the queue, but your question points out an important detail that deserved a clearer explanation.

You're asking:

Why do we call it "Hook 0"? Why not "Hook 1"?


The answer is:

Because programming indexes usually start from 0.

Imagine your component has three useState calls:

function App() {
  const [count, setCount] = useState(0);      // First hook
  const [name, setName] = useState("Likan");  // Second hook
  const [dark, setDark] = useState(false);    // Third hook
}

Internally, React conceptually numbers them like this:

Hook 0 → count
Hook 1 → name
Hook 2 → dark

Notice:

First useState() → Hook 0
Second useState() → Hook 1
Third useState() → Hook 2

This is exactly like a JavaScript array:

const arr = ["count", "name", "dark"];

Here:

arr[0] → "count"
arr[1] → "name"
arr[2] → "dark"

So I wrote Hook 0 because it's the first hook, and programming convention is to start counting from 0.

One important note: In React's actual implementation, it doesn't literally store hooks in an array with indexes. It uses a linked list of Hook objects attached to the Fiber node. I use Hook 0, Hook 1, Hook 2 as a learning model because it's much easier to understand. Later, in Phase 20 (React Internals), we'll replace this simplified "index" model with the real implementation.

# >>>

📖 Topic 4.4 — State Batching

Before learning State Batching, remember:

We learned:

setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);

React processed all three updates.

Question:

How many times did React re-render the component?

Answer:

Only ONE time

Why?

Because React uses State Batching.

First Question

Suppose:

function handleClick() {

  setCount(prev => prev + 1);

  setName("Likan");

  setDark(true);

}

Question:

How many renders happen?

Option A

Render 1

↓

Render 2

↓

Render 3

Option B

Collect All Updates

↓

One Render

Correct answer:

One Render
The Problem

Imagine React rendered after every update.

setCount(1);

↓

Render

Then:

setName("Likan");

↓

Render

Then:

setDark(true);

↓

Render

Total:

3 Renders

Very slow.

React's Solution

React collects all updates first.

Then renders only once.

This is called:

State Batching
What Is State Batching?
Definition

State Batching is React's process of grouping multiple state updates into a single re-render.

Think:

Many Updates

↓

One Batch

↓

One Render
First Example
function handleClick() {

  setCount(prev => prev + 1);

  setName("Likan");

  setDark(true);

}

React does:

Queue

Count Update

↓

Name Update

↓

Dark Update

↓

Process Together

↓

One Re-render
Internal Working

Current state:

Hook 0 → 0

Hook 1 → ""

Hook 2 → false

After clicking:

setCount(prev => prev + 1);

setName("Likan");

setDark(true);

React builds:

Hook 0 Queue

↓

Update Function

-----------------

Hook 1 Queue

↓

"Likan"

-----------------

Hook 2 Queue

↓

true

React processes all queues.

Final state:

Hook 0 → 1

Hook 1 → "Likan"

Hook 2 → true

Then:

App()

↓

One Re-render

↓

DOM Updated
Visual Flow
User Clicks

↓

setCount()

↓

setName()

↓

setDark()

↓

Three Queues Updated

↓

React Processes All

↓

One Render

↓

Updated Screen
Why Is Batching Important?

Without batching:

Update

↓

Render

↓

Update

↓

Render

↓

Update

↓

Render

Too much work.

With batching:

Update

Update

Update

↓

One Render

Fast.

Real World Example

Imagine ordering food.

Without batching:

Order Pizza

↓

Delivery

Order Coke

↓

Delivery

Order Cake

↓

Delivery

Three deliveries.

With batching:

Pizza

Coke

Cake

↓

One Delivery

React works the same way.

Does Every setState Cause a Render?

No.

Example:

function handleClick() {

  setCount(prev => prev + 1);

  setCount(prev => prev + 1);

  setCount(prev => prev + 1);

}

React does:

Queue

↓

Process Queue

↓

One Final State

↓

One Render

Not:

Render

Render

Render
React 18 Improvement

Before React 18:

Batching mainly happened inside React event handlers.

React 18 introduced:

Automatic Batching

Now React batches updates in many more situations, including:

Event handlers
Promises
setTimeout
Async callbacks

This greatly improves performance.

(We'll study Automatic Batching in detail in the React 18 section.)

Internal Working (Simplified)

Suppose:

setCount(prev => prev + 1);

setName("Likan");

setDark(true);

React internally has:

Hook 0

Current → 0

Queue

↓

+1

------------------

Hook 1

Current → ""

Queue

↓

"Likan"

------------------

Hook 2

Current → false

Queue

↓

true

React processes all queues first.

Only after every queue is processed:

Component Executes Again

↓

New JSX

↓

DOM Updated Once
Mental Model

Think:

Teacher

↓

Collects All Homework

↓

Checks Everything

↓

Publishes One Result

Not:

Homework 1

↓

Result

Homework 2

↓

Result

Homework 3

↓

Result
Senior Engineer Mental Model

Junior Developers Think:

setState()

↓

Render

Senior Developers Think:

setState()

↓

Queue Update

↓

Batch Updates

↓

Scheduler

↓

One Render

↓

Commit

Batching is one of the main reasons React applications perform well.

Interview Questions
Q: What is State Batching?

Answer:

State Batching is React's optimization that groups multiple state updates into a single re-render.

Q: Why does React batch updates?

Answer:

To reduce unnecessary renders and improve application performance.

Q: Do three setState() calls always produce three renders?

Answer:

No. React batches them and usually performs only one re-render.

Q: What did React 18 improve?

Answer:

React 18 introduced Automatic Batching, allowing updates in promises, timeouts, and async callbacks to be batched as well.

🧠 Revision Card
STATE BATCHING
Multiple Updates

↓

Grouped Together

↓

One Re-render
Example
setCount(...);

setName(...);

setDark(...);

↓

One Render
Without Batching
Update

↓

Render

↓

Update

↓

Render

↓

Update

↓

Render
With Batching
Update

Update

Update

↓

One Render
Benefits
✓ Better Performance
✓ Fewer Renders
✓ Faster UI
✓ Less DOM Work
Remember
setState()

↓

Queue Update

↓

Batch

↓

One Re-render

Each hook has its own separate update queue. There is not one global queue for all hooks.

For example:

function App() {
  const [count, setCount] = useState(0);      // Hook 0
  const [name, setName] = useState("Likan");  // Hook 1
  const [dark, setDark] = useState(false);    // Hook 2
}

Internally (simplified), React has:

Hook 0
Current State → 0

Queue
↓

Update 1
Update 2

---------------------

Hook 1
Current State → "Likan"

Queue
↓

Update 1

---------------------

Hook 2
Current State → false

Queue
↓

Update 1
Update 2
Update 3

Now suppose you execute:

setCount(prev => prev + 1);
setCount(prev => prev + 1);

setName("John");

setDark(true);
setDark(false);

React internally builds:

Hook 0 Queue
↓

+1
↓

+1

------------------

Hook 1 Queue
↓

"John"

------------------

Hook 2 Queue
↓

true
↓

false

React then processes each hook's queue separately:

Process Hook 0 queue → final count
Process Hook 1 queue → final name
Process Hook 2 queue → final dark

After all hook queues are processed:

↓

One Re-render
Senior React Internals

In the real React source code, every Hook object has its own update queue.

Conceptually:

Hook Object

{
  memoizedState: 0,
  queue: { ... },   ← This hook's own queue
  next: Hook
}

So the mental model is:

Hook 0
↓
Own Queue

Hook 1
↓
Own Queue

Hook 2
↓
Own Queue

↓

React processes all queues

↓

One Re-render

This is much closer to how React actually works internally. We'll see the real queue, memoizedState, and linked-list implementation when we reach Phase 20 – React Internals.


# >>>


📖 Topic 4.5 — Lazy Initialization

Before learning Lazy Initialization, remember:

We already know:

const [count, setCount] = useState(0);

Here:

0

is the initial state.

Everything works perfectly.

But what if calculating the initial state is expensive?

First Question

Suppose you write:

const [users] = useState(fetchUsers());

Question:

How many times is:

fetchUsers()

called?

Most beginners answer:

Only once

Wrong.

It is called every time the component renders.

The Problem

Example:

function Counter() {

  const [users] = useState(fetchUsers());

  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );

}

Click button:

0

↓

1

↓

2

↓

3

Every click causes:

Counter()

to execute again.

So React executes:

fetchUsers()

again.

Even though React ignores its result after the first render.

Why Is This Wasteful?

Imagine:

function fetchUsers() {

  console.log("Fetching...");

  return hugeData;
}

Every render:

Counter()

↓

fetchUsers()

↓

Ignored

↓

Render UI

Expensive work.

Wasted CPU time.

React's Solution

Instead of passing:

fetchUsers()

pass a function.

() => fetchUsers()

This is called Lazy Initialization.

What Is Lazy Initialization?
Definition

Lazy Initialization delays the calculation of the initial state until the component is rendered for the first time.

Think:

Need Initial State?

↓

Yes

↓

Run Function Once

↓

Store Result

↓

Never Run Again
First Example

Instead of:

const [users] = useState(fetchUsers());

Write:

const [users] = useState(() => fetchUsers());

Now:

Initial Render

↓

fetchUsers()

↓

Store Result

↓

Done

Next render:

Counter()

↓

React Uses Stored State

↓

fetchUsers()

NOT called
What's The Difference?
Normal Initialization
useState(fetchUsers());

Every render:

Counter()

↓

fetchUsers()

↓

React Ignores Result

↓

Render
Lazy Initialization
useState(() => fetchUsers());

First render:

Counter()

↓

Call Function

↓

Store State

Second render:

Counter()

↓

Skip Function

↓

Use Stored State
Internal Working

First render:

const [users] =
  useState(() => fetchUsers());

React sees:

Hook 0

Initial State?

↓

Function Found

↓

Execute Function

↓

Result Stored

Suppose:

fetchUsers()

returns:

["A", "B", "C"]

React stores:

Hook 0

Current State

↓

["A","B","C"]
Second Render

Component runs again.

React sees:

useState(() => fetchUsers());

Now React thinks:

Hook Already Exists

↓

Ignore Initializer

↓

Return Stored State

Notice:

fetchUsers()

NOT executed
Visual Flow
Normal Initialization
Render 1

↓

fetchUsers()

↓

Render 2

↓

fetchUsers()

↓

Render 3

↓

fetchUsers()
Lazy Initialization
Render 1

↓

fetchUsers()

↓

Store State

↓

Render 2

↓

Use Stored State

↓

Render 3

↓

Use Stored State
Real World Example

Suppose:

function loadSettings() {

  return JSON.parse(
    localStorage.getItem("settings")
  );

}

Wrong:

const [settings] =
  useState(loadSettings());

Every render:

Read localStorage

↓

Ignored

Correct:

const [settings] =
  useState(() => loadSettings());

Now:

Read localStorage

↓

Only Once
When Should We Use Lazy Initialization?

Use it when creating the initial state is expensive.

Examples:

Reading from Local Storage
Parsing large JSON
Heavy calculations
Large array creation
Expensive API-independent computations
When Is It Not Needed?

Simple values don't need it.

Example:

const [count] = useState(0);

const [dark] = useState(false);

const [name] = useState("Likan");

No benefit.

Mental Model

Think:

Normal:

Cook Food

Every Day

Even If Nobody Eats

Lazy Initialization:

Cook Food

Only When Needed

Store It

Reuse It
Senior Engineer Mental Model

Junior Developers Think:

Lazy Initialization

=

Performance

Correct.

Senior Developers Think:

Avoid Expensive Initial Computation

↓

Run Once

↓

Reuse Stored State

↓

Reduce CPU Work
Interview Questions
Q: What is Lazy Initialization?

Answer:

Lazy Initialization allows React to compute the initial state only during the first render by passing a function to useState.

Q: What's the difference between these?
useState(fetchUsers());

and

useState(() => fetchUsers());

Answer:

useState(fetchUsers()) executes fetchUsers() on every render.
useState(() => fetchUsers()) executes it only on the initial render.
Q: When should Lazy Initialization be used?

Answer:

When calculating the initial state is expensive, such as reading from Local Storage or performing heavy computations.

🧠 Revision Card
LAZY INITIALIZATION
Wrong
useState(fetchUsers());

↓

Runs Every Render
Correct
useState(() => fetchUsers());

↓

Runs Only Once
Use For
✓ Local Storage
✓ Large Calculations
✓ JSON Parsing
✓ Large Arrays
✓ Expensive Initial State
Remember
Normal Initialization

↓

Runs Every Render

-------------------

Lazy Initialization

↓

Runs Once

↓

Stores Result

↓

Reuses State

Question 1

"Return stored state means return users... on every re-render?"

Yes, exactly.

Example:

const [users] = useState(() => fetchUsers());
First Render

React executes:

useState(() => fetchUsers())

↓

fetchUsers()

↓

["A", "B", "C"]

↓

Store inside Hook 0

Storage:

Hook 0

↓

["A", "B", "C"]

Now React returns:

users = ["A", "B", "C"]
Second Render

Component runs again.

React sees:

useState(() => fetchUsers())

Now React thinks:

"I already have a value stored for Hook 0."

So it doesn't call fetchUsers() again.

Instead:

Hook 0

↓

["A", "B", "C"]

↓

Return this value

So yes, users gets the stored value on every re-render.

Question 2

"Does fetchUsers() only run once?"

Yes.

With Lazy Initialization:

const [users] = useState(() => fetchUsers());

fetchUsers() runs only during the initial render.

Every later render simply returns the stored state.

Question 3

"Is it a blocking operation until the data is available? Is JSX blocked?"

It depends on what fetchUsers() does.

Case 1 — Normal Function (most common for Lazy Initialization)
function fetchUsers() {
  return ["A", "B", "C"];
}

React executes:

Render starts

↓

fetchUsers()

↓

Returns immediately

↓

Continue rendering JSX

Yes, render waits for the function to finish, because JavaScript runs synchronously.

Case 2 — Slow Calculation
function fetchUsers() {
  // Takes 2 seconds
  return hugeArray;
}

Now:

Render starts

↓

fetchUsers()

↓

2 seconds

↓

Returns

↓

Render JSX

Yes.

The render is blocked until the function finishes.

That's why Lazy Initialization should only be used for expensive synchronous calculations, not for fetching data from a server.

Case 3 — API Call
function fetchUsers() {
  return fetch("/users");
}

❌ This is not how useState should be used.

API calls belong in:

useEffect()

We'll study that in Phase 6.

Question 4

"React ignores result means what?"

Suppose you write:

const [users] = useState(fetchUsers());
First Render

React does:

fetchUsers()

↓

["A", "B"]

↓

Store in Hook 0

Everything is fine.

Second Render

The component runs again.

JavaScript executes:

fetchUsers()

again.

Suppose it returns:

["X", "Y"]

But React already has:

Hook 0

↓

["A", "B"]

React says:

"I'm not replacing my state with this new value."

Instead it returns:

["A", "B"]

So:

fetchUsers()

↓

Returns ["X","Y"]

↓

React throws away this value

↓

Uses stored state ["A","B"]

That's what I meant by "React ignores the result."

The function still ran (wasting CPU time), but React doesn't use its return value after the first render.

Mental Model
Without Lazy Initialization
Render 1

↓

fetchUsers()

↓

Store Result

----------------

Render 2

↓

fetchUsers()

↓

❌ Ignore Result

↓

Return Stored State

----------------

Render 3

↓

fetchUsers()

↓

❌ Ignore Result

↓

Return Stored State
With Lazy Initialization
Render 1

↓

fetchUsers()

↓

Store Result

----------------

Render 2

↓

Return Stored State

----------------

Render 3

↓

Return Stored State

Notice how the expensive function isn't called again.

These are exactly the kinds of questions that lead to a deep understanding of React's internals. When we reach useEffect, you'll also understand why data fetching belongs there instead of inside useState.



1. With Lazy Initialization, are CPU resources saved?

Yes.

That's the main purpose of Lazy Initialization.

Example:

const [users] = useState(() => fetchUsers());

Assume fetchUsers() takes 500 ms of CPU work.

Without Lazy Initialization
useState(fetchUsers());

Render 1

fetchUsers()  → 500 ms

Render 2

fetchUsers()  → 500 ms (ignored)

Render 3

fetchUsers()  → 500 ms (ignored)

Total CPU time:

1500 ms
With Lazy Initialization
useState(() => fetchUsers());

Render 1

fetchUsers() → 500 ms

Render 2

Uses stored state

Render 3

Uses stored state

Total CPU time:

500 ms

So yes, it saves CPU cycles, execution time, and battery.

2. Is Lazy Initialization synchronous or asynchronous?

It is synchronous.

When React reaches:

useState(() => fetchUsers());

it immediately executes:

fetchUsers();

React waits for it to finish.

Flow:

Component starts

↓

fetchUsers()

↓

Returns value

↓

React stores state

↓

Continue rendering JSX

Nothing runs in the background.

Can we use async?

No.

This is wrong:

const [users] = useState(async () => {
  const data = await fetch(...);
  return data;
});

Why?

Because useState expects the initializer to return the initial state immediately.

An async function returns a Promise, not the actual data.

That's why API calls should not be done inside useState.

Instead, use:

useEffect(() => {
  // Fetch API here
}, []);

We'll cover useEffect in Phase 6.


Lazy Initialization is synchronous, React must wait for the initializer function to finish before it can complete rendering.

For example:

const [users] = useState(() => loadHugeData());

If loadHugeData() takes 2 seconds:

Component starts

↓

loadHugeData()

⏳ Wait 2 seconds

↓

State is ready

↓

Render JSX

So yes, the initial render is blocked until loadHugeData() returns.

Does that mean Lazy Initialization is bad?

No.

Compare these two cases:

Without Lazy Initialization
useState(loadHugeData());

Every render:

Wait 2 seconds

↓

Render JSX

If the component renders 10 times:

2s × 10 = 20 seconds of CPU work
With Lazy Initialization
useState(() => loadHugeData());

Only the first render waits:

First render

↓

Wait 2 seconds

↓

Render JSX

----------------

Later renders

↓

Immediately use stored state

↓

Render JSX

So you're trading one initial wait for much faster future renders.

Senior Engineer Perspective

If the work is very expensive (for example, 5–10 seconds), you usually shouldn't do it in useState at all because it blocks the UI.

Instead, React apps often:

Render the UI immediately.
Show a loading indicator.
Fetch or compute the data asynchronously (typically in useEffect or via a data-fetching library).
Update the state when the work completes.

So your observation is correct:

Lazy Initialization is synchronous and blocks the initial render, but it avoids repeating that expensive work on every subsequent render.


Question 1: Without Lazy Initialization, how are CPU resources wasted?

Suppose:

function loadUsers() {
  console.log("Loading...");
  // Takes 1 second of CPU work
  return hugeArray;
}

And you write:

const [users] = useState(loadUsers());
First Render

JavaScript executes:

loadUsers()

↓

Huge array created

↓

React stores it in Hook 0

Everything is fine.

Second Render

The component runs again because of:

setCount(count + 1);

JavaScript executes the entire component again:

function App() {

  loadUsers();   ← Runs again

  useState(...);

}

So:

loadUsers()

↓

Creates huge array

↓

Consumes CPU

↓

Returns value

But React already has the state stored.

So React says:

❌ I don't need this new value.

↓

I'll use the stored state.

That means all the CPU work done by loadUsers() was wasted because React threw the result away.

Question 2: Does it return different data on every render?

Yes, it can.

Example:

function randomUser() {
  return Math.random();
}

Without Lazy Initialization:

const [user] = useState(randomUser());
First Render
randomUser()

↓

0.52

↓

Stored in state
Second Render

JavaScript executes again:

randomUser()

↓

0.91

But React ignores it.

The component still receives:

user = 0.52

So:

randomUser() did return a different value (0.91).
React ignored it.
The state remains 0.52.
Why does this happen?

Because JavaScript executes the entire component function on every render.

function App() {

  const [user] = useState(randomUser());

  return ...;

}

Every render:

App()

↓

randomUser() executes

↓

useState(...)

React cannot stop JavaScript from calling randomUser(), because JavaScript evaluates function arguments before useState is called.

That's exactly why Lazy Initialization exists.

With Lazy Initialization:

const [user] = useState(() => randomUser());

React controls when to call randomUser().

✅ First render → React calls it.
✅ Later renders → React skips calling it and returns the stored state.
One sentence to remember

Without Lazy Initialization, JavaScript evaluates the initializer on every render, wasting CPU time, even though React ignores the returned value after the first render.


# >>>


📖 Topic 4.6 — Parent → Child Communication

Before learning Parent → Child Communication, remember:

So far we've learned how to manage state inside a component.

Example:

function App() {
  const [count, setCount] = useState(0);
}

But real React applications don't have just one component.

They have many components.

Question:

How does one component send data to another?

First Question

Suppose we have:

App

↓

Profile

The user's name is stored in App.

Question:

How can Profile display that name?

The Problem

Consider:

function App() {
  const name = "Likan";

  return <Profile />;
}

function Profile() {
  return <h1>{name}</h1>;
}

Will this work?

❌ No.

Error:

name is not defined

Why?

Because every component has its own scope.

Component Scope

Think:

App

↓

name = "Likan"

Profile:

Profile

↓

Cannot See

App's Variables

Each component is an independent JavaScript function.

Variables inside one function cannot be accessed directly by another function.

React's Solution

React provides Props.

Props allow a parent component to pass data to its child.

Think:

Parent

↓

Props

↓

Child
What Are Props?
Definition

Props (short for Properties) are read-only data passed from a parent component to a child component.

Think:

Parent Owns Data

↓

Passes Props

↓

Child Reads Data
First Example
function App() {

  const name = "Likan";

  return <Profile name={name} />;

}

function Profile(props) {

  return <h1>{props.name}</h1>;

}

Output:

Likan
Breaking It Down

Parent:

<Profile name={name} />

means:

Create Profile Component

↓

Pass

name = "Likan"

Child:

function Profile(props)

React automatically creates:

props = {
  name: "Likan"
}

Then:

props.name

returns:

"Likan"
Internal Working

You write:

<Profile name="Likan" />

React internally does something similar to:

Profile({

  name: "Likan"

});

Notice:

React simply calls the child function and passes an object.

Why Is It Called Props?

Because React passes an object containing properties.

Example:

<Profile

  name="Likan"

  age={33}

  city="Sambalpur"

/>

React creates:

props = {

  name: "Likan",

  age: 33,

  city: "Sambalpur"

}
Multiple Props

Parent:

<Profile

  name="Likan"

  age={33}

/>

Child:

function Profile(props) {

  return (

    <>

      <h1>{props.name}</h1>

      <h2>{props.age}</h2>

    </>

  );

}

Output:

Likan

33
Props Are Read-Only

Suppose:

function Profile(props) {

  props.name = "John";

}

❌ Never do this.

Why?

Because the parent owns the data.

Only the parent should change it.

Think:

Parent

↓

Owns Data

↓

Child

↓

Reads Only
Visual Flow
App

↓

name = "Likan"

↓

Pass Props

↓

Profile

↓

Reads props.name

↓

Displays Likan
Real World Example

Imagine a shopping app.

Parent:

Product Page

Child:

Product Card

Parent passes:

Product Name

Price

Rating

Image

Child displays them.

Another Example

Parent:

<User

  name="Likan"

  city="Sambalpur"

  age={33}

/>

Child receives:

props = {

  name: "Likan",

  city: "Sambalpur",

  age: 33

}
Destructuring Props

Instead of:

function Profile(props) {

  return <h1>{props.name}</h1>;

}

Most React developers write:

function Profile({ name }) {

  return <h1>{name}</h1>;

}

React still passes:

{

  name: "Likan"

}

JavaScript destructuring extracts:

name

directly.

Internal Working

Parent:

<Profile name="Likan" />

React:

Profile({

  name: "Likan"

});

Destructuring:

function Profile({ name })

is equivalent to:

const name = props.name;
Data Flow

React follows:

Parent

↓

Child

Never:

Child

↓

Parent

We'll learn Child → Parent in the next topic.

Mental Model

Think of a company.

CEO

↓

Instructions

↓

Employee

The employee reads the instructions.

The employee doesn't rewrite them.

Senior Engineer Mental Model

Junior Developers Think:

Props

↓

Pass Data

Correct.

Senior Developers Think:

Parent Owns State

↓

Passes Immutable Props

↓

Child Renders UI

↓

One-Way Data Flow
Interview Questions
Q: What are props?

Answer:

Props are read-only data passed from a parent component to a child component.

Q: Can a child modify props?

Answer:

No. Props are immutable. Only the parent should update the data.

Q: Why do we use props?

Answer:

To share data between components while keeping a clear one-way data flow.

Q: What is destructuring in props?

Answer:

It is a JavaScript feature that extracts values directly from the props object.

Example:

function User({ name }) {
  return <h1>{name}</h1>;
}
🧠 Revision Card
Parent → Child Communication
Parent

↓

Props

↓

Child
Syntax

Parent:

<Profile name="Likan" />

Child:

function Profile(props) {
  return <h1>{props.name}</h1>;
}

or

function Profile({ name }) {
  return <h1>{name}</h1>;
}


Rules
✅ Parent passes props
✅ Child reads props
✅ Props are read-only
✅ One-way data flow


Remember
Parent Owns Data

↓

Props

↓

Child Uses Data

↓

Child Cannot Modify Data

# >>>>>


📖 Topic 4.7 — Child → Parent Communication

Before learning Child → Parent Communication, remember:

We learned:

Parent

↓

Props

↓

Child

The parent can send data to the child.

Question:

Can the child send data back to the parent?

First Question

Suppose we have:

App

↓

Counter

The App stores:

const [count, setCount] = useState(0);

The button is inside Counter.

Question:

How can clicking the button increase the parent's count?

First Attempt

Many beginners try:

function Counter() {

  count++;

}

Will it work?

❌ No.

Why?

Because the child doesn't own the parent's state.

Another Attempt
function Counter(props) {

  props.count++;

}

Will this work?

❌ No.

Props are read-only.

Children must never modify props.

The Problem

React follows:

Parent

↓

Child

Data only flows downward.

So how can a child communicate upward?

React's Solution

Instead of sending data,

the parent sends a function.

The child simply calls that function.

Think:

Parent

↓

Function (Callback)

↓

Child

↓

Calls Function

↓

Parent Updates State
What Is A Callback?
Definition

A callback is a function passed from a parent component to a child component so the child can notify the parent when something happens.

First Example

Parent:

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1);
  }

  return (
    <Counter onIncrement={increment} />
  );

}

Child:

function Counter({ onIncrement }) {

  return (
    <button onClick={onIncrement}>
      Increment
    </button>
  );

}
Output

Initial:

Count = 0

Click button:

Count = 1

Click again:

Count = 2
What Actually Happens?

Parent:

<Counter onIncrement={increment} />

React creates:

props = {

  onIncrement: increment

}

Child receives:

function Counter({ onIncrement })

When user clicks:

onIncrement();

React executes:

increment();

inside the parent.

Then:

setCount(prev => prev + 1);

updates the parent's state.

Visual Flow
User Clicks

↓

Child Button

↓

onIncrement()

↓

Parent Function

↓

setCount()

↓

Parent Re-renders

↓

Child Receives New Props
Why Doesn't the Child Update the State?

Because:

Parent

Owns State

The child only says:

"Hey Parent...

Please update your state."

The parent decides whether to update it.

Passing Data Back

Suppose the child has an input.

Child:

function Search({ onSearch }) {

  function handleChange(event) {
    onSearch(event.target.value);
  }

  return (
    <input onChange={handleChange} />
  );

}

Parent:

function App() {

  function search(value) {
    console.log(value);
  }

  return (
    <Search onSearch={search} />
  );

}

User types:

React

Flow:

Child

↓

onSearch("React")

↓

Parent

↓

search("React")
Internal Working

Parent:

<Counter onIncrement={increment} />

React internally:

Counter({

  onIncrement: increment

});

Child:

onIncrement();

Actually executes:

increment();

because both point to the same function.

Data Flow

Notice something important.

State still flows:

Parent

↓

Child

Only the notification goes upward.

Child

↓

Calls Callback

↓

Parent Updates State

↓

Parent Sends New Props

↓

Child Receives Updated Data

The child never directly changes the parent's state.

Real World Example

Shopping Cart

Parent:

Cart

↓

Owns Total Items

Child:

Add To Cart Button

User clicks:

Button

↓

onAdd()

↓

Parent Updates Cart

↓

New Total Sent To Child
Another Example

Parent:

<UserForm

  onSave={saveUser}

/>

Child:

onSave({

  name: "Likan",

  age: 33

});

Parent receives:

saveUser({

  name: "Likan",

  age: 33

});
Mental Model

Think of a restaurant.

Customer

↓

Calls Waiter

↓

Waiter Tells Chef

↓

Chef Cooks

↓

Food Returns

The customer doesn't enter the kitchen.

Similarly:

Child

↓

Requests Parent

↓

Parent Changes State

↓

New Props Return
Senior Engineer Mental Model

Junior Developers Think:

Child

↓

Updates Parent

Not exactly.

Senior Developers Think:

Child

↓

Invokes Callback

↓

Parent Decides

↓

Updates State

↓

Re-renders

↓

Passes New Props

This preserves React's one-way data flow.

Interview Questions
Q: Can a child directly modify a parent's state?

Answer:

No. The child must call a callback function provided by the parent.

Q: Why do we pass functions as props?

Answer:

So the child can notify the parent about events while the parent remains responsible for updating its own state.

Q: Is data flowing from child to parent?

Answer:

Not directly. The child invokes a callback, and the parent updates its state. The updated state then flows back down as props.

🧠 Revision Card
Child → Parent Communication
Parent

↓

Callback Function

↓

Child

↓

Calls Callback

↓

Parent Updates State

↓

New Props

↓

Child
Parent
<Counter onIncrement={increment} />
Child
<button onClick={onIncrement}>
  Increment
</button>
Rules
✅ Parent owns state.
✅ Child never changes parent's state directly.
✅ Child calls a callback.
✅ Parent decides whether to update.
Remember
Child

↓

Request

↓

Parent

↓

State Update

↓

Props

↓

Child
🔥 Important Note

Notice that we still have one-way data flow:

State

Parent

↓

Child

Events

Child

↓

Parent

This pattern is the foundation for the next topic:


Suppose:

App
 ├── count = 0
 └── <Counter onIncrement={increment} count={count} />

When the user clicks the button:

User Clicks Button

↓

Child

↓

onIncrement()

↓

Parent's increment() executes

↓

setCount(prev => prev + 1)

↓

React adds update to Hook 0 queue

↓

React processes queue

↓

Hook 0 state changes

0 → 1

↓

App() re-renders

↓

New props created

count = 1

↓

Counter() re-renders

↓

Child receives

props.count = 1

↓

Child displays 1
Important Point

The child does not directly receive the updated state from setCount().

Instead, this happens:

Child

↓

Notification

↓

Parent Updates State

↓

Parent Re-renders

↓

Parent passes NEW props

↓

Child Re-renders

↓

Child receives updated state as props

So the child says:

"Parent, please update your state."

The parent updates its state.

Then React automatically re-renders both components.

Finally, the child receives the new state through props.

One-line interview answer

A child never updates a parent's state directly. It sends a notification by invoking a callback. The parent updates its state, re-renders, and passes the updated state back to the child as new props.


# >>>


📖 Topic 4.8 — Sibling Communication

Before learning Sibling Communication, remember:

We learned:

Parent

↓

Child

using Props.

We also learned:

Child

↓

Parent

using Callback Functions.

Now the question is...

First Question

Suppose we have:

          App
         /   \
   SearchBox  ProductList

Question:

How can SearchBox send the search text to ProductList?

Can they communicate directly?

First Attempt

Many beginners think:

SearchBox

↓

ProductList

❌ Wrong.

Sibling components cannot communicate directly.

Why?

Because:

SearchBox

and

ProductList

are two completely different functions.

They don't know each other.

Think:

SearchBox

❌ Cannot access

ProductList variables

Likewise,

ProductList

❌ Cannot access

SearchBox variables
The Problem

Imagine:

<SearchBox />

<ProductList />

User types:

React

Question:

How does ProductList know?

It doesn't.

React's Solution

Use the Parent as the middleman.

Think:

SearchBox

↓

Parent

↓

ProductList
Communication Flow
SearchBox

↓

Callback

↓

Parent Updates State

↓

Parent Passes Props

↓

ProductList

Notice:

There is NO direct communication.

First Example

Parent:

function App() {

  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBox onSearch={setSearch} />

      <ProductList search={search} />
    </>
  );

}

Child 1

function SearchBox({ onSearch }) {

  return (

    <input

      onChange={(e) =>
        onSearch(e.target.value)
      }

    />

  );

}

Child 2

function ProductList({ search }) {

  return <h1>{search}</h1>;

}
Internal Working

User types:

React

Flow:

SearchBox

↓

onSearch("React")

↓

Parent

↓

setSearch("React")

↓

Hook 0 Updated

↓

Parent Re-renders

↓

<SearchBox />

↓

<ProductList search="React" />

↓

ProductList Re-renders

↓

Displays

React
Visual Flow
User Types

↓

SearchBox

↓

Callback

↓

Parent State Updated

↓

Parent Re-render

↓

New Props

↓

ProductList

↓

Updated UI
Why Does This Work?

Because the Parent owns the shared state.

Think:

Parent

↓

search = "React"

Both children use that same state.

Real World Example

Shopping App

          Cart
         /   \
 Add Button  Cart Badge

Click:

Add Button

↓

Parent Updates

↓

Items = 5

↓

Cart Badge

↓

Shows 5

Add Button never talks directly to Cart Badge.

Another Example
          App
         /   \
 LoginForm Profile

LoginForm

↓

User logs in

↓

Parent updates

↓

Current User

↓

Profile receives new props

↓

Displays username


---

# Mental Model

Think of two employees.

```text
Employee A

↓

Manager

↓

Employee B

Employees don't change each other's work.

The manager coordinates everything.

Senior Engineer Mental Model

Junior Developers Think:

Sibling

↓

Sibling

Wrong.

Senior Developers Think:

Sibling

↓

Parent State

↓

Sibling

The Parent is the single source of truth.

Interview Questions
Q: Can sibling components communicate directly?

Answer:

No. Siblings communicate through their common parent.

Q: How does sibling communication work?

Answer:

One sibling calls a callback provided by the parent. The parent updates its state and passes the updated value to the other sibling as props.

Q: Who owns the shared state?

Answer:

The common parent.

🧠 Revision Card
Sibling Communication
Sibling A

↓

Callback

↓

Parent

↓

State Updated

↓

Props

↓

Sibling B
Rules
✅ No direct sibling communication.
✅ Parent owns shared state.
✅ One sibling notifies parent.
✅ Parent passes updated props to the other sibling.
Remember
Sibling

↓

Parent

↓

Sibling


Let's slow down and look at every render.

Suppose we have:

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBox onSearch={setSearch} />
      <ProductList search={search} />
    </>
  );
}
Initial Render

React starts with:

App()

React executes:

Hook 0

↓

search = ""

Then React creates JSX:

<SearchBox onSearch={setSearch} />

<ProductList search="" />

Now React calls both child components.

App()

↓

SearchBox()

↓

ProductList()

Finally:

Virtual DOM

↓

Real DOM

↓

Screen
User Types

Suppose the user types:

React

Inside SearchBox:

onSearch("React");

This actually calls:

setSearch("React");

inside App.

What happens now?

React updates Hook 0.

Hook 0

Before

↓

""

After

↓

"React"

Now React says:

App state changed

↓

App must render again
Second Render

React executes:

App()

again.

Notice:

It does NOT execute only ProductList.

It executes the entire App component.

App()

↓

Hook 0

↓

search = "React"

New JSX:

<SearchBox onSearch={setSearch} />

<ProductList search="React" />

Now React again calls:

SearchBox()

↓

ProductList()

Both functions execute again.

Then?

React compares:

Old Virtual DOM

ProductList

search=""

New Virtual DOM

ProductList

search="React"

Difference found.

React updates only this part of the real DOM.

Important

Many beginners think:

Parent changed

↓

Only ProductList renders

❌ Wrong.

Actually:

Parent state changes

↓

Parent executes again

↓

Every child executes again

↓

React compares Virtual DOM

↓

Only changed DOM updates
Complete Flow
User Types

↓

SearchBox

↓

setSearch("React")

↓

Hook 0 Updated

↓

App()

↓

SearchBox()

↓

ProductList()

↓

New Virtual DOM

↓

Compare Old vs New

↓

Update Only Changed DOM
Why is React still fast?

Even though:

SearchBox()

↓

ProductList()

run again,

React usually updates only the changed DOM nodes, not the entire page.

Executing JavaScript functions is much cheaper than rebuilding the whole DOM.

Senior Engineer Mental Model

When a parent's state changes:

Hook Updated

↓

Parent Function Executes Again

↓

All Direct Children Execute Again

↓

New Virtual DOM Created

↓

Diff Algorithm (Reconciliation)

↓

Only Changed Real DOM Updates

↓

Browser Paint

This is one of the most important rendering flows in React.

In Phase 5 – React Rendering, we'll spend an entire phase learning:

Why components re-render.
Why child components re-render.
How React.memo prevents unnecessary re-renders.
Reconciliation.
Virtual DOM diffing.
Fiber.
Render phase vs Commit phase.

By the end of Phase 5, you'll understand React's rendering process almost like someone reading the React source code.



there is a way to avoid unnecessary child re-rendering:

✅ React.memo

Example:

const SearchBox = React.memo(function SearchBox({ onSearch }) {
  console.log("SearchBox rendered");

  return (
    <input onChange={(e) => onSearch(e.target.value)} />
  );
});

Now if SearchBox props did not change, React can skip rendering it.

But there is one catch.

This code may still re-render:

<SearchBox onSearch={(value) => setSearch(value)} />

Because this function is recreated on every parent render.

Better:

const handleSearch = useCallback((value) => {
  setSearch(value);
}, []);

<SearchBox onSearch={handleSearch} />

Now:

Parent re-renders

↓

SearchBox props same

↓

React.memo skips SearchBox

↓

Only ProductList re-renders
Full example
import { useState, useCallback, memo } from "react";

const SearchBox = memo(function SearchBox({ onSearch }) {
  console.log("SearchBox rendered");

  return (
    <input onChange={(e) => onSearch(e.target.value)} />
  );
});

function ProductList({ search }) {
  console.log("ProductList rendered");

  return <h1>{search}</h1>;
}

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <ProductList search={search} />
    </>
  );
}

Now when search changes:

App re-renders

↓

SearchBox skipped because props same

↓

ProductList re-renders because search prop changed
But important

Usually, don't optimize too early.

For small components:

Child re-rendering is okay.

Use React.memo when:

Child is expensive

OR

Large list item

OR

Performance issue visible


In fact, we are not supposed to discuss it deeply right now because we're currently in Phase 4 (State Management).

When you asked:

"Can we make only one child render?"

I gave you a preview (React.memo) so you knew a solution exists.

But we'll study it in detail later.

Here's when we'll cover it:
Phase 5 – React Rendering
Why components re-render
Parent re-render vs child re-render
Render phase vs commit phase
Reconciliation
Virtual DOM diffing
Performance Optimization Phase (later in your roadmap)
React.memo
useMemo
useCallback
Preventing unnecessary re-renders
Memoization strategies
Performance profiling

So for Phase 4, the correct mental model is simply:

Parent state changes

↓

Parent re-renders

↓

Children re-render

↓

React updates only the changed DOM

Then, in the rendering and performance phases, we'll learn how React can skip rendering some children using React.memo and related optimizations.

For now, don't worry about optimizing renders. First, build a solid understanding of how React normally behaves. Then we'll learn how and when to optimize it.


# >>


📖 Topic 4.9 — Lifting State Up

Before learning Lifting State Up, remember:

We learned:

Sibling A

↓

Parent

↓

Sibling B

The parent acts as the middleman.

Question:

Why does the parent own the state?

First Question

Suppose we have:

        App
       /   \
 SearchBox ProductList

Initially, SearchBox owns the search text.

function SearchBox() {

  const [search, setSearch] = useState("");

}

Question:

Can ProductList access this state?

First Attempt
SearchBox

↓

search = "React"

↓

ProductList

❌ No.

Because:

SearchBox owns search.

ProductList cannot access it.
The Problem

Current structure:

        App
       /   \
 SearchBox ProductList

State lives here:

SearchBox

↓

search

But both components need it.

SearchBox

Needs search

✔

----------------

ProductList

Needs search

✔
React's Solution

Move the state to the closest common parent.

This is called:

Lifting State Up
What Is Lifting State Up?
Definition

Lifting State Up means moving state from a child component to the nearest common parent so multiple components can share it.

Think:

Child State

↓

Move Up

↓

Parent State

↓

Shared By Children
Before Lifting
        App
       /   \
 SearchBox ProductList

Search State

↓

SearchBox

ProductList cannot access it.

After Lifting
        App
       /   \
 SearchBox ProductList

Search State

↓

App

Now both children can use it.

First Example
Before
function SearchBox() {

  const [search, setSearch] = useState("");

}

Only SearchBox knows the value.

After

Parent:

function App() {

  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBox

        search={search}

        onSearch={setSearch}

      />

      <ProductList

        search={search}

      />
    </>
  );

}

SearchBox:

function SearchBox({

  search,

  onSearch

}) {

  return (

    <input

      value={search}

      onChange={(e) =>
        onSearch(e.target.value)
      }

    />

  );

}

ProductList:

function ProductList({

  search

}) {

  return <h1>{search}</h1>;

}
Internal Working

User types:

React

Flow:

SearchBox

↓

onSearch("React")

↓

App

↓

setSearch("React")

↓

Hook Updated

↓

App Re-renders

↓

SearchBox gets

search="React"

↓

ProductList gets

search="React"

Notice:

Both children receive the same state.

Why Lift State Up?

Because:

One Source

↓

Multiple Consumers

Without lifting:

SearchBox

↓

Own State

ProductList

↓

Cannot Access

With lifting:

Parent

↓

Own State

↓

SearchBox

↓

ProductList
Real World Example

Shopping Cart

          Cart
         /    \
Add Button  Cart Badge

Items count belongs to:

Cart

Not:

Add Button

Because:

Cart Badge

Needs Items Count

✔
Another Example

Dark Mode

          App
         /   \
Navbar Footer

Theme belongs to:

App

Both Navbar and Footer need it.

Visual Flow
User Types

↓

SearchBox

↓

Callback

↓

Parent Updates State

↓

Parent Re-renders

↓

SearchBox gets new props

↓

ProductList gets new props
Mental Model

Think of a family.

Parent

↓

Keeps Family Budget

↓

Children Ask Parent

↓

Parent Shares Budget

The money isn't stored separately by every child.

Senior Engineer Mental Model

Junior Developers Think:

Move State Up

↓

Works

Senior Developers Think:

Place State

At The Lowest

Common Ancestor

↓

Single Source Of Truth

↓

No Duplicate State

↓

Easy To Maintain
Interview Questions
Q: What is Lifting State Up?

Answer:

Moving state from a child component to the nearest common parent so multiple components can share it.

Q: Why do we lift state?

Answer:

To create a single source of truth that multiple components can access.

Q: Where should shared state live?

Answer:

In the nearest common parent of all components that need it.

🧠 Revision Card
Lifting State Up
Child State

↓

Move Up

↓

Parent State

↓

Shared With Children
Rules
✅ Move state to the nearest common parent.
✅ Parent owns the shared state.
✅ Children receive it through props.
✅ Children notify the parent using callbacks.
Remember
Shared Data

↓

Nearest Common Parent

↓

One Source Of Truth

# >>

📖 Topic 4.10 — Local State

Before learning Local State, remember:

We just learned Lifting State Up.

A common beginner mistake is:

"Should I lift every state to the parent?"

The answer is:

No.

First Question

Suppose we have:

App

↓

LoginForm

↓

Password Input

The password visibility (Show / Hide) is only used inside LoginForm.

Question:

Should this state live in App?

First Attempt
function App() {

  const [showPassword, setShowPassword] =
    useState(false);

  return <LoginForm ... />;
}

Will it work?

✅ Yes.

But...

Is it a good design?

❌ No.

Because no other component needs this state.

The Problem

If we keep every state in the parent:

App

↓

Theme

↓

Search

↓

Modal

↓

Password

↓

Loading

↓

Filter

↓

Sort

↓

...

The parent becomes huge.

This is called state pollution.

React's Solution

Keep state as close as possible to where it is used.

This is called Local State.

What Is Local State?
Definition

Local State is state that belongs to a single component and is used only within that component.

Think:

Component

↓

Own State

↓

Uses Own State
First Example
function LoginForm() {

  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <button
      onClick={() =>
        setShowPassword(prev => !prev)
      }
    >
      Toggle
    </button>
  );

}

Who uses this state?

LoginForm

✔

Other Components

❌

So it should stay local.

Another Example
function Modal() {

  const [isOpen, setIsOpen] =
    useState(false);

}

Only the Modal needs to know whether it is open.

No need to lift it.

When Should State Stay Local?

Ask yourself one question:

Does any other component need this state?

If the answer is:

No

↓

Keep it local.

When Should You Lift It?

If the answer is:

Yes

↓

Lift it to the nearest common parent.

Decision Tree
Does another component need it?

↓

No

↓

Local State

------------------

Yes

↓

Lift State Up
Real World Examples
Local State
Password visibility
Input focus
Modal open/close
Tooltip visibility
Accordion expand/collapse
Dropdown open/close
Shared State
Logged-in user
Shopping cart
Search text
Selected language
Theme
Notifications
Mental Model

Think of a bedroom.

Bedroom Light

↓

Only Bedroom Uses It

↓

Switch Inside Bedroom

No need to control it from the whole house.

Senior Engineer Mental Model

A common React principle is:

Keep state as close as possible to where it is used.

Only lift it when another component actually needs it.

This makes components simpler, reduces unnecessary re-renders, and makes the application easier to maintain.

🧠 Revision Card
One Component Uses State?

↓

Yes

↓

Keep It Local

--------------------

Multiple Components Need State?

↓

Lift It Up

# >>>>>>


📖 Topic 4.11 — Shared State

Before learning Shared State, remember:

We learned:

Local State → Used by only one component.
Lifting State Up → Move state to the parent when multiple components need it.

Now let's understand what that shared state actually is.

First Question

Suppose we have:

         App
        /   \
 SearchBox  ProductList

Both components need:

search = "React"

Question:

Should each component create its own state?

First Attempt

SearchBox:

const [search, setSearch] = useState("");

ProductList:

const [search, setSearch] = useState("");

Will this work?

❌ No.

These are two different state variables.

The Problem

User types:

React

SearchBox state:

search = "React"

ProductList state:

search = ""

They are not synchronized.

React's Solution

Create one state.

Share it with both components.

This is called:

Shared State
What Is Shared State?
Definition

Shared State is a single piece of state owned by one component and shared with multiple components.

Think:

One State

↓

Multiple Components
First Example

Parent:

function App() {

  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBox
        search={search}
        onSearch={setSearch}
      />

      <ProductList
        search={search}
      />
    </>
  );

}

Notice:

There is only one search state.

Internal Working

Initial:

Hook 0

↓

search = ""

User types:

React

Flow:

SearchBox

↓

setSearch("React")

↓

Hook 0 Updated

↓

App Re-renders

↓

SearchBox

search="React"

↓

ProductList

search="React"

Both components receive the same value.

Why Is This Better?

Instead of:

SearchBox

↓

Own Search

----------------

ProductList

↓

Own Search

We have:

App

↓

One Search

↓

Shared With Both

Only one source of truth.

Single Source of Truth

This is one of React's most important principles.

One State

↓

One Owner

↓

Many Readers

Never create duplicate state for the same data.

Real World Example

Shopping Cart

        Cart
       /    \
CartIcon Checkout

Items:

5

Should both components have their own state?

❌ No.

Correct:

Cart

↓

items = 5

↓

CartIcon

↓

Checkout
Another Example

Logged-in User

         App
        /   \
Navbar Profile

User:

Likan

Navbar needs it.

Profile needs it.

Create one user state.

Share it.

Mental Model

Think of a classroom.

Teacher

↓

Attendance Register

↓

All Students Read

Same Register

Not:

Each Student

↓

Own Attendance Register
Senior Engineer Mental Model

Junior Developers Think:

Each Component

Own State

Senior Developers Think:

One Shared State

↓

Single Source Of Truth

↓

No Duplicate Data

↓

Easy To Maintain
Interview Questions
Q: What is Shared State?

Answer:

Shared State is a single piece of state owned by one component and used by multiple components.

Q: Why shouldn't sibling components have duplicate state?

Answer:

Because duplicate state can become inconsistent. React recommends a single source of truth.

Q: Where should shared state live?

Answer:

In the nearest common parent of all components that need it.

🧠 Revision Card
Shared State
One State

↓

One Owner

↓

Many Components
Rules
✅ One source of truth.
✅ Parent owns shared state.
✅ Children receive props.
✅ No duplicate state.
Remember
Duplicate State

↓

Bugs

----------------

Shared State

↓

Consistency
🔥 Important Note

Now you know the difference:

Local State

↓

One Component

----------------

Shared State

↓

Multiple Components

↓

Nearest Common Parent


This is one of the most important principles in React.

What does "Single Source of Truth" mean?

It means:

There should be only one place that owns a particular piece of data.

For example, suppose you have a shopping cart.

❌ Wrong approach:

CartIcon

↓

items = 5

----------------

Checkout

↓

items = 5

There are two separate states.

Now the user adds one item.

CartIcon updates:

items = 6

But Checkout forgets to update:

items = 5

Now your UI is inconsistent.

This is called duplicate state, and it causes bugs.

Correct Approach (Single Source of Truth)
            App

      items = 5   ← ONLY ONE STATE

        /      \

   CartIcon   Checkout

When the user adds an item:

App

↓

items = 6

↓

CartIcon receives 6

↓

Checkout receives 6

Both components always stay in sync.

Another Example

Logged-in user:

          App

user = "Likan"

     /        \

 Navbar     Profile

There is one user state.

Navbar reads:

Likan

Profile also reads:

Likan

If the user changes their name:

App

↓

user = "Amarnath"

↓

Navbar

↓

"Amarnath"

↓

Profile

↓

"Amarnath"

Only one state changed, but every component received the updated value.

Simple Definition (Interview)

Single Source of Truth means a piece of data has only one owner. All other components read that data from the owner instead of creating their own copies.

Mental Model

Think of a bank account.

Bank Server

↓

Balance = ₹10,000

↓

ATM

↓

Mobile App

↓

Website

There is one real balance stored by the bank.

The ATM, mobile app, and website all read the same balance.

They don't each keep their own separate balance.

React works the same way.

One State

↓

One Owner

↓

Many Readers

This idea of a single source of truth is one of the core design principles behind React and is the reason why React applications are easier to reason about and debug.

# >>

📖 Topic 4.12 — Global State

Before learning Global State, remember:

We learned:

✅ Local State
✅ Shared State
✅ Single Source of Truth

Question:

What if many components across the application need the same data?

First Question

Suppose we have:

                App
              /     \
         Dashboard   Settings
          /      \
     Navbar    ProductList
         |
      UserMenu

The logged-in user is needed in:

Navbar
UserMenu
Dashboard
Settings
ProductList

Question:

Should we pass props through every component?

First Attempt
App

↓

Dashboard

↓

Navbar

↓

UserMenu

Props flow like:

user

↓

Dashboard

↓

Navbar

↓

UserMenu

Will it work?

✅ Yes.

But...

It becomes difficult to maintain.

The Problem

Imagine passing:

user

↓

theme

↓

language

↓

cart

↓

notifications

through 8–10 components.

Many components don't even use the data.

They only pass it to the next component.

This is called:

Prop Drilling
What Is Prop Drilling?
Definition

Prop Drilling is passing props through intermediate components that don't actually use them.

Example:

App

↓

Dashboard

↓

Navbar

↓

UserMenu

Only UserMenu needs:

user

But Dashboard and Navbar must still pass it.

React's Solution

Store the shared data in a place that any component can access directly.

This is called:

Global State
What Is Global State?
Definition

Global State is application-wide state that can be accessed by any component without passing props through every level.

Think:

Application

↓

Global State

↓

Any Component
Real World Example

Current User

Current User

↓

Navbar

↓

Profile

↓

Settings

↓

Dashboard

↓

Orders

Everyone needs the same user.

Instead of passing props through every component:

App

↓

Global Store

↓

Any Component Reads It
Another Example

Shopping Cart

Cart

↓

Navbar Badge

↓

Checkout

↓

Product Page

↓

Payment

One cart.

Many readers.

Perfect candidate for Global State.

Common Global State
Logged-in user
Theme
Language
Shopping cart
Notifications
Authentication
Permissions
Internal Working (Concept)

Instead of:

App

↓

Dashboard

↓

Navbar

↓

UserMenu

React can do:

Global Store

↓

Navbar

↓

UserMenu

↓

Settings

↓

Dashboard

Every component reads from the same place.

How Is Global State Implemented?

React itself provides:

Context API

Large applications often use libraries like:

Redux Toolkit
Zustand
Jotai
Recoil

We'll study all of them later in your roadmap.

Local vs Shared vs Global
Local State
One Component

↓

One State

Example:

Password Visibility
Shared State
Parent

↓

Children

Example:

Search Text
Global State
Entire Application

↓

Any Component

Example:

Logged-in User
Mental Model

Think of Wi-Fi.

Without Global State:

Room A

↓

Ask Parent

↓

Ask Parent

↓

Ask Parent

With Global State:

Wi-Fi Router

↓

Everyone Connects Directly

No middleman.

Senior Engineer Mental Model

Junior Developers Think:

Global State

=

Everything

Wrong.

Senior Developers Think:

Use Global State

ONLY

When many unrelated components

need the same data.

Too much global state makes applications difficult to maintain.

Interview Questions
Q: What is Global State?

Answer:

Global State is application-wide state that can be accessed by any component without prop drilling.

Q: What problem does Global State solve?

Answer:

It eliminates prop drilling and provides a central place for application-wide data.

Q: Should every state be global?

Answer:

No. Most state should remain local. Use global state only when many unrelated components need the same data.

🧠 Revision Card
Global State
Application

↓

Global Store

↓

Any Component
Use For
✅ Logged-in User
✅ Theme
✅ Cart
✅ Language
✅ Authentication
Avoid For
❌ Password visibility
❌ Modal open/close
❌ Input focus
❌ Local form fields
Remember
Local

↓

One Component

----------------

Shared

↓

Family Of Components

----------------

Global

↓

Entire Application
🔥 Important Note

Many beginners think:

"Global State is always better."

It's not.

A good React developer follows this order:

Can it stay Local?

↓

Yes

↓

Keep it Local

----------------

No

↓

Can Parent Share It?

↓

Yes

↓

Use Shared State

----------------

No

↓

Use Global State

This keeps applications simple and scalable.


# >>>


📖 Topic 4.13 — Derived State

Before learning Derived State, remember:

We learned:

Local State
Shared State
Global State

Now a very important question...

Should every value be stored in state?

The answer is:

No.

Some values should be calculated, not stored.

First Question

Suppose we have:

const [price, setPrice] = useState(100);
const [quantity, setQuantity] = useState(2);

Question:

Should we also store:

const [total, setTotal] = useState(200);

Looks reasonable.

But...

Is it a good idea?

❌ No.

The Problem

Current values:

price = 100

quantity = 2

total = 200

User changes:

price = 150

Now:

price = 150

quantity = 2

total = 200 ❌

The total is wrong.

Why?

Because we forgot to update it.

React's Solution

Don't store data that can be calculated.

Instead:

const total = price * quantity;

Every render React calculates:

150 × 2

↓

300

Always correct.

What Is Derived State?
Definition

Derived State is a value calculated from existing state or props instead of storing it as separate state.

Think:

Existing State

↓

Calculation

↓

Derived Value
First Example

Wrong:

const [firstName, setFirstName] = useState("Likan");
const [lastName, setLastName] = useState("Mishra");
const [fullName, setFullName] = useState("");

Correct:

const [firstName, setFirstName] = useState("Likan");
const [lastName, setLastName] = useState("Mishra");

const fullName = firstName + " " + lastName;

Now:

firstName

↓

lastName

↓

Calculate

↓

fullName

No extra state.

Another Example

Shopping Cart

const [price, setPrice] = useState(500);

const [quantity, setQuantity] = useState(3);

Wrong:

const [total, setTotal] = useState(1500);

Correct:

const total = price * quantity;

Every render:

price

↓

quantity

↓

Multiply

↓

total
Internal Working

Current state:

Hook 0

↓

price = 500

Hook 1

↓

quantity = 3

React renders:

500 × 3

↓

1500

Notice:

total

❌ Not Stored

✔ Calculated

User changes:

quantity = 4

React re-renders:

500 × 4

↓

2000

Always correct.

Why Is This Better?

Suppose you stored:

price

↓

500

quantity

↓

4

total

↓

1500 ❌

Now your UI is inconsistent.

Derived values eliminate this problem.

Real World Examples
Full Name
firstName

↓

lastName

↓

fullName
Shopping Total
price

↓

quantity

↓

total
Completed Tasks
tasks

↓

Filter Completed

↓

completedCount
User Age
birthYear

↓

Current Year

↓

age

No need to store age separately.

Mental Model

Think of a calculator.

You enter:

10

+

20

The calculator doesn't store:

30

forever.

It simply calculates it whenever needed.

React works the same way.

Derived State vs Stored State
Stored State
User Changes It

↓

React Stores It

Example:

Theme

Language

Logged-in User
Derived State
Calculated

↓

Never Stored

Example:

Total Price

Full Name

Age

Completed Count
Senior Engineer Mental Model

Junior Developers Think:

Everything

↓

useState()

Senior Developers Think:

Can this value

be calculated

from existing state?

↓

Yes

↓

Don't Store It

↓

Derive It

This reduces bugs and keeps a single source of truth.

Interview Questions
Q: What is Derived State?

Answer:

Derived State is data calculated from existing state or props instead of being stored separately.

Q: Why should we avoid storing derived state?

Answer:

Because it can become inconsistent with the original state. Calculating it on each render ensures it is always correct.

Q: Give an example of derived state.

Answer:

const total = price * quantity;

or

const fullName = firstName + " " + lastName;
🧠 Revision Card
Derived State
Existing State

↓

Calculation

↓

Derived Value
Don't Store

❌

const [total, setTotal] = useState();
Calculate

✅

const total = price * quantity;
Use For
Full Name
Total Price
Completed Count
Age
Filtered Lists
Remember
Can It Be Calculated?

↓

Yes

↓

Don't Store It

↓

Derive It


Suppose you have:

function Cart() {

  const [price] = useState(100);
  const [quantity] = useState(2);

  const total = price * quantity;

  return <h1>{total}</h1>;
}

You asked:

If total is not stored in state, where does it exist?

Answer

It exists as a normal JavaScript variable during each render.

First Render

React executes:

Cart()

Hook values:

Hook 0 → 100

Hook 1 → 2

Now JavaScript executes:

const total = price * quantity;

which becomes:

total = 200

Notice:

Hook Storage

Hook 0 → 100

Hook 1 → 2

❌ No Hook for total

total only exists as a local variable inside the Cart() function.

Then JSX is created:

return <h1>{total}</h1>;

which becomes:

<h1>200</h1>

React creates the Virtual DOM and updates the screen.

User Changes Quantity
setQuantity(3);

React updates:

Hook 1

2

↓

3

Then React re-renders:

Cart()

again.

Now JavaScript runs again:

const total = price * quantity;

This time:

100 × 3

↓

300

Now JSX becomes:

<h1>300</h1>

React compares:

Old

<h1>200</h1>

↓

New

<h1>300</h1>

React updates only the text node in the DOM.

So where is total stored?

It isn't stored between renders.

Think of it like this:

Render 1

↓

total = 200

↓

JSX Created

↓

Function Ends

↓

total disappears

Next render:

Render 2

↓

total = 300

↓

JSX Created

↓

Function Ends

↓

total disappears

A new total variable is created every time the component renders.

Mental Model

Think of a calculator.

You type:

100 × 3

The calculator computes:

300

It doesn't permanently store 300.

Next time you type:

100 × 4

It computes:

400

React does exactly the same thing.

Senior React Mental Model

There are two kinds of data:

Persistent Data

↓

Stored in Hooks

(price, quantity)

------------------------

Temporary Data

↓

Calculated During Render

(total)

This distinction is extremely important.

State (useState) survives between renders.
Derived values (const total = ...) exist only during the current render.

This concept becomes the foundation for understanding rendering, memoization (useMemo), and React Fiber in the next phase.


Consider this component:

function Cart() {
  const [price] = useState(100);
  const [quantity] = useState(2);

  let total = price * quantity;

  return <h1>{total}</h1>;
}

Suppose you do this:

total = 500;

Will the UI automatically show 500?

❌ No.

Why?

Because React only knows when state or props change. It has no idea that you changed a normal JavaScript variable.

Here's what happens:

Hook State

price = 100

quantity = 2

↓

Render starts

↓

total = 200

↓

JSX = <h1>200</h1>

↓

UI = 200

Now suppose you write:

total = 500;

Only the JavaScript variable changed.

total = 500

↓

React NOT notified

↓

No re-render

↓

UI still shows 200

So, changing a derived variable does not trigger a re-render.

Now suppose later you update the state:

setQuantity(3);

React re-renders:

Cart()

↓

price = 100

quantity = 3

↓

total = 300   ← Recalculated

↓

JSX = <h1>300</h1>

↓

UI = 300

Notice something important:

Your manual assignment:

total = 500;

is completely lost.

Why?

Because total is recreated from scratch every time the component renders.

Mental Model
State

↓

Persistent
(Survives renders)

--------------------

Derived Variable

↓

Temporary

↓

Created during render

↓

Destroyed after render

This is exactly why React tracks state, not ordinary variables.

A normal variable is just a temporary value inside the current execution of the component function. On the next render, React executes the function again and creates a new total from the current state (price and quantity).

This distinction—persistent state vs temporary derived values—is one of the key ideas behind React's rendering model.



When I say "total is lost", I mean the variable itself is destroyed after the component finishes rendering.

Example:

function Cart() {
  const [price] = useState(100);
  const [quantity] = useState(2);

  let total = price * quantity; // 200

  total = 500;

  return <h1>{total}</h1>;
}

In this example, the UI will show 500 because you changed total before returning the JSX.

But after Cart() finishes:

Cart() finishes

↓

total variable is destroyed

There is no total stored anywhere.

Later, suppose you call:

setQuantity(3);

React runs:

Cart();

again.

A brand-new total variable is created:

price = 100

quantity = 3

↓

total = 300

The previous value:

total = 500

is gone forever.

That's what "lost" means.

Mental Model

Every render is like a new function call:

Render 1

↓

total = 200

↓

Function ends

↓

total destroyed

--------------------

Render 2

↓

total = 300

↓

Function ends

↓

total destroyed

Only state survives between renders because React stores it in its Hook storage.

Normal variables like total exist only while the component function is executing. Once the function returns, JavaScript removes those local variables from memory, and React recreates them during the next render.


Even if you manually reassign it to 500, a new render creates a brand-new variable.

Let's walk through it.

function Cart() {
  const [price] = useState(100);
  const [quantity] = useState(2);

  let total = price * quantity;

  total = 500;

  return <h1>{total}</h1>;
}
First Render

React executes:

Cart()

↓

price = 100

quantity = 2

↓

total = 200

↓

total = 500   (your reassignment)

↓

UI shows 500

↓

Function ends

↓

total is destroyed

Now suppose:

setQuantity(3);

React re-renders.

Second Render

React executes the entire function again:

Cart()

↓

price = 100

quantity = 3

↓

NEW total variable created

↓

total = 300

↓

total = 500   (only if this line still exists in the code)

↓

UI shows 500

Notice something important.

If the line:

total = 500;

is still in your component, then every render will execute it, so the UI will always show 500.

But if you changed total somewhere else, for example:

button.onclick = () => {
  total = 500;
};

that won't work because:

total only existed during that render.
After the render finished, that variable no longer exists.
The next render creates a completely new total.
The rule to remember
State

↓

Stored by React

↓

Survives re-renders

------------------------

Normal Variable

↓

Created during render

↓

Destroyed after render

↓

Created again on next render

So yes, every render creates a new total variable. It is not reused from the previous render. This is one of the core ideas behind how React function components work.

You're referring to this code:

function Cart() {
  const [price] = useState(100);
  const [quantity] = useState(2);

  let total = price * quantity;

  total = 500;

  return <h1>{total}</h1>;
}

You asked:

"The code still exists, so why are you saying it won't exist?"

The code exists, but the variable does not.

These are two different things.

Think of it like this

The function definition stays in memory:

function Cart() {
  ...
}

React can call it again and again.

But every time React calls it:

Cart()

↓

Create NEW local variables

↓

Execute code

↓

Return JSX

↓

Destroy local variables

The next render:

Cart()

↓

Create NEW local variables AGAIN

↓

Execute code AGAIN

↓

Return JSX

↓

Destroy local variables AGAIN

So this line:

let total = price * quantity;

creates a brand-new total on every render.

When would total = 500 not exist?

Suppose you do this:

function Cart() {
  const [price] = useState(100);
  const [quantity] = useState(2);

  let total = price * quantity;

  function handleClick() {
    total = 500;
  }

  return (
    <>
      <h1>{total}</h1>
      <button onClick={handleClick}>Change</button>
    </>
  );
}

Click the button:

total = 500

But React does not re-render because no state changed.

Later, some other state change causes a re-render:

Cart()

↓

NEW total created

↓

100 × 2 = 200

The previous 500 is gone because it belonged to the old function execution.

The key idea
Function code
        ↓
Lives for the entire application

----------------------------

Local variables (price, total, etc.)
        ↓
Created every render
Destroyed when that render finishes

This is one of the biggest mindset shifts in React:

A function component is not an object with persistent variables. It is a function that React executes repeatedly. Every execution gets a fresh set of local variables, while only Hook state (useState) survives between executions.


If your code is literally this:

function Cart() {
  const [price] = useState(100);
  const [quantity] = useState(2);

  let total = price * quantity;

  total = 500;

  return <h1>{total}</h1>;
}

Then every render does this:

Render 1

↓

total = 200

↓

total = 500

↓

UI = 500

Next render:

Render 2

↓

NEW total created

↓

total = 300

↓

total = 500

↓

UI = 500

So yes, because the line total = 500 is part of the component code, it executes on every render. The UI will always show 500.

What I meant earlier was a different scenario.

Suppose you do this:

function handleClick() {
    total = 500;
}

This changes total outside the normal render execution.

Then later React re-renders because of a state update.

Now React runs the component again:

Cart()

↓

let total = price * quantity

A new total variable is created, and the old assignment from handleClick is gone.

The key distinction

Inside the render function:

let total = price * quantity;
total = 500;

✅ Runs every render.

Outside the render (event handler, timeout, etc.):

total = 500;

❌ Doesn't persist because total is just a local variable from a previous render.

This is an excellent observation. It shows you're distinguishing between:

Code that executes on every render (component body)
Changes made to a local variable after a render

That distinction is crucial for understanding how React function components work.

function Cart() {
  let total = 200;

  total = 500;

  return <h1>{total}</h1>;
}

Here UI shows:

500

Because total = 500 runs before JSX is returned.

On every re-render:

Cart() runs again

↓

total = 200

↓

total = 500

↓

UI shows 500

So yes, if total = 500 is written inside the component body, it will run every render.

But this is not real derived state usage.

Real derived state should be:

const total = price * quantity;

Not:

let total = price * quantity;
total = 500;

Because derived value should be calculated from state, not manually changed.



Sure. Here's the simplest version.

function Cart() {
  const [count, setCount] = useState(0);

  let total = 100;

  function handleClick() {
    total = 500;
    console.log(total); // 500
  }

  return (
    <>
      <h1>{total}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
Initial Render
total = 100

↓

UI shows 100
User clicks the button
handleClick()

↓

total = 500

↓

Console prints 500

But...

React was NOT notified

↓

No re-render

↓

UI still shows 100

Why?

Because changing a normal variable does not tell React to render again.

Now suppose you click another button:
setCount(count + 1);

React re-renders.

It executes Cart() again:

Cart()

↓

let total = 100   ← NEW variable

↓

UI shows 100

The previous:

total = 500

is gone.

The key point
Button Click

↓

total = 500

↓

Only that old render's variable changed

↓

Next render

↓

React creates a NEW total = 100

So the 500 was never stored anywhere. It existed only in the old render's local variable.

This is why React says:

✅ Store persistent values in useState.
❌ Don't rely on normal variables to hold data across renders.



This is actually one of the biggest "aha!" moments in React.

Remember these two rules:
1. State survives re-renders ✅
const [count, setCount] = useState(0);
Render 1 → count = 0

↓

setCount(1)

↓

Render 2 → count = 1

React stores count in its Hook storage.

2. Normal variables do NOT survive ❌
let total = 100;
Render 1

↓

total = 100

↓

Function ends

↓

total is destroyed

--------------------

Render 2

↓

NEW total = 100

Every render gets a brand-new total.

One sentence to remember forever

State is persistent. Variables are temporary.

This single sentence explains:

✅ Why useState exists.
✅ Why derived state shouldn't be stored.
✅ Why changing a normal variable doesn't update the UI.
✅ Why React re-executes the component on every render.

You're now ready for Phase 5 (React Rendering), where all of these concepts—state, renders, Virtual DOM, reconciliation, and Fiber—will connect together. This is where React starts making complete sense internally.















