// Link in Leetcode
// https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)

var createCounter = function(init) {
    let presentCount = init;
  
    return {
        increment: () => ++presentCount,
        decrement: () => --presentCount,
        reset: () => (presentCount = init)
    };
};
