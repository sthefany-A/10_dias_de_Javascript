/**
* Retorne o segundo maior número da matriz.
* @param {Number[]} nums - Uma matriz de números.
* @return {Number} O segundo maior número da matriz.
**/
function getSecondLargest(nums) {
   // Complete a função
    var sorted_array = nums.sort(function (a,b) {return a - b;});
    var unique_sorted_array = sorted_array.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    })

    return unique_sorted_array[unique_sorted_array.length - 2];
}
