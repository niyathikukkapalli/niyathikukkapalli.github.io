---
layout: post
title: "Introduction to the Zeta Function"
date: 2023-08-16
tags: Zeta Functions, Euler Product, Trignometry
categories: Zeta Functions
description: I recently attended the PROMYS program as a second year, and I wanted to encapsulate a bit of the cool math that I learned there! The primary class that I took was Prime and Zeta Functions, where we learned about zeta functions, Dirichlet Functions, Gauss sums, etc. It was all so cool! In my attempt to not forget any of it, I'll give a beginner's introduction to Reimann Zeta Functions (the beginning of the course). 
thumbnail: "/img/zeta.jpeg"
---

<img class="normal" src="/img/zeta.jpeg">

## Introduction 

I recently attended the PROMYS program as a second year, and I wanted to encapsulate a bit of the cool math that I learned there! The primary class that I took was Prime and Zeta Functions, where we learned about zeta functions, Dirichlet Functions, Gauss sums, etc. It was all so cool! In my attempt to not forget any of it, I'll give a beginner's introduction to Reimann Zeta Functions (the beginning of the course). 

## Square Free Integers

$\textbf{Question: How many square free integers are there less than 100? 1000? 5000?}$

We define a square free integer as an integer that doesn't contain any squares in it's prime factorization. For example, 10 is a square free integer because it's $2 \cdot 5$. Although, 12 isn't a square free integer because it's $2^2 \cdot 3$. 

Is there a way we can sift out all the numbers that have squares in their prime factorizations? There is an intuitive way to think about this. There are approximately 3/4 integers that don't have factors of 4. Similarly, approximately 8/9 integers don't have factors of 9. 24/25 integers don't have factors of 25. Notice how we skipped 16 because we already counted the factors of 4. Thus, we are only looking at prime squares in order to avoid overcounting. So we have a probablitic number of square free numbers. 

For square free integers less than 100, there are approximately...
$$\frac{3}{4} \cdot \frac{8}{9} \cdot \frac{24}{25} \cdot \frac{48}{49} \cdot 100 = 62.69387... $$

This is an approximation for the amount of square free integers. We can write each term as $1 - \frac{1}{p^2}$ where it almost looks like a geometric series. Although, how can we know that $N \cdot \prod_{}^{} 1 - \frac{1}{p^2}$ is actually a number? We can't. Which is why it's an approximation. Notice that if we expand $\prod_{}^{} 1 - \frac{1}{p^2}$, we get...

$$(1 - \frac{1}{2^2})(1 - \frac{1}{3^2})(1 - \frac{1}{5^2}) ... = 1 - \frac{1}{2^2} - \frac{1}{3^2} - \frac{1}{5^2} + \frac{1}{2^2 \cdot 3^2} + \frac{1}{2^2 \cdot 5^2} + \frac{1}{3^2 \cdot 5^2} - \frac{1}{2^2 \cdot 3^2 \cdot 5^2} ...$$

This looks like to be $\sum_{1}^{\infty} \frac{1}{n^2}$ except there are some pesky negative and positive terms. Those just turn out to be evaluted by the mobius function $\mu(n)$. So we get, the above sequence as $\sum_{1}^{\infty} \frac{\mu(n)}{n^2}$.

How can we get rid of the negative signs? We can make it a geometric series. This would require writing... $\frac{1}{1 - \frac{1}{p^2}}$ over all p prime. This is also known as an Euler Product. 

 $$ \textbf{Euler Product:} \prod_{\text{p prime}}^{} \frac{1}{\frac{p^s - 1}{p^s}} = \prod_{\text{p prime}}^{} \frac{1}{1 - \frac{1}{p^s}}$$

where $s = 2$ when we are looking for square free integers. Expanding the Euler product, we get $(\frac{1}{1 - \frac{1}{2^2}})(\frac{1}{1 - \frac{1}{3^2}})(\frac{1}{1 - \frac{1}{5^2}})...$ for s = 2, and p prime where all the terms are in the from $\frac{a}{1-r}$ which is the formula for the sum of an infinite geometric series. That's equivalent to...

$$ (1 + \frac{1}{2^2} + \frac{1}{2^4} + ...)(1 + \frac{1}{3^2} + \frac{1}{3^4}...)(1 + \frac{1}{5^2} + \frac{1}{5^4}...)...$$

Above is equivalent to $\sum_{1}^{\infty} \frac{1}{n^2}$ where we don't have the messy positive and negative signs. 

$$ \prod_{\text{p prime}}^{} \frac{1}{1 - \frac{1}{p^s}} = \sum_{1}^{\infty} \frac{1}{n^2}$$

## Zeta and Convergence

Notice, that if we have $\zeta(2)$, then we must have $\zeta(3)$, $\zeta(4)$, ... and so on. An interesting question to ask is whether these functions converge for certain s? We know that $\zeta(1)$ doesn't converge because this is the harmonic series. If you have taken AP Calculus BC, the following fact will be very familiar. 

$$ \textbf{Claim:} \sum_{n = 1}^{\infty} \frac{1}{n^s} \text{if} s > 1 $$ 

The above fact can be proved in a variety of ways. Although one way is a favorite of mine because of how intuitive it is. 
First let's write out all the terms....

$$ 1 + \frac{1}{2^s} + \frac{1}{3^s} + \frac{1}{4^s} + \frac{1}{5^s} + \frac{1}{6^s}...$$

Notice that $\frac{1}{2^s} + \frac{1}{3^s}$ is bounded by $2 \cdot \frac{1}{2^s}$. Similiarly $\frac{1}{4^s} + \frac{1}{5^s} + \frac{1}{6^s} + \frac{1}{7^s}$ is bounded by $4 \cdot \frac{1}{4^s}$ and so on... 

In this way we can say that $\sum_{n = 1}^{\infty} \frac{1}{n^s}$ is bounded by $2 \cdot \frac{1}{2^s} + 4 \cdot \frac{1}{4^s} + 8 \cdot \frac{1}{8^s} + ... = \frac{1}{2^{s-1}} + \frac{1}{4^{s-1}} + \frac{1}{8^{s-1}} + ...$ which is a geometric series and has a finite value because the geometric ratio is $\frac{1}{2^{s-1}}$ is less than 1 because $s > 1$. Thus, $\sum_{n = 1}^{\infty} \frac{1}{n^s}$ is bounded. 

Knowing this fact, we can change the question to find what values the $\zeta$ functions converge to. To find what value $\zeta(2)$ converges to, we can look at the $sin(x)$ and find two polynomial expansions of it and equate the coefficents. $sin(x)$ is a good function to use because it's linear approximation is really clean, $sin(x) \approx x$. 

## Sin(x) and Taylor Series

It's a known fact that the Taylor expansion of $sin(x)$ is $\sum_{1}^{\infty} (-1)^k \frac{x^{2k+1}}{(2k+1)!}$ where the coefficent of $x^2$ is $\frac{-1}{6}$. We divide the whole series by x, because $\lim_{x \to \infty} \frac{sinx}{x} = 1.$

We also know that we can write a polynomial in terms of it's roots, so can we do the same for sin(x)? The roots of sin(x) are $0, \pm \pi, \pm 2\pi$, ... In terms of a polynomial this is...

$$sin(x) = x(1 - \frac{x}{\pi})(1 + \frac{x}{\pi})(1 - \frac{x}{2\pi})(1 + \frac{x}{2\pi})... = x(1 - \frac{x^2}{\pi^2})(1 - \frac{x^2}{4\pi^2})..$$

This is a difference of squares, but we are aiming to find the value of the zeta function. So the coefficent of $x^2$ in the above polynomial is just $\frac{-1}{\pi^2} \cdot \zeta(2)$ which means that $\frac{-1}{6} = \frac{-1}{\pi^2} \cdot \zeta(2)$. or 
$\zeta(2) = \frac{\pi^2}{6}$. 

We could apply this same method to find $\zeta(4)$ because we can just square both polynomials for $sin(x)$ and equate the coeffcients. Even for $\zeta(3)$ we can just square the $sin(x)$ expression and multiply an additional $sin(x)$. The only problem with this method is that as you get larger $s$, it becomes harder to use the distributive law on the polynomials. 

So what we solved above is called the Basel problem where we find the value where the zeta function for $s = 2$ converges. The Reimann Zeta Function forms the basis of the Reimann Hypothesis! The Hypothesis is about finding the zeros of the zeta function and it's one of the most fundmental unsolved problems in mathematics (because if proven or disproven it reveals some results about the distribution of primes).

## Final Thoughts

The zeta function is really interesting, and I found it quite cool when I was learning about it over the summer. I thought about creating an article on Gauss sums or the Dirichlet function but that seemed to troublesome because most of the cool results from those two are all about the proofs and very minimal computation. The zeta function laters connects with the Dirichlet function to prove that there are an infinite amount of primes of the form $a \mod m$ where (a,m) = 1. Do some research on the Dirichlet function it's really cool! Be on the lookout for an article about my experiences at the PROMYS program. 



