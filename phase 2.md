#### >>> 📖 Phase 2


📖 Topic 3.1 — JSX Syntax

Before learning JSX Syntax, remember:

JSX ≠ HTML

JSX looks like HTML
but it is JavaScript syntax.

Many developers spend years thinking JSX is HTML.

It is not.

First Question

Is this HTML?

<h1>Hello Likan</h1>

Looks like HTML.

But React treats it as:

React.createElement(
  "h1",
  null,
  "Hello Likan"
)

So JSX is actually:

A JavaScript syntax
for creating React Elements.
Why JSX Was Created

Imagine writing React without JSX.

React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Hello"
  ),
  React.createElement(
    "button",
    null,
    "Login"
  )
)

Hard to read.

With JSX:

<div>
  <h1>Hello</h1>
  <button>Login</button>
</div>

Much easier.

That is the main reason JSX exists.

Rule 1 — JSX Must Return One Parent Element

This is the most famous JSX rule.

❌ Invalid

function App() {
  return (
    <h1>Hello</h1>
    <button>Login</button>
  );
}

Question:

Which element should React return?

h1 ?

or

button ?

React expects ONE root element.

✅ Valid

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <button>Login</button>
    </div>
  );
}

Now React returns:

div

as the root.

Why?

Remember React Element Tree:

div
├── h1
└── button

Every tree needs one root node.

React follows the same rule.

Rule 2 — Use Fragments When You Don't Want Extra DOM

Instead of:

<div>
  <h1>Hello</h1>
  <button>Login</button>
</div>

You can write:

<>
  <h1>Hello</h1>
  <button>Login</button>
</>

This creates:

Fragment
├── h1
└── button

No extra div added to DOM.

We'll study Fragments in detail later.

Rule 3 — Every Tag Must Be Closed

HTML allows:

<input>

JSX does not.

❌ Invalid

<input>

✅ Valid

<input />

❌ Invalid

<img>

✅ Valid

<img />

Common self-closing tags:

<input />
<img />
<hr />
<br />
<link />
Why?

JSX follows JavaScript parser rules.

React needs explicit closing.

Rule 4 — Attributes Look Like JavaScript

HTML:

<input type="text">

JSX:

<input type="text" />

Looks similar.

But there are important differences.

Rule 5 — Use className Instead of class

HTML:

<div class="container">

JSX:

<div className="container">

Why?

Because:

class

is a JavaScript keyword.

Example:

class User {}

Since JSX becomes JavaScript, React uses:

className

instead.

Rule 6 — Use htmlFor Instead of for

HTML:

<label for="name">

JSX:

<label htmlFor="name">

Why?

Because:

for

already exists in JavaScript.

for (let i = 0; i < 10; i++) {}

So React uses:

htmlFor

instead.

Rule 7 — JSX Is Case Sensitive

HTML:

<button>

lowercase.

React Components:

<Button />

uppercase.

This is extremely important.

Lowercase:

<button />

React thinks:

HTML Element

Uppercase:

<Button />

React thinks:

Component

Example:

function Button() {
  return <button>Login</button>;
}

Usage:

<Button />
Rule 8 — JSX Can Contain JavaScript

This is JSX's superpower.

Use:

{}

to enter JavaScript mode.

Example:

const name = "Likan";

<h1>Hello {name}</h1>

Result:

Hello Likan

Another example:

const age = 30;

<h1>{age}</h1>

Output:

30
JSX Tree Mental Model

JSX:

<div>
  <h1>Hello</h1>
  <button>Login</button>
</div>

React sees:

div
├── h1
└── button

React is always thinking in trees.

Never in HTML pages.

Easy Diagram
JSX

<div>
  <h1>Hello</h1>
  <button>Login</button>
</div>

          ↓

React Element Tree

div
├── h1
└── button

          ↓

ReactDOM

          ↓

DOM Tree

div
├── h1
└── button

          ↓

Screen
Senior Engineer Mental Model

Junior developers think:

JSX = HTML

Senior developers think:

JSX
 ↓
Syntax
 ↓
React Elements
 ↓
Element Tree
 ↓
Rendering

JSX is just a convenient syntax.

Nothing more.

Interview Questions
Q: What is JSX?

Answer:

JSX is a syntax extension for JavaScript that allows developers to write UI in a readable HTML-like syntax. JSX is transformed into React Element creation code.

Q: Is JSX HTML?

Answer:

No. JSX looks similar to HTML but is actually JavaScript syntax that gets transformed into React Elements.

Q: Why must JSX have one parent element?

Answer:

Because React builds a tree structure, and every tree requires a single root node.

Q: Why do we use className instead of class?

Answer:

Because class is a reserved JavaScript keyword.

Q: Why do we use htmlFor instead of for?

Answer:

Because for is already a JavaScript keyword.

🧠 Revision Card
JSX Syntax

JSX ≠ HTML

JSX
 ↓
React Elements

Rules:

✓ One Parent Element
✓ Close Every Tag
✓ Use className
✓ Use htmlFor
✓ Components Start With Capital Letter
✓ JavaScript Inside {}

Examples:

<div></div>

<input />

<Button />

<h1>{name}</h1>

Remember:

JSX is syntax,
not HTML.

# >>

📖 Topic 3.2 — JSX Expressions

Before learning JSX Expressions, remember:

JSX is JavaScript.

Not HTML.

Because JSX becomes:

React.createElement(...)

it can use JavaScript.

That is why React allows:

{name}

inside JSX.

First Question

How does React know what value to show here?

const name = "Likan";

<h1>Hello {name}</h1>

Output:

Hello Likan

What is:

{name}

called?

Answer:

JSX Expression
What Is A JSX Expression?

Definition:

Any JavaScript expression
written inside {}

Remember:

{}
=
Enter JavaScript Mode

Everything outside:

<h1>Hello</h1>

is JSX.

Everything inside:

{name}

is JavaScript.

Visual Mental Model
<h1>Hello {name}</h1>

React sees:

JSX

Hello

+
JavaScript

name

Result:

Hello Likan
Example 1 — Variable
const name = "Likan";

function App() {
  return <h1>Hello {name}</h1>;
}

Output:

Hello Likan
Example 2 — Number
const age = 33;

<h1>{age}</h1>

Output:

33
Example 3 — Math Expression
<h1>{10 + 5}</h1>

Output:

15

Why?

Because:

10 + 5

is a JavaScript expression.

Example 4 — Variables + Math
const age = 33;

<h1>{age + 1}</h1>

Output:

34
Example 5 — String Methods
const name = "likan";

<h1>{name.toUpperCase()}</h1>

Output:

LIKAN
Example 6 — Object Property
const user = {
  name: "Likan",
  age: 33
};

<h1>{user.name}</h1>

Output:

Likan
Example 7 — Function Call
function getName() {
  return "Likan";
}

<h1>{getName()}</h1>

Output:

Likan

Because:

getName()

returns:

Likan
Example 8 — Array Length
const users = [
  "John",
  "Mike",
  "David"
];

<h1>{users.length}</h1>

Output:

3
Why Curly Braces?

Question:

Why not write:

<h1>Hello name</h1>

?

Because React treats this as text.

Output:

Hello name

Literally.

Curly braces tell React:

Stop reading JSX

Start evaluating JavaScript
Easy Diagram
JSX

<h1>Hello {name}</h1>

      ↓

JSX Text
+
JavaScript Expression

      ↓

Hello Likan
What Can Go Inside {} ?

Anything that produces a value.

Examples:

✅ Variables

{name}

✅ Numbers

{100}

✅ Math

{10 + 20}

✅ Function Calls

{getUser()}

✅ Object Properties

{user.name}

✅ Array Length

{users.length}

✅ Ternary Operators

{
  isLoggedIn
    ? "Welcome"
    : "Login"
}
Important Rule

React expects:

An Expression

not

A Statement

This is one of the most important JSX rules.

Expression vs Statement

Expression:

10 + 20

Produces a value:

30

✅ Allowed

Expression:

user.name

Produces a value:

Likan

✅ Allowed

Expression:

getName()

Produces a value.

✅ Allowed

What Cannot Go Inside {} ?
❌ if Statement
{
  if (age > 18) {
    return "Adult";
  }
}

Error.

Why?

Because:

if

is a statement.

Not an expression.

❌ for Loop
{
  for(let i=0; i<5; i++) {}
}

Error.

Because:

for

is a statement.

❌ while Loop
{
  while(true) {}
}

Error.

Statement.

Then How Do We Handle Conditions?

Use:

{
  age > 18
    ? "Adult"
    : "Minor"
}

Output:

Adult

Ternary is an expression.

So it works.

Real World Example
const user = {
  name: "Likan"
};

const notifications = 5;
<div>
  <h1>
    Welcome {user.name}
  </h1>

  <p>
    Notifications:
    {notifications}
  </p>
</div>

Output:

Welcome Likan

Notifications: 5
React Evaluation Process
<h1>Hello {name}</h1>

Step 1

Hello {name}

Step 2

React evaluates:

name

Step 3

Suppose:

name = "Likan";

Step 4

React creates:

Hello Likan

Step 5

React Element:

{
  type: "h1",
  props: {
    children: "Hello Likan"
  }
}
Senior Engineer Mental Model

When React sees:

{name}

it does:

evaluate(name)

and inserts the result into the React Element Tree.

Think:

JSX
     +
JavaScript Expressions
     ↓
React Elements
Interview Questions
Q: What is a JSX Expression?

Answer:

A JSX Expression is any JavaScript expression written inside curly braces {} within JSX.

Q: Why do we use {} in JSX?

Answer:

Curly braces allow JavaScript expressions to be evaluated inside JSX.

Q: Can we use variables inside JSX?

Answer:

Yes.

Example:

{name}
Q: Can we use function calls inside JSX?

Answer:

Yes.

Example:

{getName()}
Q: Can we use if statements inside JSX?

Answer:

No. if is a statement, not an expression.

Q: Can we use ternary operators inside JSX?

Answer:

Yes. Ternary operators are expressions.

🧠 Revision Card
JSX Expressions

Definition:

Any JavaScript Expression
inside {}

Examples:

{name}

{100}

{10 + 20}

{user.name}

{getName()}

{users.length}

{isLoggedIn ? "Welcome" : "Login"}

--------------------------------

Allowed

✓ Variables
✓ Numbers
✓ Math
✓ Function Calls
✓ Properties
✓ Ternary Operators

--------------------------------

Not Allowed

✗ if
✗ for
✗ while

Because JSX expects:

Expression

not

Statement

--------------------------------

{} = Enter JavaScript Mode

# >>

📖 Topic 3.3 — JSX vs HTML

This is one of the most important React interview topics.

Most developers think:

JSX = HTML

❌ Wrong.

JSX only looks like HTML.

Internally:

JSX
 ↓
JavaScript
 ↓
React Elements

HTML:

HTML
 ↓
Browser
 ↓
DOM

They are different technologies.

First Question

Is this HTML?

<h1>Hello</h1>

Looks like HTML.

But React converts it into:

React.createElement(
  "h1",
  null,
  "Hello"
)

So this is actually:

JavaScript Syntax

not HTML.

Mental Model
HTML
=
Browser Language

JSX
=
JavaScript Syntax
for Creating React Elements
Difference 1 — class vs className

HTML:

<div class="container">
</div>

JSX:

<div className="container">
</div>
Why?

Because:

class

is already a JavaScript keyword.

Example:

class User {}

React cannot use:

class

inside JavaScript.

So React uses:

className

instead.

Difference 2 — for vs htmlFor

HTML:

<label for="name">
 Name
</label>

JSX:

<label htmlFor="name">
 Name
</label>
Why?

Because:

for

already exists in JavaScript.

for(let i=0; i<10; i++) {}

React avoids conflicts by using:

htmlFor
Difference 3 — Self Closing Tags

HTML allows:

<input>

JSX does not.

❌ Invalid

<input>

✅ Valid

<input />

More examples:

<img />

<hr />

<br />

Every JSX tag must be closed.

Difference 4 — Event Names

HTML:

<button onclick="save()">
 Save
</button>

JSX:

<button onClick={save}>
 Save
</button>

Notice:

onclick

became:

onClick

Camel Case.

More examples:

HTML:

onchange

JSX:

onChange

HTML:

onmouseover

JSX:

onMouseOver
Why?

React follows JavaScript naming conventions.

Difference 5 — Inline Styles

HTML:

<div style="color:red">
</div>

JSX:

<div style={{ color: "red" }}>
</div>

Looks weird right?

Let's understand.

HTML Style

style="color:red"

is a string.

JSX Style

style={{ color: "red" }}

is an object.

Break it down:

Outer braces:

{}

Enter JavaScript mode.

Inner braces:

{
  color: "red"
}

JavaScript object.

Visual:

style={
  {
    color: "red"
  }
}
Difference 6 — CSS Properties

HTML:

background-color

JSX:

backgroundColor

HTML:

font-size

JSX:

fontSize

HTML:

margin-top

JSX:

marginTop

Reason:

JavaScript objects use camelCase.

Difference 7 — JavaScript Inside Markup

HTML:

<h1>Hello John</h1>

Static.

JSX:

const name = "Likan";

<h1>Hello {name}</h1>

Dynamic.

Output:

Hello Likan

This is one of JSX's biggest advantages.

Difference 8 — Components

HTML only knows:

<div>
<button>
<h1>

etc.

JSX knows Components.

<Button />

React understands:

Component

HTML cannot do this.

<Button />

Browser has no idea what Button means.

Difference 9 — Boolean Attributes

HTML:

<input disabled>

JSX:

<input disabled />

or

<input disabled={true} />

Dynamic example:

<input disabled={isLoading} />

Very powerful.

Difference 10 — Comments

HTML:

<!-- Hello -->

JSX:

{/* Hello */}

Example:

<div>
  {/* User Profile */}
  <h1>Hello</h1>
</div>
Comparison Table
HTML	JSX
class	className
for	htmlFor
onclick	onClick
onchange	onChange
style="color:red"	style={{color:"red"}}
background-color	backgroundColor
<!-- comment -->	{/* comment */}
Static	Dynamic
Browser Syntax	JavaScript Syntax
Easy Diagram

HTML

    ↓

Browser

    ↓

DOM

JSX

    ↓

Babel

    ↓

React.createElement()

    ↓

React Element

    ↓

ReactDOM

    ↓

DOM

Senior Engineer Mental Model

Junior developers think:

JSX = HTML

Senior developers think:

JSX
=
JavaScript Syntax

that

creates React Elements

This distinction becomes extremely important when debugging React applications.

Interview Questions
Q: Is JSX the same as HTML?

Answer:

No. JSX looks similar to HTML but is actually JavaScript syntax that gets transformed into React Element creation code.

Q: Why do we use className instead of class?

Answer:

Because class is a reserved JavaScript keyword.

Q: Why do we use htmlFor instead of for?

Answer:

Because for already exists as a JavaScript keyword.

Q: Why are event handlers camelCase in JSX?

Answer:

Because JSX follows JavaScript naming conventions.

Q: Why is style an object in JSX?

Answer:

Because JSX uses JavaScript objects for inline styles rather than CSS strings.

🧠 Revision Card

JSX vs HTML

JSX ≠ HTML

HTML
↓
Browser
↓
DOM

JSX
↓
Babel
↓
React Elements
↓
ReactDOM
↓
DOM

Differences

class → className
for → htmlFor
onclick → onClick
onchange → onChange

style="..."
↓
style={{...}}

background-color
↓
backgroundColor

   ↓

{/* comment */}

HTML = Static

JSX = Dynamic + JavaScript

Remember:

JSX only LOOKS like HTML.
It is actually JavaScript syntax.

# >>

📖 Topic 3.4 — Babel Transformation

This is one of the most important React topics.

Until now you've learned:

JSX
 ↓
React.createElement()
 ↓
React Element

But a huge question remains:

Who converts JSX into React.createElement()?

Answer:

Babel
First Question

Can JavaScript understand this?

<h1>Hello Likan</h1>

Answer:

❌ No

JavaScript understands:

const age = 33;

JavaScript understands:

console.log("Hello");

But JavaScript does NOT understand:

<h1>Hello</h1>

because this is JSX.

Then Why Doesn't It Crash?

Because before the browser sees the code:

JSX
 ↓
Babel
 ↓
JavaScript

Babel converts JSX into normal JavaScript.

What Problem Does Babel Solve?

Imagine browser receives:

<h1>Hello</h1>

Browser:

What is this?

Syntax Error

Browser only understands JavaScript.

So Babel acts as a translator.

Easy Analogy

Imagine:

You know English

Someone speaks Japanese

Need:

Translator

Similarly:

JSX
 ↓
Babel
 ↓
JavaScript

Babel is the translator.

What Is Babel?

Definition:

Babel is a JavaScript compiler
that transforms modern JavaScript
and JSX into browser-understandable JavaScript.

Remember:

Babel
=
Compiler
JSX Transformation Example

You write:

<h1>Hello</h1>

Babel transforms:

React.createElement(
  "h1",
  null,
  "Hello"
);

React then creates:

{
  type: "h1",
  props: {
    children: "Hello"
  }
}
Visual Flow

You Write

    ↓

Babel

    ↓

React.createElement(
"h1",
null,
"Hello"
)

    ↓

React Element

{
type: "h1",
props: {
children: "Hello"
}
}

What Happens Inside Babel?

Babel doesn't directly convert JSX.

There are multiple steps.

Source Code
      ↓
Parser
      ↓
AST
      ↓
Transformations
      ↓
Generated JavaScript
Step 1 — Source Code

You write:

<h1>Hello</h1>

This is source code.

Step 2 — Parsing

Babel reads code character by character.

<
h
1
>
Hello

and tries to understand structure.

Step 3 — AST Creation

Babel creates:

AST

which means:

Abstract Syntax Tree
What Is AST?

Think:

Code
      ↓
Tree Representation

Example:

<h1>Hello</h1>

AST (simplified):

JSXElement
│
├── Tag: h1
│
└── Text: Hello
Why AST?

Because computers don't work directly with source code.

Computers prefer:

Tree Structures

Trees are easier to analyze.

Example

JSX:

<div>
  <h1>Hello</h1>
</div>

AST:

JSXElement(div)
│
└── JSXElement(h1)
     │
     └── Text(Hello)
Step 4 — Transformation

Now Babel transforms AST.

Example:

AST:

JSXElement(h1)

becomes:

React.createElement(
  "h1",
  null,
  "Hello"
)

Step 5 — Generate JavaScript

Final output:

{
  type: "h1",
  props: {
    children: "Hello"
  }
}

Now browser understands it.

Complete Pipeline Diagram

Source Code

     ↓

Parser

     ↓

AST

JSXElement
│
├── h1
└── Hello

     ↓

Transformation

     ↓

React.createElement(
"h1",
null,
"Hello"
)

     ↓

React Element

     ↓

ReactDOM

     ↓

DOM

Why AST Is Important

Later React tooling uses AST for:

Linting
Formatting
Type Checking
Code Analysis
Compilation
Optimization

Examples:

ESLint
Prettier
TypeScript
Babel

all work using ASTs.

Modern React (React 17+)

Historically Babel generated:

React.createElement(...)

Modern React often generates:

jsx(...)

from the new JSX runtime.

Example:

<h1>Hello</h1>

can become:

jsx(
  "h1",
  {
    children: "Hello"
  }
)

But mentally you should still think:

JSX
 ↓
React Element

because the concept is unchanged.

Where Does Babel Run?

Not in the browser.

Usually:

Your Code
 ↓
Vite
 ↓
Babel
 ↓
Bundle
 ↓
Browser

or

Your Code
 ↓
Webpack
 ↓
Babel
 ↓
Bundle
 ↓
Browser
Why React Needs Babel

Without Babel:

<h1>Hello</h1>

would throw:

Syntax Error

because browsers don't understand JSX.

Babel converts JSX into valid JavaScript.

Senior Engineer Mental Model

When you write:

<Button />

Think:

Source Code
      ↓
AST
      ↓
Transformation
      ↓
React.createElement()
      ↓
React Element
      ↓
Rendering

This is the actual pipeline.

Interview Questions
Q: What is Babel?

Answer:

Babel is a JavaScript compiler that converts JSX and modern JavaScript into browser-compatible JavaScript.

Q: Why does React need Babel?

Answer:

Because browsers do not understand JSX syntax.

Q: What is an AST?

Answer:

AST (Abstract Syntax Tree) is a tree representation of source code used by compilers and tools for analysis and transformation.

Q: Does Babel create DOM nodes?

Answer:

No. Babel only transforms source code. ReactDOM later creates DOM nodes.


🧠 Revision Card

Babel Transformation

Problem:

Browser does not understand JSX

<h1>Hello</h1>

Solution:

Babel

Pipeline:

JSX
↓
Parser
↓
AST
↓
Transformation
↓
React.createElement()
↓
React Element
↓
ReactDOM
↓
DOM

Remember:

# Babel

Compiler

# AST

Tree Representation
of Code

Babel does NOT create DOM.

Babel only transforms code.


📖 React.createElement() vs jsx()

Before React 17:

<div className="container">
  <h1>Hello Likan</h1>

  <button type="button">
    Login
  </button>
</div>

Babel generated:

React.createElement(...)

After React 17:

The same JSX often becomes:

jsx(...)
First Question

Do both create the same React Element?

Answer:

✅ Yes

Both ultimately create:

{
  type: "div",
  props: {
    className: "container",

    children: [
      {
        type: "h1",
        props: {
          children: "Hello Likan"
        }
      },

      {
        type: "button",
        props: {
          type: "button",
          children: "Login"
        }
      }
    ]
  }
}
What Does React.createElement Expect?

Given:

<div className="container">
  <h1>Hello Likan</h1>

  <button type="button">
    Login
  </button>
</div>

Babel generates:

React.createElement(
  "div",
  {
    className: "container"
  },

  React.createElement(
    "h1",
    null,
    "Hello Likan"
  ),

  React.createElement(
    "button",
    {
      type: "button"
    },
    "Login"
  )
)

Notice the signature:

React.createElement(
  type,
  props,
  child1,
  child2,
  child3
)

React.createElement expects:

1. type

2. props

3. children
   passed separately

For the button:

React.createElement(
  "button",
  {
    type: "button"
  },
  "Login"
)

React receives:

type
=
button

props
=
{
  type: "button"
}

child
=
"Login"
What Does React.createElement Return?

It returns:

{
  type: "button",

  props: {
    type: "button",

    children: "Login"
  }
}

Notice:

React moves children
into props.children

internally.

What Does jsx() Expect?

The same JSX:

<div className="container">
  <h1>Hello Likan</h1>

  <button type="button">
    Login
  </button>
</div>

becomes:

jsx(
  "div",
  {
    className: "container",

    children: [
      jsx(
        "h1",
        {
          children: "Hello Likan"
        }
      ),

      jsx(
        "button",
        {
          type: "button",

          children: "Login"
        }
      )
    ]
  }
)

Notice the signature:

jsx(
  type,
  props
)

Only 2 parameters.

React receives:

jsx(
  "button",
  {
    type: "button",

    children: "Login"
  }
)

Everything already exists inside props.

React.createElement vs jsx

React.createElement:

React.createElement(
  "button",
  {
    type: "button"
  },
  "Login"
)

Children outside props.

jsx:

jsx(
  "button",
  {
    type: "button",

    children: "Login"
  }
)

Children already inside props.

What Does jsx() Return?

Exactly the same thing:

{
  type: "button",

  props: {
    type: "button",

    children: "Login"
  }
}

Same React Element.

Visual Comparison
React.createElement

Input:

React.createElement(
  "button",
  {
    type: "button"
  },
  "Login"
)

React internally does:

Take child

↓

Create props.children

↓

Build React Element
jsx

Input:

jsx(
  "button",
  {
    type: "button",

    children: "Login"
  }
)

React internally does:

Props already ready

↓

Build React Element

Less work.

Why Did React Create jsx()?

Because React.createElement has extra processing.

React.createElement:

React.createElement(
  type,
  props,
  child1,
  child2,
  child3
)

React must:

Collect children

↓

Create props.children

↓

Normalize structure

↓

Create React Element

jsx:

jsx(
  type,
  {
    ...props,
    children
  }
)

Everything already prepared.

Full Flow

JSX

<div className="container">
  <h1>Hello Likan</h1>

  <button type="button">
    Login
  </button>
</div>

↓

Old Babel

React.createElement(...)

or

Modern Babel

jsx(...)

↓

Function Executes

↓

{
  type: "div",

  props: {
    className: "container",

    children: [...]
  }
}

↓

React Element

↓

ReactDOM

↓

DOM

↓

Screen

Most Important Understanding

Many developers think:

Babel
↓
React Element

Wrong.

Actual flow:

JSX

↓

Babel

↓

React.createElement(...)
or
jsx(...)

↓

Execution

↓

React Element

Babel only generates code.

The function execution creates the React Element.

🧠 Revision Card
React.createElement()

Expects:

(type, props, children)

Example:

React.createElement(
  "button",
  {
    type: "button"
  },
  "Login"
)

--------------------------------

jsx()

Expects:

(type, props)

Example:

jsx(
  "button",
  {
    type: "button",
    children: "Login"
  }
)

--------------------------------

Both Return

{
  type,
  props
}

--------------------------------

Difference

React.createElement

children outside props

--------------------------------

jsx

children already inside props

--------------------------------

Same Result

Different Runtime

--------------------------------

Babel does NOT create
React Elements.

Generated function executes
and creates React Elements.

# >>


📖 3.5 JSX Compilation
First Question

You write:

<div className="container">
  <h1>Hello Likan</h1>

  <button type="button">
    Login
  </button>
</div>

Question:

Can the browser execute this directly?

Answer:

❌ No

Browser understands:

const name = "Likan";

Browser understands:

console.log("Hello");

Browser does NOT understand:

<div>Hello</div>

because JSX is not JavaScript.

Then Why Doesn't It Crash?

Because before the browser sees JSX:

JSX

↓

Compilation

↓

JavaScript

↓

Browser

This process is called:

JSX Compilation
What Is JSX Compilation?

Definition:

The process of converting JSX
into executable JavaScript code.
Complete Flow
JSX

↓

Lexer

↓

Tokens

↓

Parser

↓

AST

↓

Transformer

↓

jsx(...)
or
React.createElement(...)

↓

Execution

↓

React Element

↓

ReactDOM

↓

DOM

↓

Screen

Don't panic.

We'll learn each step.

Step 1 — Source Code

This is what developers write.

<div className="container">
  <h1>Hello Likan</h1>

  <button type="button">
    Login
  </button>
</div>

Called:

Source Code
Step 2 — Lexer

Question:

How does Babel read code?

It first breaks code into pieces.

Example:

<div>Hello</div>

becomes:

<
div
>
Hello
</
div
>

These pieces are called:

Tokens
What Is A Lexer?

Definition:

A Lexer converts source code
into tokens.

Think:

Sentence

↓

Words

Same idea.

Source Code vs Tokens

Source Code:

<div>Hello</div>

Tokens:

<
div
>
Hello
</
div
>

Tokens have:

No Structure

yet.

Step 3 — Parser

Now Babel understands relationships.

Input:

<
div
>
Hello
</
div
>

Output:

JSXElement(div)

└── Text(Hello)

This structure is called:

AST
What Is AST?

AST means:

Abstract Syntax Tree

Definition:

A tree representation
of source code.
Example AST

JSX:

<div className="container">
  <h1>Hello Likan</h1>

  <button type="button">
    Login
  </button>
</div>

AST:

JSXElement(div)
│
├── className=container
│
├── JSXElement(h1)
│   │
│   └── Hello Likan
│
└── JSXElement(button)
    │
    ├── type=button
    │
    └── Login
Why AST?

Computers don't like source code.

Computers prefer:

Trees

because trees are easier to analyze.

Tokens vs AST

Tokens:

<
div
>
Hello

Just pieces.

AST:

div
 └── Hello

Now relationships exist.

Step 4 — Transformer

Now Babel transforms the AST.

Input:

JSX AST

Output:

JavaScript AST

Think:

JSX Tree

↓

JavaScript Tree
Example

Input:

JSXElement(div)

Output:

CallExpression(
  jsx(...)
)



Before Transformation

JSX AST:

JSXElement(div)
│
└── Text(Hello)

Meaning:

<div>Hello</div>
What Does Babel Want?

Babel wants to eventually generate:

jsx(
  "div",
  {
    children: "Hello"
  }
)

But Babel cannot directly jump from AST to text.

First it creates another AST.

JSX AST vs JavaScript AST
JSX AST
JSXElement(div)
│
└── Text(Hello)

Babel says:

This is JSX.
JavaScript AST

Babel transforms it into:

CallExpression
│
├── Identifier(jsx)
│
├── StringLiteral("div")
│
└── ObjectExpression
     │
     └── children:"Hello"

Babel says:

This is a function call.
Why CallExpression?

Because the generated code will be:

jsx(
  "div",
  {
    children: "Hello"
  }
)

Look at it carefully.

jsx(...)

is a function call.

And AST terminology for:

someFunction(...)

is:

CallExpression
Another Example

Code:

calculate(10,20)

AST:

CallExpression
│
├── calculate
├── 10
└── 20

Code:

console.log("Hi")

AST:

CallExpression
│
├── console.log
└── "Hi"

Code:

jsx(
  "div",
  {
    children:"Hello"
  }
)

AST:

CallExpression
│
├── jsx
├── "div"
└── {children:"Hello"}

Same pattern.



Step 5 — Code Generation

Now Babel generates JavaScript.

Input:

JavaScript AST

Output:

jsx(
  "div",
  {
    className: "container"
  }
)

or older runtime:

React.createElement(...)
Important

At this point:

jsx(...)

is still:

JavaScript Code

Not a React Element yet.

Step 6 — Execution

Now JavaScript runs.

Example:

jsx(
  "button",
  {
    type: "button",
    children: "Login"
  }
)

executes.

What Does It Return?
{
  type: "button",

  props: {
    type: "button",

    children: "Login"
  }
}

React Element created.

JSX Compilation vs Rendering

Compilation:

JSX

↓

JavaScript

Done by Babel.

Rendering:

React Element

↓

DOM

Done by ReactDOM.

Important Interview Question
Does Babel Create DOM Nodes?

Answer:

❌ No

Babel only converts:

<div>Hello</div>

into:

jsx(...)

ReactDOM later creates:

<div>Hello</div>

inside the browser.

JSX Compilation Mental Model
Developer

↓

Writes JSX

↓

Compiler (Babel)

↓

JavaScript

↓

Execution

↓

React Elements

↓

ReactDOM

↓

DOM

↓

Screen
Senior Engineer Mental Model

When you see:

<Button />

Think:

JSX

↓

Compilation

↓

jsx(...)

↓

Execution

↓

React Element

↓

Rendering

↓

DOM
Interview Questions
What is JSX Compilation?

The process of converting JSX into executable JavaScript.

What is a Lexer?

Converts source code into tokens.

What is a Parser?

Converts tokens into AST.

What is AST?

A tree representation of source code.

Does Babel create React Elements?

No.

Babel generates JavaScript code.

The generated code executes and creates React Elements.

🧠 Revision Card
JSX Compilation

Source Code

↓

Lexer

↓

Tokens

↓

Parser

↓

AST

↓

Transformer

↓

JavaScript AST

↓

Code Generator

↓

jsx(...)
or
React.createElement(...)

↓

Execution

↓

React Element

↓

ReactDOM

↓

DOM

↓

Screen

----------------

Lexer
=
Tokens

Parser
=
AST

Transformer
=
New AST

Code Generator
=
JavaScript

jsx()
=
React Element

ReactDOM
=
DOM

# >>

📖 Topic 3.7 — Advanced JSX

Before learning Advanced JSX, remember:

JSX is not HTML.

JSX is JavaScript syntax that creates React Elements.

We already learned:

<h1>Hello</h1>

becomes:

jsx("h1", {
  children: "Hello"
});

Now we'll learn why JSX is called powerful.

Because JSX can do much more than just create static UI.

First Question

Can JSX contain only HTML-like tags?

<h1>Hello</h1>

No.

JSX can contain:

Variables
Expressions
Functions
Components
Arrays
Objects
Dynamic Attributes
Dynamic Styles
Conditional UI
Dynamic UI

This is what makes JSX powerful.

Advanced JSX = Dynamic UI

Normal HTML:

<h1>Hello</h1>

Always shows:

Hello

No matter what.

JSX:

const name = "Likan";

<h1>Hello {name}</h1>

Output:

Hello Likan

UI changes based on data.

This is React's superpower.

1. Variables Inside JSX

Example:

const name = "Likan";

<h1>Hello {name}</h1>

Output:

<h1>Hello Likan</h1>

What does React see?

<h1>Hello {name}</h1>

becomes:

jsx("h1", {
  children: `Hello ${name}`
});

Then:

name = "Likan"

Result:

Hello Likan
Why Curly Braces?

Curly braces mean:

{}

Enter JavaScript Mode.

Example:

<h1>{name}</h1>

means:

Evaluate JavaScript
Insert Result
2. Expressions Inside JSX

Example:

<h1>{10 + 5}</h1>

Output:

15

Example:

const age = 30;

<h1>{age + 1}</h1>

Output:

31

React evaluates expression first.

Then inserts result.

JSX Rule

Inside:

{}

Only expressions are allowed.

✅ Valid

{name}

{age + 1}

{10 * 20}

{isLoggedIn}

❌ Invalid

{
  if(age > 18)
}
{
  for(...)
}
{
  while(...)
}

Why?

Because React expects:

Expression
      ↓
Returns Value

Statements do not return values.

3. Calling Functions Inside JSX

Function:

function getName() {
  return "Likan";
}

JSX:

<h1>{getName()}</h1>

Output:

Likan

Flow:

getName()
      ↓
"Likan"
      ↓
Rendered
4. Components Inside JSX

Component:

function Welcome() {
  return <h1>Hello</h1>;
}

Usage:

<Welcome />

JSX transforms to:

jsx(Welcome, {})

React Element:

{
  type: Welcome,
  props: {}
}

React then executes:

Welcome()

Returns:

<h1>Hello</h1>
Important Mental Model

Component:

Welcome

is a Function.

Component Usage:

<Welcome />

creates a React Element.

Flow:

<Welcome />
      ↓
React Element
      ↓
React Executes Component
      ↓
Returns More Elements
5. Dynamic Attributes

Normal:

<input type="text" />

Dynamic:

const inputType = "password";

<input type={inputType} />

Output:

<input type="password">

React evaluates:

inputType

first.

Then inserts result.

6. Dynamic Styles

React style expects:

Object

Example:

const style = {
  color: "red",
  fontSize: "20px"
};

JSX:

<h1 style={style}>
  Hello
</h1>

Output:

<h1 style="color:red;font-size:20px">
Why Double Curly Braces?

Example:

<h1 style={{ color: "red" }}>

Looks strange.

Outer braces:

{}

Mean:

Enter JavaScript Mode

Inner braces:

{
  color: "red"
}

Mean:

JavaScript Object

So:

{{ color: "red" }}

means:

JavaScript Mode
       ↓
Object Literal
7. Arrays Inside JSX

Example:

const fruits = [
  "Apple",
  "Banana",
  "Mango"
];

<div>{fruits}</div>

Output:

Apple,Banana,Mango

React can render arrays.

We'll later learn proper rendering using:

map()
8. Storing JSX In Variables

Valid:

const heading =
  <h1>Hello Likan</h1>;

Usage:

<div>{heading}</div>

Output:

<h1>Hello Likan</h1>

Why?

Because JSX creates React Elements.

Example:

const heading =
  <h1>Hello</h1>;

becomes:

const heading =
  jsx("h1", {
    children: "Hello"
  });
9. Nested JSX

Example:

<div>
  <header>
    <h1>Logo</h1>
  </header>

  <main>
    <p>Content</p>
  </main>
</div>

React Element Tree:

div
├── header
│   └── h1
└── main
    └── p

React always thinks in trees.

Not pages.

Not HTML files.

Trees.

10. Functions Returning JSX

Example:

function createHeading() {
  return <h1>Hello</h1>;
}

Usage:

<div>
  {createHeading()}
</div>

Output:

<h1>Hello</h1>

Flow:

Function
    ↓
Returns JSX
    ↓
JSX → React Element
    ↓
Rendered
What React Can Render

React can render:

✅ Strings

{"Hello"}

✅ Numbers

{100}

✅ React Elements

{<h1>Hello</h1>}

✅ Arrays

{["A", "B"]}

✅ Components

<Button />

React ignores:

null
undefined
false
true

Example:

<div>{false}</div>

Output:

<div></div>

Nothing appears.

Mental Model
JSX
 ↓
JavaScript + UI
 ↓
React Elements
 ↓
Element Tree
 ↓
ReactDOM
 ↓
DOM
 ↓
Screen
Senior Engineer Mental Model

Junior Developers Think:

JSX = HTML

Senior Developers Think:

JSX
 ↓
JavaScript Syntax
 ↓
Creates React Elements
 ↓
Builds Element Tree
 ↓
React Renders UI

JSX is not markup.

JSX is executable UI description.

🎯 Interview Questions
Q: What is Advanced JSX?

Answer:

Advanced JSX refers to using JavaScript expressions, variables, functions, components, arrays, and dynamic values inside JSX to create dynamic UIs.

Q: Why do we use {} inside JSX?

Answer:

Curly braces allow us to enter JavaScript mode and evaluate expressions inside JSX.

Q: Can we call functions inside JSX?

Answer:

Yes.

{getName()}

is valid.

Q: Why does style use double braces?

Answer:

Outer braces enter JavaScript mode, and inner braces define a JavaScript object.

Q: What values can React render?

Answer:

Strings, numbers, React Elements, arrays, and components.

React ignores:

null
undefined
true
false
🧠 Revision Card
ADVANCED JSX

Variables

{name}

Expressions

{10 + 5}

Functions

{getName()}

Components

<Button />

Dynamic Attributes

<input type={inputType} />

Dynamic Styles

style={{ color: "red" }}

Arrays

{fruits}

JSX Variables

const heading = <h1>Hello</h1>

Nested JSX

div
├── header
└── main

Remember:

JSX = JavaScript + UI

JSX creates React Elements.


# >>>


📖 Topic 3.8 — React Fragments

Before learning Fragments, remember:

React requires:

return (
  <div>
    <h1>Hello</h1>
    <button>Login</button>
  </div>
);

One root element.

But sometimes:

<div>
</div>

creates unnecessary DOM.

React Fragments solve this problem.

First Question

Suppose you write:

function App() {
  return (
    <h1>Hello</h1>
    <button>Login</button>
  );
}

Valid?

❌ No

React throws an error.

Why?

Because React expects:

One Root Element

React wants:

Root
 ├── Child
 └── Child

Every tree needs one root.

Traditional Solution

Developers used:

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <button>Login</button>
    </div>
  );
}

Now valid.

React Element Tree:

div
├── h1
└── button

Problem?

That div gets added to DOM.

Result:

<div>
  <h1>Hello</h1>
  <button>Login</button>
</div>

Sometimes we don't want that extra div.

Why Extra div Can Be Bad

Example:

<ul>
  <div>
    <li>Apple</li>
    <li>Mango</li>
  </div>
</ul>

DOM:

<ul>
  <div>
    <li>Apple</li>
    <li>Mango</li>
  </div>
</ul>

Invalid HTML structure.

Example:

<table>
  <div>
    <tr>
      <td>Hello</td>
    </tr>
  </div>
</table>

Also invalid.

Extra wrappers can break layouts.

React's Solution

React Fragment.

Example:

function App() {
  return (
    <>
      <h1>Hello</h1>
      <button>Login</button>
    </>
  );
}

Valid ✅

Looks like:

<>
</>

but behaves differently.

What Is A Fragment?

Definition:

A Fragment is a special React element that groups multiple children without creating an extra DOM node.

Remember:

Group Children
Without Extra DOM
Fragment Output

JSX:

<>
  <h1>Hello</h1>
  <button>Login</button>
</>

DOM:

<h1>Hello</h1>
<button>Login</button>

Notice:

No wrapper div.

Visual Comparison

Using div:

<div>
  <h1>Hello</h1>
  <button>Login</button>
</div>

DOM:

<div>
  <h1>Hello</h1>
  <button>Login</button>
</div>

Using Fragment:

<>
  <h1>Hello</h1>
  <button>Login</button>
</>

DOM:

<h1>Hello</h1>
<button>Login</button>

No extra DOM node.

Long Form Fragment

Shorthand:

<>
  <h1>Hello</h1>
</>

Full form:

<React.Fragment>
  <h1>Hello</h1>
</React.Fragment>

Need import:

import React from "react";

or

import { Fragment } from "react";

Then:

<Fragment>
  <h1>Hello</h1>
</Fragment>

Same thing.

What JSX Becomes

Fragment JSX:

<>
  <h1>Hello</h1>
</>

Transforms roughly into:

jsx(
  React.Fragment,
  {
    children: jsx(
      "h1",
      {
        children: "Hello"
      }
    )
  }
);

Notice:

React.Fragment

is the type.

React Element:

{
  type: React.Fragment,
  props: {
    children: ...
  }
}
Fragment Element Tree

JSX:

<>
  <h1>Hello</h1>
  <button>Login</button>
</>

Tree:

Fragment
├── h1
└── button

Using div:

div
├── h1
└── button

Fragment exists in React Element Tree.

Not in DOM Tree.

Important Mental Model

Fragment Exists In:

React Element Tree

Fragment Does NOT Exist In:

DOM Tree

Flow:

JSX
 ↓
Fragment Element
 ↓
React Element Tree
 ↓
ReactDOM
 ↓
Fragment Removed
 ↓
Real DOM
Why React Created Fragments

Without Fragments:

<div>
  <Navbar />
  <Sidebar />
</div>

Large apps create:

<div>
  <div>
    <div>
      <div>
        ...
      </div>
    </div>
  </div>
</div>

Called:

DOM Pollution

Too many unnecessary nodes.

Fragments reduce DOM size.

Fragment vs div
Fragment	div
No DOM Node	Creates DOM Node
Groups Children	Groups Children
Better Performance	Slightly More DOM
Invisible	Visible in DOM
When To Use div

Use div when:

<div className="container">
  Content
</div>

Need:

Styling
Layout
CSS
Events
When To Use Fragment

Use Fragment when:

<>
  <Header />
  <Content />
</>

Need grouping only.

Senior Engineer Mental Model

Junior Developers Think:

Fragment = Weird Syntax

Senior Developers Think:

Fragment
     ↓
Element Tree Grouping
     ↓
No DOM Node
     ↓
Cleaner DOM

Fragments are optimization and structure tools.

Interview Questions
Q: What is a React Fragment?

Answer:

A React Fragment is a special React element used to group multiple children without adding an extra DOM node.

Q: Why do Fragments exist?

Answer:

Fragments allow multiple elements to be returned from a component while avoiding unnecessary DOM nodes.

Q: Does Fragment appear in the DOM?

Answer:

No.

Fragments exist in the React Element Tree but are removed before DOM creation.

Q: Difference between Fragment and div?

Answer:

A div creates a real DOM node, while a Fragment does not.

🧠 Revision Card
REACT FRAGMENTS

Problem:

React requires
one root element

Old Solution:

<div>
  ...
</div>

Problem:

Extra DOM Node

Solution:

<>
  ...
</>

Fragment

✓ Groups Children
✓ No Extra DOM
✓ Cleaner DOM
✓ Better Structure

Tree:

Fragment
├── h1
└── button

DOM:

h1
button

Remember:

Fragment exists in
React Element Tree

NOT in DOM Tree


# >>

📖 Topic 3.9 — Keyed Fragments

Before learning Keyed Fragments, remember:

We learned:

<>
  <h1>Hello</h1>
  <button>Login</button>
</>

This is a Fragment.

It groups elements without creating extra DOM.

First Question

Suppose we render a list:

const users = [
  "Likan",
  "John",
  "Alex"
];

JSX:

{
  users.map(user => (
    <>
      <h1>{user}</h1>
      <hr />
    </>
  ))
}

Looks valid.

But React gives warning:

Each child in a list should have a unique "key" prop

Why?

The Problem

React must identify:

Old Item
      VS
New Item

Example:

Old:

Likan
John
Alex

New:

Likan
Alex

React asks:

Which item was removed?

Without keys:

React doesn't know efficiently.

React's Solution

Provide a key.

Example:

{
  users.map(user => (
    <React.Fragment key={user}>
      <h1>{user}</h1>
      <hr />
    </React.Fragment>
  ))
}

Now React knows:

Likan → Same
John  → Removed
Alex  → Same
Why Can't We Use Shorthand?

Shorthand Fragment:

<>
  <h1>Hello</h1>
</>

Question:

Can we write?

< key={id}>

❌ Impossible

Because:

<>

accepts no props.

Therefore

This is invalid:

<>
  <h1>Hello</h1>
</>

inside list rendering when key is required.

Use:

<React.Fragment key={id}>
  <h1>Hello</h1>
</React.Fragment>

instead.

What React Sees

JSX:

<React.Fragment key={1}>
  <h1>Hello</h1>
</React.Fragment>

becomes:

jsx(
  React.Fragment,
  {
    key: 1,
    children: ...
  }
)

React stores:

{
  type: React.Fragment,
  key: 1,
  props: {...}
}
Why Keys Matter

Imagine:

Old List

1. Likan
2. John
3. Alex

New List

1. John
2. Alex

Without keys React may think:

Likan → John
John  → Alex
Alex  → Removed

Many unnecessary updates.

With keys:

Key 1 Removed
Key 2 Exists
Key 3 Exists

React updates efficiently.

Fragment Tree

Example:

<React.Fragment key={1}>
  <h1>Hello</h1>
  <button>Login</button>
</React.Fragment>

React Element Tree:

Fragment(key=1)
├── h1
└── button

DOM Tree:

<h1>Hello</h1>
<button>Login</button>

Again:

Fragment disappears.

Key stays in React's memory.

Important Mental Model

Key is used by:

React

not:

Browser

Keys never appear in DOM.

Example:

<li key={1}>Apple</li>

DOM:

<li>Apple</li>

No key attribute.

When To Use Keyed Fragment

Use when:

map()

returns multiple sibling elements.

Example:

{
  users.map(user => (
    <React.Fragment key={user.id}>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </React.Fragment>
  ))
}
Senior Engineer Mental Model

Junior Developers Think:

Key removes warning

Senior Developers Think:

Key
 ↓
Identity
 ↓
Reconciliation
 ↓
Efficient Updates

Keys are not for warnings.

Keys are for React's Diffing Algorithm.

Later in Reconciliation you'll see:

Old Tree
      VS
New Tree

Keys help React match nodes correctly.

Interview Questions
Q: What is a Keyed Fragment?

Answer:

A Keyed Fragment is a React Fragment that has a key prop and is typically used when rendering lists.

Q: Why can't shorthand fragments have keys?

Answer:

Because the shorthand syntax <>...</> does not accept props.

Q: Why do we need keys?

Answer:

Keys help React identify elements between renders and perform efficient reconciliation.

Q: Do keys appear in the DOM?

Answer:

No. Keys are used internally by React and are not rendered to the DOM.

🧠 Revision Card
KEYED FRAGMENTS

Normal Fragment

<>
  ...
</>

No Props
No Key

-------------------

Keyed Fragment

<React.Fragment key={id}>
  ...
</React.Fragment>

-------------------

Why?

List Rendering

Old List
      VS
New List

React uses key
to identify items

-------------------

Key

✓ Unique Identity
✓ Used By React
✓ Helps Reconciliation
✓ Not Rendered To DOM

Remember:

Key ≠ DOM Attribute

Key = React Identity

# >>>>>>>>>


📖 Topic 3.10 — Conditional Rendering

Before learning Conditional Rendering, remember:

React can render:

<h1>Hello</h1>

React can also render:

null
false

and show:

Nothing

This ability is the foundation of Conditional Rendering.

First Question

Suppose:

const isLoggedIn = true;

When user is logged in:

Show:

Dashboard

When user is not logged in:

Show:

Login

Question:

How do we display different UI based on conditions?

Answer:

Conditional Rendering.

What Is Conditional Rendering?

Definition:

Conditional Rendering means displaying different UI based on a condition.

Example:

Condition True
      ↓
Show UI A

Condition False
      ↓
Show UI B
Why Do We Need It?

Real Applications constantly change UI.

Examples:

Logged In
Logged Out

Loading
Loaded

Admin
User

Cart Empty
Cart Has Items

Different conditions.

Different UI.

Method 1 — Using if Statement

Example:

function App() {

  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Dashboard</h1>;
  }

  return <h1>Login</h1>;
}

Output:

<h1>Dashboard</h1>

Flow:

isLoggedIn = true
        ↓
First Return
        ↓
Dashboard
Method 2 — Ternary Operator

JavaScript:

condition
  ? value1
  : value2

React:

<h1>
  {
    isLoggedIn
      ? "Dashboard"
      : "Login"
  }
</h1>

If:

isLoggedIn = true

Output:

Dashboard

If:

isLoggedIn = false

Output:

Login
Why Ternary Is Popular

Because JSX allows expressions.

Remember:

{}

expects an expression.

Ternary returns a value.

So it works perfectly.

Method 3 — Logical AND (&&)

Very common.

Example:

{
  isLoggedIn &&
  <Dashboard />
}

If:

isLoggedIn = true

Result:

<Dashboard />

Rendered.

If:

isLoggedIn = false

Result:

false

React ignores it.

Nothing appears.

Flow:

true && UI
      ↓
Render UI

false && UI
      ↓
false
      ↓
Nothing
Why && Works

React ignores:

false
null
undefined
true

Example:

<div>{false}</div>

Output:

<div></div>

Nothing visible.

Method 4 — Returning null

Example:

function Loader({ loading }) {

  if (!loading) {
    return null;
  }

  return <h1>Loading...</h1>;
}

If:

loading = false

Output:

Nothing

If:

loading = true

Output:

Loading...
Why null Is Powerful

Many components render conditionally.

Example:

<Modal />
<Tooltip />
<Loader />
<Popup />

Sometimes they should exist.

Sometimes they shouldn't.

Returning:

null

removes them from UI.

React Can Render

✅ React Element

<h1>Hello</h1>

✅ String

"Hello"

✅ Number

100

✅ Array

[<h1 />]

React ignores:

false
null
undefined
true
Common Pattern

Show Error:

{
  hasError &&
  <Error />
}

Show Loader:

{
  loading &&
  <Loader />
}

Show Empty State:

{
  items.length === 0 &&
  <EmptyState />
}

These patterns appear everywhere in React projects.

Important Gotcha

Example:

{
  0 && <h1>Hello</h1>
}

Output:

0

Not nothing.

Why?

Because:

0 && something

returns:

0

React renders numbers.

Be careful.

Use:

{
  count > 0 &&
  <h1>Hello</h1>
}

instead.

Mental Model
Condition
     ↓
Choose UI
     ↓
React Element
     ↓
Render
Senior Engineer Mental Model

Junior Developers Think:

Conditional Rendering
=
Hide Show UI

Correct.

Senior Developers Think:

Condition
      ↓
Produces Different
React Element Trees
      ↓
React Reconciliation
      ↓
UI Update

React isn't hiding UI.

React is generating a different tree.

Example:

Condition True

App
└── Dashboard

Condition False

App
└── Login

Different trees.

React compares them.

Updates UI.

Interview Questions
Q: What is Conditional Rendering?

Answer:

Conditional Rendering is the process of displaying different UI based on conditions.

Q: How can we perform Conditional Rendering in React?

Answer:

Using:

if
ternary (? :)
logical AND (&&)
null
Q: Why does && work in React?

Answer:

Because React ignores false values and renders the element only when the left side evaluates to true.

Q: Why return null?

Answer:

Returning null tells React to render nothing.

Q: Does React render false?

Answer:

No.

React ignores:

false
null
undefined
true
🧠 Revision Card
CONDITIONAL RENDERING

Purpose:

Show Different UI
Based On Conditions

Methods:

1. if

if (isLoggedIn) {
  return <Dashboard />
}

2. Ternary

condition
 ? UI1
 : UI2

3. &&

condition && UI

4. null

return null

------------------

React Ignores:

false
null
undefined
true

------------------

Common Uses:

✓ Loader
✓ Error Message
✓ Login / Logout
✓ Empty State
✓ Modal

Remember:

Condition
     ↓
Different Element Tree
     ↓
React Updates UI

# >>>


📖 Topic 3.11 — List Rendering

Before learning List Rendering, remember:

React can render:

<h1>Hello</h1>

React can also render:

["Apple", "Banana", "Mango"]

because arrays are valid React Nodes.

But real applications rarely display static data.

They display:

Users
Products
Movies
Orders
Notifications
Comments
Messages

Most of these come as arrays.

First Question

Suppose:

const fruits = [
  "Apple",
  "Banana",
  "Mango"
];

Question:

Should we write:

<h1>Apple</h1>
<h1>Banana</h1>
<h1>Mango</h1>

manually?

No.

Imagine:

10 Fruits
100 Fruits
1000 Fruits

Impossible.

What Is List Rendering?

Definition:

List Rendering means generating UI from an array of data.

Example:

Array
  ↓
Multiple React Elements
  ↓
UI
React's Solution

JavaScript already provides:

map()

React uses it heavily.

What Does map() Do?

Example:

const nums = [1, 2, 3];

const result =
  nums.map(num => num * 2);

Result:

[2, 4, 6]

Rule:

One Item In
      ↓
One Item Out
Simple React Example

Data:

const fruits = [
  "Apple",
  "Banana",
  "Mango"
];

JSX:

{
  fruits.map(fruit => (
    <h1>{fruit}</h1>
  ))
}

Output:

<h1>Apple</h1>
<h1>Banana</h1>
<h1>Mango</h1>
What's Happening?

React executes:

fruits.map(...)

Result:

[
  <h1>Apple</h1>,
  <h1>Banana</h1>,
  <h1>Mango</h1>
]

React receives:

Array Of React Elements

and renders them.

Internal Flow
Array
 ↓
map()
 ↓
React Elements
 ↓
Element Tree
 ↓
ReactDOM
 ↓
Screen
Example With Objects

Real applications usually use objects.

Example:

const users = [
  {
    id: 1,
    name: "Likan"
  },
  {
    id: 2,
    name: "John"
  }
];

JSX:

{
  users.map(user => (
    <h1>{user.name}</h1>
  ))
}

Output:

<h1>Likan</h1>
<h1>John</h1>
Why React Needs Keys

Example:

{
  users.map(user => (
    <h1>{user.name}</h1>
  ))
}

React warning:

Each child in a list
should have a unique key prop

Why?

React compares:

Old List
      VS
New List

Need identity.

Correct Version
{
  users.map(user => (
    <h1 key={user.id}>
      {user.name}
    </h1>
  ))
}

Now React knows:

id=1 → Likan
id=2 → John

Identity preserved.

What React Stores

React Element:

{
  type: "h1",
  key: 1,
  props: {
    children: "Likan"
  }
}

Notice:

key: 1

React uses it during reconciliation.

Why Index Is Dangerous

Many beginners do:

{
  users.map((user, index) => (
    <h1 key={index}>
      {user.name}
    </h1>
  ))
}

Works.

But not ideal.

Example:

Old:

0 Likan
1 John
2 Alex

Remove:

Likan

New:

0 John
1 Alex

React thinks:

Likan → John
John → Alex

Wrong identity.

Use:

key={user.id}

whenever possible.

List Rendering With Components

Example:

Component:

function UserCard({ user }) {
  return (
    <h1>{user.name}</h1>
  );
}

Usage:

{
  users.map(user => (
    <UserCard
      key={user.id}
      user={user}
    />
  ))
}

Real applications use this pattern constantly.

List Rendering With Fragments

Example:

{
  users.map(user => (
    <React.Fragment key={user.id}>
      <h1>{user.name}</h1>
      <hr />
    </React.Fragment>
  ))
}

Useful when returning multiple siblings.

Mental Model
Array
 ↓
map()
 ↓
React Elements
 ↓
Element Tree
 ↓
Render
Senior Engineer Mental Model

Junior Developers Think:

List Rendering
=
Loop UI

Correct.

Senior Developers Think:

Data Array
      ↓
Element Generation
      ↓
Keys Provide Identity
      ↓
Reconciliation
      ↓
Efficient Updates

List Rendering is deeply connected to React's Diffing Algorithm.

Real-World Examples

Netflix:

Movies[]
      ↓
<MovieCard />

Amazon:

Products[]
        ↓
<ProductCard />

WhatsApp:

Messages[]
        ↓
<Message />

GitHub:

Repositories[]
            ↓
<RepositoryCard />
Interview Questions
Q: What is List Rendering?

Answer:

List Rendering is the process of generating multiple React elements from an array of data.

Q: Which JavaScript method is commonly used for List Rendering?

Answer:

map()
Q: Why do we use keys?

Answer:

Keys help React identify elements between renders and perform efficient reconciliation.

Q: Can we use array index as key?

Answer:

Yes, but it is generally discouraged when the list can change order or items can be inserted/removed.

Q: What is the best key?

Answer:

A stable unique identifier such as:

user.id
product.id
message.id
🧠 Revision Card
LIST RENDERING

Purpose:

Array
 ↓
UI

Method:

map()

Example:

users.map(user => (
  <UserCard />
))

------------------

Keys

key={user.id}

Why?

Identity
 ↓
Reconciliation
 ↓
Efficient Updates

------------------

Avoid:

key={index}

when list changes

------------------

Flow

Array
 ↓
map()
 ↓
React Elements
 ↓
Render

Remember:

List Rendering
=
Data → UI

# >>


📖 Topic 3.12 — Dynamic Rendering

Before learning Dynamic Rendering, remember:

We already learned:

Variables
Expressions
Conditional Rendering
List Rendering
Components

Question:

Why did we learn all these separately?

Because together they create:

Dynamic UI

which is React's biggest superpower.

First Question

Suppose:

const user = {
  name: "Likan"
};

Should React always show:

<h1>Hello Likan</h1>

?

What if:

user.name = "John";

Should UI remain:

<h1>Hello Likan</h1>

?

No.

UI should change automatically.

This is Dynamic Rendering.

What Is Dynamic Rendering?

Definition:

Dynamic Rendering means generating UI based on current data.

Data Changes
      ↓
UI Changes
Static Rendering vs Dynamic Rendering

Static:

<h1>Hello World</h1>

Always:

Hello World

Never changes.

Dynamic:

<h1>Hello {name}</h1>

Changes based on:

name

Example:

name = "Likan"

Output:

Hello Likan

Later:

name = "John"

Output:

Hello John

Same JSX.

Different UI.

Why Dynamic Rendering Exists

Imagine:

Amazon

Data:

cartCount = 5

UI:

Cart (5)

User removes item.

Data:

cartCount = 4

UI:

Cart (4)

React updates automatically.

Dynamic Rendering Using Variables

Example:

const name = "Likan";

<h1>Hello {name}</h1>

Flow:

Variable
    ↓
Expression
    ↓
React Element
    ↓
UI
Dynamic Rendering Using Conditions

Example:

{
  isLoggedIn
    ? <Dashboard />
    : <Login />
}

If:

isLoggedIn = true

Tree:

Dashboard

If:

isLoggedIn = false

Tree:

Login

Different UI.

Dynamic Rendering Using Lists

Example:

const users = [
  "Likan",
  "John"
];

JSX:

{
  users.map(user => (
    <h1>{user}</h1>
  ))
}

Tree:

h1
h1

Add new user:

[
  "Likan",
  "John",
  "Alex"
]

Tree:

h1
h1
h1

UI changes automatically.

Dynamic Rendering Using Components

Component:

function UserCard({ name }) {
  return (
    <h1>{name}</h1>
  );
}

Usage:

<UserCard name="Likan" />

Output:

Hello Likan

Change prop:

<UserCard name="John" />

Output:

Hello John

Same component.

Different UI.

The Big React Formula

Everything we've learned leads to:

UI = f(Data)

Read:

UI is a function of Data

Example:

Data:

{
  name: "Likan"
}

UI:

Hello Likan

Data changes:

{
  name: "John"
}

UI:

Hello John

React Philosophy:

Don't Update UI

Update Data

React Updates UI
What React Actually Does

Old Data:

name = "Likan"

React creates:

Old Element Tree

New Data:

name = "John"

React creates:

New Element Tree

Then:

Old Tree
      VS
New Tree

Compare.

Find changes.

Update UI.

Don't worry.

We'll study:

Virtual DOM
Diffing
Reconciliation
Fiber

later.

For now:

Data Changes
      ↓
React Creates New Tree
      ↓
UI Updates
Real World Examples

Netflix

Movies Data
       ↓
Movie Cards

WhatsApp

Messages Data
         ↓
Message UI

Amazon

Products Data
         ↓
Product Cards

GitHub

Repositories
      ↓
Repository List

Every React application is Dynamic Rendering.

Mental Model
Data
 ↓
React
 ↓
Element Tree
 ↓
UI

Change data:

New Data
 ↓
New Tree
 ↓
Updated UI
Senior Engineer Mental Model

Junior Developers Think:

Dynamic Rendering
=
Changing UI

Correct.

Senior Developers Think:

Data
 ↓
Element Tree
 ↓
Render Output

The UI is simply a visual representation of data.

React applications are not built around screens.

They are built around data.

Interview Questions
Q: What is Dynamic Rendering?

Answer:

Dynamic Rendering is the process of generating UI based on changing application data.

Q: What makes React dynamic?

Answer:

React automatically updates the UI when data changes.

Q: What is React's core rendering formula?

Answer:

UI = f(Data)

Meaning the UI is derived from application data.

Q: Does React prefer updating UI or data?

Answer:

React prefers updating data. React then updates the UI automatically.

🧠 Revision Card
DYNAMIC RENDERING

Definition:

Data Changes
      ↓
UI Changes

Methods:

✓ Variables
✓ Expressions
✓ Conditions
✓ Lists
✓ Components

Core Formula:

UI = f(Data)

React Philosophy:

Change Data
      ↓
React Updates UI

Flow:

Data
 ↓
Element Tree
 ↓
UI

Remember:

React Apps
=
Dynamic UI Generated
From Data


