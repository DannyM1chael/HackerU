/**
 * Variable Scope
 * What will be the output of the three log statements
 * and in what order?
 */
(() => {
    let one, two;
    try {
      throw new Error(321);
    } catch (one) {
      (one = 123), (two = 321); // 123
      console.log(one);
    }
    console.log(one); // undefined
    console.log(two); // 321
  })();