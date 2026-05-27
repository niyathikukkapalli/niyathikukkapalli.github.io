---
layout: post
title: "A Chain of Reasoning in Number Theory"
date: 2022-08-22
categories: Number Theory
tags:
  - WOP
  - Proof
  - Number Theory
description: Ever wonder how mathematicians build big results from tiny axioms? This article traces a chain of proofs in Number Theory, starting from a deceptively simple principle and working up to one of the field's most useful identities. It's the first part of a two-part series that ultimately leads to Unique Prime Factorization.
thumbnail: "/img/theory.jpeg"
---

## Chain of Reasoning Introduction

The Chain of Reasoning sounds quite general, and it is! There are multiple definitions of the term, but at its core it's a multi-layered argument. I'm not here to lecture about all the types of chains there could be — rather, I'll be discussing a particularly important chain in Number Theory. This Chain of Reasoning flows as follows:

Well Ordering Principle —-> Division Algorithm —-> Bezout’s —-> FTA —-> UPF

For now, I'll leave FTA and UPF untouched and discuss them in a continuation of this article. This particular Chain of Reasoning is built on proofs — to prove the Division Algorithm you need the Well Ordering Principle, and to prove Bezout's you need the Division Algorithm.

## Well Ordering Principle

So, what exactly is the Well Ordering Principle? The exact principle states, any non empty subset S $\subseteq$ N, has a least element. N are the natural numbers which are the positive integers.
An example, let's say we have the set {1,2,3,4} which can be a subset of {1,2,3,4,5,6}. Now the subset
{1,2,3,4} by Well Ordering Principle has a least element, which we know to be 1.

That's a simple application, but it captures the general idea. It's simple yet incredibly powerful and appears in numerous proofs. We take this principle to be true — it's what you'd call an axiom. Another example of an axiom is that a + b = b + a, since we simply accept that as true.

Another popular proof technique is induction, which if you've spent any time in the math world, you've probably heard of. I'd encourage you to read more about it if you haven't! A good exercise to think about: are Induction and the Well Ordering Principle actually the same thing? Hint: don't trust the obvious answer.


## Division Algorithm

You might remember the Division Algorithm from elementary school. In words, it says: if you want to divide a by b, then there exist q, r such that a = bq + r where 0 ≤ r < b. Have you ever thought about how to actually prove this? It's harder than it looks. Sure, the statement feels obvious, but it's not something we can just take as an axiom. Since we're working in a chain, we need to incorporate the Well Ordering Principle (WOP) into our proof. I'd encourage you to try the proof yourself before reading on!

Here's the proof that we will break down step by step.

<div class = "proof">

  <p> (1) Let S = {$s \in Z: \exists q \in Z: s = a - bq, 0 \leq s < b$}. Our goal is to show that S is non empty. S could contain 0 or not. </p>

  <p> (2) If 0 is in S then we are done since 0 is defined to be in S by $0 \leq s < b$.</p>

  <p> (3) If 0 is not in S then $\exists s = a - bq > 0$. So by that inequality, that means all the values of s are contained in the natural numbers. </p>

  <p> (4) By WOP, there exists a least element of S, which we can call $s_0$. So $s_0 = (a_0) - (b_0)(q).$
  By Trichotomy we have either $s_0 > b, s_0 < b, or s_0 = b$. </p>

  <p> (5) Now we want to prove that $s_0 < b$ since that is in our original statement. So we want to disprove
  $s_0 \geq b$. If $s_0 \geq b$ then we can write $s_0 = (a_0) - (b)(q)$. Since $s_0$ is greater than b we can subtract another copy of b from both sides to get $r = (a_0) - (b)(q+1)$ where $r < s_0$. Although this contradicts the minimality of $s_0$, so $s_0 < b$. QED. </p>

</div>

In the first step, we establish a set — think of it as the set of the Division Algorithm quite literally, where the elements are the remainders. That's what the condition r = a − bq captures. We also establish whether 0 is in the set or not. Why 0 and not, say, −1? Looking ahead, we want to use WOP on this set, which requires the set to live in the natural numbers, so we need s > 0. Since 0 is the boundary anyway, it's natural to use it for the casework.

If 0 is in S, we're done immediately. If it's not, then we're only considering s > 0, which lives in the natural numbers — exactly when we can apply WOP.

With our least element in hand, we set up a trichotomy: three choices, exactly one of which is correct. Rather than proving the correct choice directly, we disprove the other two — a much easier approach.

In the last step, we wrote a − b(q₀ + 1) as an element of S and found a contradiction with the minimality of s₀. That contradiction means the assumption s₀ ≥ b was false, leaving us with the third option: s₀ < b.

## Bezout's Identity

Bezout's Identity states: for a, b ∈ ℤ, the equation ax + by = 1 has integer solutions x, y if and only if gcd(a, b) = 1. A quick example: 3x + 2y = 1 has the obvious solution x = 3, y = −4, since 3(3) − 2(4) = 1. Simple as that!

Bezout's is a Diophantine equation, and since it's an if-and-only-if statement, we technically have two proofs to write. A reminder about if-and-only-if:

<div class = "warning">
<b>If and only if statements:</b> We have $a$ then if and only if $b$. So we would have to prove that $a$ implies $b$ and $b$ implies $a$. So it's two proofs. 
</div>

I'll only show the proof for: if gcd(a, b) = 1, then ax + by = 1 has integer solutions. I'd encourage you to work out the other direction yourself — it's quite short. Hint: let gcd(a, b) = d and show that d must equal 1 given that ax + by = 1 holds.

<div class = "proof">

<p> (1) Let S = {$n \in Z | n > 0, n = ax + by | x,y \in Z$}. This means n is in the natural numbers. 
We claim that S is non empty. We know this because $a^2 + b^2$ is in the set which we know is positive. </p>
<p> (2) By WOP, there exists a least element of S. We can call this $m.$ There are two cases: $m = 1$ or $m \neq 1$ </p>
<p> (3) If $m = 1$ then we are done. If $m$ does not equal 1 then we could have $m|a$ or $m|b$. Notice that we can't have both as the gcd between $a$ and $b$ is 1. </p>
<p> (4) WLOG, we let $m \nmid a$. If this is true, then we can write $a$ and $m$ with the divison algorithm. We have $a = mq + r$ where $0 < r < m$. We have $r = a - mq$. $m$ is in S so $m = a(x_0) + b(y_0)$. Now $r = a - (a(x_0) + b(y_0))q$ or $r = a(1 - (x_0)q) + b(-(y_0)q)$. This contradicts the minimality of $m$, so $m = 1$. QED. </p>
</div>

In step 1, we set up a set just like we did for the Division Algorithm — this is the Chain of Reasoning at work! We want to eventually use both WOP and the Division Algorithm somewhere in this proof. Our set contains the natural numbers expressible in the form ax + by, and we verified it's non-empty so we can apply WOP.
This setup looks a lot like the Division Algorithm proof — we use casework again. Our least element has to be 1 or not 1, and our goal is to disprove the latter.
In step 3, we bring in divisibility of m into a and b. The motivation is to eventually apply the Division Algorithm between m and a (and b), since that's our crux move in the chain.

In step 4, we find an element of S smaller than m — a direct contradiction of minimality. So our assumption that m ≠ 1 must be false, and therefore m = 1. We've proved Bezout's Lemma in one direction — arguably the harder one!

## Final Thoughts

That's half the chain of reasoning, and it's not too bad once you understand the underlying engine: the Well Ordering Principle. I'd encourage you to explore WOP in other areas of math too — it shows up in geometry, for instance, when you have certain restrictions on area. This particular chain builds all the way up to proving Unique Prime Factorization, which I'll discuss in a future article!

