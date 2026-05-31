---
layout: post
title: "A Chain of Reasoning in Number Theory (part 2)"
date: 2022-08-22
tags:
  - FTA
  - Proof
  - Number Theory
categories: Number Theory
description: The conclusion of the chain — picking up from Bezout's Identity and pushing all the way through to Unique Prime Factorization. This part covers the Fundamental Theorem of Arithmetic, two proofs that every integer has a prime factorization, and why "unique up to units" is a more subtle statement than it first appears.
thumbnail: "/img/theory.jpeg"
---

## Chain of Reasoning Introduction

This is a continuation of a previous article, so if you haven't read that one yet, I'd strongly suggest starting there first! If you have, let's recall where we left off:

Well Ordering Principle —-> Division Algorithm —-> Bezout’s —-> FTA —-> UPF

We've already covered the proofs up through Bezout's Identity. The next two steps might look cryptic — FTA and UPF are acronyms, since the full names are quite long. FTA stands for the Fundamental Theorem of Arithmetic, and UPF stands for Unique Prime Factorization. We'll proceed the same way we did before: at each step, we'll look for ways to use the previous results in our proof.

## Fundamental Theorem of Arithmetic

A formal statement of the Theorem,

<div class="proof">
<p><b>FTA:</b> So we have $a|bc$ and $(a,b) = 1$, then we have $a|c$. </p>
</div>

This statement might seem quite obvious. If you want to clarify that the gcd has to be 1 we have a counter example. $8 \vert 24$ but $8 \nmid 6$

<div class = "proof">
<p> So we can use the previous step in the chain of reasoning which is Bezout's.
Let's say we have integers a,b,x,y such that ax + by = 1. Now let's multiply everything by c.
So acx + bcy = c. Now we know  a|bc so we can factor out $a$ from the LHS. This means that a factor of a must divide c by Lemma 1. QED. </p>

<p> Lemma 1: if d|a, d|b then d|(ax+by). So if d divides a then it also divides ax since we can factor d from ax. So similarly it also divides by. so ax + by = d(ix + jy) for some i and j in the integers. So d|(ax+by).</p>
</div>

This proof is short and elegant precisely because of how powerful Bezout's is. The gcd(a, b) = 1 condition was the crux of Bezout's, and it plays the same role here — it lets us immediately translate the problem into an equation we can manipulate algebraically. The most interesting piece is the Lemma. It feels obvious at first glance, and it is — but making a proof fully rigorous means proving even the simplest-seeming things.

## Every integer n > 1 has a PF

Now, what do we mean by this? Well, to work up to unique prime factorization we need to prove that every number does have a prime factorization in the first place. This is simple through strong induction.

<div class = "warning">
<b>Strong Induction:</b> Differs from regular induction. Strong Induction assumes that the statement you are trying to prove works for all values preceeding n. Remember, with induction you just assume n is true and  prove it for n+1. For Strong Induction, we can prove n true with all the previous true. 
</div>

The proof is quite simple compared to proving uniqueness. The motivation starts with splitting up n. Here is the proof: (as always; try to think about the proof first before looking down below)

<div class = "proof">
<p>Let's say that we have an integer n. n can either be prime or composite. If n is prime then it has a prime factorization since that itself is prime.</p>
<p>n could also be composite. In that case, we can write n as n = ab, for some $a,b \in Z$. By Strong Induction, we can assume that a and b have prime factorizations. A prime factorization is a product of primes, so multiplying these two products together gives us another product of prime factors. QED.</p>
</div>

While I admit, this proof is not the most rigorous it is really simple. You essentially decompose m and the answer is right there. Although, if you want to stick to the true essence of the Chain of Reasoning (which I suggest) I will include an alternate proof which uses the Well Ordering Principle down below:

<div class = "proof">
<p>So let's call a set S = {$n > 1$ such that $n$ has no prime factors}. So we want to prove that this set is empty. Let's assume it's nonempty.</p>
<p>This is considering the natural numbers, so let's take a smallest element of this set to be $m$ by WOP. $m$ has two cases: prime or composite. </p>
<p>If $m$ is prime then it has a prime factor which is a contradiction. Else, $m = ab$. We know that $a < m$, but if $a < m$ then $a$ is smaller than $m$. That means $a$ is not in S, so a has a prime factor. Let's call this prime factor $p$. We know $p|a$. so $p|ab$ which means $p|m$. That's a contradiction! We disproved both things that m could possibly be so this means S is empty.</p>
</div>

With this proof we use the good old Well Ordering Principle and arrive at a contradiction. Proof by contradiction is a really powerful tool because you do proof by contradiction with any statement. Also it's quite a unique technique in the sense that you assume that what you are trying to prove is false.

After making our set and using WOP, we use familar (prime and composite) casework. Casework shines brightest in combinatorics but it can really be used anywhere. We arrive at a contradiction with each statement. For primes, we know that if m itself is a prime then it has a prime factor. If it's composite, it's factors have prime factoes which in turn makes m have prime factors. I would suggest to prove that more rigoursly than I did above, possibly with a lemma or two?

## Every integer n > 1 has a unique PF

Now what do we mean by unique prime factorization? Essentially there is no integer n > 1 such that we can decompose n into two different factorizations with different primes. This seems obvious. For example, $10 = (2)(5)$, and there are no other prime factorizations we can find. Although $10 = (-2)(-5)$.
$8 = (-4)(-2)$. So how do we really define primes? Do they just have to be postive? Technically $10 = (-2)(-5)$ is a prime factorization. This means that every number can be split into at least 2 different prime factorizations if we include -1.

This is why the statement every integer n > 1 has a unique PF <b>up to units</b> is important. To be specific - 1 is a unit. What is a unit?

<div class = "warning">
<p><b>Units:</b> Those numbers in Z that have a multiplicative inverse. This means that there are a and b such that $ab = 1$ in Z where a and b dont have to be distinct. The only numbers in Z that work are 1 and -1. You can extend this definition to other rings as well. </p>
</div>

Now I encourage you to think of some ideas before you read the proof below. For some hints, think about how you have 2 prime factorizations that are "distinct" of some number and show how they have to be equal. Maybe through their exponents and primes?

Here is the proof down below: We will walk through it step by step

<div class = "proof">
<p>Let S = {$n \in N$ | $n > 1$ has at least 2 prime factorizations}. Assume that S is non empty. By WOP, S has a least element which we can call $m$. 
The factorizations of $m$ are $m = (p_1)(p_2)(p_3).. (p_n) = (q_1)(q_2)(q_3) .. (q_k)$ where the primes, p and q, dont have to be distinct so we can avoid the messy exponents. There are two cases. Where $p_1$ divides $q_1$ or not. If it does divide $p_1$, then good. If not, then it divides $(q_2)(q_3) .. (q_k)$ by FTA since $(p_1, q_1) = 1$.</p>
<p>Now we can repeat the process. If $p_1$ divides $q_2$ then good, otherwise it'll divide $(q_3) .. (q_k)$. Eventually, we get to the point that $p_1$ divides $q_k$ if nothing before it divides. So no matter what at some point $p_1$ will divide one of the $q$'s. So $(p_1)|(q_i)$ for some $1 \leq i \leq k$. Although since $p$ and $q$ are both primes we have to have $ptha _1 = q_i$.</p>
<p>Now we have $(p_2)(p_3).. (p_n) = (q_2)(q_3) .. (q_k)$, but not equal to $m$. We notice that since we got rid of a prime factor, that this natural number is smaller than m. That's a contradidction! Thus, a natural number, $n > 1$, cannot have $2$ prime factorizations. QED. </p>
<p></p>
</div>

So we started by making a set of natural numbers, since we want to use the Well Ordering Principle eventually. Then, we used WOP and called a smallest element. The proof will now revolve around finding a smaller element than that least element which is m in this case. As we did in the first paragraph, we wrote out two factorizations of m. The goal is to show that the primes have to be equivalent up to units.

After that, we consider $p_1$ in $(p_1)(p_2)(p_3).. (p_n)$ and use FTA. The simple motivation to use it, is that we are working with primes that are coprime by nature so the step in the chain of reasoning that makes the most sense here with the $(a,b) = 1$ condition, is FTA. Bezout's also have this condition but we haven't mentioned any diophatine equations here at all so it would be misplaced.

So we use the fact that if $p_1$ is a completely different prime and doesnt divide $q_1$ that means $(p_1, q_1) = 1$. Although, the other condition for FTA is that $p_1$ must divide $(q_1)(q_2)(q_3).. (q_k)$. Why is this true? Imagine we have the equation $(p_2)(p_3).. (p_n) = \frac{(q_1)(q_2)(q_3).. (q_k)}{p_1}$. So the left side is a natural number, and the primes are positive integral primes. If $p_1$ didn't divide the RHS, then we would get a non natural number for the RHS which clearly cant work.

Now, all the FTA conditions are set, so we can use it! Since $(p_1, q_1) = 1$, and
$(p_1)\vert(q_1)(q_2)(q_3).. (q_k)$, then $(p_1)\vert(q_2)(q_3).. (q_k)$. We can iterate this same statement over all the q's. We see that eventually $p_1$ has to divide a $q$. This is because at every $q_i$, we see if $p_1$ divides it or not. It's only that if it doesn't, then we use FTA. Otherwise, we are good.

Now that we know $p_1$ divides a $q_i$, it is logical that $p_1 = q_i$ since a prime cannot divide another prime unless they are equivalent. So dividing out the prime gives us a natural number smaller than m which derives a contradiction.

## Final Thoughts

And that's the complete Chain of Reasoning! What I find most beautiful about it is how tightly linked everything is. Starting from the Well Ordering Principle — a statement so simple it almost feels trivial — we've worked our way up to proving Unique Prime Factorization, one of the foundational results of Number Theory. Each proof follows a recognizable pattern: build a set, invoke WOP, do casework, find a contradiction. And through it all, the Well Ordering Principle keeps showing up as the quiet engine driving everything forward.

I'd encourage you to keep an eye out for WOP in other areas of math — it appears in more places than you might expect.
