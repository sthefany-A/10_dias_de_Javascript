/*
  * Implemente uma classe Polygon com as seguintes propriedades:
  * 1. Um construtor que usa uma matriz de comprimentos laterais inteiros.
  * 2. Um método de 'perímetro' que retorna a soma dos comprimentos laterais do polígono.
*/
class Polygon {
    constructor(heights) 
    {
        var polygon_perimeter = 0;
        for (var index in heights)
            {
                polygon_perimeter += heights[index];
            }
        
        this.my_perimeter = polygon_perimeter;
    }
    
     perimeter() 
    {
        return this.my_perimeter;
    }
    
}
