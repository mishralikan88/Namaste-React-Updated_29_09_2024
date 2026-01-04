✅ REACT INTERVIEW CODING QUESTIONS — FINAL MASTER LIST

Target: 8–12+ years experience
Goal: Ace React technical interviews (coding + explanation)



# SECTION 1: React Fundamentals (FILTER ROUND – MUST PASS)

Build a counter (increment, decrement, reset)

Disable decrement button when count is 0

Toggle button (ON / OFF)

Show / hide password

Conditional rendering (Login / Logout)

Render JSX conditionally using &&

Render JSX using ternary

Controlled text input with live preview

Convert uncontrolled input to controlled

Prevent default form submit

Conditional button disabling

Pass props from parent → child

Child → parent communication (callback props)

Default props handling

Inline styles vs CSS classes (code example)

Event handling basics


# SECTION 2: State, Immutability & Lists (VERY IMPORTANT)

Update object state immutably.

Update nested object state immutably.

Update array state immutably.

Add item to a list.

Remove item from a list.

Edit item in a list.

Toggle item property (done / not done).

Clear entire list.

Fix state mutation bug.

Derived state vs stored state (code example).

Why NOT store derived state?

Sort list (ascending / descending).

Filter list by condition.

Pagination logic (basic).

Render list using map().

Add correct key — explain why.

Fix missing key warning.

Explain why index as key is bad.

Show empty state if list is empty.


# SECTION 3: useEffect Mastery.

Run effect only once

Run effect on state change

Fix infinite loop in useEffect

Fix missing dependency bug

Explain cleanup function — when does it run?

Cleanup setInterval properly

Cleanup setTimeout properly

Fetch data using useEffect

Loading + error handling

Abort API request on unmount

Fix memory leak warning

Demonstrate stale closure problem

Separate concerns using multiple useEffect

useEffect vs event handler

Why NOT put everything in useEffect?

API polling using useEffect

Sync state with localStorage

Explain execution order of effects




🟣 SECTION 4: Debounce & Throttle (VERY COMMON)

Debounced search input using useEffect

Explain debounce execution flow step-by-step

Fix debounce bug

Throttle button clicks (Resend OTP)

Throttle function with arguments

Compare debounce vs throttle (code + explanation)

🟠 SECTION 5: Forms & User Input (REAL PROJECT SCENARIOS)

Controlled form with multiple inputs (single state object)

Disable submit until form is valid

Show validation error messages

Real-time validation

On-blur validation

Controlled checkbox group

Select all / deselect all checkboxes

Controlled radio buttons

Multi-select dropdown

Dynamic form fields (add / remove rows)

Form reset logic

File upload using useRef

Large form performance issue

Optimize large form rendering

Multi-step form

Character counter

OTP input (4 / 6 digit)

Resend OTP with throttle

Search input with debounce

Password strength checker

Dependent dropdowns

Prevent double form submit

Form submission lifecycle

🔴 SECTION 6: Re-renders & Performance (SENIOR FILTER)

Why did my component re-render?

How to prevent child re-render

Fix unnecessary re-render

Inline function re-render issue

Referential equality problem

React.memo usage

When React.memo does NOT help

useCallback usage

useMemo usage

useCallback vs useMemo

Memoize expensive computation

Optimize slow list rendering

Optimize dashboard with many components

Context causing re-render — fix it

State colocation vs lifting state

Prop drilling — solutions

Split component to reduce re-render

Virtualization concept

Key misuse performance issue

Batch state updates

🟤 SECTION 7: Custom Hooks (SENIOR EXPECTATION)

Why custom hooks exist?

Build useToggle

Build useDebounce

Build useThrottle

Build useFetch

Build useLocalStorage

Reuse logic without duplication

Hook rules — explain

Hook dependency pitfalls

Hook returning function vs value

Hook composition

Hook cleanup handling

Hook for form logic

Hook for pagination

Hook for window resize

Hook for outside click detection

Hook for keyboard events

Testing custom hooks

When NOT to use custom hooks

Difference between hook & utility function

🟤 SECTION 8: Component Design Patterns (INTERVIEW GOLD)

Controlled vs uncontrolled components

Compound components pattern

Build Tabs using compound pattern

Build Accordion using compound pattern

Render props pattern

HOC pattern

Hooks vs HOC

Context API usage

Context performance optimization

Build reusable modal

Close modal on outside click

Portal usage

Slot-based components

Composition vs inheritance

Dumb vs smart components

Container-presentational pattern

Reusable button component

Feature-based folder structure

Component API design

Error boundary implementation

🔷 SECTION 9: Modern React (React 18 / 19 Awareness)

Automatic batching

Concurrent rendering basics

useTransition

useDeferredValue

Suspense basics

Suspense for data fetching (concept)

Server Components (concept)

Client vs server components

Streaming rendering (concept)

When concurrency helps

When concurrency hurts

Priority updates

Blocking vs non-blocking updates

Progressive rendering

⚫ SECTION 10: Debugging & Tricky Scenarios (REAL INTERVIEWS)

Fix infinite re-render bug

Fix stale state bug

Fix broken dependency array

Fix memory leak

Fix event handler bug

Fix wrong closure issue

Fix incorrect key usage

Fix form lag issue

Fix unnecessary API calls

Fix modal scroll bug

Fix double API submit

Fix flickering UI issue

Fix incorrect conditional render

Fix race condition in fetch

Fix debounce bug

🏁 FINAL BOSS — MOCK INTERVIEW TASKS

Build debounced search + explain flow

Build todo app with filters

Build reusable modal (no library)

Optimize re-render-heavy component

Design form architecture

Fix performance bottleneck

Explain render cycle verbally

Explain hooks execution order

Explain cleanup execution timing

# Number of questions 

🟢 Section 1 (Fundamentals): 16

🟡 Section 2 (State/Immutability/Lists): 19

🔵 Section 3 (useEffect): 18

🟣 Section 4 (Debounce/Throttle): 6

🟠 Section 5 (Forms): 23

🔴 Section 6 (Re-renders/Perf): 20

🟤 Section 7 (Custom Hooks): 20

# >>>

🟤 Section 8 (Design Patterns): 20

🔷 Section 9 (Modern React): 14

⚫ Section 10 (Debugging): 15

🏁 Final Boss (Mock tasks): 9

✅ Total = 180

=====================================================================================================================

Missing / under-covered areas (add these)
1) React Router (very common in real projects)

Build protected routes (AuthGuard)

Nested routes + Outlet

Dynamic routes (/users/:id) + params

Search params (filter/sort via URL)

Navigation: useNavigate, Link, back button handling

Lazy route loading + Suspense fallback

2) Data fetching patterns beyond basic useEffect

Request dedupe / caching (why React Query / SWR)

Retry + exponential backoff

Pagination: cursor-based (not just page numbers)

Race condition fix (latest request wins)

Optimistic UI update (add item instantly, rollback on failure)

3) State management (senior filter)

useReducer real use case (form/todo complexity)

Context vs Redux vs Zustand — when to use what

Avoid Context re-render (split contexts, selectors pattern)

Basic Redux Toolkit slice + async thunk (even if not deep)

4) Testing (many seniors get filtered here)

Test a component with React Testing Library

Test custom hook

Mock fetch / API

Test user flows (form submit, debounce search, modal open/close)

5) Accessibility (companies care)

Keyboard nav for modal (ESC close, focus trap concept)

Proper labels, aria attributes

Button vs div click handlers (semantic HTML)

Accessible error messages in forms

6) TypeScript with React (if role expects TS)

Type props correctly (optional, union, generics)

useRef typing

Event types (ChangeEvent, FormEvent)

React.FC discussion (pros/cons)

children typing patterns

7) Rendering & SSR basics (often asked)

SSR vs CSR vs hydration (concept)

Hydration mismatch causes (common bug)

Lazy loading components + code splitting (practical)

8) Component communication edge cases

forwardRef + useImperativeHandle (common in UI libraries)

Controlled vs uncontrolled with refs (focus, reset)

Error boundaries: you have it, but add fallback UI + reset pattern

9) Styling & UI architecture (real-world)

CSS Modules vs styled-components vs Tailwind (tradeoffs)

Theming (dark mode) via context

Design system component API (Button/Input variants)