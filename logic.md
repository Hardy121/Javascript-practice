# STEP 1 — FREEZE THE KEYBOARD (30–90 seconds)

When you see a new problem:
hands off keyboard
breathe
read the problem twice
Your panic comes from rushing.

# STEP 2 — WRITE INPUT & OUTPUT YOURSELF

Even if the problem already gives it.
Example:
input:
[
  { id: 1, type: "A", value: 10 }
]

output:
{
  A: 10
}

If you cannot restate input/output, you cannot solve the problem..

# STEP 3 — ANSWER ONLY THIS QUESTION

“What happens to ONE item?”
Not the whole array.
Not the full system.
Just one element. 

1. What is changing over time
> What starts empty?
> What gets updated?
> What gets reset?

2. What must be remembered?
> What do I need to store between steps?
> What must survive multiple function calls?

3. What triggers the final action?
> When should the actual work happen?
> What condition allows execution?

4. What cancels or overrides previous work?
Almost every frontend logic problem has:
> cancellation
> replacement
> override

# STEP 4 — NAME THE OPERATION (VERY IMPORTANT)

Every problem is one of these:
1. transform (map)
2. accumulate (reduce)
3. filter
4. group
5. recurse
6. split & recombine

If you can’t name it, you’ll write garbage code.
Example:
“This is grouping + accumulation.”
Now your brain has direction.

# STEP 5 — WRITE PSEUDO-LOGIC (NOT CODE)

English. Bullet points. Ugly.

Example:
> create empty object
> loop items
> if key not exist → initialize
> add value

Only after this are you allowed to code.
