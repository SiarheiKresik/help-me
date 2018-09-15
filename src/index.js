module.exports = function count(s, pairs) {
  let number = 0;
  const N = compute_N(pairs);
  for (let k = 1; k <= N; k++) {
    let isConditionTrue = true;
    for (let j = 0; j < s.length; j++) {
      let gcd = compute_gcd(k + j, N);
      let bit = s[j];
      if ((bit === '1' && gcd !== 1) || (bit === '0' && gcd === 1)) {
        isConditionTrue = false;
        break;
      }
    }
    if (isConditionTrue) {
      number += 1;
    }
  }
  const r = modulo_result(number);
  return r;
};

const compute_gcd = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const compute_N = pairs => {
  const N = pairs.map(([x, y]) => Math.pow(x, y)).reduce((acc, x) => acc * x, 1);
  if (N === Infinity || N > 1000000) {
    return 0;
  }
  return N;
};

const modulo_result = number => {
  const r = number % 1000000007;
  return r;
};
