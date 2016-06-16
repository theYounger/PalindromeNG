function palindromeNumberGenerator(N) {
  N = N + '';
  var reverseN = N.split('').reverse().join('');

  for(var i = N; ; N++) {

      if(N === reverseN) {
        return {
          value: N,
          steps: N - i
        };
      }
      if(N !== reverseN) {
        var sumN = N + reverseN;
        if(sumN === sumN.split('').reverse().join('')) {
          return {
            value: sumN,
            steps: N - i
          };
        }
      }
      if(N < 1) {
        console.log('Looking for a positive integer value!');
        return false;
      }
    }
}

console.log(palindromeNumberGenerator(0));
console.log(palindromeNumberGenerator(10));
console.log(palindromeNumberGenerator(34));