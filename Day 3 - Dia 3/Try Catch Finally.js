/*
  * Complete a função reverseString
  * Use console.log () para imprimir em stdout.
*/
function reverseString(s) {
    try {
        var splitString = s.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        console.log(joinArray);
    }
    catch (error)
        {
         // Imprime s em uma nova linha. Se nenhuma exceção foi lançada, essa deve ser a sequência invertida; se uma exceção foi lançada, essa deve ser a sequência original.            console.log(error.message);
            console.log(s);
        }
    
    
}
