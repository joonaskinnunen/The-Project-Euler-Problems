/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number? */

const nthPrime = (n) => {
    const primes = [2]
    let i = 3
    while (primes.length < n) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) isPrime = false
        }
        if (isPrime === true) primes.push(i)
        i++
    }
    return primes[primes.length - 1]
}

nthPrime(10001)