module.exports = function getZerosCount(number, base) {
  let num;
	let results = [];
	let sum = 0;
	let primes = primeFactors(base);
	let highestPrime = getHighestPow(primes).prime;
	let highestPrimePow = getHighestPow(primes).pow;

	let divisor = highestPrime;
	let result;
	
	while (divisor < number) {
		result = Math.floor(number / divisor);
		results.push(result);
		divisor *= highestPrime;
	}
	
	for (let r of results) {
		sum += r;
	}
	
	num = Math.floor(sum / highestPrimePow);
	
	return num;
}

function primeFactors(n){
  let factors = []; 
  let divisor = 2;


  while (n >= 2){
    if (n % divisor == 0){
       factors.push(divisor); 
       n = n / divisor;
    }
    else {
      divisor++;
    }     
  }
  
  return factors;
}

function getHighestPow(arr) {

	let primeKeys = [];
	let primeCount = {};
	let prime = 0;
	let pow = 0;
	let highestPow = 0;
	
	for (let i of arr) {
	  if (!primeCount[i]) {
			primeCount[i] = 1;
			primeKeys = [...primeKeys, i];
	  } else {
			primeCount[i]++;
		}
	}

	for (let j of primeKeys) {
		if (Math.pow(j, primeCount[j]) > pow) {
			prime = j;
			pow = primeCount[j];
		} 
	}
		
  return {
	  prime: prime,
	  pow: pow
  }
}