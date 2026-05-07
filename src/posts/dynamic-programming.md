## overview

Dynamic programming is a method for solving complex problems by breaking them down into simpler overlapping subproblems. It stores the results of subproblems to avoid redundant computation.

## key ideas

- **optimal substructure**: an optimal solution can be constructed from optimal solutions of its subproblems
- **overlapping subproblems**: the same subproblems are solved multiple times

## example: fibonacci

The naive recursive approach has exponential time complexity. With memoization:

```python
def fib(n, memo={}):
    if n <= 1:
        return n
    if n not in memo:
        memo[n] = fib(n - 1) + fib(n - 2)
    return memo[n]
```

This brings the complexity down to $O(n)$.

## bottom-up approach

Instead of recursion, we can fill a table iteratively:

```python
def fib(n):
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]
```

*More to come...*
