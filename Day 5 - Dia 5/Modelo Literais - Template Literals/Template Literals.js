/*
  * Determine os comprimentos laterais originais e retorne uma matriz:
  * - O primeiro elemento é o comprimento do lado mais curto
  * - O segundo elemento é o comprimento do lado mais longo
  *
  * Parâmetro (s):
  literais: A matriz de seqüências de caracteres do literal do modelo marcado.
  * expressões: a matriz de valores de expressão do literal do modelo marcado (ou seja, [área, perímetro]).
*/
function sides(literals, ...expressions) {
    var area = expressions[0];
    var perimeter = expressions[1];
    
    var s1 = (perimeter + Math.sqrt(perimeter * perimeter  - (16 * area))) / 4;
    //console.log("s1: " + s1);
    var s2 = (perimeter - Math.sqrt(perimeter * perimeter  - (16 * area))) / 4;
    //console.log("s2: " + s2);
    var array = [s1, s2];
    array =  array.sort(function (a,b) {return a-b;});
    return array;
}
