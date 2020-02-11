/*
  * Modifique e retorne a matriz para que todos os elementos pares sejam dobrados e todos os elementos ímpares sejam triplicados.
  *
  * Parâmetro (s):
  * nums: uma matriz de números.
*/
function modifyArray(nums) {
    const func = nums.map(function(num) {
        
        if (num % 2 == 0)
            {
                return 2*num;
            }
        else
            {
                return 3*num;
            }
    });
    return func;
}
