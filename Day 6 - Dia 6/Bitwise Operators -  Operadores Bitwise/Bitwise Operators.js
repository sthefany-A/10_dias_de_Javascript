/*
* Retorne o maior valor de qualquer a & b <k em S (onde a <b).
* 	
* n: o conjunto S é uma sequência de números inteiros distintos de 1 a n (ou seja, {1, 2, ..., n}).
* k: um número inteiro.
*/

function getMaxLessThanK(n, k) {
    let maximum = 0;
    let current = -1;
    for (let i = 1; i < n; i++) 
    {
        for (let j = i + 1; j <= n; j++) 
        {
            current = i & j;
            if (current < k && current > maximum) 
            {
                maximum = current;
            }
        }
    }
    return maximum;
}
