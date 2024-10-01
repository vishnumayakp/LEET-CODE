/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(' ').filter(segment=>segment !== '').length
};
console.log(countSegments( "Hello, my name is John"));
console.log(countSegments(""));

