/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n? */

const smallestMult = (n) => {
    let i = 1
    while (true) {
        let isRemainderZero = true
        for (let j = 1; j <= n; j++) {
            if (i % j !== 0) {
                isRemainderZero = false
                break
            }
        }
        if (isRemainderZero === true) return i
        i++
    }
}
smallestMult(20)
