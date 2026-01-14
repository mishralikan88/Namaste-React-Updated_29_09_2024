
# Section 1 — Thinking & Decision Framework

This section decides whether the interviewer trusts you or not.

## 1.1 Functional Requirements - 

Functional requirements = what the system should do.

### Q1: Interview Question - What are functional requirements?

Answer - "Functional requirements describe what the system should do. They define features, user actions, and system behavior."

Example - "For a login system, functional requirements include user registration, login, logout, and password reset."


#### Counter-Questions: Can you give more examples?

"Examples include placing an order, uploading a file, viewing a dashboard, or sending a notification."

### Q3: Are APIs functional requirements?

"APIs are part of implementing functional requirements."

❌ Common mistake - Saying performance/security here. Those are NOT functional.


## 1.2 NON-FUNCTIONAL REQUIREMENTS.

Non-functional = How the system behaves

### Interview Question "What are non-functional requirements?"

✅ Answer - Non-functional requirements describe how the system should behave, such as Performance, Availability, Scalability, Security, and Cost. (PASSC)

Example - For an e-commerce order system, non-functional requirements include:

Performance — product search and checkout should respond within 200ms.
Availability — the system should be available 99.9% of the time, even during sales.
Scalability — it should handle traffic spikes during flash sales or big billion sales without downtime.
Security — user data and payment information must be encrypted and access-controlled.
Cost — the system should scale efficiently without unnecessary infrastructure costs.”


#### Counter-Questions: Which is more important — functional or non-functional?

"Functional requirements define features, but non-functional requirements usually drive architecture decisions."

👉 Features → Functional

👉 Architecture → Non-functional

Feature: Users can upload photos. (Client / Feature Layer )

Architecture: Use object storage, CDN, and async processing to handle scale and performance. (Server / Architecture Layer)

🟦 Client / Feature Layer - 

What the user can do
Buttons, actions, flows
Example: Upload photo


🟥 Server / Architecture Layer - 

How the system supports it
Storage, queues, CDNs, workers
Example: Object storage + async processing


### Q: Why do non-functional requirements matter more to architects?

Developers focus on features.
Architects focus on performance, Availability , scalability , security and cost.



## 1.3 Clarifying questions 

Why this is critical . Interviewers want to see thinking before designing.

### Interview Question - "What clarifying questions do you ask before designing?"

Answer - "I ask clarifying questions to understand users, core features, expected traffic, and constraints like cost, security, and timeline."

understand users -
By understanding users, I mean identifying who the users are, how many there are, and how they interact with the system.

core features - (what to build)
The most important functions the system must support.
For WhatsApp → send messages
For E-commerce → browse products & place orders
For Login system → sign up, login, logout

expected traffic - How much load the system must handle. (scale)
This includes: Number of users,Requests per second,Peak usage times
1,000 users per day vs 1 million users per day - Normal traffic vs flash sale traffic
Why it matters . Becase Traffic decides: Database choice , Caching , Load balancing , Scaling strategy
Expected traffic helps estimate system load and design for scale.


Cost Constraint-(limits)
How much money you are allowed to spend.
Startup → low budget → simple architecture . Enterprise → higher budget → high availability systems.
Cost constraints prevent over-engineering and influence infrastructure choices.

Security Constraint- (protection)
How safe the system must be.

Timeline - (complexity)
Timeline constraints often require simpler designs to deliver faster.


#### Counter question: What if interviewer says 'assume whatever you want'?

Then I make reasonable assumptions and clearly break it down before proceeding.

break it down - Split a big idea into small, easy parts.

1.4 MAKING ASSUMPTIONS

What this shows
Confidence
Experience
Calm thinking

### Interview Question - What assumptions do you make when details are missing?

Answer (MEMORIZE) - When requirements are unclear, I make reasonable assumptions about usage patterns, scale, and environment, and I clearly state them. (use - usage , scale , environment)

Example - I may assume a web-based system with moderate initial traffic & plan for scaling later.

environment - web based syatem , Backend service , cloud based,
usage pattern - How users interact with the system - Peak hours or steady usage? Occasional users or frequent users? Burst traffic (sales) or normal traffic?
scale - How big the system needs to grow.This includes Number of users , Requets per second, Data size ,Future growth


#### Counter-Question - Is it safe to assume?

Yes, as long as my assumptions are reasonable and aligned with the requirements and can be adjusted if requirements change.


### Q: What if assumptions are wrong?

Then the design can be adjusted - architecture should be adaptable.

## 1.4 STATE EXPLICIT ASSUMPTIONS.(WHEN DATA IS MISSING)

When details are missing, I don’t guess silently. I say my assumptions out loud before designing.

### What do you do when information is missing?

When data is missing, I make reasonable assumptions and state them explicitly before proceeding with the design

 

## 1.5 CONSTRAINTS

What constraints mean. Constraints are limits you must respect.

### Interview Question - "What constraints affect your design?"

Answer - "The main constraints are scale, cost, security, timeline, and team skill set."


#### Q: Counter-Question: why is cost a constraint?

"Because over-engineering increases cost without real benefit."

#### Q: Counter-Question: why does team skill matter?

"A complex system is risky if the team cannot maintain it."

#### Q: Counter-Question: why is timeline important?

"Limited time may require simpler, faster solutions”

👉 When you don’t have much time, you can’t build complex systems.
👉 You choose simple designs so the system can be delivered quickly.



## 1.6 TRADE-OFFS (This is senior thinking.)


### What trade offs mean?

You cannot optimize everything at once.

### Interview Question - "What trade-offs do you consider in architecture?"

Answer - "Architecture involves balancing trade-offs such as simplicity vs scalability, cost vs performance, and speed vs reliability."

1️⃣ Simplicity vs Scalability - (SS)

Simplicity → easy to build, easy to maintain
Scalability → can handle growth and high load

Trade-off
Simple systems don't scale well.
Highly scalable systems are more complex.

Example - 
Start with a single database (simple).
Later move to sharding, replicas (scalable but complex).

"Simple is easy now, scalable is hard later."


2️⃣ Cost vs Performance -  (CP)

Performance → fast response time.
Cost → money spent on infrastructure.

Trade-off
Higher performance usually costs more
Lower cost usually means slower system

Example
More servers → faster → higher cost
Fewer servers → cheaper → slower

"Speed costs money."


3️⃣ Speed vs Reliability (SR)

Speed → fast writes & responses.
Reliability → data safety, no loss.

Trade-off -
Faster systems may risk failures.
Reliable systems may be slower.

Example -
Async writes → fast but risk data loss.
Synchronous writes → safe but slower.

"Safer systems are slower."



#### Counter-Question: Why not build a highly scalable system from day one?


Answer - 

Because early over-engineering increases complexity and cost without real usage data.
I prefer starting simple and scaling when needed.

#### Counter-Question: Q: Isn't scalability important?

"Yes, but scalability should be planned, not fully built upfront."



### How do you start a design discussion?

I'll start with a simple design and evolve it as scale grows.

This line: Reduces pressure , Shows maturity , Wins interviewer trust.


### How do you approach design? What is your design philosophy? 

Before designing a system, I clarify functional & non-functional requirements.

I ask questions to understand users, expected scale, and constraints like cost and security.
If details are missing, I make reasonable assumptions and state them clearly.
I consider trade-offs between simplicity, scalability, and cost.
I start with a simple design and evolve it as scale and requirements grow.