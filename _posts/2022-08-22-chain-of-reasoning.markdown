---
layout: post
title: "A Chain of Reasoning in Number Theory"
date: 2022-08-22
categories: math, number theory
---

# Chain of Reasoning in Number Theory (part 1)

## By: Niyathi Kukkapalli

## Chain of Reasoning Introduction

This article assumes basic proof knowlegdge. The Chain of Reasoning sounds quite general, and it is! There are multiple definitions to this term, and the basis would be that it’s a multi layer argument.

Although, I’m not here to lecture about all the types of chains there could be. Rather, I’ll be discussing a rather important chain in Number Theory. This Chain of Reasoning flows as below…

Well Ordering Principle —-> Division Algorithm —-> Bezout’s —-> FTA —-> UPF

For right now, I’ll leave FTA and UPF untouched, but I will discuss them in a continuation of this article. This particular Chain of Reasoning functions off proofs. To prove the Division Algorithm you will need the Well Ordering Principle, and to prove Bezout’s you will need the Division Algorithm.

## Well Ordering Principle

So, what exactly is the Well Ordering Principle? The exact principle states, Any non empty subset S, S $\subseteq$ N, has a least element. N are the natural numbers which are the positive integers.
An example, let's say we have the set {1,2,3,4} which can be a subset of {1,2,3,4,5,6}. Now the subset
{1,2,3,4} by Well Ordering Principle has a least element, which we know to be 1.

That's a very simple application but that's the general idea. It's simple but very powerful and is used in numerous proofs. We take this principle to be true, so this is what you would call an axiom. Another example of an axiom would be that a + b = b + a, since we just take that fact to be true. Another popular proof technique is Induction, which if you've delved into the math world, you have probably heard of. I would encourage you to research more about induction if you haven't heard of it. A good exercise to think about is if Induction and the Well Ordering Principle are the same? Hint: Don't trust the obvious answer.

## Division Algorithm

So you might know the Division Algorithm from Elementary School. In words, it says that if you want to divide a by b, then $\exists$ $q,r$ such that $a = bq + r$ where $0 < r < b$. Have you thought about how to prove this statement? That might be harder than you think. Sure, the statement is obvious but this isn't a statement that we can take for a axiom. We are working in a chain so we need to incorporate the Well Ordering Principle (WOP) into our proof for the Division Algorithm. I would encourage you to think about the proof first before you read on.

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

So in the first sentence, we establish a set of sorts. Think of it as the set of the Division Algorithm quite literally. We made the elements of the set be the remainders since this is what the condition for the Division Algorithm is based on. The $0 \leq s < b$ part. In that same part, we establish a sort of condition. The set has to have 0 or not. What is the motivation for 0 and not like - 1? Looking further ahead, we want to eventually use WOP on this set. WOP requires the set to be in the natural numbers so we want s > 0 where s is a elt of S. Since 0 is the bounding number anyway, it would be useful to just use 0 for the casework.

Now we consider first if 0 is in S (which it is) so that's easy. For if 0 is not in S, now we can use WOP since we are only considering numbers s > 0 which is the natural numbers which is the only time we can use WOP.

Now with our least element we can create a trichotomy. This just means three choices. From our trichotomy, only one of the choices is correct so we try and disprove the other two choices which is a way easier method than proving the correct choice directly.

As we can see in the last step, we wrote $s_0 = (a_0) - (b)(q)$ since it's a part of the set S. We found a contradition to the minimality of s_0 which would mean that the inital condition that we assumed wasn't true. This condition was $s_0 \geq b$. That disproves the two choices leaving us with the third, correct, choice.

## Bezout's Identity

So Bezout's Identity states in words, that $\exists$ a,b $\in$ Z such that $ax + by = 1$ has integer solutions x, y if and only if the gcd of (a,b) = 1. An example, is that if we have 3x + 2y = 1 then obvious solutions would be 3(3) - 2(4) = 1. As simple as that.

So Bezout's is a Diophatine equation and we essentially have two proofs to since it's a if and only if statement.

<div class = "warning">
<b>If and only if statements:</b> We have $a$ then if and only if $b$. So we would have to prove that $a$ implies $b$ and $b$ implies $a$. So it's two proofs. 
</div>

I will only show the proof: If (a,b) = 1, then $ax + by = 1$ has integer solutions. I implore you to think about the other direction, as it's quite simple. Hint: Have (a,b) = d and show that d has to be 1 given that $ax + by = 1$ is true. The other proof is given below, which we will look at step by step again.

<div class = "proof">

<p> (1) Let S = {$n \in Z | n > 0, n = ax + by | x,y \in Z$}. This means n is in the natural numbers. 
We claim that S is non empty. We know this because $a^2 + b^2$ is in the set which we know is positive. </p>
<p> (2) By WOP, there exists a least element of S. We can call this $m.$ There are two cases: $m = 1$ or $m \neq 1$ </p>
<p> (3) If $m = 1$ then we are done. If $m$ does not equal 1 then we could have $m|a$ or $m|b$. Notice that we can't have both as the gcd between $a$ and $b$ is 1. </p>
<p> (4) WLOG, we let $m \nmid a$. If this is true, then we can write $a$ and $m$ with the divison algorithm. We have $a = mq + r$ where $0 < r < m$. We have $r = a - mq$. $m$ is in S so $m = a(x_0) + b(y_0)$. Now $r = a - (a(x_0) + b(y_0))q$ or $r = a(1 - (x_0)q) + b(-(y_0)q)$. This contradicts the minimality of $m$, so $m = 1$. QED. </p>
</div>

In step 1, we stated a set once again in hopes to manipulate it like we did for the Division Algorithm. We have to remember that this is a chain of reasoning, so somewhere in our proof we want to incorporate WOP and the Division Algorithm. In some later proofs, we may only use the latest steps and not necessarily all the ones before it.

Our set contains the set of natural numbers that can be written in the form ax + by. We showed the set was non empty since that is one of the requirements to use WOP. Our set is of the natural numbers so we are good to use WOP in the next step (2). This setup is looking a lot like the Divison Algorithm proof as we use casework next. We know our least element has to be 1 or not 1. Our goal is try to disprove that it can be $\neq 1$

We consider the case where we have $ax + by = m$ and m is not 1. Notice that we talk about the divison of m into a and b in step 3. The motivation for this is to eventually use the divison algorithm between m, and a and b. This is because we are working with the Chain of Reasoning so we want to use the Division Algorithm as our crux move.

In step 4, we worked to find a contradiction with the minimality of m. In other words, we found a element smaller than $m$ which is obviously a contradiction since m is the minimal element. So then from that we know that the intial condition that we assumed must be false. That initial condition was that $m \neq 1$. So $m = 1$. Therefore, we have proved Bezout's Lemma for one direction (arguably the harder direction.)

## Final Thoughts

So that's half the chain of reasoning! It's not too bad once you understand the underlying principle, the Well Ordering Principle. I encourage you to explore the Well Ordering Principle in other fields of math. For example, WOP can be used in geoemtry as well if you have a certain restriction on area. For example, can't have a area greater than 4 or less than 4. This particular chain of reasoning builds up to proving Unique Prime Factorization which I will discuss in a future article.
