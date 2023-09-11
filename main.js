const M = 1;
const N = 1000;

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimeNumbers(start, end) {
    const primeNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

const primeNumbersList = findPrimeNumbers(M, N);

console.log(`Простые числа от ${M} до ${N}:`);
console.log(primeNumbersList.join(', '));
