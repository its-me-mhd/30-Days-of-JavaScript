// Link in Leetcode
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)


var map = function(arr, fn) {
    const ans = [];
    arr.forEach((element, index) => {
        ans.push(fn(element, index));
    });
    return ans;
};
