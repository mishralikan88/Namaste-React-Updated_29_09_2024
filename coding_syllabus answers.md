#### 🚀 Question 1 — Counter

🎯 Interview Question

Build a Counter with Increment, Decrement and Reset buttons.

1️⃣ First Understand the Problem

Don't start coding immediately.

First ask yourself,

What are we building?

Count : 0

[ + ]  [ - ]  [ Reset ]
Features

✅ Show current count

✅ Increment count

✅ Decrement count

✅ Reset count

Simple.

2️⃣ Think Like React

Before writing code, ask only one question.

What changes on the screen?

Answer

Count

Nothing else changes.

Since Count changes,

React needs to remember it.

So we need State.

3️⃣ What State Do We Need?
const [count, setCount] = useState(0);

Let's understand every part.

count

Current value.

Example

0

1

5

100

Whatever the latest count is.

setCount

Function used to update the state.

Think of it like telling React

"React... next time you render, use this new value."

0

Initial value.

When the component renders for the first time,

Count : 0
4️⃣ Before Writing Code

Ask yourself

How many things are changing?

Answer

Only Count

So we need

One changing value

↓

One State

This is an important React habit.

Always create state based on what changes, not based on how many buttons you have.

5️⃣ Code
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <h2>Count : {count}</h2>

      <button onClick={handleIncrement}>+</button>

      <button onClick={handleDecrement}>-</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
6️⃣ What Happens When I Click "+"?

Current screen

Count : 0

User clicks

+

Flow

Button Click

↓

handleIncrement()

↓

setCount(count + 1)

↓

React schedules a state update

↓

Current event finishes

↓

React updates the state

↓

Component runs again

↓

count becomes 1

↓

New JSX is created

↓

React compares old JSX with new JSX

↓

Updates only the changed DOM

↓

Screen shows

Count : 1
Easy Remember
Click

↓

Update State

↓

Component Runs Again

↓

UI Updates
7️⃣ Why Not Use a Normal Variable?

Example

let count = 0;

Why not?

Because React doesn't track normal variables.

If you do

count++;

React has no idea something changed.

So the screen never updates.

State solves this problem.

Whenever state changes,

React knows

"I need to update the UI."

8️⃣ Interview Follow-up (Senior Level)

Interviewer says

Good.

Now increase the counter 3 times with one button click.

Most people write

function handleTripleIncrement() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}

Looks correct.

But let's dry run it.

Current count

0
First line
setCount(count + 1);

Reads

0

React prepares

1
Second line
setCount(count + 1);

Does count become 1 already?

❌ No.

React has not re-rendered yet.

So this line still reads

0

Again React prepares

1
Third line

Same thing.

Still reads

0

React prepares

1

Finally React receives

1

1

1

Final answer

Count : 1

Not

3
9️⃣ Functional Update

React gives us a better way.

function handleTripleIncrement() {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
}

Let's dry run.

Current count

0
First update
prev = 0

↓

1
Second update
prev = 1

↓

2
Third update
prev = 2

↓

3

Final answer

Count : 3

Perfect.

🔟 So Which One Should I Use?

For this normal button

function handleIncrement() {
  setCount(count + 1);
}

✅ Works perfectly.

Because only one update happens.

No problem.

But...

If the next state depends on the previous state,

I prefer

setCount(prev => prev + 1);

Why?

Because it's safer.

It works correctly even when multiple updates are queued before React re-renders.

This is also the pattern you'll see most often in production React code.

1️⃣1️⃣ What To Say In Interview

"Only the count changes on the screen, so I created one state. The button calls a handler, which updates the state using setCount. React schedules the update, re-runs the component, creates new JSX, compares it with the previous JSX, and updates only the changed part of the DOM. For a single update, setCount(count + 1) works fine. When the next state depends on the previous state, I prefer the functional update because it always uses the latest state."

1️⃣2️⃣ Common Mistakes

❌ Using a normal variable.

let count = 0;

❌ Updating state like this.

count++;

❌ Thinking

setCount()

↓

Immediately changes count

It doesn't.

React updates the state during the next render.

❌ Thinking Functional Update is only for fast clicking.

No.

It is mainly useful when the next state depends on the previous state or when multiple updates are queued before React re-renders.

🧠 Revision Card
Question : Counter

↓

What changes?

↓

Count

↓

Need State?

↓

Yes

↓

Which Hook?

↓

useState

↓

Click

↓

handleIncrement()

↓

setCount()

↓

React updates state

↓

Component runs again

↓

UI updates


Senior Tip

Single Update

↓

setCount(count + 1)

✅ OK


Multiple updates depend on previous state

↓

setCount(prev => prev + 1)

✅ Preferred


# >>>>>>>>

🚀 Question 2 — Counter with Step
🎯 Interview Question

Build a counter where the user can increase/decrease by a custom step value.

Example:

Count : 0

Step : [ 5 ]

[ + ] [ - ] [ Reset ]
1️⃣ First Understand the Problem

Normal counter increases by 1.

But now user can choose the step.

If step = 5

Click +

0 → 5 → 10 → 15
2️⃣ What changes on screen?

Two things can change:

count
step

So React needs to remember both.

3️⃣ What state do we need?
const [count, setCount] = useState(0);
const [step, setStep] = useState(1);

Meaning:

count → current counter value
step  → how much to increase/decrease
4️⃣ Code
import { useState } from "react";

function CounterWithStep() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleIncrement() {
    setCount(prev => prev + step);
  }

  function handleDecrement() {
    setCount(prev => prev - step);
  }

  function handleReset() {
    setCount(0);
  }

  function handleStepChange(event) {
    setStep(Number(event.target.value));
  }

  return (
    <div>
      <h2>Count : {count}</h2>

      <input
        type="number"
        value={step}
        onChange={handleStepChange}
      />

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CounterWithStep;
5️⃣ Easy Flow

User types 5 in input.

onChange runs

↓

setStep(5)

↓

React stores step = 5

Now user clicks +.

handleIncrement()

↓

setCount(prev => prev + step)

↓

0 + 5

↓

Count : 5
6️⃣ Important Point

Input value always comes as string.

So this:

event.target.value

gives:

"5"

Not:

5

That’s why we use:

Number(event.target.value)
7️⃣ What to say in interview

“Here two values change: count and step. Count stores the current value, and step stores how much the counter should move. Since the next count depends on the previous count, I used functional update for count. For the input, I converted the value to a number because input values come as strings.”

8️⃣ Follow-up

Interviewer may ask:

What if step is empty?

Then Number("") becomes 0.

Better safe version:

function handleStepChange(event) {
  const value = event.target.value;

  if (value === "") {
    setStep(0);
    return;
  }

  setStep(Number(value));
}
9️⃣ Revision Card
Counter with Step

↓

What changes?

↓

count + step

↓

Need 2 states

↓

count changes by step

↓

setCount(prev => prev + step)

↓

Input value is string

↓

Convert using Number()

❓Q1. What happens if step is 0?

✅ Nothing.

Example

count = 10

step = 0

10 + 0 = 10

10 - 0 = 10

Count never changes.

❓Q2. Is this a bug?

✅ Not always.

If the requirement allows step = 0,

then this is expected behavior.

❓Q3. What if interviewer says step should never be 0?

Validate the input.

if (value <= 0) {
   return;
}

or

Disable the buttons.

disabled={step === 0}
❓Q4. Which solution is better?

For interviews

✅ Validation is enough.

For production

✅ Disable button + Show validation message.

Better user experience.

❓Q5. Why didn't the count change?

Because

setCount(prev => prev + step)

became

10 + 0

Result

10

State didn't change.

React sees

Old Count = 10

New Count = 10

So there is nothing new to display.

❓Q6. Will React re-render?

Interview answer:

If the new state is the same as the old state (like 10 → 10), React treats it as no meaningful state change and skips updating the UI. You won't see any visible change.

# >>>>

🚀 Question 3 — Counter Limit

🎯 Interview Question

Build a counter with Increment, Decrement and Reset buttons.

But the counter should have limits.

Example:

Minimum Count : 0
Maximum Count : 10

User cannot go below 0.

User cannot go above 10.

1️⃣ First Understand the Problem

Normal counter:

0 → 1 → 2 → 3

But now we add rule:

Count cannot go below 0
Count cannot go above 10

UI:

Count : 0

[ + ] [ - ] [ Reset ]

Rules:

If count is 0

Click -

No change
If count is 10

Click +

No change
2️⃣ Think Like React

Ask:

What changes on screen?

Answer:

count

Minimum and maximum limits do not change.

They are fixed values.

So we need only one state.

3️⃣ What State Do We Need?
const [count, setCount] = useState(0);

Meaning:

count    → current counter value
setCount → function to update count
0        → initial value
4️⃣ Fixed Limit Values

We can create normal constants.

const MIN_COUNT = 0;
const MAX_COUNT = 10;

Why normal variables?

Because they do not change on screen.

They are fixed rules.

So no need state.

5️⃣ Code
import { useState } from "react";

function CounterLimit() {
  const MIN_COUNT = 0;
  const MAX_COUNT = 10;

  const [count, setCount] = useState(0);

  function handleIncrement() {
    if (count === MAX_COUNT) {
      return;
    }

    setCount(count + 1);
  }

  function handleDecrement() {
    if (count === MIN_COUNT) {
      return;
    }

    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <h2>Count : {count}</h2>

      <button onClick={handleIncrement}>+</button>

      <button onClick={handleDecrement}>-</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CounterLimit;
6️⃣ Understand handleIncrement
function handleIncrement() {
  if (count === MAX_COUNT) {
    return;
  }

  setCount(count + 1);
}

Easy meaning:

If count is already 10

Stop the function

Do not increase

Otherwise:

Increase count by 1

Flow:

Click +

↓

handleIncrement()

↓

Is count === 10?

↓

Yes → return → stop

No → setCount(count + 1)
7️⃣ Understand handleDecrement
function handleDecrement() {
  if (count === MIN_COUNT) {
    return;
  }

  setCount(count - 1);
}

Easy meaning:

If count is already 0

Stop the function

Do not decrease

Otherwise:

Decrease count by 1

Flow:

Click -

↓

handleDecrement()

↓

Is count === 0?

↓

Yes → return → stop

No → setCount(count - 1)
8️⃣ Why return?

return means:

Stop this function here.
Do not go below.

Example:

if (count === 10) {
  return;
}

setCount(count + 1);

If count is 10:

return runs

↓

function stops

↓

setCount does not run
9️⃣ Better UI Version — Disable Buttons

This is better for interview and production.

import { useState } from "react";

function CounterLimit() {
  const MIN_COUNT = 0;
  const MAX_COUNT = 10;

  const [count, setCount] = useState(0);

  function handleIncrement() {
    if (count === MAX_COUNT) {
      return;
    }

    setCount(count + 1);
  }

  function handleDecrement() {
    if (count === MIN_COUNT) {
      return;
    }

    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <h2>Count : {count}</h2>

      <button onClick={handleIncrement} disabled={count === MAX_COUNT}>
        +
      </button>

      <button onClick={handleDecrement} disabled={count === MIN_COUNT}>
        -
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CounterLimit;
🔟 Why Disable Button?

When count is 10:

disabled={count === MAX_COUNT}

becomes:

disabled={true}

So + button is disabled.

When count is 5:

disabled={count === MAX_COUNT}

becomes:

disabled={false}

So + button works.

1️⃣1️⃣ React Flow

Current screen:

Count : 9

User clicks +.

Click

↓

handleIncrement()

↓

count === 10 ? No

↓

setCount(10)

↓

React schedules update

↓

Component runs again

↓

New JSX created

↓

Button disabled condition checked again

↓

count === 10 ? Yes

↓

+ button becomes disabled

↓

Screen shows Count : 10
1️⃣2️⃣ What To Say In Interview

Only the count changes on screen, so I used one state. The minimum and maximum limits are fixed values, so I kept them as constants. Before increasing or decreasing, I check whether the count already reached the limit. If yes, I return from the function. I also disabled the buttons at the limit to improve user experience.

1️⃣3️⃣ Interview Follow-up Questions
❓Q1. Why not store MIN_COUNT and MAX_COUNT in state?

Because they are not changing.

Changing value → state
Fixed value → constant

So this is enough:

const MIN_COUNT = 0;
const MAX_COUNT = 10;
❓Q2. What happens if count is 10 and user clicks +?

Nothing happens.

Because this runs:

if (count === MAX_COUNT) {
  return;
}

The function stops.

setCount does not run.

❓Q3. What happens if count is 0 and user clicks -?

Nothing happens.

Because this runs:

if (count === MIN_COUNT) {
  return;
}

The function stops.

setCount does not run.

❓Q4. Is disabling button enough?

For UI, yes.

But for safe code, keep both:

✅ Disable button
✅ Also check inside function

Why?

Because function should also protect the logic.

UI protection is not enough.

❓Q5. Can we write using functional update?

Yes.

Better version:

function handleIncrement() {
  setCount(prev => {
    if (prev === MAX_COUNT) {
      return prev;
    }

    return prev + 1;
  });
}

Decrement:

function handleDecrement() {
  setCount(prev => {
    if (prev === MIN_COUNT) {
      return prev;
    }

    return prev - 1;
  });
}

This is safer when next state depends on previous state.

1️⃣4️⃣ Senior Solution
import { useState } from "react";

function CounterLimit() {
  const MIN_COUNT = 0;
  const MAX_COUNT = 10;

  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(prev => {
      if (prev >= MAX_COUNT) {
        return prev;
      }

      return prev + 1;
    });
  }

  function handleDecrement() {
    setCount(prev => {
      if (prev <= MIN_COUNT) {
        return prev;
      }

      return prev - 1;
    });
  }

  function handleReset() {
    setCount(MIN_COUNT);
  }

  const isMin = count === MIN_COUNT;
  const isMax = count === MAX_COUNT;

  return (
    <div>
      <h2>Count : {count}</h2>

      <button onClick={handleIncrement} disabled={isMax}>
        +
      </button>

      <button onClick={handleDecrement} disabled={isMin}>
        -
      </button>

      <button onClick={handleReset}>Reset</button>

      {isMin && <p>Minimum limit reached</p>}

      {isMax && <p>Maximum limit reached</p>}
    </div>
  );
}

export default CounterLimit;
1️⃣5️⃣ Common Mistakes

❌ Mistake 1:

if (count > MAX_COUNT)

Better:

if (count >= MAX_COUNT)

Because if count is already 10, we should stop.

❌ Mistake 2:

Only disabling button but no logic check.

Better:

Disable button + protect inside function

❌ Mistake 3:

Using state for fixed values.

const [maxCount, setMaxCount] = useState(10);

Not needed if max count never changes.

🧠 Revision Card
Counter Limit

↓

What changes?

↓

count

↓

Need state?

↓

Yes, one state

↓

MIN and MAX are fixed

↓

Use constants

↓

Click +

↓

If count >= MAX

↓

Stop

↓

Else increase
Click -

↓

If count <= MIN

↓

Stop

↓

Else decrease

Senior Tip:

UI safety

↓

disabled button
Logic safety

↓

check inside handler

Best interview answer:

Use both.

# >>>>>>>>


🚀 Question 4 — Reset Counter

🎯 Interview Question

Build a counter with Increment, Decrement and Reset buttons.

Reset should bring the counter back to its initial value.

1️⃣ First Understand the Problem

UI:

Count : 0

[ + ] [ - ] [ Reset ]

Features:

✅ Increase count
✅ Decrease count
✅ Reset count back to 0

2️⃣ What Changes On Screen?

Only one thing changes:

count

So we need one state.

3️⃣ What State Do We Need?
const [count, setCount] = useState(0);

0 is the initial value.

Reset means:

Bring count back to initial value
4️⃣ Code
import { useState } from "react";

function ResetCounter() {
  const INITIAL_COUNT = 0;

  const [count, setCount] = useState(INITIAL_COUNT);

  function handleIncrement() {
    setCount(prev => prev + 1);
  }

  function handleDecrement() {
    setCount(prev => prev - 1);
  }

  function handleReset() {
    setCount(INITIAL_COUNT);
  }

  return (
    <div>
      <h2>Count : {count}</h2>

      <button onClick={handleIncrement}>+</button>

      <button onClick={handleDecrement}>-</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default ResetCounter;
5️⃣ Understand Reset Logic
const INITIAL_COUNT = 0;

This is the starting value.

const [count, setCount] = useState(INITIAL_COUNT);

First render:

count = 0

Reset button:

function handleReset() {
  setCount(INITIAL_COUNT);
}

Meaning:

Set count back to 0
6️⃣ Easy Flow

Current screen:

Count : 5

User clicks Reset:

Click Reset

↓

handleReset()

↓

setCount(0)

↓

React schedules update

↓

Component runs again

↓

count becomes 0

↓

Screen shows Count : 0
7️⃣ Why Use INITIAL_COUNT Constant?

Instead of writing:

setCount(0);

We write:

setCount(INITIAL_COUNT);

Why?

Because it is cleaner.

If tomorrow initial value becomes 10, change only one place:

const INITIAL_COUNT = 10;

Everything still works.

8️⃣ What To Say In Interview

Only count changes on screen, so I used one state. I kept the initial value in a constant called INITIAL_COUNT. Increment and decrement update the count using functional update. Reset simply sets the count back to INITIAL_COUNT. This makes the code cleaner and easier to change later.

9️⃣ Follow-up Questions
❓Q1. What happens if count is already 0 and user clicks Reset?

Nothing visible changes.

Old count = 0
New count = 0

React sees same value, so UI remains same.

❓Q2. Can reset value be something other than 0?

Yes.

Example:

const INITIAL_COUNT = 5;

Now reset means:

Back to 5
❓Q3. Should reset use functional update?

Not needed.

This is enough:

setCount(INITIAL_COUNT);

Why?

Because reset does not depend on previous count.

It directly sets a fixed value.

🔟 Common Mistakes

❌ Writing reset like this:

setCount(count - count);

Bad style.

Better:

setCount(INITIAL_COUNT);

❌ Forgetting handler:

<button onClick={setCount(0)}>Reset</button>

Wrong.

This runs immediately during render.

Correct:

<button onClick={handleReset}>Reset</button>

or

<button onClick={() => setCount(0)}>Reset</button>
🧠 Revision Card
Reset Counter

↓

What changes?

↓

count

↓

Need state?

↓

Yes

↓

Initial value

↓

INITIAL_COUNT

↓

Reset click

↓

setCount(INITIAL_COUNT)

↓

Component runs again

↓

UI shows initial count

Senior Tip:

When next value is fixed

↓

setCount(value)

When next value depends on previous value

↓

setCount(prev => ...)

# >>>>>>>

🚀 Question 5 — Like Button

🎯 Interview Question

Build a Like button.

When the user clicks the button:

If not liked → Like ❤️
If already liked → Unlike 🤍

UI:

🤍 Like

Click

↓

❤️ Liked

Click Again

↓

🤍 Like
1️⃣ First Understand the Problem

Don't start coding immediately.

Ask yourself,

What are we building?

A button that changes its state every time the user clicks it.

Features:

✅ Like

✅ Unlike

✅ Change button text

✅ Change icon

Simple.

2️⃣ Think Like React

Ask one question.

What changes on the screen?

Answer:

Like status

Because the button changes from

🤍 Like

to

❤️ Liked

React needs to remember whether the item is liked.

So we need State.

3️⃣ What State Do We Need?
const [liked, setLiked] = useState(false);

Let's understand every part.

liked

Current status.

Example:

false

or

true
setLiked

Updates the state.

Think of it like:

React...

Next time you render,

use this new value.
false

Initial value.

When the component renders for the first time,

Not Liked
4️⃣ Why Boolean State?

Ask yourself,

How many possibilities are there?

Liked

Not Liked

Only two.

So a Boolean is perfect.

true

false

Much better than

"liked"

"not-liked"
5️⃣ Code
import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <div>
      <button onClick={handleLike}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}

export default LikeButton;
6️⃣ Explain Every Line
Create state
const [liked, setLiked] = useState(false);

Initially,

liked = false
Click handler
function handleLike() {
  setLiked(!liked);
}

Meaning:

If true

↓

Make it false

If false

↓

Make it true
Display text
{liked ? "❤️ Liked" : "🤍 Like"}

Meaning:

If liked is true

↓

Show

❤️ Liked

Otherwise

↓

🤍 Like
7️⃣ What Does !liked Mean?

Suppose

liked = false

Then

!liked

becomes

true

Suppose

liked = true

Then

!liked

becomes

false

Easy remember:

!

↓

Opposite
8️⃣ Dry Run

Current screen

🤍 Like

Current state

liked = false

User clicks button.

Flow

Click

↓

handleLike()

↓

setLiked(!false)

↓

setLiked(true)

↓

React schedules update

↓

Component runs again

↓

liked becomes true

↓

New JSX created

↓

Screen shows

❤️ Liked

Click again

liked = true

↓

!true

↓

false

↓

Screen becomes

🤍 Like
9️⃣ React Internal Flow
Button Click

↓

handleLike()

↓

setLiked()

↓

React schedules state update

↓

Current event finishes

↓

Component runs again

↓

liked has new value

↓

New JSX created

↓

React compares JSX

↓

Updates button text only

↓

UI updates

Easy Remember

Click

↓

Toggle State

↓

Component Runs Again

↓

Button Updates
🔟 What To Say In Interview

"Only the like status changes, so I created one Boolean state called liked. Initially it is false. On every button click, I update it to the opposite value using !liked. React re-renders the component and the button text changes using conditional rendering."

1️⃣1️⃣ Interview Follow-up Questions
❓Q1. Why use Boolean instead of String?

Because only two states exist.

true

false

is simpler than

"liked"

"not-liked"
❓Q2. Can we use functional update?

Yes.

Production version:

function handleLike() {
  setLiked(prev => !prev);
}

This is the preferred approach because it always uses the latest state.

❓Q3. What does ? : mean?

This is the ternary operator.

Syntax:

condition ? value1 : value2

Meaning:

Condition true

↓

First value

Condition false

↓

Second value

Example:

{liked ? "❤️ Liked" : "🤍 Like"}
❓Q4. Why didn't we create two states?

Like this:

const [liked, setLiked] = useState(false);
const [buttonText, setButtonText] = useState("Like");

Not needed.

Because

Button text

↓

depends on liked

We should not store duplicate information in state.

1️⃣2️⃣ Senior Solution
import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(prev => !prev);
  }

  return (
    <button onClick={handleLike}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}

export default LikeButton;

Notice:

Functional update

↓

Safer

↓

Preferred in production
1️⃣3️⃣ Common Mistakes

❌ Creating extra state

const [buttonText, setButtonText] = useState("Like");

Not needed.

❌ Forgetting to invert state

setLiked(true);

Now it can never become false.

❌ Calling function during render

<button onClick={handleLike()}>

Wrong.

Correct:

<button onClick={handleLike}>
🧠 Revision Card
Like Button

↓

What changes?

↓

Like status

↓

Need State?

↓

Yes

↓

Which Hook?

↓

useState

↓

State Type?

↓

Boolean

↓

Click

↓

setLiked(prev => !prev)

↓

Component runs again

↓

Button text changes

# >>>>>>>>>>>>>>


